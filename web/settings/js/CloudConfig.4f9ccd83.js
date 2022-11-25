"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkopenwb_ui_settings"] = self["webpackChunkopenwb_ui_settings"] || []).push([["CloudConfig"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/CloudConfig.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/CloudConfig.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_mixins_ComponentState_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/mixins/ComponentState.vue */ \"./src/components/mixins/ComponentState.vue\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"OpenwbCloudConfig\",\n  mixins: [_components_mixins_ComponentState_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]],\n  emits: [\"sendCommand\"],\n  data() {\n    return {\n      mqttTopicsToSubscribe: [\"openWB/general/extern\", \"openWB/system/dataprotection_acknowledged\", \"openWB/system/mqtt/bridge/+\"],\n      enableNewCloudButton: true,\n      newCloudData: {\n        email: \"\",\n        username: \"\"\n      },\n      enableCloudConnectButton: true,\n      connectCloudData: {\n        username: \"\",\n        password: \"\"\n      },\n      enableRemoveCloudButton: true,\n      showCloudRemoveModal: false\n    };\n  },\n  computed: {\n    cloudBridge: {\n      get() {\n        let bridges = this.getWildcardTopics(\"openWB/system/mqtt/bridge/+\");\n        for (const [key, value] of Object.entries(bridges)) {\n          if (!value.remote.is_openwb_cloud) {\n            delete bridges[key];\n          }\n        }\n        return bridges;\n      }\n    },\n    cloudBridgeKey: {\n      get() {\n        for (const [key, value] of Object.entries(this.cloudBridge)) {\n          if (value.remote.is_openwb_cloud) {\n            return key;\n          }\n        }\n        return undefined;\n      }\n    }\n  },\n  methods: {\n    getCloudCredentials() {\n      return {\n        username: this.cloudBridge[this.cloudBridgeKey].remote.username,\n        password: this.cloudBridge[this.cloudBridgeKey].remote.password\n      };\n    },\n    getMqttBridgeIndex(bridgeKey) {\n      return parseInt(bridgeKey.match(/(?:\\/)(\\d+)$/)[1]);\n    },\n    createCloud() {\n      if (document.forms.cloudConfigCreateForm.reportValidity()) {\n        this.$emit(\"sendCommand\", {\n          command: \"initCloud\",\n          data: this.newCloudData\n        });\n        this.enableNewCloudButton = false;\n      }\n    },\n    connectCloud() {\n      if (document.forms.cloudConfigConnectForm.reportValidity()) {\n        this.$emit(\"sendCommand\", {\n          command: \"connectCloud\",\n          data: this.connectCloudData\n        });\n        this.enableCloudConnectButton = false;\n      }\n    },\n    removeCloudModal(event) {\n      // prevent further processing of the click event\n      event.stopPropagation();\n      this.showCloudRemoveModal = true;\n    },\n    removeCloud(event) {\n      this.showCloudRemoveModal = false;\n      if (event == \"confirm\") {\n        console.info(\"request removal of cloud\");\n        this.$emit(\"sendCommand\", {\n          command: \"removeMqttBridge\",\n          data: {\n            bridge: this.getMqttBridgeIndex(this.cloudBridgeKey)\n          }\n        });\n      }\n    }\n  }\n});\n\n//# sourceURL=webpack://openwb-ui-settings/./src/views/CloudConfig.vue?./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use%5B0%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/CloudConfig.vue?vue&type=template&id=4e5133e6":
/*!********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/CloudConfig.vue?vue&type=template&id=4e5133e6 ***!
  \********************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": function() { return /* binding */ render; }\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\nconst _hoisted_1 = {\n  class: \"cloud-config\"\n};\nconst _hoisted_2 = {\n  key: 1\n};\nconst _hoisted_3 = {\n  key: 1,\n  name: \"cloudConfigCreateForm\"\n};\nconst _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"a\", {\n  href: \"mailto:support@openwb.de\",\n  subject: \"Cloud Zugangsdaten\"\n}, \" support@openwb.de \", -1 /* HOISTED */);\nconst _hoisted_5 = {\n  key: 0\n};\nconst _hoisted_6 = {\n  key: 1\n};\nconst _hoisted_7 = {\n  class: \"row justify-content-center\"\n};\nconst _hoisted_8 = {\n  key: 2,\n  name: \"cloudConfigConnectForm\"\n};\nconst _hoisted_9 = {\n  key: 0\n};\nconst _hoisted_10 = {\n  key: 1\n};\nconst _hoisted_11 = {\n  class: \"row justify-content-center\"\n};\nconst _hoisted_12 = {\n  key: 3,\n  name: \"cloudConfigured\"\n};\nconst _hoisted_13 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"span\", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\" Mit diesen Zugangsdaten können Sie sich in der \"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"a\", {\n  href: \"https://web.openwb.de/\"\n}, \"openWB Cloud \"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\" anmelden. \")], -1 /* HOISTED */);\nconst _hoisted_14 = {\n  class: \"row justify-content-center\"\n};\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  const _component_openwb_base_modal_dialog = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"openwb-base-modal-dialog\");\n  const _component_openwb_base_alert = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"openwb-base-alert\");\n  const _component_router_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"router-link\");\n  const _component_openwb_base_text_input = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"openwb-base-text-input\");\n  const _component_openwb_base_click_button = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"openwb-base-click-button\");\n  const _component_openwb_base_card = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"openwb-base-card\");\n  const _component_openwb_base_heading = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"openwb-base-heading\");\n  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\" modal dialogs \"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_openwb_base_modal_dialog, {\n    show: $data.showCloudRemoveModal,\n    title: \"Cloud Zugang löschen\",\n    subtype: \"danger\",\n    buttons: [{\n      text: 'Löschen',\n      event: 'confirm',\n      subtype: 'danger'\n    }],\n    onModalResult: _cache[0] || (_cache[0] = $event => $options.removeCloud($event))\n  }, {\n    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\" Wollen Sie den vorhandenen Cloud Zugang wirklich entfernen? Dieser Vorgang kann nicht rückgängig gemacht werden! \")]),\n    _: 1 /* STABLE */\n  }, 8 /* PROPS */, [\"show\"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\" main content \"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_openwb_base_alert, {\n    subtype: \"danger\"\n  }, {\n    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\" Für diese Version gibt es noch keine Weboberfläche in der Cloud! Wenn der Zugang eingerichtet wurde, können z. B. Daten mit einem MQTT-Client von dem MQTT-Broker web.openwb.de abgerufen werden. Ebenfalls kann ein Support-Tunnel aufgebaut werden. Weitere Funktionen sind in der Entwicklung. \")]),\n    _: 1 /* STABLE */\n  }), _ctx.$store.state.mqtt['openWB/system/dataprotection_acknowledged'] !== true ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_openwb_base_alert, {\n    key: 0,\n    subtype: \"danger\"\n  }, {\n    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\" Sie müssen der \"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {\n      to: \"/System/DataProtection\"\n    }, {\n      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\" Datenschutzerklärung \")]),\n      _: 1 /* STABLE */\n    }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\" zustimmen, um die openWB Cloud nutzen zu können. \")]),\n    _: 1 /* STABLE */\n  })) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_openwb_base_alert, {\n    subtype: \"success\"\n  }, {\n    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\" Sie haben der \"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {\n      to: \"/System/DataProtection\"\n    }, {\n      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\" Datenschutzerklärung \")]),\n      _: 1 /* STABLE */\n    }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\" zugestimmt und können die openWB Cloud nutzen. \")]),\n    _: 1 /* STABLE */\n  }), !$data.enableRemoveCloudButton ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_openwb_base_alert, {\n    key: 0,\n    subtype: \"warning\"\n  }, {\n    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\" Der Zugang wurde entfernt. Bitte starten Sie die openWB neu, um die Änderungen anzuwenden! \")]),\n    _: 1 /* STABLE */\n  })) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\"v-if\", true), !$options.cloudBridgeKey ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"form\", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_openwb_base_card, {\n    title: \"Neuen Zugang erstellen\"\n  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createSlots)({\n    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_openwb_base_alert, {\n      subtype: \"warning\"\n    }, {\n      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\" Derzeit können keine neuen Zugänge für die openWB Cloud angelegt werden. Bitte nutzen Sie die in/an der openWB notierten Zugangsdaten im unteren Bereich dieser Seite. Wenn bei einer gekauften openWB keine Zugangsdaten vorhanden sind, schreiben Sie bitte eine Mail unter Angabe der Bestell- und/oder Seriennummer an \"), _hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\" . \")]),\n      _: 1 /* STABLE */\n    }), _ctx.$store.state.mqtt['openWB/general/extern'] === true ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_openwb_base_alert, {\n      subtype: \"info\"\n    }, {\n      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\" Diese openWB befindet sich im Modus \\\"Nur Ladepunkt\\\". Bitte richten Sie die openWB Cloud auf der regelnden openWB ein. \")]),\n      _: 1 /* STABLE */\n    })])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_openwb_base_text_input, {\n      title: \"Benutzername\",\n      required: \"\",\n      subtype: \"user\",\n      pattern: \"[a-zA-Z]+\",\n      modelValue: $data.newCloudData.username,\n      \"onUpdate:modelValue\": _cache[1] || (_cache[1] = $event => $data.newCloudData.username = $event),\n      disabled: \"\"\n    }, null, 8 /* PROPS */, [\"modelValue\"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_openwb_base_text_input, {\n      title: \"E-Mail\",\n      required: \"\",\n      subtype: \"email\",\n      modelValue: $data.newCloudData.email,\n      \"onUpdate:modelValue\": _cache[2] || (_cache[2] = $event => $data.newCloudData.email = $event),\n      disabled: \"\"\n    }, null, 8 /* PROPS */, [\"modelValue\"])]))]),\n    _: 2 /* DYNAMIC */\n  }, [_ctx.$store.state.mqtt['openWB/general/extern'] === false && _ctx.$store.state.mqtt['openWB/system/dataprotection_acknowledged'] === true ? {\n    name: \"footer\",\n    fn: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\" <openwb-base-click-button\\n\\t\\t\\t\\t\\t\\t\\t\\tclass=\\\"col-4\\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t:class=\\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tenableNewCloudButton\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t? 'btn-success'\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t: 'btn-outline-success'\\n\\t\\t\\t\\t\\t\\t\\t\\t\\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t:disabled=\\\"!enableNewCloudButton\\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t@buttonClicked=\\\"createCloud\\\"\\n\\t\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t\\t\\tZugang erstellen\\n\\t\\t\\t\\t\\t\\t\\t</openwb-base-click-button> \"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_openwb_base_click_button, {\n      class: \"col-4 btn-outline-success\",\n      disabled: \"\"\n    }, {\n      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\" Zugang erstellen \")]),\n      _: 1 /* STABLE */\n    })])]),\n\n    key: \"0\"\n  } : undefined]), 1024 /* DYNAMIC_SLOTS */), !$data.enableNewCloudButton ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_openwb_base_alert, {\n    key: 0,\n    subtype: \"info\",\n    class: \"mb-2\"\n  }, {\n    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\" Der neue Zugang wird eingerichtet. Dieser Vorgang kann bis zu einer Minute dauern. Bitte warten. \")]),\n    _: 1 /* STABLE */\n  })) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\"v-if\", true)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\"v-if\", true), !$options.cloudBridgeKey ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"form\", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_openwb_base_card, {\n    title: \"Vorhandenen Zugang einrichten\"\n  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createSlots)({\n    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_ctx.$store.state.mqtt['openWB/general/extern'] === true ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_openwb_base_alert, {\n      subtype: \"info\"\n    }, {\n      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\" Diese openWB befindet sich im Modus \\\"Nur Ladepunkt\\\". Bitte richten Sie die openWB Cloud auf der regelnden openWB ein. \")]),\n      _: 1 /* STABLE */\n    })])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_openwb_base_text_input, {\n      title: \"Benutzername\",\n      required: \"\",\n      subtype: \"user\",\n      modelValue: $data.connectCloudData.username,\n      \"onUpdate:modelValue\": _cache[3] || (_cache[3] = $event => $data.connectCloudData.username = $event)\n    }, null, 8 /* PROPS */, [\"modelValue\"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_openwb_base_text_input, {\n      title: \"Passwort\",\n      required: \"\",\n      subtype: \"password\",\n      modelValue: $data.connectCloudData.password,\n      \"onUpdate:modelValue\": _cache[4] || (_cache[4] = $event => $data.connectCloudData.password = $event)\n    }, null, 8 /* PROPS */, [\"modelValue\"])]))]),\n    _: 2 /* DYNAMIC */\n  }, [_ctx.$store.state.mqtt['openWB/general/extern'] === false && _ctx.$store.state.mqtt['openWB/system/dataprotection_acknowledged'] === true ? {\n    name: \"footer\",\n    fn: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_openwb_base_click_button, {\n      class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([\"col-4\", $data.enableCloudConnectButton ? 'btn-success' : 'btn-outline-success']),\n      disabled: !$data.enableCloudConnectButton,\n      onButtonClicked: $options.connectCloud\n    }, {\n      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\" Mit Cloud verbinden \")]),\n      _: 1 /* STABLE */\n    }, 8 /* PROPS */, [\"class\", \"disabled\", \"onButtonClicked\"])])]),\n    key: \"0\"\n  } : undefined]), 1024 /* DYNAMIC_SLOTS */)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\"v-if\", true), $options.cloudBridgeKey ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"form\", _hoisted_12, [!$data.enableCloudConnectButton || !$data.enableNewCloudButton ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_openwb_base_alert, {\n    key: 0,\n    subtype: \"warning\"\n  }, {\n    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\" Der Zugang wurde eingerichtet. Bitte starten Sie die openWB neu, um die Änderungen anzuwenden! \")]),\n    _: 1 /* STABLE */\n  })) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\"v-if\", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_openwb_base_card, {\n    title: \"Vorhandener Cloud Zugang\"\n  }, {\n    footer: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_openwb_base_click_button, {\n      class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([\"col-4\", $data.enableRemoveCloudButton ? 'btn-danger' : 'btn-outline-danger']),\n      disabled: !$data.enableRemoveCloudButton,\n      onButtonClicked: _cache[7] || (_cache[7] = $event => $options.removeCloudModal($event))\n    }, {\n      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\" Zugang löschen \")]),\n      _: 1 /* STABLE */\n    }, 8 /* PROPS */, [\"class\", \"disabled\"])])]),\n    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_openwb_base_heading, null, {\n      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_13]),\n      _: 1 /* STABLE */\n    }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_openwb_base_text_input, {\n      title: \"Benutzername\",\n      required: \"\",\n      subtype: \"user\",\n      modelValue: $options.getCloudCredentials().username,\n      \"onUpdate:modelValue\": _cache[5] || (_cache[5] = $event => $options.getCloudCredentials().username = $event),\n      disabled: \"\"\n    }, null, 8 /* PROPS */, [\"modelValue\"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_openwb_base_text_input, {\n      title: \"Passwort\",\n      required: \"\",\n      subtype: \"password\",\n      modelValue: $options.getCloudCredentials().password,\n      \"onUpdate:modelValue\": _cache[6] || (_cache[6] = $event => $options.getCloudCredentials().password = $event),\n      disabled: \"\"\n    }, null, 8 /* PROPS */, [\"modelValue\"])]),\n    _: 1 /* STABLE */\n  })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\"v-if\", true)]))])], 64 /* STABLE_FRAGMENT */);\n}\n\n//# sourceURL=webpack://openwb-ui-settings/./src/views/CloudConfig.vue?./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use%5B0%5D!./node_modules/vue-loader/dist/templateLoader.js??ruleSet%5B1%5D.rules%5B3%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./src/views/CloudConfig.vue":
/*!***********************************!*\
  !*** ./src/views/CloudConfig.vue ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _CloudConfig_vue_vue_type_template_id_4e5133e6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CloudConfig.vue?vue&type=template&id=4e5133e6 */ \"./src/views/CloudConfig.vue?vue&type=template&id=4e5133e6\");\n/* harmony import */ var _CloudConfig_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CloudConfig.vue?vue&type=script&lang=js */ \"./src/views/CloudConfig.vue?vue&type=script&lang=js\");\n/* harmony import */ var _opt_openWB_dev_openwb_ui_settings_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ \"./node_modules/vue-loader/dist/exportHelper.js\");\n\n\n\n\n;\nconst __exports__ = /*#__PURE__*/(0,_opt_openWB_dev_openwb_ui_settings_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_CloudConfig_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], [['render',_CloudConfig_vue_vue_type_template_id_4e5133e6__WEBPACK_IMPORTED_MODULE_0__.render],['__file',\"src/views/CloudConfig.vue\"]])\n/* hot reload */\nif (false) {}\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (__exports__);\n\n//# sourceURL=webpack://openwb-ui-settings/./src/views/CloudConfig.vue?");

/***/ }),

/***/ "./src/views/CloudConfig.vue?vue&type=script&lang=js":
/*!***********************************************************!*\
  !*** ./src/views/CloudConfig.vue?vue&type=script&lang=js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CloudConfig_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; }\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CloudConfig_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./CloudConfig.vue?vue&type=script&lang=js */ \"./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/CloudConfig.vue?vue&type=script&lang=js\");\n \n\n//# sourceURL=webpack://openwb-ui-settings/./src/views/CloudConfig.vue?");

/***/ }),

/***/ "./src/views/CloudConfig.vue?vue&type=template&id=4e5133e6":
/*!*****************************************************************!*\
  !*** ./src/views/CloudConfig.vue?vue&type=template&id=4e5133e6 ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CloudConfig_vue_vue_type_template_id_4e5133e6__WEBPACK_IMPORTED_MODULE_0__.render; }\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CloudConfig_vue_vue_type_template_id_4e5133e6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./CloudConfig.vue?vue&type=template&id=4e5133e6 */ \"./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/CloudConfig.vue?vue&type=template&id=4e5133e6\");\n\n\n//# sourceURL=webpack://openwb-ui-settings/./src/views/CloudConfig.vue?");

/***/ })

}]);