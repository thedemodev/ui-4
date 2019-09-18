**[Polkadot JS UI libraries](../README.md)**

[Globals](../globals.md) › [&quot;Keyring&quot;](../modules/_keyring_.md) › [Keyring](_keyring_.keyring.md)

# Class: Keyring

## Hierarchy

* [Base](_base_.base.md)

  * **Keyring**

## Implements

* [KeyringStruct](../interfaces/_types_.keyringstruct.md)

## Index

### Constructors

* [constructor](_keyring_.keyring.md#constructor)

### Accessors

* [accounts](_keyring_.keyring.md#accounts)
* [addresses](_keyring_.keyring.md#addresses)
* [contracts](_keyring_.keyring.md#contracts)
* [genesisHash](_keyring_.keyring.md#genesishash)
* [keyring](_keyring_.keyring.md#keyring)

### Methods

* [addExternal](_keyring_.keyring.md#addexternal)
* [addHardware](_keyring_.keyring.md#addhardware)
* [addPair](_keyring_.keyring.md#addpair)
* [addUri](_keyring_.keyring.md#adduri)
* [backupAccount](_keyring_.keyring.md#backupaccount)
* [createFromUri](_keyring_.keyring.md#createfromuri)
* [decodeAddress](_keyring_.keyring.md#decodeaddress)
* [encodeAddress](_keyring_.keyring.md#encodeaddress)
* [encryptAccount](_keyring_.keyring.md#encryptaccount)
* [forgetAccount](_keyring_.keyring.md#forgetaccount)
* [forgetAddress](_keyring_.keyring.md#forgetaddress)
* [forgetContract](_keyring_.keyring.md#forgetcontract)
* [getAccount](_keyring_.keyring.md#getaccount)
* [getAccounts](_keyring_.keyring.md#getaccounts)
* [getAddress](_keyring_.keyring.md#getaddress)
* [getAddresses](_keyring_.keyring.md#getaddresses)
* [getContract](_keyring_.keyring.md#getcontract)
* [getContracts](_keyring_.keyring.md#getcontracts)
* [getPair](_keyring_.keyring.md#getpair)
* [getPairs](_keyring_.keyring.md#getpairs)
* [isAvailable](_keyring_.keyring.md#isavailable)
* [isPassValid](_keyring_.keyring.md#ispassvalid)
* [loadAll](_keyring_.keyring.md#loadall)
* [restoreAccount](_keyring_.keyring.md#restoreaccount)
* [saveAccount](_keyring_.keyring.md#saveaccount)
* [saveAccountMeta](_keyring_.keyring.md#saveaccountmeta)
* [saveAddress](_keyring_.keyring.md#saveaddress)
* [saveContract](_keyring_.keyring.md#savecontract)
* [saveRecent](_keyring_.keyring.md#saverecent)
* [setDevMode](_keyring_.keyring.md#setdevmode)
* [setSS58Format](_keyring_.keyring.md#setss58format)

## Constructors

###  constructor

\+ **new Keyring**(): *[Keyring](_keyring_.keyring.md)*

*Inherited from [Base](_base_.base.md).[constructor](_base_.base.md#constructor)*

*Defined in [Base.ts:33](https://github.com/polkadot-js/ui/blob/6fce4b7/packages/ui-keyring/src/Base.ts#L33)*

**Returns:** *[Keyring](_keyring_.keyring.md)*

## Accessors

###  accounts

• **get accounts**(): *[AddressSubject](../interfaces/_observable_types_.addresssubject.md)*

*Inherited from [Base](_base_.base.md).[accounts](_base_.base.md#accounts)*

*Defined in [Base.ts:42](https://github.com/polkadot-js/ui/blob/6fce4b7/packages/ui-keyring/src/Base.ts#L42)*

**Returns:** *[AddressSubject](../interfaces/_observable_types_.addresssubject.md)*

___

###  addresses

• **get addresses**(): *[AddressSubject](../interfaces/_observable_types_.addresssubject.md)*

*Inherited from [Base](_base_.base.md).[addresses](_base_.base.md#addresses)*

*Defined in [Base.ts:46](https://github.com/polkadot-js/ui/blob/6fce4b7/packages/ui-keyring/src/Base.ts#L46)*

**Returns:** *[AddressSubject](../interfaces/_observable_types_.addresssubject.md)*

___

###  contracts

• **get contracts**(): *[AddressSubject](../interfaces/_observable_types_.addresssubject.md)*

*Inherited from [Base](_base_.base.md).[contracts](_base_.base.md#contracts)*

*Defined in [Base.ts:50](https://github.com/polkadot-js/ui/blob/6fce4b7/packages/ui-keyring/src/Base.ts#L50)*

**Returns:** *[AddressSubject](../interfaces/_observable_types_.addresssubject.md)*

___

###  genesisHash

• **get genesisHash**(): *string | undefined*

*Inherited from [Base](_base_.base.md).[genesisHash](_base_.base.md#genesishash)*

*Defined in [Base.ts:62](https://github.com/polkadot-js/ui/blob/6fce4b7/packages/ui-keyring/src/Base.ts#L62)*

**Returns:** *string | undefined*

___

###  keyring

• **get keyring**(): *KeyringInstance*

*Inherited from [Base](_base_.base.md).[keyring](_base_.base.md#keyring)*

*Defined in [Base.ts:54](https://github.com/polkadot-js/ui/blob/6fce4b7/packages/ui-keyring/src/Base.ts#L54)*

**Returns:** *KeyringInstance*

## Methods

###  addExternal

▸ **addExternal**(`address`: string | Uint8Array, `meta`: KeyringPair$Meta): *[CreateResult](../interfaces/_types_.createresult.md)*

*Defined in [Keyring.ts:30](https://github.com/polkadot-js/ui/blob/6fce4b7/packages/ui-keyring/src/Keyring.ts#L30)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`address` | string &#124; Uint8Array | - |
`meta` | KeyringPair$Meta |  {} |

**Returns:** *[CreateResult](../interfaces/_types_.createresult.md)*

___

###  addHardware

▸ **addHardware**(`address`: string | Uint8Array, `hardwareType`: string, `meta`: KeyringPair$Meta): *[CreateResult](../interfaces/_types_.createresult.md)*

*Defined in [Keyring.ts:39](https://github.com/polkadot-js/ui/blob/6fce4b7/packages/ui-keyring/src/Keyring.ts#L39)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`address` | string &#124; Uint8Array | - |
`hardwareType` | string | - |
`meta` | KeyringPair$Meta |  {} |

**Returns:** *[CreateResult](../interfaces/_types_.createresult.md)*

___

###  addPair

▸ **addPair**(`pair`: KeyringPair, `password`: string): *[CreateResult](../interfaces/_types_.createresult.md)*

*Defined in [Keyring.ts:43](https://github.com/polkadot-js/ui/blob/6fce4b7/packages/ui-keyring/src/Keyring.ts#L43)*

**Parameters:**

Name | Type |
------ | ------ |
`pair` | KeyringPair |
`password` | string |

**Returns:** *[CreateResult](../interfaces/_types_.createresult.md)*

___

###  addUri

▸ **addUri**(`suri`: string, `password?`: undefined | string, `meta`: KeyringPair$Meta, `type?`: KeypairType): *[CreateResult](../interfaces/_types_.createresult.md)*

*Defined in [Keyring.ts:52](https://github.com/polkadot-js/ui/blob/6fce4b7/packages/ui-keyring/src/Keyring.ts#L52)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`suri` | string | - |
`password?` | undefined &#124; string | - |
`meta` | KeyringPair$Meta |  {} |
`type?` | KeypairType | - |

**Returns:** *[CreateResult](../interfaces/_types_.createresult.md)*

___

###  backupAccount

▸ **backupAccount**(`pair`: KeyringPair, `password`: string): *KeyringPair$Json*

*Defined in [Keyring.ts:61](https://github.com/polkadot-js/ui/blob/6fce4b7/packages/ui-keyring/src/Keyring.ts#L61)*

**Parameters:**

Name | Type |
------ | ------ |
`pair` | KeyringPair |
`password` | string |

**Returns:** *KeyringPair$Json*

___

###  createFromUri

▸ **createFromUri**(`suri`: string, `meta`: KeyringPair$Meta, `type?`: KeypairType): *KeyringPair*

*Implementation of [KeyringStruct](../interfaces/_types_.keyringstruct.md)*

*Defined in [Keyring.ts:71](https://github.com/polkadot-js/ui/blob/6fce4b7/packages/ui-keyring/src/Keyring.ts#L71)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`suri` | string | - |
`meta` | KeyringPair$Meta |  {} |
`type?` | KeypairType | - |

**Returns:** *KeyringPair*

___

###  decodeAddress

▸ **decodeAddress**(`key`: string | Uint8Array, `ignoreChecksum?`: undefined | false | true, `ss58Format?`: Prefix): *Uint8Array*

*Inherited from [Base](_base_.base.md)*

*Defined in [Base.ts:66](https://github.com/polkadot-js/ui/blob/6fce4b7/packages/ui-keyring/src/Base.ts#L66)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string &#124; Uint8Array |
`ignoreChecksum?` | undefined &#124; false &#124; true |
`ss58Format?` | Prefix |

**Returns:** *Uint8Array*

___

###  encodeAddress

▸ **encodeAddress**(`key`: string | Uint8Array, `ss58Format?`: Prefix): *string*

*Inherited from [Base](_base_.base.md)*

*Defined in [Base.ts:72](https://github.com/polkadot-js/ui/blob/6fce4b7/packages/ui-keyring/src/Base.ts#L72)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string &#124; Uint8Array |
`ss58Format?` | Prefix |

**Returns:** *string*

___

###  encryptAccount

▸ **encryptAccount**(`pair`: KeyringPair, `password`: string): *void*

*Defined in [Keyring.ts:75](https://github.com/polkadot-js/ui/blob/6fce4b7/packages/ui-keyring/src/Keyring.ts#L75)*

**Parameters:**

Name | Type |
------ | ------ |
`pair` | KeyringPair |
`password` | string |

**Returns:** *void*

___

###  forgetAccount

▸ **forgetAccount**(`address`: string): *void*

*Defined in [Keyring.ts:84](https://github.com/polkadot-js/ui/blob/6fce4b7/packages/ui-keyring/src/Keyring.ts#L84)*

**Parameters:**

Name | Type |
------ | ------ |
`address` | string |

**Returns:** *void*

___

###  forgetAddress

▸ **forgetAddress**(`address`: string): *void*

*Defined in [Keyring.ts:89](https://github.com/polkadot-js/ui/blob/6fce4b7/packages/ui-keyring/src/Keyring.ts#L89)*

**Parameters:**

Name | Type |
------ | ------ |
`address` | string |

**Returns:** *void*

___

###  forgetContract

▸ **forgetContract**(`address`: string): *void*

*Defined in [Keyring.ts:93](https://github.com/polkadot-js/ui/blob/6fce4b7/packages/ui-keyring/src/Keyring.ts#L93)*

**Parameters:**

Name | Type |
------ | ------ |
`address` | string |

**Returns:** *void*

___

###  getAccount

▸ **getAccount**(`address`: string | Uint8Array): *[KeyringAddress](../interfaces/_types_.keyringaddress.md) | undefined*

*Defined in [Keyring.ts:97](https://github.com/polkadot-js/ui/blob/6fce4b7/packages/ui-keyring/src/Keyring.ts#L97)*

**Parameters:**

Name | Type |
------ | ------ |
`address` | string &#124; Uint8Array |

**Returns:** *[KeyringAddress](../interfaces/_types_.keyringaddress.md) | undefined*

___

###  getAccounts

▸ **getAccounts**(): *[KeyringAddress](../interfaces/_types_.keyringaddress.md)[]*

*Defined in [Keyring.ts:101](https://github.com/polkadot-js/ui/blob/6fce4b7/packages/ui-keyring/src/Keyring.ts#L101)*

**Returns:** *[KeyringAddress](../interfaces/_types_.keyringaddress.md)[]*

___

###  getAddress

▸ **getAddress**(`_address`: string | Uint8Array, `type`: [KeyringItemType](../modules/_types_.md#keyringitemtype) | null): *[KeyringAddress](../interfaces/_types_.keyringaddress.md) | undefined*

*Defined in [Keyring.ts:110](https://github.com/polkadot-js/ui/blob/6fce4b7/packages/ui-keyring/src/Keyring.ts#L110)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`_address` | string &#124; Uint8Array | - |
`type` | [KeyringItemType](../modules/_types_.md#keyringitemtype) &#124; null |  null |

**Returns:** *[KeyringAddress](../interfaces/_types_.keyringaddress.md) | undefined*

___

###  getAddresses

▸ **getAddresses**(): *[KeyringAddress](../interfaces/_types_.keyringaddress.md)[]*

*Defined in [Keyring.ts:129](https://github.com/polkadot-js/ui/blob/6fce4b7/packages/ui-keyring/src/Keyring.ts#L129)*

**Returns:** *[KeyringAddress](../interfaces/_types_.keyringaddress.md)[]*

___

###  getContract

▸ **getContract**(`address`: string | Uint8Array): *[KeyringAddress](../interfaces/_types_.keyringaddress.md) | undefined*

*Defined in [Keyring.ts:137](https://github.com/polkadot-js/ui/blob/6fce4b7/packages/ui-keyring/src/Keyring.ts#L137)*

**Parameters:**

Name | Type |
------ | ------ |
`address` | string &#124; Uint8Array |

**Returns:** *[KeyringAddress](../interfaces/_types_.keyringaddress.md) | undefined*

___

###  getContracts

▸ **getContracts**(): *[KeyringAddress](../interfaces/_types_.keyringaddress.md)[]*

*Defined in [Keyring.ts:141](https://github.com/polkadot-js/ui/blob/6fce4b7/packages/ui-keyring/src/Keyring.ts#L141)*

**Returns:** *[KeyringAddress](../interfaces/_types_.keyringaddress.md)[]*

___

###  getPair

▸ **getPair**(`address`: string | Uint8Array): *KeyringPair*

*Inherited from [Base](_base_.base.md).[getPair](_base_.base.md#getpair)*

*Defined in [Base.ts:78](https://github.com/polkadot-js/ui/blob/6fce4b7/packages/ui-keyring/src/Base.ts#L78)*

**Parameters:**

Name | Type |
------ | ------ |
`address` | string &#124; Uint8Array |

**Returns:** *KeyringPair*

___

###  getPairs

▸ **getPairs**(): *KeyringPair[]*

*Inherited from [Base](_base_.base.md).[getPairs](_base_.base.md#getpairs)*

*Defined in [Base.ts:82](https://github.com/polkadot-js/ui/blob/6fce4b7/packages/ui-keyring/src/Base.ts#L82)*

**Returns:** *KeyringPair[]*

___

###  isAvailable

▸ **isAvailable**(`_address`: Uint8Array | string): *boolean*

*Inherited from [Base](_base_.base.md).[isAvailable](_base_.base.md#isavailable)*

*Defined in [Base.ts:88](https://github.com/polkadot-js/ui/blob/6fce4b7/packages/ui-keyring/src/Base.ts#L88)*

**Parameters:**

Name | Type |
------ | ------ |
`_address` | Uint8Array &#124; string |

**Returns:** *boolean*

___

###  isPassValid

▸ **isPassValid**(`password`: string): *boolean*

*Inherited from [Base](_base_.base.md).[isPassValid](_base_.base.md#ispassvalid)*

*Defined in [Base.ts:99](https://github.com/polkadot-js/ui/blob/6fce4b7/packages/ui-keyring/src/Base.ts#L99)*

**Parameters:**

Name | Type |
------ | ------ |
`password` | string |

**Returns:** *boolean*

___

###  loadAll

▸ **loadAll**(`options`: [KeyringOptions](../interfaces/_types_.keyringoptions.md), `injected`: object[]): *void*

*Defined in [Keyring.ts:232](https://github.com/polkadot-js/ui/blob/6fce4b7/packages/ui-keyring/src/Keyring.ts#L232)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`options` | [KeyringOptions](../interfaces/_types_.keyringoptions.md) | - |
`injected` | object[] |  [] |

**Returns:** *void*

___

###  restoreAccount

▸ **restoreAccount**(`json`: KeyringPair$Json, `password`: string): *KeyringPair*

*Defined in [Keyring.ts:258](https://github.com/polkadot-js/ui/blob/6fce4b7/packages/ui-keyring/src/Keyring.ts#L258)*

**Parameters:**

Name | Type |
------ | ------ |
`json` | KeyringPair$Json |
`password` | string |

**Returns:** *KeyringPair*

___

###  saveAccount

▸ **saveAccount**(`pair`: KeyringPair, `password?`: undefined | string): *KeyringPair$Json*

*Defined in [Keyring.ts:278](https://github.com/polkadot-js/ui/blob/6fce4b7/packages/ui-keyring/src/Keyring.ts#L278)*

**Parameters:**

Name | Type |
------ | ------ |
`pair` | KeyringPair |
`password?` | undefined &#124; string |

**Returns:** *KeyringPair$Json*

___

###  saveAccountMeta

▸ **saveAccountMeta**(`pair`: KeyringPair, `meta`: KeyringPair$Meta): *void*

*Defined in [Keyring.ts:289](https://github.com/polkadot-js/ui/blob/6fce4b7/packages/ui-keyring/src/Keyring.ts#L289)*

**Parameters:**

Name | Type |
------ | ------ |
`pair` | KeyringPair |
`meta` | KeyringPair$Meta |

**Returns:** *void*

___

###  saveAddress

▸ **saveAddress**(`address`: string, `meta`: KeyringPair$Meta, `type`: [KeyringAddressType](../modules/_types_.md#keyringaddresstype)): *KeyringPair$Json*

*Defined in [Keyring.ts:300](https://github.com/polkadot-js/ui/blob/6fce4b7/packages/ui-keyring/src/Keyring.ts#L300)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`address` | string | - |
`meta` | KeyringPair$Meta | - |
`type` | [KeyringAddressType](../modules/_types_.md#keyringaddresstype) | "address" |

**Returns:** *KeyringPair$Json*

___

###  saveContract

▸ **saveContract**(`address`: string, `meta`: KeyringPair$Meta): *KeyringPair$Json*

*Defined in [Keyring.ts:322](https://github.com/polkadot-js/ui/blob/6fce4b7/packages/ui-keyring/src/Keyring.ts#L322)*

**Parameters:**

Name | Type |
------ | ------ |
`address` | string |
`meta` | KeyringPair$Meta |

**Returns:** *KeyringPair$Json*

___

###  saveRecent

▸ **saveRecent**(`address`: string): *[SingleAddress](../interfaces/_observable_types_.singleaddress.md)*

*Defined in [Keyring.ts:326](https://github.com/polkadot-js/ui/blob/6fce4b7/packages/ui-keyring/src/Keyring.ts#L326)*

**Parameters:**

Name | Type |
------ | ------ |
`address` | string |

**Returns:** *[SingleAddress](../interfaces/_observable_types_.singleaddress.md)*

___

###  setDevMode

▸ **setDevMode**(`isDevelopment`: boolean): *void*

*Inherited from [Base](_base_.base.md).[setDevMode](_base_.base.md#setdevmode)*

*Defined in [Base.ts:107](https://github.com/polkadot-js/ui/blob/6fce4b7/packages/ui-keyring/src/Base.ts#L107)*

**Parameters:**

Name | Type |
------ | ------ |
`isDevelopment` | boolean |

**Returns:** *void*

___

###  setSS58Format

▸ **setSS58Format**(`ss58Format`: number): *void*

*Inherited from [Base](_base_.base.md).[setSS58Format](_base_.base.md#setss58format)*

*Defined in [Base.ts:103](https://github.com/polkadot-js/ui/blob/6fce4b7/packages/ui-keyring/src/Base.ts#L103)*

**Parameters:**

Name | Type |
------ | ------ |
`ss58Format` | number |

**Returns:** *void*