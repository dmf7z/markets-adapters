/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractFactory, Signer } from "ethers";
import { Provider } from "ethers/providers";
import { UnsignedTransaction } from "ethers/utils/transaction";
import { BigNumberish } from "ethers/utils";

import { TransactionOverrides } from ".";
import { CpmPriceProvider } from "./CpmPriceProvider";

export class CpmPriceProviderFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _cpmToken: string,
    _token: string,
    _peggedToEth: boolean,
    _priceDeviation: BigNumberish,
    _tokenPriceProvider: string,
    _fallbackOracle: string,
    _cpmTokenType: BigNumberish,
    _platformId: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<CpmPriceProvider> {
    return super.deploy(
      _cpmToken,
      _token,
      _peggedToEth,
      _priceDeviation,
      _tokenPriceProvider,
      _fallbackOracle,
      _cpmTokenType,
      _platformId,
      overrides
    ) as Promise<CpmPriceProvider>;
  }
  getDeployTransaction(
    _cpmToken: string,
    _token: string,
    _peggedToEth: boolean,
    _priceDeviation: BigNumberish,
    _tokenPriceProvider: string,
    _fallbackOracle: string,
    _cpmTokenType: BigNumberish,
    _platformId: BigNumberish,
    overrides?: TransactionOverrides
  ): UnsignedTransaction {
    return super.getDeployTransaction(
      _cpmToken,
      _token,
      _peggedToEth,
      _priceDeviation,
      _tokenPriceProvider,
      _fallbackOracle,
      _cpmTokenType,
      _platformId,
      overrides
    );
  }
  attach(address: string): CpmPriceProvider {
    return super.attach(address) as CpmPriceProvider;
  }
  connect(signer: Signer): CpmPriceProviderFactory {
    return super.connect(signer) as CpmPriceProviderFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CpmPriceProvider {
    return new Contract(address, _abi, signerOrProvider) as CpmPriceProvider;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "_cpmToken",
        type: "address"
      },
      {
        internalType: "contract IERC20",
        name: "_token",
        type: "address"
      },
      {
        internalType: "bool",
        name: "_peggedToEth",
        type: "bool"
      },
      {
        internalType: "uint256",
        name: "_priceDeviation",
        type: "uint256"
      },
      {
        internalType: "contract ILatestAnswerGetter",
        name: "_tokenPriceProvider",
        type: "address"
      },
      {
        internalType: "contract IPriceOracleGetter",
        name: "_fallbackOracle",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_cpmTokenType",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_platformId",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "creator",
        type: "address"
      },
      {
        indexed: true,
        internalType: "contract IERC20",
        name: "cpmToken",
        type: "address"
      },
      {
        indexed: true,
        internalType: "contract IERC20",
        name: "token",
        type: "address"
      },
      {
        indexed: false,
        internalType: "bool",
        name: "peggedToEth",
        type: "bool"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "priceDeviation",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "contract ILatestAnswerGetter",
        name: "tokenPriceProvider",
        type: "address"
      },
      {
        indexed: false,
        internalType: "contract IPriceOracleGetter",
        name: "fallbackOracle",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "cpmTokenType",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "platformId",
        type: "uint256"
      }
    ],
    name: "Setup",
    type: "event"
  },
  {
    inputs: [],
    name: "FALLBACK_ORACLE",
    outputs: [
      {
        internalType: "contract IPriceOracleGetter",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "PEGGED_TO_ETH",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "PRICE_DEVIATION",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "TOKEN",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "TOKEN_DECIMALS",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "TOKEN_PRICE_PROVIDER",
    outputs: [
      {
        internalType: "contract ILatestAnswerGetter",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getPlatformId",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getSubTokens",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getToken",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getTokenType",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "latestAnswer",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256"
      }
    ],
    stateMutability: "view",
    type: "function"
  }
];

const _bytecode =
  "0x6101a060405234801561001157600080fd5b50604051610d04380380610d04833981810160405261010081101561003557600080fd5b5080516020820151604083015160608085015160808087015160a08089015160c0808b015160e09b8c01516001600160601b03198c8a1b81169095528a891b851690925288151560f81b909b529385905282861b8216610100529485901b166101205295969495939491939291908561011557866001600160a01b031663313ce5676040518163ffffffff1660e01b815260040160206040518083038186803b1580156100e157600080fd5b505afa1580156100f5573d6000803e3d6000fd5b505050506040513d602081101561010b57600080fd5b505160ff16610118565b60125b61014052610160829052610180819052600061013d610212602090811b6109b417901c565b8154600181810184556000938452602080852090920180546001600160a01b039485166001600160a01b031991821617909155845491820185559380527f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e5630180548b8416941684179055604080518a151581529182018990528783168282015286831660608301526080820186905260a0820185905251918b169133917f2bc766b8c10950ff98ab26fdab05cb73d253c09fd4600c51a044e12be965822c919081900360c00190a4505050505050505061022a565b73eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee90565b60805160a05160601c60c05160601c60e05160f81c6101005160601c6101205160601c610140516101605161018051610a236102e1600039806102455250806108135250806104ea52806106c9528061073752806107a75250806103dd528061078352508061033e52806107ef525080610269528061031952508061040c52806105b952806107cb5250806101be528061029052806104bb528061058452508061019a528061065552806106825250610a236000f3fe608060405234801561001057600080fd5b50600436106100a95760003560e01c806350d25bcd1161007157806350d25bcd146101685780635a40c304146101705780635b7f415c1461017857806382bfefc814610180578063cd2d237614610188578063fcab181914610190576100a9565b80631638fbb1146100ae57806321df0da7146100c857806325f33d76146100ec5780634b0ca973146101445780634f0d9b661461014c575b600080fd5b6100b6610198565b60408051918252519081900360200190f35b6100d06101bc565b604080516001600160a01b039092168252519081900360200190f35b6100f46101e1565b60408051602080825283518183015283519192839290830191858101910280838360005b83811015610130578181015183820152602001610118565b505050509050019250505060405180910390f35b6100b6610243565b610154610267565b604080519115158252519081900360200190f35b6100b661028b565b6100d0610781565b6100b66107a5565b6100d06107c9565b6100d06107ed565b6100b6610811565b7f000000000000000000000000000000000000000000000000000000000000000081565b7f00000000000000000000000000000000000000000000000000000000000000005b90565b6060600080548060200260200160405190810160405280929190818152602001828054801561023957602002820191906000526020600020905b81546001600160a01b0316815260019091019060200180831161021b575b5050505050905090565b7f000000000000000000000000000000000000000000000000000000000000000090565b7f000000000000000000000000000000000000000000000000000000000000000081565b6000807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166318160ddd6040518163ffffffff1660e01b815260040160206040518083038186803b1580156102e757600080fd5b505afa1580156102fb573d6000803e3d6000fd5b505050506040513d602081101561031157600080fd5b5051905060007f00000000000000000000000000000000000000000000000000000000000000006103c6577f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166350d25bcd6040518163ffffffff1660e01b815260040160206040518083038186803b15801561039557600080fd5b505afa1580156103a9573d6000803e3d6000fd5b505050506040513d60208110156103bf57600080fd5b50516103d0565b670de0b6b3a76400005b905060008082136104a2577f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663b3596f077f00000000000000000000000000000000000000000000000000000000000000006040518263ffffffff1660e01b815260040180826001600160a01b03166001600160a01b0316815260200191505060206040518083038186803b15801561047157600080fd5b505afa158015610485573d6000803e3d6000fd5b505050506040513d602081101561049b57600080fd5b50516104a4565b815b9050806104b757600093505050506101de565b60007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166395b68fe77f0000000000000000000000000000000000000000000000000000000000000000600a0a6040518263ffffffff1660e01b81526004018082815260200191505060206040518083038186803b15801561054057600080fd5b505afa158015610554573d6000803e3d6000fd5b505050506040513d602081101561056a57600080fd5b5051604080516370a0823160e01b81526001600160a01b037f000000000000000000000000000000000000000000000000000000000000000081166004830181905292519394509131926000927f000000000000000000000000000000000000000000000000000000000000000016916370a08231916024808301926020929190829003018186803b1580156105ff57600080fd5b505afa158015610613573d6000803e3d6000fd5b505050506040513d602081101561062957600080fd5b50519050600061065185610645866103e863ffffffff61083516565b9063ffffffff61089716565b90507f00000000000000000000000000000000000000000000000000000000000000006103e8018111806106a857507f00000000000000000000000000000000000000000000000000000000000000006103e80381105b156107225760006106bf848463ffffffff61083516565b905061070c6107077f0000000000000000000000000000000000000000000000000000000000000000600a0a6106fb848a63ffffffff61089716565b9063ffffffff61083516565b6108d9565b925061071e818463ffffffff61089716565b9350505b61077587610645670de0b6b3a76400006107677f0000000000000000000000000000000000000000000000000000000000000000600a0a83888c63ffffffff61083516565b87019063ffffffff61083516565b97505050505050505090565b7f000000000000000000000000000000000000000000000000000000000000000081565b7f000000000000000000000000000000000000000000000000000000000000000081565b7f000000000000000000000000000000000000000000000000000000000000000081565b7f000000000000000000000000000000000000000000000000000000000000000081565b7f000000000000000000000000000000000000000000000000000000000000000090565b60008261084457506000610891565b8282028284828161085157fe5b041461088e5760405162461bcd60e51b81526004018080602001828103825260218152602001806109cd6021913960400191505060405180910390fd5b90505b92915050565b600061088e83836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f000000000000815250610912565b600060026001830104825b8082101561090b5750806002818086816108fa57fe5b04018161090357fe5b0491506108e4565b9392505050565b6000818361099e5760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561096357818101518382015260200161094b565b50505050905090810190601f1680156109905780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5060008385816109aa57fe5b0495945050505050565b73eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee9056fe536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f77a2646970667358221220e2f9999f8251e80e8c437e4dbba4308941b69a01607dd1f8dfe8714c3eb4f34564736f6c63430006060033";
