(window.webpackJsonp=window.webpackJsonp||[]).push([[109],{308:function(t,e,s){"use strict";s.r(e);var n=s(0),a=Object(n.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[s("router-link",{attrs:{to:"/ui-settings/"}},[t._v("Polkadot JS UI libraries")]),t._v(" › "),s("router-link",{attrs:{to:"/ui-settings/globals.html"}},[t._v("Globals")]),t._v(" › "),s("router-link",{attrs:{to:"/ui-settings/modules/_defaults_endpoints_.html"}},[t._v('"defaults/endpoints"')])],1),t._v(" "),s("h1",{attrs:{id:"external-module-defaults-endpoints"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#external-module-defaults-endpoints"}},[t._v("#")]),t._v(' External module: "defaults/endpoints"')]),t._v(" "),s("h2",{attrs:{id:"index"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#index"}},[t._v("#")]),t._v(" Index")]),t._v(" "),s("h3",{attrs:{id:"variables"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#variables"}},[t._v("#")]),t._v(" Variables")]),t._v(" "),s("ul",[s("li",[s("router-link",{attrs:{to:"/ui-settings/modules/_defaults_endpoints_.html#const-endpoints"}},[t._v("ENDPOINTS")])],1),t._v(" "),s("li",[s("router-link",{attrs:{to:"/ui-settings/modules/_defaults_endpoints_.html#const-endpoint_default"}},[t._v("ENDPOINT_DEFAULT")])],1)]),t._v(" "),s("h2",{attrs:{id:"variables-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#variables-2"}},[t._v("#")]),t._v(" Variables")]),t._v(" "),s("h3",{attrs:{id:"const-endpoints"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#const-endpoints"}},[t._v("#")]),t._v(" "),s("code",[t._v("Const")]),t._v(" ENDPOINTS")]),t._v(" "),s("p",[t._v("• "),s("strong",[t._v("ENDPOINTS")]),t._v(": "),s("em",[s("router-link",{attrs:{to:"/ui-settings/modules/_types_.html#option"}},[t._v("Option")]),t._v("[]")],1),t._v(" =  ORDER_CHAINS.reduce((endpoints: Option[], chainName): Option[] => {\nconst { chainDisplay, logo, type } = CHAIN_INFO[chainName];")]),t._v(" "),s("p",[t._v("return ORDER_PROVIDERS.reduce((endpoints: Option[], providerName): Option[] => {\nconst { providerDisplay, nodes } = PROVIDERS[providerName];\nconst wssUrl = nodes[chainName];")]),t._v(" "),s("pre",[s("code",[t._v("if (wssUrl) {\n  endpoints.push({\n    info: logo,\n    text: `${chainDisplay} (${type}, hosted by ${providerDisplay})`,\n    value: wssUrl\n  });\n}\n\nreturn endpoints;\n")])]),t._v(" "),s("p",[t._v("}, endpoints);\n}, [])")]),t._v(" "),s("p",[s("em",[t._v("Defined in "),s("a",{attrs:{href:"https://github.com/polkadot-js/ui/blob/f2f36e2d/packages/ui-settings/src/defaults/endpoints.ts#L94",target:"_blank",rel:"noopener noreferrer"}},[t._v("defaults/endpoints.ts:94"),s("OutboundLink")],1)])]),t._v(" "),s("hr"),t._v(" "),s("h3",{attrs:{id:"const-endpoint-default"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#const-endpoint-default"}},[t._v("#")]),t._v(" "),s("code",[t._v("Const")]),t._v(" ENDPOINT_DEFAULT")]),t._v(" "),s("p",[t._v("• "),s("strong",[t._v("ENDPOINT_DEFAULT")]),t._v(": "),s("em",[t._v("undefined | string")]),t._v(" =  isPolkadot\n? PROVIDERS.parity.nodes.kusama\n: PROVIDERS.parity.nodes.flamingFir")]),t._v(" "),s("p",[s("em",[t._v("Defined in "),s("a",{attrs:{href:"https://github.com/polkadot-js/ui/blob/f2f36e2d/packages/ui-settings/src/defaults/endpoints.ts#L90",target:"_blank",rel:"noopener noreferrer"}},[t._v("defaults/endpoints.ts:90"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);e.default=a.exports}}]);