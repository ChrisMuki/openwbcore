#!/bin/bash

TOKENPASSWORD='#TokenInUse#'
response=''

OPENWBBASEDIR=$(cd `dirname $0`/../../ && pwd)
RAMDISKDIR="$OPENWBBASEDIR/ramdisk"
MODULEDIR=$(cd `dirname $0` && pwd)
CONFIGFILE="$OPENWBBASEDIR/openwb.conf"
LOGFILE="$RAMDISKDIR/soc-tesla.log"
CHARGEPOINT=$1

socTeslaDebug=$debug
# for developement only
#socTeslaDebug=1

case $CHARGEPOINT in
	2)
		# second charge point
		socintervallladen=$(( soc_teslalp2_intervallladen * 6 ))
		socintervall=$(( soc_teslalp2_intervall * 6 ))
		ladeleistung=$(<$RAMDISKDIR/llaktuells1)
		soctimerfile="$RAMDISKDIR/soctimer1"
		socfile="$RAMDISKDIR/soc1"
		username=$soc_teslalp2_username
		passwordConfigText="soc_teslalp2_password"
		carnumber=$soc_teslalp2_carnumber
		tokensfile="$MODULEDIR/tokens.lp2"
		;;
	*)
		# defaults to first charge point for backward compatibility
		socintervallladen=$(( soc_tesla_intervallladen * 6 ))
		socintervall=$(( soc_tesla_intervall * 6 ))
		ladeleistung=$(<$RAMDISKDIR/llaktuell)
		soctimerfile="$RAMDISKDIR/soctimer"
		socfile="$RAMDISKDIR/soc"
		username=$soc_tesla_username
		passwordConfigText="soc_tesla_password"
		carnumber=$soc_tesla_carnumber
		tokensfile="$MODULEDIR/tokens.lp1"
		;;
esac

password="${!passwordConfigText}"

socTeslaLog(){
	if (( $socTeslaDebug > 0 )); then
		timestamp=`date --rfc-3339=seconds`
		echo "$timestamp: Lp$CHARGEPOINT: $@" >> $LOGFILE
	fi
}

getAndWriteSoc(){
	re='^-?[0-9]+$'
	response=$(python $MODULEDIR/teslajson.py --email $username --tokens_file $tokensfile --vid $carnumber --json get data)
	# current state of car
	state=$(echo $response | jq .response.state)
	socTeslaLog "State: $state"
	soclevel=$(echo $response | jq .response.charge_state.battery_level)
	socTeslaLog "SoC: $soclevel"

	if  [[ $soclevel =~ $re ]] ; then
		if (( $soclevel != 0 )) ; then
			echo $soclevel > $socfile
		fi
	fi
	echo 0 > $soctimerfile
}

incrementTimer(){
	soctimer=$((soctimer+1))
	echo $soctimer > $soctimerfile
}

clearPassword(){
	socTeslaLog "Removing password from config."
	sed -i "s/$passwordConfigText=.*/$passwordConfigText=''/" $CONFIGFILE
}

setTokenPassword(){
	socTeslaLog "Writing token password to config."
	sed -i "s/$passwordConfigText=.*/$passwordConfigText='$TOKENPASSWORD'/" $CONFIGFILE
}

checkToken(){
	case $password in
		'')
			# empty password tells us to remove a possible saved token
			if [ -f $tokensfile ]; then
				socTeslaLog "Empty password set: removing tokensfile."
				rm $tokensfile
			fi
			;;
		$TOKENPASSWORD)
			# check if token is present
			if [ ! -f $tokensfile ]; then
				socTeslaLog "Tokenpassword set but no token found: clearing password in config."
				clearPassword
			fi
			;;
		*)
			# new password entered
			if [ -f $tokensfile ]; then
				socTeslaLog "New password set: removing tokensfile."
				rm $tokensfile
			fi
			# Request new token with user/pass.
			socTeslaLog "Requesting new token..."
			response=$(python $MODULEDIR/teslajson.py --email $username --password $password --tokens_file $tokensfile --json)
			# password in response, so do not log it!
			if [ -f $tokensfile ]; then
				socTeslaLog "...all done, removing password from config file."
				setTokenPassword
			else
				socTeslaLog "ERROR: Auth with user/pass failed!"
			fi
			;;
	esac
}

wakeUpCar(){
	socTeslaLog "Waking up car."
	response=$(python $MODULEDIR/teslajson.py --email $username --tokens_file $tokensfile --vid $carnumber --json do wake_up)
	state=$(echo $response | jq .response.state)
	socTeslaLog "Car state after wakeup: $state"
}

checkToken
soctimer=$(<$soctimerfile)
if (( ladeleistung > 1000 )); then
	# car is charging
	if (( soctimer < socintervallladen )); then
		# waiting
		incrementTimer
	else
		# car cannot be asleep while charging
		getAndWriteSoc
	fi
else
	# car is not charging
	if (( soctimer < socintervall )); then
		# waiting
		incrementTimer
	else
		# todo: do not always wake car
		wakeUpCar
		getAndWriteSoc
	fi
fi
