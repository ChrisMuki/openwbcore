import{_ as r,p as u,k as l,l as c,A as n,L as p,u as f,q as m,x as _}from"./vendor-93bd3532.js";import"./vendor-sortablejs-b80cade1.js";const g={name:"DeviceDiscovergy",emits:["update:configuration"],props:{configuration:{type:Object,required:!0},deviceId:{default:void 0}},methods:{updateConfiguration(o,e=void 0){this.$emit("update:configuration",{value:o,object:e})}}},v={class:"device-discovergy"},b={class:"small"};function w(o,e,s,y,x,a){const d=u("openwb-base-heading"),i=u("openwb-base-text-input");return l(),c("div",v,[n(d,null,{default:p(()=>[f(" Einstellungen für Discovergy "),m("span",b,"(Modul: "+_(o.$options.name)+")",1)]),_:1}),n(i,{title:"Benutzername",subtype:"user",required:"","model-value":s.configuration.user,"onUpdate:modelValue":e[0]||(e[0]=t=>a.updateConfiguration(t,"configuration.user"))},null,8,["model-value"]),n(i,{title:"Passwort",subtype:"password",required:"","model-value":s.configuration.password,"onUpdate:modelValue":e[1]||(e[1]=t=>a.updateConfiguration(t,"configuration.password"))},null,8,["model-value"])])}const V=r(g,[["render",w],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/discovergy/device.vue"]]);export{V as default};
