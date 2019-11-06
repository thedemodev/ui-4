(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{255:function(t,a,s){"use strict";s.r(a);var e=s(0),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"keyring-accounts"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#keyring-accounts"}},[t._v("#")]),t._v(" Keyring accounts")]),t._v(" "),s("p",[t._v("With our keyring setup completed in the previous section, and all available accounts loaded, we are ready to proceed. However we have not actually loaded any accounts yet, since well, we have not created or stored any previously. So let's change that.")]),t._v(" "),s("h2",{attrs:{id:"adding-accounts"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#adding-accounts"}},[t._v("#")]),t._v(" Adding accounts")]),t._v(" "),s("p",[t._v("The keyring has a number of ways to add accounts, but in 99% of the cases, you should need only a single method to add an account to the keyring - "),s("code",[t._v("addUri(suri: string, password?: string, meta: KeyringPair$Meta = {}, type?: KeypairType)")]),t._v(". Let's jump in with some explicit examples -")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" mnemonicGenerate "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@polkadot/util-crypto'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// generate a random mnemonic, 12 words in length")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" mnemonic "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mnemonicGenerate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("12")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// add the account, encrypt the stored JSON with an account-specific password")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" pair"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" json "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" keyring"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addUri")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mnemonic"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'myStr0ngP@ssworD'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'mnemonic acc'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br")])]),s("p",[t._v("The above example is relatively straight-forward. Create an account with the specified mnemonic, encrypt the account (as stored) with the password and attach some metadata to the account. It returns a pair instance (we will work with these later) as well as the encrypted json as is saved to the store.")]),t._v(" "),s("p",[t._v("Metadata is free form, with any indicators that you would find useful in your application. Some fields that are known to be used in (and also exists other keyring entries such as contacts & contracts) includes -")]),t._v(" "),s("ul",[s("li",[s("p",[s("code",[t._v("genesisHash")]),t._v(" - a hex value of the genesis this accounts belong to. If specified, the account will only be loaded when the same genesisHash is available in the keyring options")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("name")]),t._v(" - a human-readable description for the account")])])]),t._v(" "),s("h2",{attrs:{id:"non-mnemonic-accounts"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#non-mnemonic-accounts"}},[t._v("#")]),t._v(" Non-mnemonic accounts")]),t._v(" "),s("p",[t._v("Generally, we would encourage all wallets and users to only support mnemonic phrases - these are portable between crypto implementations, has built-in checksums and is a standard across the blockchain environment.")]),t._v(" "),s("p",[t._v("In some cases however, either due to the need to provide backwards compatibility or for closed environments, other seed types may be used. The "),s("code",[t._v("addUri")]),t._v(" will detect the type of input, i.e. if a hex-encoded value is provided, it will treat it as a raw seed. With this in mind, we can rewrite our example above to generate a random raw seed -")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" randomAsHex "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@polkadot/util-crypto'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// generate a random hex raw seed, this needs to be 32 bytes in length")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" seed "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("randomAsHex")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("32")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// add the account, encrypting it, override to ed25519")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" pair"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" json "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" keyring"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addUri")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("seed"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'weakpass'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hex seed acc'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ed25519'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br")])]),s("p",[t._v("In addition to creating the account in the same fashion as in the preceding section, we are overriding the type of the account created here. Assuming we created the keyring with the "),s("code",[t._v("type: 'sr25519'")]),t._v(" option, the first mnemonic account was created with an "),s("code",[t._v("sr25519")]),t._v(" type. Here we specify the type of crypto explicitly, and therefore create a non-default (for this keyring instance) "),s("code",[t._v("ed25519")]),t._v(" type.")]),t._v(" "),s("h2",{attrs:{id:"deriving-accounts"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#deriving-accounts"}},[t._v("#")]),t._v(" Deriving accounts")]),t._v(" "),s("p",[t._v("In the next section, we will expand our account creation capabilities and take a look at "),s("router-link",{attrs:{to:"/start/keyring.derivation.html"}},[t._v("account derivation and passing suri options")]),t._v(".")],1)])}),[],!1,null,null,null);a.default=n.exports}}]);