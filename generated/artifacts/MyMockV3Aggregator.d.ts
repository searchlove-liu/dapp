export declare const Artifact_MyMockV3Aggregator: {
  "contractName": "MyMockV3Aggregator",
  "sourceName": "contracts/mocks/MockV3Aggregator.sol",
  "abi": [
    {
      "inputs": [
        {
          "internalType": "uint8",
          "name": "_decimals",
          "type": "uint8"
        },
        {
          "internalType": "int256",
          "name": "_initialAnswer",
          "type": "int256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "int256",
          "name": "current",
          "type": "int256"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "roundId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "updatedAt",
          "type": "uint256"
        }
      ],
      "name": "AnswerUpdated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "roundId",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "startedBy",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "startedAt",
          "type": "uint256"
        }
      ],
      "name": "NewRound",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "decimals",
      "outputs": [
        {
          "internalType": "uint8",
          "name": "",
          "type": "uint8"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "description",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "getAnswer",
      "outputs": [
        {
          "internalType": "int256",
          "name": "",
          "type": "int256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint80",
          "name": "_roundId",
          "type": "uint80"
        }
      ],
      "name": "getRoundData",
      "outputs": [
        {
          "internalType": "uint80",
          "name": "roundId",
          "type": "uint80"
        },
        {
          "internalType": "int256",
          "name": "answer",
          "type": "int256"
        },
        {
          "internalType": "uint256",
          "name": "startedAt",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "updatedAt",
          "type": "uint256"
        },
        {
          "internalType": "uint80",
          "name": "answeredInRound",
          "type": "uint80"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "getTimestamp",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "latestAnswer",
      "outputs": [
        {
          "internalType": "int256",
          "name": "",
          "type": "int256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "latestRound",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "latestRoundData",
      "outputs": [
        {
          "internalType": "uint80",
          "name": "roundId",
          "type": "uint80"
        },
        {
          "internalType": "int256",
          "name": "answer",
          "type": "int256"
        },
        {
          "internalType": "uint256",
          "name": "startedAt",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "updatedAt",
          "type": "uint256"
        },
        {
          "internalType": "uint80",
          "name": "answeredInRound",
          "type": "uint80"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "latestTimestamp",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "int256",
          "name": "_answer",
          "type": "int256"
        }
      ],
      "name": "updateAnswer",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint80",
          "name": "_roundId",
          "type": "uint80"
        },
        {
          "internalType": "int256",
          "name": "_answer",
          "type": "int256"
        },
        {
          "internalType": "uint256",
          "name": "_timestamp",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_startedAt",
          "type": "uint256"
        }
      ],
      "name": "updateRoundData",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "version",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ],
  "bytecode": "0x608060405234801561000f575f5ffd5b50604051610a46380380610a4683398181016040528101906100319190610141565b8181815f5f6101000a81548160ff021916908360ff16021790555061005b8161006460201b60201c565b505050506101fc565b806001819055504260028190555060035f815480929190610084906101b5565b91905055508060045f60035481526020019081526020015f20819055504260055f60035481526020019081526020015f20819055504260065f60035481526020019081526020015f208190555050565b5f5ffd5b5f60ff82169050919050565b6100ed816100d8565b81146100f7575f5ffd5b50565b5f81519050610108816100e4565b92915050565b5f819050919050565b6101208161010e565b811461012a575f5ffd5b50565b5f8151905061013b81610117565b92915050565b5f5f60408385031215610157576101566100d4565b5b5f610164858286016100fa565b92505060206101758582860161012d565b9150509250929050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f819050919050565b5f6101bf826101ac565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82036101f1576101f061017f565b5b600182019050919050565b61083d806102095f395ff3fe608060405234801561000f575f5ffd5b50600436106100b2575f3560e01c80638205bf6a1161006f5780638205bf6a146101685780639a6fc8f514610186578063a87a20ce146101ba578063b5ab58dc146101d6578063b633620c14610206578063feaf968c14610236576100b2565b8063313ce567146100b65780634aa2011f146100d457806350d25bcd146100f057806354fd4d501461010e578063668a0f021461012c5780637284e4161461014a575b5f5ffd5b6100be610258565b6040516100cb91906104ac565b60405180910390f35b6100ee60048036038101906100e9919061056e565b610269565b005b6100f86102d8565b60405161010591906105e1565b60405180910390f35b6101166102de565b6040516101239190610609565b60405180910390f35b6101346102e2565b6040516101419190610609565b60405180910390f35b6101526102e8565b60405161015f9190610692565b60405180910390f35b610170610325565b60405161017d9190610609565b60405180910390f35b6101a0600480360381019061019b91906106b2565b61032b565b6040516101b19594939291906106ec565b60405180910390f35b6101d460048036038101906101cf919061073d565b61039f565b005b6101f060048036038101906101eb9190610768565b61040f565b6040516101fd91906105e1565b60405180910390f35b610220600480360381019061021b9190610768565b610424565b60405161022d9190610609565b60405180910390f35b61023e610439565b60405161024f9594939291906106ec565b60405180910390f35b5f5f9054906101000a900460ff1681565b8369ffffffffffffffffffff1660038190555082600181905550816002819055508260045f60035481526020019081526020015f20819055508160055f60035481526020019081526020015f20819055508060065f60035481526020019081526020015f208190555050505050565b60015481565b5f81565b60035481565b60606040518060400160405280601f81526020017f76302e382f74657374732f4d6f636b563341676772656761746f722e736f6c00815250905090565b60025481565b5f5f5f5f5f8560045f8869ffffffffffffffffffff1681526020019081526020015f205460065f8969ffffffffffffffffffff1681526020019081526020015f205460055f8a69ffffffffffffffffffff1681526020019081526020015f2054899450945094509450945091939590929450565b806001819055504260028190555060035f8154809291906103bf906107c0565b91905055508060045f60035481526020019081526020015f20819055504260055f60035481526020019081526020015f20819055504260065f60035481526020019081526020015f208190555050565b6004602052805f5260405f205f915090505481565b6005602052805f5260405f205f915090505481565b5f5f5f5f5f60035460045f60035481526020019081526020015f205460065f60035481526020019081526020015f205460055f60035481526020019081526020015f2054600354945094509450945094509091929394565b5f60ff82169050919050565b6104a681610491565b82525050565b5f6020820190506104bf5f83018461049d565b92915050565b5f5ffd5b5f69ffffffffffffffffffff82169050919050565b6104e7816104c9565b81146104f1575f5ffd5b50565b5f81359050610502816104de565b92915050565b5f819050919050565b61051a81610508565b8114610524575f5ffd5b50565b5f8135905061053581610511565b92915050565b5f819050919050565b61054d8161053b565b8114610557575f5ffd5b50565b5f8135905061056881610544565b92915050565b5f5f5f5f60808587031215610586576105856104c5565b5b5f610593878288016104f4565b94505060206105a487828801610527565b93505060406105b58782880161055a565b92505060606105c68782880161055a565b91505092959194509250565b6105db81610508565b82525050565b5f6020820190506105f45f8301846105d2565b92915050565b6106038161053b565b82525050565b5f60208201905061061c5f8301846105fa565b92915050565b5f81519050919050565b5f82825260208201905092915050565b8281835e5f83830152505050565b5f601f19601f8301169050919050565b5f61066482610622565b61066e818561062c565b935061067e81856020860161063c565b6106878161064a565b840191505092915050565b5f6020820190508181035f8301526106aa818461065a565b905092915050565b5f602082840312156106c7576106c66104c5565b5b5f6106d4848285016104f4565b91505092915050565b6106e6816104c9565b82525050565b5f60a0820190506106ff5f8301886106dd565b61070c60208301876105d2565b61071960408301866105fa565b61072660608301856105fa565b61073360808301846106dd565b9695505050505050565b5f60208284031215610752576107516104c5565b5b5f61075f84828501610527565b91505092915050565b5f6020828403121561077d5761077c6104c5565b5b5f61078a8482850161055a565b91505092915050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f6107ca8261053b565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82036107fc576107fb610793565b5b60018201905091905056fea264697066735822122000e0b881af7a128c3d973ee4c185b63460ac33d7e43b06cd0b6c07500cb24f6a64736f6c634300081c0033",
  "deployedBytecode": "0x608060405234801561000f575f5ffd5b50600436106100b2575f3560e01c80638205bf6a1161006f5780638205bf6a146101685780639a6fc8f514610186578063a87a20ce146101ba578063b5ab58dc146101d6578063b633620c14610206578063feaf968c14610236576100b2565b8063313ce567146100b65780634aa2011f146100d457806350d25bcd146100f057806354fd4d501461010e578063668a0f021461012c5780637284e4161461014a575b5f5ffd5b6100be610258565b6040516100cb91906104ac565b60405180910390f35b6100ee60048036038101906100e9919061056e565b610269565b005b6100f86102d8565b60405161010591906105e1565b60405180910390f35b6101166102de565b6040516101239190610609565b60405180910390f35b6101346102e2565b6040516101419190610609565b60405180910390f35b6101526102e8565b60405161015f9190610692565b60405180910390f35b610170610325565b60405161017d9190610609565b60405180910390f35b6101a0600480360381019061019b91906106b2565b61032b565b6040516101b19594939291906106ec565b60405180910390f35b6101d460048036038101906101cf919061073d565b61039f565b005b6101f060048036038101906101eb9190610768565b61040f565b6040516101fd91906105e1565b60405180910390f35b610220600480360381019061021b9190610768565b610424565b60405161022d9190610609565b60405180910390f35b61023e610439565b60405161024f9594939291906106ec565b60405180910390f35b5f5f9054906101000a900460ff1681565b8369ffffffffffffffffffff1660038190555082600181905550816002819055508260045f60035481526020019081526020015f20819055508160055f60035481526020019081526020015f20819055508060065f60035481526020019081526020015f208190555050505050565b60015481565b5f81565b60035481565b60606040518060400160405280601f81526020017f76302e382f74657374732f4d6f636b563341676772656761746f722e736f6c00815250905090565b60025481565b5f5f5f5f5f8560045f8869ffffffffffffffffffff1681526020019081526020015f205460065f8969ffffffffffffffffffff1681526020019081526020015f205460055f8a69ffffffffffffffffffff1681526020019081526020015f2054899450945094509450945091939590929450565b806001819055504260028190555060035f8154809291906103bf906107c0565b91905055508060045f60035481526020019081526020015f20819055504260055f60035481526020019081526020015f20819055504260065f60035481526020019081526020015f208190555050565b6004602052805f5260405f205f915090505481565b6005602052805f5260405f205f915090505481565b5f5f5f5f5f60035460045f60035481526020019081526020015f205460065f60035481526020019081526020015f205460055f60035481526020019081526020015f2054600354945094509450945094509091929394565b5f60ff82169050919050565b6104a681610491565b82525050565b5f6020820190506104bf5f83018461049d565b92915050565b5f5ffd5b5f69ffffffffffffffffffff82169050919050565b6104e7816104c9565b81146104f1575f5ffd5b50565b5f81359050610502816104de565b92915050565b5f819050919050565b61051a81610508565b8114610524575f5ffd5b50565b5f8135905061053581610511565b92915050565b5f819050919050565b61054d8161053b565b8114610557575f5ffd5b50565b5f8135905061056881610544565b92915050565b5f5f5f5f60808587031215610586576105856104c5565b5b5f610593878288016104f4565b94505060206105a487828801610527565b93505060406105b58782880161055a565b92505060606105c68782880161055a565b91505092959194509250565b6105db81610508565b82525050565b5f6020820190506105f45f8301846105d2565b92915050565b6106038161053b565b82525050565b5f60208201905061061c5f8301846105fa565b92915050565b5f81519050919050565b5f82825260208201905092915050565b8281835e5f83830152505050565b5f601f19601f8301169050919050565b5f61066482610622565b61066e818561062c565b935061067e81856020860161063c565b6106878161064a565b840191505092915050565b5f6020820190508181035f8301526106aa818461065a565b905092915050565b5f602082840312156106c7576106c66104c5565b5b5f6106d4848285016104f4565b91505092915050565b6106e6816104c9565b82525050565b5f60a0820190506106ff5f8301886106dd565b61070c60208301876105d2565b61071960408301866105fa565b61072660608301856105fa565b61073360808301846106dd565b9695505050505050565b5f60208284031215610752576107516104c5565b5b5f61075f84828501610527565b91505092915050565b5f6020828403121561077d5761077c6104c5565b5b5f61078a8482850161055a565b91505092915050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f6107ca8261053b565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82036107fc576107fb610793565b5b60018201905091905056fea264697066735822122000e0b881af7a128c3d973ee4c185b63460ac33d7e43b06cd0b6c07500cb24f6a64736f6c634300081c0033",
  "linkReferences": {},
  "deployedLinkReferences": {},
  "immutableReferences": {},
  "inputSourceName": "project/contracts/mocks/MockV3Aggregator.sol",
  "devdoc": {
    "kind": "dev",
    "methods": {},
    "version": 1
  },
  "evm": {
    "bytecode": {
      "functionDebugData": {
        "@_157": {
          "entryPoint": null,
          "id": 157,
          "parameterSlots": 2,
          "returnSlots": 0
        },
        "@_735": {
          "entryPoint": null,
          "id": 735,
          "parameterSlots": 2,
          "returnSlots": 0
        },
        "@updateAnswer_195": {
          "entryPoint": 100,
          "id": 195,
          "parameterSlots": 1,
          "returnSlots": 0
        },
        "abi_decode_t_int256_fromMemory": {
          "entryPoint": 301,
          "id": null,
          "parameterSlots": 2,
          "returnSlots": 1
        },
        "abi_decode_t_uint8_fromMemory": {
          "entryPoint": 250,
          "id": null,
          "parameterSlots": 2,
          "returnSlots": 1
        },
        "abi_decode_tuple_t_uint8t_int256_fromMemory": {
          "entryPoint": 321,
          "id": null,
          "parameterSlots": 2,
          "returnSlots": 2
        },
        "allocate_unbounded": {
          "entryPoint": null,
          "id": null,
          "parameterSlots": 0,
          "returnSlots": 1
        },
        "cleanup_t_int256": {
          "entryPoint": 270,
          "id": null,
          "parameterSlots": 1,
          "returnSlots": 1
        },
        "cleanup_t_uint256": {
          "entryPoint": 428,
          "id": null,
          "parameterSlots": 1,
          "returnSlots": 1
        },
        "cleanup_t_uint8": {
          "entryPoint": 216,
          "id": null,
          "parameterSlots": 1,
          "returnSlots": 1
        },
        "increment_t_uint256": {
          "entryPoint": 437,
          "id": null,
          "parameterSlots": 1,
          "returnSlots": 1
        },
        "panic_error_0x11": {
          "entryPoint": 383,
          "id": null,
          "parameterSlots": 0,
          "returnSlots": 0
        },
        "revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db": {
          "entryPoint": null,
          "id": null,
          "parameterSlots": 0,
          "returnSlots": 0
        },
        "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b": {
          "entryPoint": 212,
          "id": null,
          "parameterSlots": 0,
          "returnSlots": 0
        },
        "validator_revert_t_int256": {
          "entryPoint": 279,
          "id": null,
          "parameterSlots": 1,
          "returnSlots": 0
        },
        "validator_revert_t_uint8": {
          "entryPoint": 228,
          "id": null,
          "parameterSlots": 1,
          "returnSlots": 0
        }
      },
      "generatedSources": [
        {
          "ast": {
            "nativeSrc": "0:2062:6",
            "nodeType": "YulBlock",
            "src": "0:2062:6",
            "statements": [
              {
                "body": {
                  "nativeSrc": "47:35:6",
                  "nodeType": "YulBlock",
                  "src": "47:35:6",
                  "statements": [
                    {
                      "nativeSrc": "57:19:6",
                      "nodeType": "YulAssignment",
                      "src": "57:19:6",
                      "value": {
                        "arguments": [
                          {
                            "kind": "number",
                            "nativeSrc": "73:2:6",
                            "nodeType": "YulLiteral",
                            "src": "73:2:6",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "mload",
                          "nativeSrc": "67:5:6",
                          "nodeType": "YulIdentifier",
                          "src": "67:5:6"
                        },
                        "nativeSrc": "67:9:6",
                        "nodeType": "YulFunctionCall",
                        "src": "67:9:6"
                      },
                      "variableNames": [
                        {
                          "name": "memPtr",
                          "nativeSrc": "57:6:6",
                          "nodeType": "YulIdentifier",
                          "src": "57:6:6"
                        }
                      ]
                    }
                  ]
                },
                "name": "allocate_unbounded",
                "nativeSrc": "7:75:6",
                "nodeType": "YulFunctionDefinition",
                "returnVariables": [
                  {
                    "name": "memPtr",
                    "nativeSrc": "40:6:6",
                    "nodeType": "YulTypedName",
                    "src": "40:6:6",
                    "type": ""
                  }
                ],
                "src": "7:75:6"
              },
              {
                "body": {
                  "nativeSrc": "177:28:6",
                  "nodeType": "YulBlock",
                  "src": "177:28:6",
                  "statements": [
                    {
                      "expression": {
                        "arguments": [
                          {
                            "kind": "number",
                            "nativeSrc": "194:1:6",
                            "nodeType": "YulLiteral",
                            "src": "194:1:6",
                            "type": "",
                            "value": "0"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "197:1:6",
                            "nodeType": "YulLiteral",
                            "src": "197:1:6",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "revert",
                          "nativeSrc": "187:6:6",
                          "nodeType": "YulIdentifier",
                          "src": "187:6:6"
                        },
                        "nativeSrc": "187:12:6",
                        "nodeType": "YulFunctionCall",
                        "src": "187:12:6"
                      },
                      "nativeSrc": "187:12:6",
                      "nodeType": "YulExpressionStatement",
                      "src": "187:12:6"
                    }
                  ]
                },
                "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                "nativeSrc": "88:117:6",
                "nodeType": "YulFunctionDefinition",
                "src": "88:117:6"
              },
              {
                "body": {
                  "nativeSrc": "300:28:6",
                  "nodeType": "YulBlock",
                  "src": "300:28:6",
                  "statements": [
                    {
                      "expression": {
                        "arguments": [
                          {
                            "kind": "number",
                            "nativeSrc": "317:1:6",
                            "nodeType": "YulLiteral",
                            "src": "317:1:6",
                            "type": "",
                            "value": "0"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "320:1:6",
                            "nodeType": "YulLiteral",
                            "src": "320:1:6",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "revert",
                          "nativeSrc": "310:6:6",
                          "nodeType": "YulIdentifier",
                          "src": "310:6:6"
                        },
                        "nativeSrc": "310:12:6",
                        "nodeType": "YulFunctionCall",
                        "src": "310:12:6"
                      },
                      "nativeSrc": "310:12:6",
                      "nodeType": "YulExpressionStatement",
                      "src": "310:12:6"
                    }
                  ]
                },
                "name": "revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db",
                "nativeSrc": "211:117:6",
                "nodeType": "YulFunctionDefinition",
                "src": "211:117:6"
              },
              {
                "body": {
                  "nativeSrc": "377:43:6",
                  "nodeType": "YulBlock",
                  "src": "377:43:6",
                  "statements": [
                    {
                      "nativeSrc": "387:27:6",
                      "nodeType": "YulAssignment",
                      "src": "387:27:6",
                      "value": {
                        "arguments": [
                          {
                            "name": "value",
                            "nativeSrc": "402:5:6",
                            "nodeType": "YulIdentifier",
                            "src": "402:5:6"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "409:4:6",
                            "nodeType": "YulLiteral",
                            "src": "409:4:6",
                            "type": "",
                            "value": "0xff"
                          }
                        ],
                        "functionName": {
                          "name": "and",
                          "nativeSrc": "398:3:6",
                          "nodeType": "YulIdentifier",
                          "src": "398:3:6"
                        },
                        "nativeSrc": "398:16:6",
                        "nodeType": "YulFunctionCall",
                        "src": "398:16:6"
                      },
                      "variableNames": [
                        {
                          "name": "cleaned",
                          "nativeSrc": "387:7:6",
                          "nodeType": "YulIdentifier",
                          "src": "387:7:6"
                        }
                      ]
                    }
                  ]
                },
                "name": "cleanup_t_uint8",
                "nativeSrc": "334:86:6",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "value",
                    "nativeSrc": "359:5:6",
                    "nodeType": "YulTypedName",
                    "src": "359:5:6",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "cleaned",
                    "nativeSrc": "369:7:6",
                    "nodeType": "YulTypedName",
                    "src": "369:7:6",
                    "type": ""
                  }
                ],
                "src": "334:86:6"
              },
              {
                "body": {
                  "nativeSrc": "467:77:6",
                  "nodeType": "YulBlock",
                  "src": "467:77:6",
                  "statements": [
                    {
                      "body": {
                        "nativeSrc": "522:16:6",
                        "nodeType": "YulBlock",
                        "src": "522:16:6",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nativeSrc": "531:1:6",
                                  "nodeType": "YulLiteral",
                                  "src": "531:1:6",
                                  "type": "",
                                  "value": "0"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "534:1:6",
                                  "nodeType": "YulLiteral",
                                  "src": "534:1:6",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "revert",
                                "nativeSrc": "524:6:6",
                                "nodeType": "YulIdentifier",
                                "src": "524:6:6"
                              },
                              "nativeSrc": "524:12:6",
                              "nodeType": "YulFunctionCall",
                              "src": "524:12:6"
                            },
                            "nativeSrc": "524:12:6",
                            "nodeType": "YulExpressionStatement",
                            "src": "524:12:6"
                          }
                        ]
                      },
                      "condition": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "value",
                                "nativeSrc": "490:5:6",
                                "nodeType": "YulIdentifier",
                                "src": "490:5:6"
                              },
                              {
                                "arguments": [
                                  {
                                    "name": "value",
                                    "nativeSrc": "513:5:6",
                                    "nodeType": "YulIdentifier",
                                    "src": "513:5:6"
                                  }
                                ],
                                "functionName": {
                                  "name": "cleanup_t_uint8",
                                  "nativeSrc": "497:15:6",
                                  "nodeType": "YulIdentifier",
                                  "src": "497:15:6"
                                },
                                "nativeSrc": "497:22:6",
                                "nodeType": "YulFunctionCall",
                                "src": "497:22:6"
                              }
                            ],
                            "functionName": {
                              "name": "eq",
                              "nativeSrc": "487:2:6",
                              "nodeType": "YulIdentifier",
                              "src": "487:2:6"
                            },
                            "nativeSrc": "487:33:6",
                            "nodeType": "YulFunctionCall",
                            "src": "487:33:6"
                          }
                        ],
                        "functionName": {
                          "name": "iszero",
                          "nativeSrc": "480:6:6",
                          "nodeType": "YulIdentifier",
                          "src": "480:6:6"
                        },
                        "nativeSrc": "480:41:6",
                        "nodeType": "YulFunctionCall",
                        "src": "480:41:6"
                      },
                      "nativeSrc": "477:61:6",
                      "nodeType": "YulIf",
                      "src": "477:61:6"
                    }
                  ]
                },
                "name": "validator_revert_t_uint8",
                "nativeSrc": "426:118:6",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "value",
                    "nativeSrc": "460:5:6",
                    "nodeType": "YulTypedName",
                    "src": "460:5:6",
                    "type": ""
                  }
                ],
                "src": "426:118:6"
              },
              {
                "body": {
                  "nativeSrc": "611:78:6",
                  "nodeType": "YulBlock",
                  "src": "611:78:6",
                  "statements": [
                    {
                      "nativeSrc": "621:22:6",
                      "nodeType": "YulAssignment",
                      "src": "621:22:6",
                      "value": {
                        "arguments": [
                          {
                            "name": "offset",
                            "nativeSrc": "636:6:6",
                            "nodeType": "YulIdentifier",
                            "src": "636:6:6"
                          }
                        ],
                        "functionName": {
                          "name": "mload",
                          "nativeSrc": "630:5:6",
                          "nodeType": "YulIdentifier",
                          "src": "630:5:6"
                        },
                        "nativeSrc": "630:13:6",
                        "nodeType": "YulFunctionCall",
                        "src": "630:13:6"
                      },
                      "variableNames": [
                        {
                          "name": "value",
                          "nativeSrc": "621:5:6",
                          "nodeType": "YulIdentifier",
                          "src": "621:5:6"
                        }
                      ]
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "name": "value",
                            "nativeSrc": "677:5:6",
                            "nodeType": "YulIdentifier",
                            "src": "677:5:6"
                          }
                        ],
                        "functionName": {
                          "name": "validator_revert_t_uint8",
                          "nativeSrc": "652:24:6",
                          "nodeType": "YulIdentifier",
                          "src": "652:24:6"
                        },
                        "nativeSrc": "652:31:6",
                        "nodeType": "YulFunctionCall",
                        "src": "652:31:6"
                      },
                      "nativeSrc": "652:31:6",
                      "nodeType": "YulExpressionStatement",
                      "src": "652:31:6"
                    }
                  ]
                },
                "name": "abi_decode_t_uint8_fromMemory",
                "nativeSrc": "550:139:6",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "offset",
                    "nativeSrc": "589:6:6",
                    "nodeType": "YulTypedName",
                    "src": "589:6:6",
                    "type": ""
                  },
                  {
                    "name": "end",
                    "nativeSrc": "597:3:6",
                    "nodeType": "YulTypedName",
                    "src": "597:3:6",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "value",
                    "nativeSrc": "605:5:6",
                    "nodeType": "YulTypedName",
                    "src": "605:5:6",
                    "type": ""
                  }
                ],
                "src": "550:139:6"
              },
              {
                "body": {
                  "nativeSrc": "739:32:6",
                  "nodeType": "YulBlock",
                  "src": "739:32:6",
                  "statements": [
                    {
                      "nativeSrc": "749:16:6",
                      "nodeType": "YulAssignment",
                      "src": "749:16:6",
                      "value": {
                        "name": "value",
                        "nativeSrc": "760:5:6",
                        "nodeType": "YulIdentifier",
                        "src": "760:5:6"
                      },
                      "variableNames": [
                        {
                          "name": "cleaned",
                          "nativeSrc": "749:7:6",
                          "nodeType": "YulIdentifier",
                          "src": "749:7:6"
                        }
                      ]
                    }
                  ]
                },
                "name": "cleanup_t_int256",
                "nativeSrc": "695:76:6",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "value",
                    "nativeSrc": "721:5:6",
                    "nodeType": "YulTypedName",
                    "src": "721:5:6",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "cleaned",
                    "nativeSrc": "731:7:6",
                    "nodeType": "YulTypedName",
                    "src": "731:7:6",
                    "type": ""
                  }
                ],
                "src": "695:76:6"
              },
              {
                "body": {
                  "nativeSrc": "819:78:6",
                  "nodeType": "YulBlock",
                  "src": "819:78:6",
                  "statements": [
                    {
                      "body": {
                        "nativeSrc": "875:16:6",
                        "nodeType": "YulBlock",
                        "src": "875:16:6",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nativeSrc": "884:1:6",
                                  "nodeType": "YulLiteral",
                                  "src": "884:1:6",
                                  "type": "",
                                  "value": "0"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "887:1:6",
                                  "nodeType": "YulLiteral",
                                  "src": "887:1:6",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "revert",
                                "nativeSrc": "877:6:6",
                                "nodeType": "YulIdentifier",
                                "src": "877:6:6"
                              },
                              "nativeSrc": "877:12:6",
                              "nodeType": "YulFunctionCall",
                              "src": "877:12:6"
                            },
                            "nativeSrc": "877:12:6",
                            "nodeType": "YulExpressionStatement",
                            "src": "877:12:6"
                          }
                        ]
                      },
                      "condition": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "value",
                                "nativeSrc": "842:5:6",
                                "nodeType": "YulIdentifier",
                                "src": "842:5:6"
                              },
                              {
                                "arguments": [
                                  {
                                    "name": "value",
                                    "nativeSrc": "866:5:6",
                                    "nodeType": "YulIdentifier",
                                    "src": "866:5:6"
                                  }
                                ],
                                "functionName": {
                                  "name": "cleanup_t_int256",
                                  "nativeSrc": "849:16:6",
                                  "nodeType": "YulIdentifier",
                                  "src": "849:16:6"
                                },
                                "nativeSrc": "849:23:6",
                                "nodeType": "YulFunctionCall",
                                "src": "849:23:6"
                              }
                            ],
                            "functionName": {
                              "name": "eq",
                              "nativeSrc": "839:2:6",
                              "nodeType": "YulIdentifier",
                              "src": "839:2:6"
                            },
                            "nativeSrc": "839:34:6",
                            "nodeType": "YulFunctionCall",
                            "src": "839:34:6"
                          }
                        ],
                        "functionName": {
                          "name": "iszero",
                          "nativeSrc": "832:6:6",
                          "nodeType": "YulIdentifier",
                          "src": "832:6:6"
                        },
                        "nativeSrc": "832:42:6",
                        "nodeType": "YulFunctionCall",
                        "src": "832:42:6"
                      },
                      "nativeSrc": "829:62:6",
                      "nodeType": "YulIf",
                      "src": "829:62:6"
                    }
                  ]
                },
                "name": "validator_revert_t_int256",
                "nativeSrc": "777:120:6",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "value",
                    "nativeSrc": "812:5:6",
                    "nodeType": "YulTypedName",
                    "src": "812:5:6",
                    "type": ""
                  }
                ],
                "src": "777:120:6"
              },
              {
                "body": {
                  "nativeSrc": "965:79:6",
                  "nodeType": "YulBlock",
                  "src": "965:79:6",
                  "statements": [
                    {
                      "nativeSrc": "975:22:6",
                      "nodeType": "YulAssignment",
                      "src": "975:22:6",
                      "value": {
                        "arguments": [
                          {
                            "name": "offset",
                            "nativeSrc": "990:6:6",
                            "nodeType": "YulIdentifier",
                            "src": "990:6:6"
                          }
                        ],
                        "functionName": {
                          "name": "mload",
                          "nativeSrc": "984:5:6",
                          "nodeType": "YulIdentifier",
                          "src": "984:5:6"
                        },
                        "nativeSrc": "984:13:6",
                        "nodeType": "YulFunctionCall",
                        "src": "984:13:6"
                      },
                      "variableNames": [
                        {
                          "name": "value",
                          "nativeSrc": "975:5:6",
                          "nodeType": "YulIdentifier",
                          "src": "975:5:6"
                        }
                      ]
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "name": "value",
                            "nativeSrc": "1032:5:6",
                            "nodeType": "YulIdentifier",
                            "src": "1032:5:6"
                          }
                        ],
                        "functionName": {
                          "name": "validator_revert_t_int256",
                          "nativeSrc": "1006:25:6",
                          "nodeType": "YulIdentifier",
                          "src": "1006:25:6"
                        },
                        "nativeSrc": "1006:32:6",
                        "nodeType": "YulFunctionCall",
                        "src": "1006:32:6"
                      },
                      "nativeSrc": "1006:32:6",
                      "nodeType": "YulExpressionStatement",
                      "src": "1006:32:6"
                    }
                  ]
                },
                "name": "abi_decode_t_int256_fromMemory",
                "nativeSrc": "903:141:6",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "offset",
                    "nativeSrc": "943:6:6",
                    "nodeType": "YulTypedName",
                    "src": "943:6:6",
                    "type": ""
                  },
                  {
                    "name": "end",
                    "nativeSrc": "951:3:6",
                    "nodeType": "YulTypedName",
                    "src": "951:3:6",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "value",
                    "nativeSrc": "959:5:6",
                    "nodeType": "YulTypedName",
                    "src": "959:5:6",
                    "type": ""
                  }
                ],
                "src": "903:141:6"
              },
              {
                "body": {
                  "nativeSrc": "1141:410:6",
                  "nodeType": "YulBlock",
                  "src": "1141:410:6",
                  "statements": [
                    {
                      "body": {
                        "nativeSrc": "1187:83:6",
                        "nodeType": "YulBlock",
                        "src": "1187:83:6",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [],
                              "functionName": {
                                "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                                "nativeSrc": "1189:77:6",
                                "nodeType": "YulIdentifier",
                                "src": "1189:77:6"
                              },
                              "nativeSrc": "1189:79:6",
                              "nodeType": "YulFunctionCall",
                              "src": "1189:79:6"
                            },
                            "nativeSrc": "1189:79:6",
                            "nodeType": "YulExpressionStatement",
                            "src": "1189:79:6"
                          }
                        ]
                      },
                      "condition": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "dataEnd",
                                "nativeSrc": "1162:7:6",
                                "nodeType": "YulIdentifier",
                                "src": "1162:7:6"
                              },
                              {
                                "name": "headStart",
                                "nativeSrc": "1171:9:6",
                                "nodeType": "YulIdentifier",
                                "src": "1171:9:6"
                              }
                            ],
                            "functionName": {
                              "name": "sub",
                              "nativeSrc": "1158:3:6",
                              "nodeType": "YulIdentifier",
                              "src": "1158:3:6"
                            },
                            "nativeSrc": "1158:23:6",
                            "nodeType": "YulFunctionCall",
                            "src": "1158:23:6"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "1183:2:6",
                            "nodeType": "YulLiteral",
                            "src": "1183:2:6",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "slt",
                          "nativeSrc": "1154:3:6",
                          "nodeType": "YulIdentifier",
                          "src": "1154:3:6"
                        },
                        "nativeSrc": "1154:32:6",
                        "nodeType": "YulFunctionCall",
                        "src": "1154:32:6"
                      },
                      "nativeSrc": "1151:119:6",
                      "nodeType": "YulIf",
                      "src": "1151:119:6"
                    },
                    {
                      "nativeSrc": "1280:126:6",
                      "nodeType": "YulBlock",
                      "src": "1280:126:6",
                      "statements": [
                        {
                          "nativeSrc": "1295:15:6",
                          "nodeType": "YulVariableDeclaration",
                          "src": "1295:15:6",
                          "value": {
                            "kind": "number",
                            "nativeSrc": "1309:1:6",
                            "nodeType": "YulLiteral",
                            "src": "1309:1:6",
                            "type": "",
                            "value": "0"
                          },
                          "variables": [
                            {
                              "name": "offset",
                              "nativeSrc": "1299:6:6",
                              "nodeType": "YulTypedName",
                              "src": "1299:6:6",
                              "type": ""
                            }
                          ]
                        },
                        {
                          "nativeSrc": "1324:72:6",
                          "nodeType": "YulAssignment",
                          "src": "1324:72:6",
                          "value": {
                            "arguments": [
                              {
                                "arguments": [
                                  {
                                    "name": "headStart",
                                    "nativeSrc": "1368:9:6",
                                    "nodeType": "YulIdentifier",
                                    "src": "1368:9:6"
                                  },
                                  {
                                    "name": "offset",
                                    "nativeSrc": "1379:6:6",
                                    "nodeType": "YulIdentifier",
                                    "src": "1379:6:6"
                                  }
                                ],
                                "functionName": {
                                  "name": "add",
                                  "nativeSrc": "1364:3:6",
                                  "nodeType": "YulIdentifier",
                                  "src": "1364:3:6"
                                },
                                "nativeSrc": "1364:22:6",
                                "nodeType": "YulFunctionCall",
                                "src": "1364:22:6"
                              },
                              {
                                "name": "dataEnd",
                                "nativeSrc": "1388:7:6",
                                "nodeType": "YulIdentifier",
                                "src": "1388:7:6"
                              }
                            ],
                            "functionName": {
                              "name": "abi_decode_t_uint8_fromMemory",
                              "nativeSrc": "1334:29:6",
                              "nodeType": "YulIdentifier",
                              "src": "1334:29:6"
                            },
                            "nativeSrc": "1334:62:6",
                            "nodeType": "YulFunctionCall",
                            "src": "1334:62:6"
                          },
                          "variableNames": [
                            {
                              "name": "value0",
                              "nativeSrc": "1324:6:6",
                              "nodeType": "YulIdentifier",
                              "src": "1324:6:6"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "nativeSrc": "1416:128:6",
                      "nodeType": "YulBlock",
                      "src": "1416:128:6",
                      "statements": [
                        {
                          "nativeSrc": "1431:16:6",
                          "nodeType": "YulVariableDeclaration",
                          "src": "1431:16:6",
                          "value": {
                            "kind": "number",
                            "nativeSrc": "1445:2:6",
                            "nodeType": "YulLiteral",
                            "src": "1445:2:6",
                            "type": "",
                            "value": "32"
                          },
                          "variables": [
                            {
                              "name": "offset",
                              "nativeSrc": "1435:6:6",
                              "nodeType": "YulTypedName",
                              "src": "1435:6:6",
                              "type": ""
                            }
                          ]
                        },
                        {
                          "nativeSrc": "1461:73:6",
                          "nodeType": "YulAssignment",
                          "src": "1461:73:6",
                          "value": {
                            "arguments": [
                              {
                                "arguments": [
                                  {
                                    "name": "headStart",
                                    "nativeSrc": "1506:9:6",
                                    "nodeType": "YulIdentifier",
                                    "src": "1506:9:6"
                                  },
                                  {
                                    "name": "offset",
                                    "nativeSrc": "1517:6:6",
                                    "nodeType": "YulIdentifier",
                                    "src": "1517:6:6"
                                  }
                                ],
                                "functionName": {
                                  "name": "add",
                                  "nativeSrc": "1502:3:6",
                                  "nodeType": "YulIdentifier",
                                  "src": "1502:3:6"
                                },
                                "nativeSrc": "1502:22:6",
                                "nodeType": "YulFunctionCall",
                                "src": "1502:22:6"
                              },
                              {
                                "name": "dataEnd",
                                "nativeSrc": "1526:7:6",
                                "nodeType": "YulIdentifier",
                                "src": "1526:7:6"
                              }
                            ],
                            "functionName": {
                              "name": "abi_decode_t_int256_fromMemory",
                              "nativeSrc": "1471:30:6",
                              "nodeType": "YulIdentifier",
                              "src": "1471:30:6"
                            },
                            "nativeSrc": "1471:63:6",
                            "nodeType": "YulFunctionCall",
                            "src": "1471:63:6"
                          },
                          "variableNames": [
                            {
                              "name": "value1",
                              "nativeSrc": "1461:6:6",
                              "nodeType": "YulIdentifier",
                              "src": "1461:6:6"
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                "name": "abi_decode_tuple_t_uint8t_int256_fromMemory",
                "nativeSrc": "1050:501:6",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "headStart",
                    "nativeSrc": "1103:9:6",
                    "nodeType": "YulTypedName",
                    "src": "1103:9:6",
                    "type": ""
                  },
                  {
                    "name": "dataEnd",
                    "nativeSrc": "1114:7:6",
                    "nodeType": "YulTypedName",
                    "src": "1114:7:6",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "value0",
                    "nativeSrc": "1126:6:6",
                    "nodeType": "YulTypedName",
                    "src": "1126:6:6",
                    "type": ""
                  },
                  {
                    "name": "value1",
                    "nativeSrc": "1134:6:6",
                    "nodeType": "YulTypedName",
                    "src": "1134:6:6",
                    "type": ""
                  }
                ],
                "src": "1050:501:6"
              },
              {
                "body": {
                  "nativeSrc": "1585:152:6",
                  "nodeType": "YulBlock",
                  "src": "1585:152:6",
                  "statements": [
                    {
                      "expression": {
                        "arguments": [
                          {
                            "kind": "number",
                            "nativeSrc": "1602:1:6",
                            "nodeType": "YulLiteral",
                            "src": "1602:1:6",
                            "type": "",
                            "value": "0"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "1605:77:6",
                            "nodeType": "YulLiteral",
                            "src": "1605:77:6",
                            "type": "",
                            "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nativeSrc": "1595:6:6",
                          "nodeType": "YulIdentifier",
                          "src": "1595:6:6"
                        },
                        "nativeSrc": "1595:88:6",
                        "nodeType": "YulFunctionCall",
                        "src": "1595:88:6"
                      },
                      "nativeSrc": "1595:88:6",
                      "nodeType": "YulExpressionStatement",
                      "src": "1595:88:6"
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "kind": "number",
                            "nativeSrc": "1699:1:6",
                            "nodeType": "YulLiteral",
                            "src": "1699:1:6",
                            "type": "",
                            "value": "4"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "1702:4:6",
                            "nodeType": "YulLiteral",
                            "src": "1702:4:6",
                            "type": "",
                            "value": "0x11"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nativeSrc": "1692:6:6",
                          "nodeType": "YulIdentifier",
                          "src": "1692:6:6"
                        },
                        "nativeSrc": "1692:15:6",
                        "nodeType": "YulFunctionCall",
                        "src": "1692:15:6"
                      },
                      "nativeSrc": "1692:15:6",
                      "nodeType": "YulExpressionStatement",
                      "src": "1692:15:6"
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "kind": "number",
                            "nativeSrc": "1723:1:6",
                            "nodeType": "YulLiteral",
                            "src": "1723:1:6",
                            "type": "",
                            "value": "0"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "1726:4:6",
                            "nodeType": "YulLiteral",
                            "src": "1726:4:6",
                            "type": "",
                            "value": "0x24"
                          }
                        ],
                        "functionName": {
                          "name": "revert",
                          "nativeSrc": "1716:6:6",
                          "nodeType": "YulIdentifier",
                          "src": "1716:6:6"
                        },
                        "nativeSrc": "1716:15:6",
                        "nodeType": "YulFunctionCall",
                        "src": "1716:15:6"
                      },
                      "nativeSrc": "1716:15:6",
                      "nodeType": "YulExpressionStatement",
                      "src": "1716:15:6"
                    }
                  ]
                },
                "name": "panic_error_0x11",
                "nativeSrc": "1557:180:6",
                "nodeType": "YulFunctionDefinition",
                "src": "1557:180:6"
              },
              {
                "body": {
                  "nativeSrc": "1788:32:6",
                  "nodeType": "YulBlock",
                  "src": "1788:32:6",
                  "statements": [
                    {
                      "nativeSrc": "1798:16:6",
                      "nodeType": "YulAssignment",
                      "src": "1798:16:6",
                      "value": {
                        "name": "value",
                        "nativeSrc": "1809:5:6",
                        "nodeType": "YulIdentifier",
                        "src": "1809:5:6"
                      },
                      "variableNames": [
                        {
                          "name": "cleaned",
                          "nativeSrc": "1798:7:6",
                          "nodeType": "YulIdentifier",
                          "src": "1798:7:6"
                        }
                      ]
                    }
                  ]
                },
                "name": "cleanup_t_uint256",
                "nativeSrc": "1743:77:6",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "value",
                    "nativeSrc": "1770:5:6",
                    "nodeType": "YulTypedName",
                    "src": "1770:5:6",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "cleaned",
                    "nativeSrc": "1780:7:6",
                    "nodeType": "YulTypedName",
                    "src": "1780:7:6",
                    "type": ""
                  }
                ],
                "src": "1743:77:6"
              },
              {
                "body": {
                  "nativeSrc": "1869:190:6",
                  "nodeType": "YulBlock",
                  "src": "1869:190:6",
                  "statements": [
                    {
                      "nativeSrc": "1879:33:6",
                      "nodeType": "YulAssignment",
                      "src": "1879:33:6",
                      "value": {
                        "arguments": [
                          {
                            "name": "value",
                            "nativeSrc": "1906:5:6",
                            "nodeType": "YulIdentifier",
                            "src": "1906:5:6"
                          }
                        ],
                        "functionName": {
                          "name": "cleanup_t_uint256",
                          "nativeSrc": "1888:17:6",
                          "nodeType": "YulIdentifier",
                          "src": "1888:17:6"
                        },
                        "nativeSrc": "1888:24:6",
                        "nodeType": "YulFunctionCall",
                        "src": "1888:24:6"
                      },
                      "variableNames": [
                        {
                          "name": "value",
                          "nativeSrc": "1879:5:6",
                          "nodeType": "YulIdentifier",
                          "src": "1879:5:6"
                        }
                      ]
                    },
                    {
                      "body": {
                        "nativeSrc": "2002:22:6",
                        "nodeType": "YulBlock",
                        "src": "2002:22:6",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [],
                              "functionName": {
                                "name": "panic_error_0x11",
                                "nativeSrc": "2004:16:6",
                                "nodeType": "YulIdentifier",
                                "src": "2004:16:6"
                              },
                              "nativeSrc": "2004:18:6",
                              "nodeType": "YulFunctionCall",
                              "src": "2004:18:6"
                            },
                            "nativeSrc": "2004:18:6",
                            "nodeType": "YulExpressionStatement",
                            "src": "2004:18:6"
                          }
                        ]
                      },
                      "condition": {
                        "arguments": [
                          {
                            "name": "value",
                            "nativeSrc": "1927:5:6",
                            "nodeType": "YulIdentifier",
                            "src": "1927:5:6"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "1934:66:6",
                            "nodeType": "YulLiteral",
                            "src": "1934:66:6",
                            "type": "",
                            "value": "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
                          }
                        ],
                        "functionName": {
                          "name": "eq",
                          "nativeSrc": "1924:2:6",
                          "nodeType": "YulIdentifier",
                          "src": "1924:2:6"
                        },
                        "nativeSrc": "1924:77:6",
                        "nodeType": "YulFunctionCall",
                        "src": "1924:77:6"
                      },
                      "nativeSrc": "1921:103:6",
                      "nodeType": "YulIf",
                      "src": "1921:103:6"
                    },
                    {
                      "nativeSrc": "2033:20:6",
                      "nodeType": "YulAssignment",
                      "src": "2033:20:6",
                      "value": {
                        "arguments": [
                          {
                            "name": "value",
                            "nativeSrc": "2044:5:6",
                            "nodeType": "YulIdentifier",
                            "src": "2044:5:6"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "2051:1:6",
                            "nodeType": "YulLiteral",
                            "src": "2051:1:6",
                            "type": "",
                            "value": "1"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nativeSrc": "2040:3:6",
                          "nodeType": "YulIdentifier",
                          "src": "2040:3:6"
                        },
                        "nativeSrc": "2040:13:6",
                        "nodeType": "YulFunctionCall",
                        "src": "2040:13:6"
                      },
                      "variableNames": [
                        {
                          "name": "ret",
                          "nativeSrc": "2033:3:6",
                          "nodeType": "YulIdentifier",
                          "src": "2033:3:6"
                        }
                      ]
                    }
                  ]
                },
                "name": "increment_t_uint256",
                "nativeSrc": "1826:233:6",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "value",
                    "nativeSrc": "1855:5:6",
                    "nodeType": "YulTypedName",
                    "src": "1855:5:6",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "ret",
                    "nativeSrc": "1865:3:6",
                    "nodeType": "YulTypedName",
                    "src": "1865:3:6",
                    "type": ""
                  }
                ],
                "src": "1826:233:6"
              }
            ]
          },
          "contents": "{\n\n    function allocate_unbounded() -> memPtr {\n        memPtr := mload(64)\n    }\n\n    function revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() {\n        revert(0, 0)\n    }\n\n    function revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db() {\n        revert(0, 0)\n    }\n\n    function cleanup_t_uint8(value) -> cleaned {\n        cleaned := and(value, 0xff)\n    }\n\n    function validator_revert_t_uint8(value) {\n        if iszero(eq(value, cleanup_t_uint8(value))) { revert(0, 0) }\n    }\n\n    function abi_decode_t_uint8_fromMemory(offset, end) -> value {\n        value := mload(offset)\n        validator_revert_t_uint8(value)\n    }\n\n    function cleanup_t_int256(value) -> cleaned {\n        cleaned := value\n    }\n\n    function validator_revert_t_int256(value) {\n        if iszero(eq(value, cleanup_t_int256(value))) { revert(0, 0) }\n    }\n\n    function abi_decode_t_int256_fromMemory(offset, end) -> value {\n        value := mload(offset)\n        validator_revert_t_int256(value)\n    }\n\n    function abi_decode_tuple_t_uint8t_int256_fromMemory(headStart, dataEnd) -> value0, value1 {\n        if slt(sub(dataEnd, headStart), 64) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_uint8_fromMemory(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := 32\n\n            value1 := abi_decode_t_int256_fromMemory(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function panic_error_0x11() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x11)\n        revert(0, 0x24)\n    }\n\n    function cleanup_t_uint256(value) -> cleaned {\n        cleaned := value\n    }\n\n    function increment_t_uint256(value) -> ret {\n        value := cleanup_t_uint256(value)\n        if eq(value, 0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff) { panic_error_0x11() }\n        ret := add(value, 1)\n    }\n\n}\n",
          "id": 6,
          "language": "Yul",
          "name": "#utility.yul"
        }
      ],
      "linkReferences": {},
      "object": "608060405234801561000f575f5ffd5b50604051610a46380380610a4683398181016040528101906100319190610141565b8181815f5f6101000a81548160ff021916908360ff16021790555061005b8161006460201b60201c565b505050506101fc565b806001819055504260028190555060035f815480929190610084906101b5565b91905055508060045f60035481526020019081526020015f20819055504260055f60035481526020019081526020015f20819055504260065f60035481526020019081526020015f208190555050565b5f5ffd5b5f60ff82169050919050565b6100ed816100d8565b81146100f7575f5ffd5b50565b5f81519050610108816100e4565b92915050565b5f819050919050565b6101208161010e565b811461012a575f5ffd5b50565b5f8151905061013b81610117565b92915050565b5f5f60408385031215610157576101566100d4565b5b5f610164858286016100fa565b92505060206101758582860161012d565b9150509250929050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f819050919050565b5f6101bf826101ac565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82036101f1576101f061017f565b5b600182019050919050565b61083d806102095f395ff3fe608060405234801561000f575f5ffd5b50600436106100b2575f3560e01c80638205bf6a1161006f5780638205bf6a146101685780639a6fc8f514610186578063a87a20ce146101ba578063b5ab58dc146101d6578063b633620c14610206578063feaf968c14610236576100b2565b8063313ce567146100b65780634aa2011f146100d457806350d25bcd146100f057806354fd4d501461010e578063668a0f021461012c5780637284e4161461014a575b5f5ffd5b6100be610258565b6040516100cb91906104ac565b60405180910390f35b6100ee60048036038101906100e9919061056e565b610269565b005b6100f86102d8565b60405161010591906105e1565b60405180910390f35b6101166102de565b6040516101239190610609565b60405180910390f35b6101346102e2565b6040516101419190610609565b60405180910390f35b6101526102e8565b60405161015f9190610692565b60405180910390f35b610170610325565b60405161017d9190610609565b60405180910390f35b6101a0600480360381019061019b91906106b2565b61032b565b6040516101b19594939291906106ec565b60405180910390f35b6101d460048036038101906101cf919061073d565b61039f565b005b6101f060048036038101906101eb9190610768565b61040f565b6040516101fd91906105e1565b60405180910390f35b610220600480360381019061021b9190610768565b610424565b60405161022d9190610609565b60405180910390f35b61023e610439565b60405161024f9594939291906106ec565b60405180910390f35b5f5f9054906101000a900460ff1681565b8369ffffffffffffffffffff1660038190555082600181905550816002819055508260045f60035481526020019081526020015f20819055508160055f60035481526020019081526020015f20819055508060065f60035481526020019081526020015f208190555050505050565b60015481565b5f81565b60035481565b60606040518060400160405280601f81526020017f76302e382f74657374732f4d6f636b563341676772656761746f722e736f6c00815250905090565b60025481565b5f5f5f5f5f8560045f8869ffffffffffffffffffff1681526020019081526020015f205460065f8969ffffffffffffffffffff1681526020019081526020015f205460055f8a69ffffffffffffffffffff1681526020019081526020015f2054899450945094509450945091939590929450565b806001819055504260028190555060035f8154809291906103bf906107c0565b91905055508060045f60035481526020019081526020015f20819055504260055f60035481526020019081526020015f20819055504260065f60035481526020019081526020015f208190555050565b6004602052805f5260405f205f915090505481565b6005602052805f5260405f205f915090505481565b5f5f5f5f5f60035460045f60035481526020019081526020015f205460065f60035481526020019081526020015f205460055f60035481526020019081526020015f2054600354945094509450945094509091929394565b5f60ff82169050919050565b6104a681610491565b82525050565b5f6020820190506104bf5f83018461049d565b92915050565b5f5ffd5b5f69ffffffffffffffffffff82169050919050565b6104e7816104c9565b81146104f1575f5ffd5b50565b5f81359050610502816104de565b92915050565b5f819050919050565b61051a81610508565b8114610524575f5ffd5b50565b5f8135905061053581610511565b92915050565b5f819050919050565b61054d8161053b565b8114610557575f5ffd5b50565b5f8135905061056881610544565b92915050565b5f5f5f5f60808587031215610586576105856104c5565b5b5f610593878288016104f4565b94505060206105a487828801610527565b93505060406105b58782880161055a565b92505060606105c68782880161055a565b91505092959194509250565b6105db81610508565b82525050565b5f6020820190506105f45f8301846105d2565b92915050565b6106038161053b565b82525050565b5f60208201905061061c5f8301846105fa565b92915050565b5f81519050919050565b5f82825260208201905092915050565b8281835e5f83830152505050565b5f601f19601f8301169050919050565b5f61066482610622565b61066e818561062c565b935061067e81856020860161063c565b6106878161064a565b840191505092915050565b5f6020820190508181035f8301526106aa818461065a565b905092915050565b5f602082840312156106c7576106c66104c5565b5b5f6106d4848285016104f4565b91505092915050565b6106e6816104c9565b82525050565b5f60a0820190506106ff5f8301886106dd565b61070c60208301876105d2565b61071960408301866105fa565b61072660608301856105fa565b61073360808301846106dd565b9695505050505050565b5f60208284031215610752576107516104c5565b5b5f61075f84828501610527565b91505092915050565b5f6020828403121561077d5761077c6104c5565b5b5f61078a8482850161055a565b91505092915050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f6107ca8261053b565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82036107fc576107fb610793565b5b60018201905091905056fea264697066735822122000e0b881af7a128c3d973ee4c185b63460ac33d7e43b06cd0b6c07500cb24f6a64736f6c634300081c0033",
      "opcodes": "PUSH1 0x80 PUSH1 0x40 MSTORE CALLVALUE DUP1 ISZERO PUSH2 0xF JUMPI PUSH0 PUSH0 REVERT JUMPDEST POP PUSH1 0x40 MLOAD PUSH2 0xA46 CODESIZE SUB DUP1 PUSH2 0xA46 DUP4 CODECOPY DUP2 DUP2 ADD PUSH1 0x40 MSTORE DUP2 ADD SWAP1 PUSH2 0x31 SWAP2 SWAP1 PUSH2 0x141 JUMP JUMPDEST DUP2 DUP2 DUP2 PUSH0 PUSH0 PUSH2 0x100 EXP DUP2 SLOAD DUP2 PUSH1 0xFF MUL NOT AND SWAP1 DUP4 PUSH1 0xFF AND MUL OR SWAP1 SSTORE POP PUSH2 0x5B DUP2 PUSH2 0x64 PUSH1 0x20 SHL PUSH1 0x20 SHR JUMP JUMPDEST POP POP POP POP PUSH2 0x1FC JUMP JUMPDEST DUP1 PUSH1 0x1 DUP2 SWAP1 SSTORE POP TIMESTAMP PUSH1 0x2 DUP2 SWAP1 SSTORE POP PUSH1 0x3 PUSH0 DUP2 SLOAD DUP1 SWAP3 SWAP2 SWAP1 PUSH2 0x84 SWAP1 PUSH2 0x1B5 JUMP JUMPDEST SWAP2 SWAP1 POP SSTORE POP DUP1 PUSH1 0x4 PUSH0 PUSH1 0x3 SLOAD DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH0 KECCAK256 DUP2 SWAP1 SSTORE POP TIMESTAMP PUSH1 0x5 PUSH0 PUSH1 0x3 SLOAD DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH0 KECCAK256 DUP2 SWAP1 SSTORE POP TIMESTAMP PUSH1 0x6 PUSH0 PUSH1 0x3 SLOAD DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH0 KECCAK256 DUP2 SWAP1 SSTORE POP POP JUMP JUMPDEST PUSH0 PUSH0 REVERT JUMPDEST PUSH0 PUSH1 0xFF DUP3 AND SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH2 0xED DUP2 PUSH2 0xD8 JUMP JUMPDEST DUP2 EQ PUSH2 0xF7 JUMPI PUSH0 PUSH0 REVERT JUMPDEST POP JUMP JUMPDEST PUSH0 DUP2 MLOAD SWAP1 POP PUSH2 0x108 DUP2 PUSH2 0xE4 JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH0 DUP2 SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH2 0x120 DUP2 PUSH2 0x10E JUMP JUMPDEST DUP2 EQ PUSH2 0x12A JUMPI PUSH0 PUSH0 REVERT JUMPDEST POP JUMP JUMPDEST PUSH0 DUP2 MLOAD SWAP1 POP PUSH2 0x13B DUP2 PUSH2 0x117 JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH0 PUSH0 PUSH1 0x40 DUP4 DUP6 SUB SLT ISZERO PUSH2 0x157 JUMPI PUSH2 0x156 PUSH2 0xD4 JUMP JUMPDEST JUMPDEST PUSH0 PUSH2 0x164 DUP6 DUP3 DUP7 ADD PUSH2 0xFA JUMP JUMPDEST SWAP3 POP POP PUSH1 0x20 PUSH2 0x175 DUP6 DUP3 DUP7 ADD PUSH2 0x12D JUMP JUMPDEST SWAP2 POP POP SWAP3 POP SWAP3 SWAP1 POP JUMP JUMPDEST PUSH32 0x4E487B7100000000000000000000000000000000000000000000000000000000 PUSH0 MSTORE PUSH1 0x11 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH0 REVERT JUMPDEST PUSH0 DUP2 SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH0 PUSH2 0x1BF DUP3 PUSH2 0x1AC JUMP JUMPDEST SWAP2 POP PUSH32 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF DUP3 SUB PUSH2 0x1F1 JUMPI PUSH2 0x1F0 PUSH2 0x17F JUMP JUMPDEST JUMPDEST PUSH1 0x1 DUP3 ADD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH2 0x83D DUP1 PUSH2 0x209 PUSH0 CODECOPY PUSH0 RETURN INVALID PUSH1 0x80 PUSH1 0x40 MSTORE CALLVALUE DUP1 ISZERO PUSH2 0xF JUMPI PUSH0 PUSH0 REVERT JUMPDEST POP PUSH1 0x4 CALLDATASIZE LT PUSH2 0xB2 JUMPI PUSH0 CALLDATALOAD PUSH1 0xE0 SHR DUP1 PUSH4 0x8205BF6A GT PUSH2 0x6F JUMPI DUP1 PUSH4 0x8205BF6A EQ PUSH2 0x168 JUMPI DUP1 PUSH4 0x9A6FC8F5 EQ PUSH2 0x186 JUMPI DUP1 PUSH4 0xA87A20CE EQ PUSH2 0x1BA JUMPI DUP1 PUSH4 0xB5AB58DC EQ PUSH2 0x1D6 JUMPI DUP1 PUSH4 0xB633620C EQ PUSH2 0x206 JUMPI DUP1 PUSH4 0xFEAF968C EQ PUSH2 0x236 JUMPI PUSH2 0xB2 JUMP JUMPDEST DUP1 PUSH4 0x313CE567 EQ PUSH2 0xB6 JUMPI DUP1 PUSH4 0x4AA2011F EQ PUSH2 0xD4 JUMPI DUP1 PUSH4 0x50D25BCD EQ PUSH2 0xF0 JUMPI DUP1 PUSH4 0x54FD4D50 EQ PUSH2 0x10E JUMPI DUP1 PUSH4 0x668A0F02 EQ PUSH2 0x12C JUMPI DUP1 PUSH4 0x7284E416 EQ PUSH2 0x14A JUMPI JUMPDEST PUSH0 PUSH0 REVERT JUMPDEST PUSH2 0xBE PUSH2 0x258 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0xCB SWAP2 SWAP1 PUSH2 0x4AC JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH2 0xEE PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 PUSH2 0xE9 SWAP2 SWAP1 PUSH2 0x56E JUMP JUMPDEST PUSH2 0x269 JUMP JUMPDEST STOP JUMPDEST PUSH2 0xF8 PUSH2 0x2D8 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x105 SWAP2 SWAP1 PUSH2 0x5E1 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH2 0x116 PUSH2 0x2DE JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x123 SWAP2 SWAP1 PUSH2 0x609 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH2 0x134 PUSH2 0x2E2 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x141 SWAP2 SWAP1 PUSH2 0x609 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH2 0x152 PUSH2 0x2E8 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x15F SWAP2 SWAP1 PUSH2 0x692 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH2 0x170 PUSH2 0x325 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x17D SWAP2 SWAP1 PUSH2 0x609 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH2 0x1A0 PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 PUSH2 0x19B SWAP2 SWAP1 PUSH2 0x6B2 JUMP JUMPDEST PUSH2 0x32B JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x1B1 SWAP6 SWAP5 SWAP4 SWAP3 SWAP2 SWAP1 PUSH2 0x6EC JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH2 0x1D4 PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 PUSH2 0x1CF SWAP2 SWAP1 PUSH2 0x73D JUMP JUMPDEST PUSH2 0x39F JUMP JUMPDEST STOP JUMPDEST PUSH2 0x1F0 PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 PUSH2 0x1EB SWAP2 SWAP1 PUSH2 0x768 JUMP JUMPDEST PUSH2 0x40F JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x1FD SWAP2 SWAP1 PUSH2 0x5E1 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH2 0x220 PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 PUSH2 0x21B SWAP2 SWAP1 PUSH2 0x768 JUMP JUMPDEST PUSH2 0x424 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x22D SWAP2 SWAP1 PUSH2 0x609 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH2 0x23E PUSH2 0x439 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x24F SWAP6 SWAP5 SWAP4 SWAP3 SWAP2 SWAP1 PUSH2 0x6EC JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH0 PUSH0 SWAP1 SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH1 0xFF AND DUP2 JUMP JUMPDEST DUP4 PUSH10 0xFFFFFFFFFFFFFFFFFFFF AND PUSH1 0x3 DUP2 SWAP1 SSTORE POP DUP3 PUSH1 0x1 DUP2 SWAP1 SSTORE POP DUP2 PUSH1 0x2 DUP2 SWAP1 SSTORE POP DUP3 PUSH1 0x4 PUSH0 PUSH1 0x3 SLOAD DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH0 KECCAK256 DUP2 SWAP1 SSTORE POP DUP2 PUSH1 0x5 PUSH0 PUSH1 0x3 SLOAD DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH0 KECCAK256 DUP2 SWAP1 SSTORE POP DUP1 PUSH1 0x6 PUSH0 PUSH1 0x3 SLOAD DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH0 KECCAK256 DUP2 SWAP1 SSTORE POP POP POP POP POP JUMP JUMPDEST PUSH1 0x1 SLOAD DUP2 JUMP JUMPDEST PUSH0 DUP2 JUMP JUMPDEST PUSH1 0x3 SLOAD DUP2 JUMP JUMPDEST PUSH1 0x60 PUSH1 0x40 MLOAD DUP1 PUSH1 0x40 ADD PUSH1 0x40 MSTORE DUP1 PUSH1 0x1F DUP2 MSTORE PUSH1 0x20 ADD PUSH32 0x76302E382F74657374732F4D6F636B563341676772656761746F722E736F6C00 DUP2 MSTORE POP SWAP1 POP SWAP1 JUMP JUMPDEST PUSH1 0x2 SLOAD DUP2 JUMP JUMPDEST PUSH0 PUSH0 PUSH0 PUSH0 PUSH0 DUP6 PUSH1 0x4 PUSH0 DUP9 PUSH10 0xFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH0 KECCAK256 SLOAD PUSH1 0x6 PUSH0 DUP10 PUSH10 0xFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH0 KECCAK256 SLOAD PUSH1 0x5 PUSH0 DUP11 PUSH10 0xFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH0 KECCAK256 SLOAD DUP10 SWAP5 POP SWAP5 POP SWAP5 POP SWAP5 POP SWAP5 POP SWAP2 SWAP4 SWAP6 SWAP1 SWAP3 SWAP5 POP JUMP JUMPDEST DUP1 PUSH1 0x1 DUP2 SWAP1 SSTORE POP TIMESTAMP PUSH1 0x2 DUP2 SWAP1 SSTORE POP PUSH1 0x3 PUSH0 DUP2 SLOAD DUP1 SWAP3 SWAP2 SWAP1 PUSH2 0x3BF SWAP1 PUSH2 0x7C0 JUMP JUMPDEST SWAP2 SWAP1 POP SSTORE POP DUP1 PUSH1 0x4 PUSH0 PUSH1 0x3 SLOAD DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH0 KECCAK256 DUP2 SWAP1 SSTORE POP TIMESTAMP PUSH1 0x5 PUSH0 PUSH1 0x3 SLOAD DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH0 KECCAK256 DUP2 SWAP1 SSTORE POP TIMESTAMP PUSH1 0x6 PUSH0 PUSH1 0x3 SLOAD DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH0 KECCAK256 DUP2 SWAP1 SSTORE POP POP JUMP JUMPDEST PUSH1 0x4 PUSH1 0x20 MSTORE DUP1 PUSH0 MSTORE PUSH1 0x40 PUSH0 KECCAK256 PUSH0 SWAP2 POP SWAP1 POP SLOAD DUP2 JUMP JUMPDEST PUSH1 0x5 PUSH1 0x20 MSTORE DUP1 PUSH0 MSTORE PUSH1 0x40 PUSH0 KECCAK256 PUSH0 SWAP2 POP SWAP1 POP SLOAD DUP2 JUMP JUMPDEST PUSH0 PUSH0 PUSH0 PUSH0 PUSH0 PUSH1 0x3 SLOAD PUSH1 0x4 PUSH0 PUSH1 0x3 SLOAD DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH0 KECCAK256 SLOAD PUSH1 0x6 PUSH0 PUSH1 0x3 SLOAD DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH0 KECCAK256 SLOAD PUSH1 0x5 PUSH0 PUSH1 0x3 SLOAD DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH0 KECCAK256 SLOAD PUSH1 0x3 SLOAD SWAP5 POP SWAP5 POP SWAP5 POP SWAP5 POP SWAP5 POP SWAP1 SWAP2 SWAP3 SWAP4 SWAP5 JUMP JUMPDEST PUSH0 PUSH1 0xFF DUP3 AND SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH2 0x4A6 DUP2 PUSH2 0x491 JUMP JUMPDEST DUP3 MSTORE POP POP JUMP JUMPDEST PUSH0 PUSH1 0x20 DUP3 ADD SWAP1 POP PUSH2 0x4BF PUSH0 DUP4 ADD DUP5 PUSH2 0x49D JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH0 PUSH0 REVERT JUMPDEST PUSH0 PUSH10 0xFFFFFFFFFFFFFFFFFFFF DUP3 AND SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH2 0x4E7 DUP2 PUSH2 0x4C9 JUMP JUMPDEST DUP2 EQ PUSH2 0x4F1 JUMPI PUSH0 PUSH0 REVERT JUMPDEST POP JUMP JUMPDEST PUSH0 DUP2 CALLDATALOAD SWAP1 POP PUSH2 0x502 DUP2 PUSH2 0x4DE JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH0 DUP2 SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH2 0x51A DUP2 PUSH2 0x508 JUMP JUMPDEST DUP2 EQ PUSH2 0x524 JUMPI PUSH0 PUSH0 REVERT JUMPDEST POP JUMP JUMPDEST PUSH0 DUP2 CALLDATALOAD SWAP1 POP PUSH2 0x535 DUP2 PUSH2 0x511 JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH0 DUP2 SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH2 0x54D DUP2 PUSH2 0x53B JUMP JUMPDEST DUP2 EQ PUSH2 0x557 JUMPI PUSH0 PUSH0 REVERT JUMPDEST POP JUMP JUMPDEST PUSH0 DUP2 CALLDATALOAD SWAP1 POP PUSH2 0x568 DUP2 PUSH2 0x544 JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH0 PUSH0 PUSH0 PUSH0 PUSH1 0x80 DUP6 DUP8 SUB SLT ISZERO PUSH2 0x586 JUMPI PUSH2 0x585 PUSH2 0x4C5 JUMP JUMPDEST JUMPDEST PUSH0 PUSH2 0x593 DUP8 DUP3 DUP9 ADD PUSH2 0x4F4 JUMP JUMPDEST SWAP5 POP POP PUSH1 0x20 PUSH2 0x5A4 DUP8 DUP3 DUP9 ADD PUSH2 0x527 JUMP JUMPDEST SWAP4 POP POP PUSH1 0x40 PUSH2 0x5B5 DUP8 DUP3 DUP9 ADD PUSH2 0x55A JUMP JUMPDEST SWAP3 POP POP PUSH1 0x60 PUSH2 0x5C6 DUP8 DUP3 DUP9 ADD PUSH2 0x55A JUMP JUMPDEST SWAP2 POP POP SWAP3 SWAP6 SWAP2 SWAP5 POP SWAP3 POP JUMP JUMPDEST PUSH2 0x5DB DUP2 PUSH2 0x508 JUMP JUMPDEST DUP3 MSTORE POP POP JUMP JUMPDEST PUSH0 PUSH1 0x20 DUP3 ADD SWAP1 POP PUSH2 0x5F4 PUSH0 DUP4 ADD DUP5 PUSH2 0x5D2 JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH2 0x603 DUP2 PUSH2 0x53B JUMP JUMPDEST DUP3 MSTORE POP POP JUMP JUMPDEST PUSH0 PUSH1 0x20 DUP3 ADD SWAP1 POP PUSH2 0x61C PUSH0 DUP4 ADD DUP5 PUSH2 0x5FA JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH0 DUP2 MLOAD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH0 DUP3 DUP3 MSTORE PUSH1 0x20 DUP3 ADD SWAP1 POP SWAP3 SWAP2 POP POP JUMP JUMPDEST DUP3 DUP2 DUP4 MCOPY PUSH0 DUP4 DUP4 ADD MSTORE POP POP POP JUMP JUMPDEST PUSH0 PUSH1 0x1F NOT PUSH1 0x1F DUP4 ADD AND SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH0 PUSH2 0x664 DUP3 PUSH2 0x622 JUMP JUMPDEST PUSH2 0x66E DUP2 DUP6 PUSH2 0x62C JUMP JUMPDEST SWAP4 POP PUSH2 0x67E DUP2 DUP6 PUSH1 0x20 DUP7 ADD PUSH2 0x63C JUMP JUMPDEST PUSH2 0x687 DUP2 PUSH2 0x64A JUMP JUMPDEST DUP5 ADD SWAP2 POP POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH0 PUSH1 0x20 DUP3 ADD SWAP1 POP DUP2 DUP2 SUB PUSH0 DUP4 ADD MSTORE PUSH2 0x6AA DUP2 DUP5 PUSH2 0x65A JUMP JUMPDEST SWAP1 POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH0 PUSH1 0x20 DUP3 DUP5 SUB SLT ISZERO PUSH2 0x6C7 JUMPI PUSH2 0x6C6 PUSH2 0x4C5 JUMP JUMPDEST JUMPDEST PUSH0 PUSH2 0x6D4 DUP5 DUP3 DUP6 ADD PUSH2 0x4F4 JUMP JUMPDEST SWAP2 POP POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH2 0x6E6 DUP2 PUSH2 0x4C9 JUMP JUMPDEST DUP3 MSTORE POP POP JUMP JUMPDEST PUSH0 PUSH1 0xA0 DUP3 ADD SWAP1 POP PUSH2 0x6FF PUSH0 DUP4 ADD DUP9 PUSH2 0x6DD JUMP JUMPDEST PUSH2 0x70C PUSH1 0x20 DUP4 ADD DUP8 PUSH2 0x5D2 JUMP JUMPDEST PUSH2 0x719 PUSH1 0x40 DUP4 ADD DUP7 PUSH2 0x5FA JUMP JUMPDEST PUSH2 0x726 PUSH1 0x60 DUP4 ADD DUP6 PUSH2 0x5FA JUMP JUMPDEST PUSH2 0x733 PUSH1 0x80 DUP4 ADD DUP5 PUSH2 0x6DD JUMP JUMPDEST SWAP7 SWAP6 POP POP POP POP POP POP JUMP JUMPDEST PUSH0 PUSH1 0x20 DUP3 DUP5 SUB SLT ISZERO PUSH2 0x752 JUMPI PUSH2 0x751 PUSH2 0x4C5 JUMP JUMPDEST JUMPDEST PUSH0 PUSH2 0x75F DUP5 DUP3 DUP6 ADD PUSH2 0x527 JUMP JUMPDEST SWAP2 POP POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH0 PUSH1 0x20 DUP3 DUP5 SUB SLT ISZERO PUSH2 0x77D JUMPI PUSH2 0x77C PUSH2 0x4C5 JUMP JUMPDEST JUMPDEST PUSH0 PUSH2 0x78A DUP5 DUP3 DUP6 ADD PUSH2 0x55A JUMP JUMPDEST SWAP2 POP POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH32 0x4E487B7100000000000000000000000000000000000000000000000000000000 PUSH0 MSTORE PUSH1 0x11 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH0 REVERT JUMPDEST PUSH0 PUSH2 0x7CA DUP3 PUSH2 0x53B JUMP JUMPDEST SWAP2 POP PUSH32 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF DUP3 SUB PUSH2 0x7FC JUMPI PUSH2 0x7FB PUSH2 0x793 JUMP JUMPDEST JUMPDEST PUSH1 0x1 DUP3 ADD SWAP1 POP SWAP2 SWAP1 POP JUMP INVALID LOG2 PUSH5 0x6970667358 0x22 SLT KECCAK256 STOP 0xE0 0xB8 DUP2 0xAF PUSH27 0x128C3D973EE4C185B63460AC33D7E43B06CD0B6C07500CB24F6A64 PUSH20 0x6F6C634300081C00330000000000000000000000 ",
      "sourceMap": "684:176:5:-:0;;;738:120;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;829:9;840:14;923:9:3;912:8;;:20;;;;;;;;;;;;;;;;;;938:28;951:14;938:12;;;:28;;:::i;:::-;854:117;;738:120:5;;684:176;;975:272:3;1041:7;1026:12;:22;;;;1072:15;1054;:33;;;;1093:11;;:13;;;;;;;;;:::i;:::-;;;;;;1137:7;1112:9;:22;1122:11;;1112:22;;;;;;;;;;;:32;;;;1178:15;1150:12;:25;1163:11;;1150:25;;;;;;;;;;;:43;;;;1227:15;1199:12;:25;1212:11;;1199:25;;;;;;;;;;;:43;;;;975:272;:::o;88:117:6:-;197:1;194;187:12;334:86;369:7;409:4;402:5;398:16;387:27;;334:86;;;:::o;426:118::-;497:22;513:5;497:22;:::i;:::-;490:5;487:33;477:61;;534:1;531;524:12;477:61;426:118;:::o;550:139::-;605:5;636:6;630:13;621:22;;652:31;677:5;652:31;:::i;:::-;550:139;;;;:::o;695:76::-;731:7;760:5;749:16;;695:76;;;:::o;777:120::-;849:23;866:5;849:23;:::i;:::-;842:5;839:34;829:62;;887:1;884;877:12;829:62;777:120;:::o;903:141::-;959:5;990:6;984:13;975:22;;1006:32;1032:5;1006:32;:::i;:::-;903:141;;;;:::o;1050:501::-;1126:6;1134;1183:2;1171:9;1162:7;1158:23;1154:32;1151:119;;;1189:79;;:::i;:::-;1151:119;1309:1;1334:62;1388:7;1379:6;1368:9;1364:22;1334:62;:::i;:::-;1324:72;;1280:126;1445:2;1471:63;1526:7;1517:6;1506:9;1502:22;1471:63;:::i;:::-;1461:73;;1416:128;1050:501;;;;;:::o;1557:180::-;1605:77;1602:1;1595:88;1702:4;1699:1;1692:15;1726:4;1723:1;1716:15;1743:77;1780:7;1809:5;1798:16;;1743:77;;;:::o;1826:233::-;1865:3;1888:24;1906:5;1888:24;:::i;:::-;1879:33;;1934:66;1927:5;1924:77;1921:103;;2004:18;;:::i;:::-;1921:103;2051:1;2044:5;2040:13;2033:20;;1826:233;;;:::o;684:176:5:-;;;;;;;"
    },
    "deployedBytecode": {
      "functionDebugData": {
        "@decimals_118": {
          "entryPoint": 600,
          "id": 118,
          "parameterSlots": 0,
          "returnSlots": 0
        },
        "@description_310": {
          "entryPoint": 744,
          "id": 310,
          "parameterSlots": 0,
          "returnSlots": 1
        },
        "@getAnswer_132": {
          "entryPoint": 1039,
          "id": 132,
          "parameterSlots": 0,
          "returnSlots": 0
        },
        "@getRoundData_267": {
          "entryPoint": 811,
          "id": 267,
          "parameterSlots": 1,
          "returnSlots": 5
        },
        "@getTimestamp_137": {
          "entryPoint": 1060,
          "id": 137,
          "parameterSlots": 0,
          "returnSlots": 0
        },
        "@latestAnswer_121": {
          "entryPoint": 728,
          "id": 121,
          "parameterSlots": 0,
          "returnSlots": 0
        },
        "@latestRoundData_301": {
          "entryPoint": 1081,
          "id": 301,
          "parameterSlots": 0,
          "returnSlots": 5
        },
        "@latestRound_127": {
          "entryPoint": 738,
          "id": 127,
          "parameterSlots": 0,
          "returnSlots": 0
        },
        "@latestTimestamp_124": {
          "entryPoint": 805,
          "id": 124,
          "parameterSlots": 0,
          "returnSlots": 0
        },
        "@updateAnswer_195": {
          "entryPoint": 927,
          "id": 195,
          "parameterSlots": 1,
          "returnSlots": 0
        },
        "@updateRoundData_237": {
          "entryPoint": 617,
          "id": 237,
          "parameterSlots": 4,
          "returnSlots": 0
        },
        "@version_115": {
          "entryPoint": 734,
          "id": 115,
          "parameterSlots": 0,
          "returnSlots": 0
        },
        "abi_decode_t_int256": {
          "entryPoint": 1319,
          "id": null,
          "parameterSlots": 2,
          "returnSlots": 1
        },
        "abi_decode_t_uint256": {
          "entryPoint": 1370,
          "id": null,
          "parameterSlots": 2,
          "returnSlots": 1
        },
        "abi_decode_t_uint80": {
          "entryPoint": 1268,
          "id": null,
          "parameterSlots": 2,
          "returnSlots": 1
        },
        "abi_decode_tuple_t_int256": {
          "entryPoint": 1853,
          "id": null,
          "parameterSlots": 2,
          "returnSlots": 1
        },
        "abi_decode_tuple_t_uint256": {
          "entryPoint": 1896,
          "id": null,
          "parameterSlots": 2,
          "returnSlots": 1
        },
        "abi_decode_tuple_t_uint80": {
          "entryPoint": 1714,
          "id": null,
          "parameterSlots": 2,
          "returnSlots": 1
        },
        "abi_decode_tuple_t_uint80t_int256t_uint256t_uint256": {
          "entryPoint": 1390,
          "id": null,
          "parameterSlots": 2,
          "returnSlots": 4
        },
        "abi_encode_t_int256_to_t_int256_fromStack": {
          "entryPoint": 1490,
          "id": null,
          "parameterSlots": 2,
          "returnSlots": 0
        },
        "abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack": {
          "entryPoint": 1626,
          "id": null,
          "parameterSlots": 2,
          "returnSlots": 1
        },
        "abi_encode_t_uint256_to_t_uint256_fromStack": {
          "entryPoint": 1530,
          "id": null,
          "parameterSlots": 2,
          "returnSlots": 0
        },
        "abi_encode_t_uint80_to_t_uint80_fromStack": {
          "entryPoint": 1757,
          "id": null,
          "parameterSlots": 2,
          "returnSlots": 0
        },
        "abi_encode_t_uint8_to_t_uint8_fromStack": {
          "entryPoint": 1181,
          "id": null,
          "parameterSlots": 2,
          "returnSlots": 0
        },
        "abi_encode_tuple_t_int256__to_t_int256__fromStack_reversed": {
          "entryPoint": 1505,
          "id": null,
          "parameterSlots": 2,
          "returnSlots": 1
        },
        "abi_encode_tuple_t_string_memory_ptr__to_t_string_memory_ptr__fromStack_reversed": {
          "entryPoint": 1682,
          "id": null,
          "parameterSlots": 2,
          "returnSlots": 1
        },
        "abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed": {
          "entryPoint": 1545,
          "id": null,
          "parameterSlots": 2,
          "returnSlots": 1
        },
        "abi_encode_tuple_t_uint80_t_int256_t_uint256_t_uint256_t_uint80__to_t_uint80_t_int256_t_uint256_t_uint256_t_uint80__fromStack_reversed": {
          "entryPoint": 1772,
          "id": null,
          "parameterSlots": 6,
          "returnSlots": 1
        },
        "abi_encode_tuple_t_uint8__to_t_uint8__fromStack_reversed": {
          "entryPoint": 1196,
          "id": null,
          "parameterSlots": 2,
          "returnSlots": 1
        },
        "allocate_unbounded": {
          "entryPoint": null,
          "id": null,
          "parameterSlots": 0,
          "returnSlots": 1
        },
        "array_length_t_string_memory_ptr": {
          "entryPoint": 1570,
          "id": null,
          "parameterSlots": 1,
          "returnSlots": 1
        },
        "array_storeLengthForEncoding_t_string_memory_ptr_fromStack": {
          "entryPoint": 1580,
          "id": null,
          "parameterSlots": 2,
          "returnSlots": 1
        },
        "cleanup_t_int256": {
          "entryPoint": 1288,
          "id": null,
          "parameterSlots": 1,
          "returnSlots": 1
        },
        "cleanup_t_uint256": {
          "entryPoint": 1339,
          "id": null,
          "parameterSlots": 1,
          "returnSlots": 1
        },
        "cleanup_t_uint8": {
          "entryPoint": 1169,
          "id": null,
          "parameterSlots": 1,
          "returnSlots": 1
        },
        "cleanup_t_uint80": {
          "entryPoint": 1225,
          "id": null,
          "parameterSlots": 1,
          "returnSlots": 1
        },
        "copy_memory_to_memory_with_cleanup": {
          "entryPoint": 1596,
          "id": null,
          "parameterSlots": 3,
          "returnSlots": 0
        },
        "increment_t_uint256": {
          "entryPoint": 1984,
          "id": null,
          "parameterSlots": 1,
          "returnSlots": 1
        },
        "panic_error_0x11": {
          "entryPoint": 1939,
          "id": null,
          "parameterSlots": 0,
          "returnSlots": 0
        },
        "revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db": {
          "entryPoint": null,
          "id": null,
          "parameterSlots": 0,
          "returnSlots": 0
        },
        "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b": {
          "entryPoint": 1221,
          "id": null,
          "parameterSlots": 0,
          "returnSlots": 0
        },
        "round_up_to_mul_of_32": {
          "entryPoint": 1610,
          "id": null,
          "parameterSlots": 1,
          "returnSlots": 1
        },
        "validator_revert_t_int256": {
          "entryPoint": 1297,
          "id": null,
          "parameterSlots": 1,
          "returnSlots": 0
        },
        "validator_revert_t_uint256": {
          "entryPoint": 1348,
          "id": null,
          "parameterSlots": 1,
          "returnSlots": 0
        },
        "validator_revert_t_uint80": {
          "entryPoint": 1246,
          "id": null,
          "parameterSlots": 1,
          "returnSlots": 0
        }
      },
      "generatedSources": [
        {
          "ast": {
            "nativeSrc": "0:6752:6",
            "nodeType": "YulBlock",
            "src": "0:6752:6",
            "statements": [
              {
                "body": {
                  "nativeSrc": "50:43:6",
                  "nodeType": "YulBlock",
                  "src": "50:43:6",
                  "statements": [
                    {
                      "nativeSrc": "60:27:6",
                      "nodeType": "YulAssignment",
                      "src": "60:27:6",
                      "value": {
                        "arguments": [
                          {
                            "name": "value",
                            "nativeSrc": "75:5:6",
                            "nodeType": "YulIdentifier",
                            "src": "75:5:6"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "82:4:6",
                            "nodeType": "YulLiteral",
                            "src": "82:4:6",
                            "type": "",
                            "value": "0xff"
                          }
                        ],
                        "functionName": {
                          "name": "and",
                          "nativeSrc": "71:3:6",
                          "nodeType": "YulIdentifier",
                          "src": "71:3:6"
                        },
                        "nativeSrc": "71:16:6",
                        "nodeType": "YulFunctionCall",
                        "src": "71:16:6"
                      },
                      "variableNames": [
                        {
                          "name": "cleaned",
                          "nativeSrc": "60:7:6",
                          "nodeType": "YulIdentifier",
                          "src": "60:7:6"
                        }
                      ]
                    }
                  ]
                },
                "name": "cleanup_t_uint8",
                "nativeSrc": "7:86:6",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "value",
                    "nativeSrc": "32:5:6",
                    "nodeType": "YulTypedName",
                    "src": "32:5:6",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "cleaned",
                    "nativeSrc": "42:7:6",
                    "nodeType": "YulTypedName",
                    "src": "42:7:6",
                    "type": ""
                  }
                ],
                "src": "7:86:6"
              },
              {
                "body": {
                  "nativeSrc": "160:51:6",
                  "nodeType": "YulBlock",
                  "src": "160:51:6",
                  "statements": [
                    {
                      "expression": {
                        "arguments": [
                          {
                            "name": "pos",
                            "nativeSrc": "177:3:6",
                            "nodeType": "YulIdentifier",
                            "src": "177:3:6"
                          },
                          {
                            "arguments": [
                              {
                                "name": "value",
                                "nativeSrc": "198:5:6",
                                "nodeType": "YulIdentifier",
                                "src": "198:5:6"
                              }
                            ],
                            "functionName": {
                              "name": "cleanup_t_uint8",
                              "nativeSrc": "182:15:6",
                              "nodeType": "YulIdentifier",
                              "src": "182:15:6"
                            },
                            "nativeSrc": "182:22:6",
                            "nodeType": "YulFunctionCall",
                            "src": "182:22:6"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nativeSrc": "170:6:6",
                          "nodeType": "YulIdentifier",
                          "src": "170:6:6"
                        },
                        "nativeSrc": "170:35:6",
                        "nodeType": "YulFunctionCall",
                        "src": "170:35:6"
                      },
                      "nativeSrc": "170:35:6",
                      "nodeType": "YulExpressionStatement",
                      "src": "170:35:6"
                    }
                  ]
                },
                "name": "abi_encode_t_uint8_to_t_uint8_fromStack",
                "nativeSrc": "99:112:6",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "value",
                    "nativeSrc": "148:5:6",
                    "nodeType": "YulTypedName",
                    "src": "148:5:6",
                    "type": ""
                  },
                  {
                    "name": "pos",
                    "nativeSrc": "155:3:6",
                    "nodeType": "YulTypedName",
                    "src": "155:3:6",
                    "type": ""
                  }
                ],
                "src": "99:112:6"
              },
              {
                "body": {
                  "nativeSrc": "311:120:6",
                  "nodeType": "YulBlock",
                  "src": "311:120:6",
                  "statements": [
                    {
                      "nativeSrc": "321:26:6",
                      "nodeType": "YulAssignment",
                      "src": "321:26:6",
                      "value": {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nativeSrc": "333:9:6",
                            "nodeType": "YulIdentifier",
                            "src": "333:9:6"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "344:2:6",
                            "nodeType": "YulLiteral",
                            "src": "344:2:6",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nativeSrc": "329:3:6",
                          "nodeType": "YulIdentifier",
                          "src": "329:3:6"
                        },
                        "nativeSrc": "329:18:6",
                        "nodeType": "YulFunctionCall",
                        "src": "329:18:6"
                      },
                      "variableNames": [
                        {
                          "name": "tail",
                          "nativeSrc": "321:4:6",
                          "nodeType": "YulIdentifier",
                          "src": "321:4:6"
                        }
                      ]
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "name": "value0",
                            "nativeSrc": "397:6:6",
                            "nodeType": "YulIdentifier",
                            "src": "397:6:6"
                          },
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nativeSrc": "410:9:6",
                                "nodeType": "YulIdentifier",
                                "src": "410:9:6"
                              },
                              {
                                "kind": "number",
                                "nativeSrc": "421:1:6",
                                "nodeType": "YulLiteral",
                                "src": "421:1:6",
                                "type": "",
                                "value": "0"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nativeSrc": "406:3:6",
                              "nodeType": "YulIdentifier",
                              "src": "406:3:6"
                            },
                            "nativeSrc": "406:17:6",
                            "nodeType": "YulFunctionCall",
                            "src": "406:17:6"
                          }
                        ],
                        "functionName": {
                          "name": "abi_encode_t_uint8_to_t_uint8_fromStack",
                          "nativeSrc": "357:39:6",
                          "nodeType": "YulIdentifier",
                          "src": "357:39:6"
                        },
                        "nativeSrc": "357:67:6",
                        "nodeType": "YulFunctionCall",
                        "src": "357:67:6"
                      },
                      "nativeSrc": "357:67:6",
                      "nodeType": "YulExpressionStatement",
                      "src": "357:67:6"
                    }
                  ]
                },
                "name": "abi_encode_tuple_t_uint8__to_t_uint8__fromStack_reversed",
                "nativeSrc": "217:214:6",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "headStart",
                    "nativeSrc": "283:9:6",
                    "nodeType": "YulTypedName",
                    "src": "283:9:6",
                    "type": ""
                  },
                  {
                    "name": "value0",
                    "nativeSrc": "295:6:6",
                    "nodeType": "YulTypedName",
                    "src": "295:6:6",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "tail",
                    "nativeSrc": "306:4:6",
                    "nodeType": "YulTypedName",
                    "src": "306:4:6",
                    "type": ""
                  }
                ],
                "src": "217:214:6"
              },
              {
                "body": {
                  "nativeSrc": "477:35:6",
                  "nodeType": "YulBlock",
                  "src": "477:35:6",
                  "statements": [
                    {
                      "nativeSrc": "487:19:6",
                      "nodeType": "YulAssignment",
                      "src": "487:19:6",
                      "value": {
                        "arguments": [
                          {
                            "kind": "number",
                            "nativeSrc": "503:2:6",
                            "nodeType": "YulLiteral",
                            "src": "503:2:6",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "mload",
                          "nativeSrc": "497:5:6",
                          "nodeType": "YulIdentifier",
                          "src": "497:5:6"
                        },
                        "nativeSrc": "497:9:6",
                        "nodeType": "YulFunctionCall",
                        "src": "497:9:6"
                      },
                      "variableNames": [
                        {
                          "name": "memPtr",
                          "nativeSrc": "487:6:6",
                          "nodeType": "YulIdentifier",
                          "src": "487:6:6"
                        }
                      ]
                    }
                  ]
                },
                "name": "allocate_unbounded",
                "nativeSrc": "437:75:6",
                "nodeType": "YulFunctionDefinition",
                "returnVariables": [
                  {
                    "name": "memPtr",
                    "nativeSrc": "470:6:6",
                    "nodeType": "YulTypedName",
                    "src": "470:6:6",
                    "type": ""
                  }
                ],
                "src": "437:75:6"
              },
              {
                "body": {
                  "nativeSrc": "607:28:6",
                  "nodeType": "YulBlock",
                  "src": "607:28:6",
                  "statements": [
                    {
                      "expression": {
                        "arguments": [
                          {
                            "kind": "number",
                            "nativeSrc": "624:1:6",
                            "nodeType": "YulLiteral",
                            "src": "624:1:6",
                            "type": "",
                            "value": "0"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "627:1:6",
                            "nodeType": "YulLiteral",
                            "src": "627:1:6",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "revert",
                          "nativeSrc": "617:6:6",
                          "nodeType": "YulIdentifier",
                          "src": "617:6:6"
                        },
                        "nativeSrc": "617:12:6",
                        "nodeType": "YulFunctionCall",
                        "src": "617:12:6"
                      },
                      "nativeSrc": "617:12:6",
                      "nodeType": "YulExpressionStatement",
                      "src": "617:12:6"
                    }
                  ]
                },
                "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                "nativeSrc": "518:117:6",
                "nodeType": "YulFunctionDefinition",
                "src": "518:117:6"
              },
              {
                "body": {
                  "nativeSrc": "730:28:6",
                  "nodeType": "YulBlock",
                  "src": "730:28:6",
                  "statements": [
                    {
                      "expression": {
                        "arguments": [
                          {
                            "kind": "number",
                            "nativeSrc": "747:1:6",
                            "nodeType": "YulLiteral",
                            "src": "747:1:6",
                            "type": "",
                            "value": "0"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "750:1:6",
                            "nodeType": "YulLiteral",
                            "src": "750:1:6",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "revert",
                          "nativeSrc": "740:6:6",
                          "nodeType": "YulIdentifier",
                          "src": "740:6:6"
                        },
                        "nativeSrc": "740:12:6",
                        "nodeType": "YulFunctionCall",
                        "src": "740:12:6"
                      },
                      "nativeSrc": "740:12:6",
                      "nodeType": "YulExpressionStatement",
                      "src": "740:12:6"
                    }
                  ]
                },
                "name": "revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db",
                "nativeSrc": "641:117:6",
                "nodeType": "YulFunctionDefinition",
                "src": "641:117:6"
              },
              {
                "body": {
                  "nativeSrc": "808:61:6",
                  "nodeType": "YulBlock",
                  "src": "808:61:6",
                  "statements": [
                    {
                      "nativeSrc": "818:45:6",
                      "nodeType": "YulAssignment",
                      "src": "818:45:6",
                      "value": {
                        "arguments": [
                          {
                            "name": "value",
                            "nativeSrc": "833:5:6",
                            "nodeType": "YulIdentifier",
                            "src": "833:5:6"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "840:22:6",
                            "nodeType": "YulLiteral",
                            "src": "840:22:6",
                            "type": "",
                            "value": "0xffffffffffffffffffff"
                          }
                        ],
                        "functionName": {
                          "name": "and",
                          "nativeSrc": "829:3:6",
                          "nodeType": "YulIdentifier",
                          "src": "829:3:6"
                        },
                        "nativeSrc": "829:34:6",
                        "nodeType": "YulFunctionCall",
                        "src": "829:34:6"
                      },
                      "variableNames": [
                        {
                          "name": "cleaned",
                          "nativeSrc": "818:7:6",
                          "nodeType": "YulIdentifier",
                          "src": "818:7:6"
                        }
                      ]
                    }
                  ]
                },
                "name": "cleanup_t_uint80",
                "nativeSrc": "764:105:6",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "value",
                    "nativeSrc": "790:5:6",
                    "nodeType": "YulTypedName",
                    "src": "790:5:6",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "cleaned",
                    "nativeSrc": "800:7:6",
                    "nodeType": "YulTypedName",
                    "src": "800:7:6",
                    "type": ""
                  }
                ],
                "src": "764:105:6"
              },
              {
                "body": {
                  "nativeSrc": "917:78:6",
                  "nodeType": "YulBlock",
                  "src": "917:78:6",
                  "statements": [
                    {
                      "body": {
                        "nativeSrc": "973:16:6",
                        "nodeType": "YulBlock",
                        "src": "973:16:6",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nativeSrc": "982:1:6",
                                  "nodeType": "YulLiteral",
                                  "src": "982:1:6",
                                  "type": "",
                                  "value": "0"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "985:1:6",
                                  "nodeType": "YulLiteral",
                                  "src": "985:1:6",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "revert",
                                "nativeSrc": "975:6:6",
                                "nodeType": "YulIdentifier",
                                "src": "975:6:6"
                              },
                              "nativeSrc": "975:12:6",
                              "nodeType": "YulFunctionCall",
                              "src": "975:12:6"
                            },
                            "nativeSrc": "975:12:6",
                            "nodeType": "YulExpressionStatement",
                            "src": "975:12:6"
                          }
                        ]
                      },
                      "condition": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "value",
                                "nativeSrc": "940:5:6",
                                "nodeType": "YulIdentifier",
                                "src": "940:5:6"
                              },
                              {
                                "arguments": [
                                  {
                                    "name": "value",
                                    "nativeSrc": "964:5:6",
                                    "nodeType": "YulIdentifier",
                                    "src": "964:5:6"
                                  }
                                ],
                                "functionName": {
                                  "name": "cleanup_t_uint80",
                                  "nativeSrc": "947:16:6",
                                  "nodeType": "YulIdentifier",
                                  "src": "947:16:6"
                                },
                                "nativeSrc": "947:23:6",
                                "nodeType": "YulFunctionCall",
                                "src": "947:23:6"
                              }
                            ],
                            "functionName": {
                              "name": "eq",
                              "nativeSrc": "937:2:6",
                              "nodeType": "YulIdentifier",
                              "src": "937:2:6"
                            },
                            "nativeSrc": "937:34:6",
                            "nodeType": "YulFunctionCall",
                            "src": "937:34:6"
                          }
                        ],
                        "functionName": {
                          "name": "iszero",
                          "nativeSrc": "930:6:6",
                          "nodeType": "YulIdentifier",
                          "src": "930:6:6"
                        },
                        "nativeSrc": "930:42:6",
                        "nodeType": "YulFunctionCall",
                        "src": "930:42:6"
                      },
                      "nativeSrc": "927:62:6",
                      "nodeType": "YulIf",
                      "src": "927:62:6"
                    }
                  ]
                },
                "name": "validator_revert_t_uint80",
                "nativeSrc": "875:120:6",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "value",
                    "nativeSrc": "910:5:6",
                    "nodeType": "YulTypedName",
                    "src": "910:5:6",
                    "type": ""
                  }
                ],
                "src": "875:120:6"
              },
              {
                "body": {
                  "nativeSrc": "1052:86:6",
                  "nodeType": "YulBlock",
                  "src": "1052:86:6",
                  "statements": [
                    {
                      "nativeSrc": "1062:29:6",
                      "nodeType": "YulAssignment",
                      "src": "1062:29:6",
                      "value": {
                        "arguments": [
                          {
                            "name": "offset",
                            "nativeSrc": "1084:6:6",
                            "nodeType": "YulIdentifier",
                            "src": "1084:6:6"
                          }
                        ],
                        "functionName": {
                          "name": "calldataload",
                          "nativeSrc": "1071:12:6",
                          "nodeType": "YulIdentifier",
                          "src": "1071:12:6"
                        },
                        "nativeSrc": "1071:20:6",
                        "nodeType": "YulFunctionCall",
                        "src": "1071:20:6"
                      },
                      "variableNames": [
                        {
                          "name": "value",
                          "nativeSrc": "1062:5:6",
                          "nodeType": "YulIdentifier",
                          "src": "1062:5:6"
                        }
                      ]
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "name": "value",
                            "nativeSrc": "1126:5:6",
                            "nodeType": "YulIdentifier",
                            "src": "1126:5:6"
                          }
                        ],
                        "functionName": {
                          "name": "validator_revert_t_uint80",
                          "nativeSrc": "1100:25:6",
                          "nodeType": "YulIdentifier",
                          "src": "1100:25:6"
                        },
                        "nativeSrc": "1100:32:6",
                        "nodeType": "YulFunctionCall",
                        "src": "1100:32:6"
                      },
                      "nativeSrc": "1100:32:6",
                      "nodeType": "YulExpressionStatement",
                      "src": "1100:32:6"
                    }
                  ]
                },
                "name": "abi_decode_t_uint80",
                "nativeSrc": "1001:137:6",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "offset",
                    "nativeSrc": "1030:6:6",
                    "nodeType": "YulTypedName",
                    "src": "1030:6:6",
                    "type": ""
                  },
                  {
                    "name": "end",
                    "nativeSrc": "1038:3:6",
                    "nodeType": "YulTypedName",
                    "src": "1038:3:6",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "value",
                    "nativeSrc": "1046:5:6",
                    "nodeType": "YulTypedName",
                    "src": "1046:5:6",
                    "type": ""
                  }
                ],
                "src": "1001:137:6"
              },
              {
                "body": {
                  "nativeSrc": "1188:32:6",
                  "nodeType": "YulBlock",
                  "src": "1188:32:6",
                  "statements": [
                    {
                      "nativeSrc": "1198:16:6",
                      "nodeType": "YulAssignment",
                      "src": "1198:16:6",
                      "value": {
                        "name": "value",
                        "nativeSrc": "1209:5:6",
                        "nodeType": "YulIdentifier",
                        "src": "1209:5:6"
                      },
                      "variableNames": [
                        {
                          "name": "cleaned",
                          "nativeSrc": "1198:7:6",
                          "nodeType": "YulIdentifier",
                          "src": "1198:7:6"
                        }
                      ]
                    }
                  ]
                },
                "name": "cleanup_t_int256",
                "nativeSrc": "1144:76:6",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "value",
                    "nativeSrc": "1170:5:6",
                    "nodeType": "YulTypedName",
                    "src": "1170:5:6",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "cleaned",
                    "nativeSrc": "1180:7:6",
                    "nodeType": "YulTypedName",
                    "src": "1180:7:6",
                    "type": ""
                  }
                ],
                "src": "1144:76:6"
              },
              {
                "body": {
                  "nativeSrc": "1268:78:6",
                  "nodeType": "YulBlock",
                  "src": "1268:78:6",
                  "statements": [
                    {
                      "body": {
                        "nativeSrc": "1324:16:6",
                        "nodeType": "YulBlock",
                        "src": "1324:16:6",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nativeSrc": "1333:1:6",
                                  "nodeType": "YulLiteral",
                                  "src": "1333:1:6",
                                  "type": "",
                                  "value": "0"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "1336:1:6",
                                  "nodeType": "YulLiteral",
                                  "src": "1336:1:6",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "revert",
                                "nativeSrc": "1326:6:6",
                                "nodeType": "YulIdentifier",
                                "src": "1326:6:6"
                              },
                              "nativeSrc": "1326:12:6",
                              "nodeType": "YulFunctionCall",
                              "src": "1326:12:6"
                            },
                            "nativeSrc": "1326:12:6",
                            "nodeType": "YulExpressionStatement",
                            "src": "1326:12:6"
                          }
                        ]
                      },
                      "condition": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "value",
                                "nativeSrc": "1291:5:6",
                                "nodeType": "YulIdentifier",
                                "src": "1291:5:6"
                              },
                              {
                                "arguments": [
                                  {
                                    "name": "value",
                                    "nativeSrc": "1315:5:6",
                                    "nodeType": "YulIdentifier",
                                    "src": "1315:5:6"
                                  }
                                ],
                                "functionName": {
                                  "name": "cleanup_t_int256",
                                  "nativeSrc": "1298:16:6",
                                  "nodeType": "YulIdentifier",
                                  "src": "1298:16:6"
                                },
                                "nativeSrc": "1298:23:6",
                                "nodeType": "YulFunctionCall",
                                "src": "1298:23:6"
                              }
                            ],
                            "functionName": {
                              "name": "eq",
                              "nativeSrc": "1288:2:6",
                              "nodeType": "YulIdentifier",
                              "src": "1288:2:6"
                            },
                            "nativeSrc": "1288:34:6",
                            "nodeType": "YulFunctionCall",
                            "src": "1288:34:6"
                          }
                        ],
                        "functionName": {
                          "name": "iszero",
                          "nativeSrc": "1281:6:6",
                          "nodeType": "YulIdentifier",
                          "src": "1281:6:6"
                        },
                        "nativeSrc": "1281:42:6",
                        "nodeType": "YulFunctionCall",
                        "src": "1281:42:6"
                      },
                      "nativeSrc": "1278:62:6",
                      "nodeType": "YulIf",
                      "src": "1278:62:6"
                    }
                  ]
                },
                "name": "validator_revert_t_int256",
                "nativeSrc": "1226:120:6",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "value",
                    "nativeSrc": "1261:5:6",
                    "nodeType": "YulTypedName",
                    "src": "1261:5:6",
                    "type": ""
                  }
                ],
                "src": "1226:120:6"
              },
              {
                "body": {
                  "nativeSrc": "1403:86:6",
                  "nodeType": "YulBlock",
                  "src": "1403:86:6",
                  "statements": [
                    {
                      "nativeSrc": "1413:29:6",
                      "nodeType": "YulAssignment",
                      "src": "1413:29:6",
                      "value": {
                        "arguments": [
                          {
                            "name": "offset",
                            "nativeSrc": "1435:6:6",
                            "nodeType": "YulIdentifier",
                            "src": "1435:6:6"
                          }
                        ],
                        "functionName": {
                          "name": "calldataload",
                          "nativeSrc": "1422:12:6",
                          "nodeType": "YulIdentifier",
                          "src": "1422:12:6"
                        },
                        "nativeSrc": "1422:20:6",
                        "nodeType": "YulFunctionCall",
                        "src": "1422:20:6"
                      },
                      "variableNames": [
                        {
                          "name": "value",
                          "nativeSrc": "1413:5:6",
                          "nodeType": "YulIdentifier",
                          "src": "1413:5:6"
                        }
                      ]
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "name": "value",
                            "nativeSrc": "1477:5:6",
                            "nodeType": "YulIdentifier",
                            "src": "1477:5:6"
                          }
                        ],
                        "functionName": {
                          "name": "validator_revert_t_int256",
                          "nativeSrc": "1451:25:6",
                          "nodeType": "YulIdentifier",
                          "src": "1451:25:6"
                        },
                        "nativeSrc": "1451:32:6",
                        "nodeType": "YulFunctionCall",
                        "src": "1451:32:6"
                      },
                      "nativeSrc": "1451:32:6",
                      "nodeType": "YulExpressionStatement",
                      "src": "1451:32:6"
                    }
                  ]
                },
                "name": "abi_decode_t_int256",
                "nativeSrc": "1352:137:6",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "offset",
                    "nativeSrc": "1381:6:6",
                    "nodeType": "YulTypedName",
                    "src": "1381:6:6",
                    "type": ""
                  },
                  {
                    "name": "end",
                    "nativeSrc": "1389:3:6",
                    "nodeType": "YulTypedName",
                    "src": "1389:3:6",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "value",
                    "nativeSrc": "1397:5:6",
                    "nodeType": "YulTypedName",
                    "src": "1397:5:6",
                    "type": ""
                  }
                ],
                "src": "1352:137:6"
              },
              {
                "body": {
                  "nativeSrc": "1540:32:6",
                  "nodeType": "YulBlock",
                  "src": "1540:32:6",
                  "statements": [
                    {
                      "nativeSrc": "1550:16:6",
                      "nodeType": "YulAssignment",
                      "src": "1550:16:6",
                      "value": {
                        "name": "value",
                        "nativeSrc": "1561:5:6",
                        "nodeType": "YulIdentifier",
                        "src": "1561:5:6"
                      },
                      "variableNames": [
                        {
                          "name": "cleaned",
                          "nativeSrc": "1550:7:6",
                          "nodeType": "YulIdentifier",
                          "src": "1550:7:6"
                        }
                      ]
                    }
                  ]
                },
                "name": "cleanup_t_uint256",
                "nativeSrc": "1495:77:6",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "value",
                    "nativeSrc": "1522:5:6",
                    "nodeType": "YulTypedName",
                    "src": "1522:5:6",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "cleaned",
                    "nativeSrc": "1532:7:6",
                    "nodeType": "YulTypedName",
                    "src": "1532:7:6",
                    "type": ""
                  }
                ],
                "src": "1495:77:6"
              },
              {
                "body": {
                  "nativeSrc": "1621:79:6",
                  "nodeType": "YulBlock",
                  "src": "1621:79:6",
                  "statements": [
                    {
                      "body": {
                        "nativeSrc": "1678:16:6",
                        "nodeType": "YulBlock",
                        "src": "1678:16:6",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nativeSrc": "1687:1:6",
                                  "nodeType": "YulLiteral",
                                  "src": "1687:1:6",
                                  "type": "",
                                  "value": "0"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "1690:1:6",
                                  "nodeType": "YulLiteral",
                                  "src": "1690:1:6",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "revert",
                                "nativeSrc": "1680:6:6",
                                "nodeType": "YulIdentifier",
                                "src": "1680:6:6"
                              },
                              "nativeSrc": "1680:12:6",
                              "nodeType": "YulFunctionCall",
                              "src": "1680:12:6"
                            },
                            "nativeSrc": "1680:12:6",
                            "nodeType": "YulExpressionStatement",
                            "src": "1680:12:6"
                          }
                        ]
                      },
                      "condition": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "value",
                                "nativeSrc": "1644:5:6",
                                "nodeType": "YulIdentifier",
                                "src": "1644:5:6"
                              },
                              {
                                "arguments": [
                                  {
                                    "name": "value",
                                    "nativeSrc": "1669:5:6",
                                    "nodeType": "YulIdentifier",
                                    "src": "1669:5:6"
                                  }
                                ],
                                "functionName": {
                                  "name": "cleanup_t_uint256",
                                  "nativeSrc": "1651:17:6",
                                  "nodeType": "YulIdentifier",
                                  "src": "1651:17:6"
                                },
                                "nativeSrc": "1651:24:6",
                                "nodeType": "YulFunctionCall",
                                "src": "1651:24:6"
                              }
                            ],
                            "functionName": {
                              "name": "eq",
                              "nativeSrc": "1641:2:6",
                              "nodeType": "YulIdentifier",
                              "src": "1641:2:6"
                            },
                            "nativeSrc": "1641:35:6",
                            "nodeType": "YulFunctionCall",
                            "src": "1641:35:6"
                          }
                        ],
                        "functionName": {
                          "name": "iszero",
                          "nativeSrc": "1634:6:6",
                          "nodeType": "YulIdentifier",
                          "src": "1634:6:6"
                        },
                        "nativeSrc": "1634:43:6",
                        "nodeType": "YulFunctionCall",
                        "src": "1634:43:6"
                      },
                      "nativeSrc": "1631:63:6",
                      "nodeType": "YulIf",
                      "src": "1631:63:6"
                    }
                  ]
                },
                "name": "validator_revert_t_uint256",
                "nativeSrc": "1578:122:6",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "value",
                    "nativeSrc": "1614:5:6",
                    "nodeType": "YulTypedName",
                    "src": "1614:5:6",
                    "type": ""
                  }
                ],
                "src": "1578:122:6"
              },
              {
                "body": {
                  "nativeSrc": "1758:87:6",
                  "nodeType": "YulBlock",
                  "src": "1758:87:6",
                  "statements": [
                    {
                      "nativeSrc": "1768:29:6",
                      "nodeType": "YulAssignment",
                      "src": "1768:29:6",
                      "value": {
                        "arguments": [
                          {
                            "name": "offset",
                            "nativeSrc": "1790:6:6",
                            "nodeType": "YulIdentifier",
                            "src": "1790:6:6"
                          }
                        ],
                        "functionName": {
                          "name": "calldataload",
                          "nativeSrc": "1777:12:6",
                          "nodeType": "YulIdentifier",
                          "src": "1777:12:6"
                        },
                        "nativeSrc": "1777:20:6",
                        "nodeType": "YulFunctionCall",
                        "src": "1777:20:6"
                      },
                      "variableNames": [
                        {
                          "name": "value",
                          "nativeSrc": "1768:5:6",
                          "nodeType": "YulIdentifier",
                          "src": "1768:5:6"
                        }
                      ]
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "name": "value",
                            "nativeSrc": "1833:5:6",
                            "nodeType": "YulIdentifier",
                            "src": "1833:5:6"
                          }
                        ],
                        "functionName": {
                          "name": "validator_revert_t_uint256",
                          "nativeSrc": "1806:26:6",
                          "nodeType": "YulIdentifier",
                          "src": "1806:26:6"
                        },
                        "nativeSrc": "1806:33:6",
                        "nodeType": "YulFunctionCall",
                        "src": "1806:33:6"
                      },
                      "nativeSrc": "1806:33:6",
                      "nodeType": "YulExpressionStatement",
                      "src": "1806:33:6"
                    }
                  ]
                },
                "name": "abi_decode_t_uint256",
                "nativeSrc": "1706:139:6",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "offset",
                    "nativeSrc": "1736:6:6",
                    "nodeType": "YulTypedName",
                    "src": "1736:6:6",
                    "type": ""
                  },
                  {
                    "name": "end",
                    "nativeSrc": "1744:3:6",
                    "nodeType": "YulTypedName",
                    "src": "1744:3:6",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "value",
                    "nativeSrc": "1752:5:6",
                    "nodeType": "YulTypedName",
                    "src": "1752:5:6",
                    "type": ""
                  }
                ],
                "src": "1706:139:6"
              },
              {
                "body": {
                  "nativeSrc": "1966:646:6",
                  "nodeType": "YulBlock",
                  "src": "1966:646:6",
                  "statements": [
                    {
                      "body": {
                        "nativeSrc": "2013:83:6",
                        "nodeType": "YulBlock",
                        "src": "2013:83:6",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [],
                              "functionName": {
                                "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                                "nativeSrc": "2015:77:6",
                                "nodeType": "YulIdentifier",
                                "src": "2015:77:6"
                              },
                              "nativeSrc": "2015:79:6",
                              "nodeType": "YulFunctionCall",
                              "src": "2015:79:6"
                            },
                            "nativeSrc": "2015:79:6",
                            "nodeType": "YulExpressionStatement",
                            "src": "2015:79:6"
                          }
                        ]
                      },
                      "condition": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "dataEnd",
                                "nativeSrc": "1987:7:6",
                                "nodeType": "YulIdentifier",
                                "src": "1987:7:6"
                              },
                              {
                                "name": "headStart",
                                "nativeSrc": "1996:9:6",
                                "nodeType": "YulIdentifier",
                                "src": "1996:9:6"
                              }
                            ],
                            "functionName": {
                              "name": "sub",
                              "nativeSrc": "1983:3:6",
                              "nodeType": "YulIdentifier",
                              "src": "1983:3:6"
                            },
                            "nativeSrc": "1983:23:6",
                            "nodeType": "YulFunctionCall",
                            "src": "1983:23:6"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "2008:3:6",
                            "nodeType": "YulLiteral",
                            "src": "2008:3:6",
                            "type": "",
                            "value": "128"
                          }
                        ],
                        "functionName": {
                          "name": "slt",
                          "nativeSrc": "1979:3:6",
                          "nodeType": "YulIdentifier",
                          "src": "1979:3:6"
                        },
                        "nativeSrc": "1979:33:6",
                        "nodeType": "YulFunctionCall",
                        "src": "1979:33:6"
                      },
                      "nativeSrc": "1976:120:6",
                      "nodeType": "YulIf",
                      "src": "1976:120:6"
                    },
                    {
                      "nativeSrc": "2106:116:6",
                      "nodeType": "YulBlock",
                      "src": "2106:116:6",
                      "statements": [
                        {
                          "nativeSrc": "2121:15:6",
                          "nodeType": "YulVariableDeclaration",
                          "src": "2121:15:6",
                          "value": {
                            "kind": "number",
                            "nativeSrc": "2135:1:6",
                            "nodeType": "YulLiteral",
                            "src": "2135:1:6",
                            "type": "",
                            "value": "0"
                          },
                          "variables": [
                            {
                              "name": "offset",
                              "nativeSrc": "2125:6:6",
                              "nodeType": "YulTypedName",
                              "src": "2125:6:6",
                              "type": ""
                            }
                          ]
                        },
                        {
                          "nativeSrc": "2150:62:6",
                          "nodeType": "YulAssignment",
                          "src": "2150:62:6",
                          "value": {
                            "arguments": [
                              {
                                "arguments": [
                                  {
                                    "name": "headStart",
                                    "nativeSrc": "2184:9:6",
                                    "nodeType": "YulIdentifier",
                                    "src": "2184:9:6"
                                  },
                                  {
                                    "name": "offset",
                                    "nativeSrc": "2195:6:6",
                                    "nodeType": "YulIdentifier",
                                    "src": "2195:6:6"
                                  }
                                ],
                                "functionName": {
                                  "name": "add",
                                  "nativeSrc": "2180:3:6",
                                  "nodeType": "YulIdentifier",
                                  "src": "2180:3:6"
                                },
                                "nativeSrc": "2180:22:6",
                                "nodeType": "YulFunctionCall",
                                "src": "2180:22:6"
                              },
                              {
                                "name": "dataEnd",
                                "nativeSrc": "2204:7:6",
                                "nodeType": "YulIdentifier",
                                "src": "2204:7:6"
                              }
                            ],
                            "functionName": {
                              "name": "abi_decode_t_uint80",
                              "nativeSrc": "2160:19:6",
                              "nodeType": "YulIdentifier",
                              "src": "2160:19:6"
                            },
                            "nativeSrc": "2160:52:6",
                            "nodeType": "YulFunctionCall",
                            "src": "2160:52:6"
                          },
                          "variableNames": [
                            {
                              "name": "value0",
                              "nativeSrc": "2150:6:6",
                              "nodeType": "YulIdentifier",
                              "src": "2150:6:6"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "nativeSrc": "2232:117:6",
                      "nodeType": "YulBlock",
                      "src": "2232:117:6",
                      "statements": [
                        {
                          "nativeSrc": "2247:16:6",
                          "nodeType": "YulVariableDeclaration",
                          "src": "2247:16:6",
                          "value": {
                            "kind": "number",
                            "nativeSrc": "2261:2:6",
                            "nodeType": "YulLiteral",
                            "src": "2261:2:6",
                            "type": "",
                            "value": "32"
                          },
                          "variables": [
                            {
                              "name": "offset",
                              "nativeSrc": "2251:6:6",
                              "nodeType": "YulTypedName",
                              "src": "2251:6:6",
                              "type": ""
                            }
                          ]
                        },
                        {
                          "nativeSrc": "2277:62:6",
                          "nodeType": "YulAssignment",
                          "src": "2277:62:6",
                          "value": {
                            "arguments": [
                              {
                                "arguments": [
                                  {
                                    "name": "headStart",
                                    "nativeSrc": "2311:9:6",
                                    "nodeType": "YulIdentifier",
                                    "src": "2311:9:6"
                                  },
                                  {
                                    "name": "offset",
                                    "nativeSrc": "2322:6:6",
                                    "nodeType": "YulIdentifier",
                                    "src": "2322:6:6"
                                  }
                                ],
                                "functionName": {
                                  "name": "add",
                                  "nativeSrc": "2307:3:6",
                                  "nodeType": "YulIdentifier",
                                  "src": "2307:3:6"
                                },
                                "nativeSrc": "2307:22:6",
                                "nodeType": "YulFunctionCall",
                                "src": "2307:22:6"
                              },
                              {
                                "name": "dataEnd",
                                "nativeSrc": "2331:7:6",
                                "nodeType": "YulIdentifier",
                                "src": "2331:7:6"
                              }
                            ],
                            "functionName": {
                              "name": "abi_decode_t_int256",
                              "nativeSrc": "2287:19:6",
                              "nodeType": "YulIdentifier",
                              "src": "2287:19:6"
                            },
                            "nativeSrc": "2287:52:6",
                            "nodeType": "YulFunctionCall",
                            "src": "2287:52:6"
                          },
                          "variableNames": [
                            {
                              "name": "value1",
                              "nativeSrc": "2277:6:6",
                              "nodeType": "YulIdentifier",
                              "src": "2277:6:6"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "nativeSrc": "2359:118:6",
                      "nodeType": "YulBlock",
                      "src": "2359:118:6",
                      "statements": [
                        {
                          "nativeSrc": "2374:16:6",
                          "nodeType": "YulVariableDeclaration",
                          "src": "2374:16:6",
                          "value": {
                            "kind": "number",
                            "nativeSrc": "2388:2:6",
                            "nodeType": "YulLiteral",
                            "src": "2388:2:6",
                            "type": "",
                            "value": "64"
                          },
                          "variables": [
                            {
                              "name": "offset",
                              "nativeSrc": "2378:6:6",
                              "nodeType": "YulTypedName",
                              "src": "2378:6:6",
                              "type": ""
                            }
                          ]
                        },
                        {
                          "nativeSrc": "2404:63:6",
                          "nodeType": "YulAssignment",
                          "src": "2404:63:6",
                          "value": {
                            "arguments": [
                              {
                                "arguments": [
                                  {
                                    "name": "headStart",
                                    "nativeSrc": "2439:9:6",
                                    "nodeType": "YulIdentifier",
                                    "src": "2439:9:6"
                                  },
                                  {
                                    "name": "offset",
                                    "nativeSrc": "2450:6:6",
                                    "nodeType": "YulIdentifier",
                                    "src": "2450:6:6"
                                  }
                                ],
                                "functionName": {
                                  "name": "add",
                                  "nativeSrc": "2435:3:6",
                                  "nodeType": "YulIdentifier",
                                  "src": "2435:3:6"
                                },
                                "nativeSrc": "2435:22:6",
                                "nodeType": "YulFunctionCall",
                                "src": "2435:22:6"
                              },
                              {
                                "name": "dataEnd",
                                "nativeSrc": "2459:7:6",
                                "nodeType": "YulIdentifier",
                                "src": "2459:7:6"
                              }
                            ],
                            "functionName": {
                              "name": "abi_decode_t_uint256",
                              "nativeSrc": "2414:20:6",
                              "nodeType": "YulIdentifier",
                              "src": "2414:20:6"
                            },
                            "nativeSrc": "2414:53:6",
                            "nodeType": "YulFunctionCall",
                            "src": "2414:53:6"
                          },
                          "variableNames": [
                            {
                              "name": "value2",
                              "nativeSrc": "2404:6:6",
                              "nodeType": "YulIdentifier",
                              "src": "2404:6:6"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "nativeSrc": "2487:118:6",
                      "nodeType": "YulBlock",
                      "src": "2487:118:6",
                      "statements": [
                        {
                          "nativeSrc": "2502:16:6",
                          "nodeType": "YulVariableDeclaration",
                          "src": "2502:16:6",
                          "value": {
                            "kind": "number",
                            "nativeSrc": "2516:2:6",
                            "nodeType": "YulLiteral",
                            "src": "2516:2:6",
                            "type": "",
                            "value": "96"
                          },
                          "variables": [
                            {
                              "name": "offset",
                              "nativeSrc": "2506:6:6",
                              "nodeType": "YulTypedName",
                              "src": "2506:6:6",
                              "type": ""
                            }
                          ]
                        },
                        {
                          "nativeSrc": "2532:63:6",
                          "nodeType": "YulAssignment",
                          "src": "2532:63:6",
                          "value": {
                            "arguments": [
                              {
                                "arguments": [
                                  {
                                    "name": "headStart",
                                    "nativeSrc": "2567:9:6",
                                    "nodeType": "YulIdentifier",
                                    "src": "2567:9:6"
                                  },
                                  {
                                    "name": "offset",
                                    "nativeSrc": "2578:6:6",
                                    "nodeType": "YulIdentifier",
                                    "src": "2578:6:6"
                                  }
                                ],
                                "functionName": {
                                  "name": "add",
                                  "nativeSrc": "2563:3:6",
                                  "nodeType": "YulIdentifier",
                                  "src": "2563:3:6"
                                },
                                "nativeSrc": "2563:22:6",
                                "nodeType": "YulFunctionCall",
                                "src": "2563:22:6"
                              },
                              {
                                "name": "dataEnd",
                                "nativeSrc": "2587:7:6",
                                "nodeType": "YulIdentifier",
                                "src": "2587:7:6"
                              }
                            ],
                            "functionName": {
                              "name": "abi_decode_t_uint256",
                              "nativeSrc": "2542:20:6",
                              "nodeType": "YulIdentifier",
                              "src": "2542:20:6"
                            },
                            "nativeSrc": "2542:53:6",
                            "nodeType": "YulFunctionCall",
                            "src": "2542:53:6"
                          },
                          "variableNames": [
                            {
                              "name": "value3",
                              "nativeSrc": "2532:6:6",
                              "nodeType": "YulIdentifier",
                              "src": "2532:6:6"
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                "name": "abi_decode_tuple_t_uint80t_int256t_uint256t_uint256",
                "nativeSrc": "1851:761:6",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "headStart",
                    "nativeSrc": "1912:9:6",
                    "nodeType": "YulTypedName",
                    "src": "1912:9:6",
                    "type": ""
                  },
                  {
                    "name": "dataEnd",
                    "nativeSrc": "1923:7:6",
                    "nodeType": "YulTypedName",
                    "src": "1923:7:6",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "value0",
                    "nativeSrc": "1935:6:6",
                    "nodeType": "YulTypedName",
                    "src": "1935:6:6",
                    "type": ""
                  },
                  {
                    "name": "value1",
                    "nativeSrc": "1943:6:6",
                    "nodeType": "YulTypedName",
                    "src": "1943:6:6",
                    "type": ""
                  },
                  {
                    "name": "value2",
                    "nativeSrc": "1951:6:6",
                    "nodeType": "YulTypedName",
                    "src": "1951:6:6",
                    "type": ""
                  },
                  {
                    "name": "value3",
                    "nativeSrc": "1959:6:6",
                    "nodeType": "YulTypedName",
                    "src": "1959:6:6",
                    "type": ""
                  }
                ],
                "src": "1851:761:6"
              },
              {
                "body": {
                  "nativeSrc": "2681:52:6",
                  "nodeType": "YulBlock",
                  "src": "2681:52:6",
                  "statements": [
                    {
                      "expression": {
                        "arguments": [
                          {
                            "name": "pos",
                            "nativeSrc": "2698:3:6",
                            "nodeType": "YulIdentifier",
                            "src": "2698:3:6"
                          },
                          {
                            "arguments": [
                              {
                                "name": "value",
                                "nativeSrc": "2720:5:6",
                                "nodeType": "YulIdentifier",
                                "src": "2720:5:6"
                              }
                            ],
                            "functionName": {
                              "name": "cleanup_t_int256",
                              "nativeSrc": "2703:16:6",
                              "nodeType": "YulIdentifier",
                              "src": "2703:16:6"
                            },
                            "nativeSrc": "2703:23:6",
                            "nodeType": "YulFunctionCall",
                            "src": "2703:23:6"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nativeSrc": "2691:6:6",
                          "nodeType": "YulIdentifier",
                          "src": "2691:6:6"
                        },
                        "nativeSrc": "2691:36:6",
                        "nodeType": "YulFunctionCall",
                        "src": "2691:36:6"
                      },
                      "nativeSrc": "2691:36:6",
                      "nodeType": "YulExpressionStatement",
                      "src": "2691:36:6"
                    }
                  ]
                },
                "name": "abi_encode_t_int256_to_t_int256_fromStack",
                "nativeSrc": "2618:115:6",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "value",
                    "nativeSrc": "2669:5:6",
                    "nodeType": "YulTypedName",
                    "src": "2669:5:6",
                    "type": ""
                  },
                  {
                    "name": "pos",
                    "nativeSrc": "2676:3:6",
                    "nodeType": "YulTypedName",
                    "src": "2676:3:6",
                    "type": ""
                  }
                ],
                "src": "2618:115:6"
              },
              {
                "body": {
                  "nativeSrc": "2835:122:6",
                  "nodeType": "YulBlock",
                  "src": "2835:122:6",
                  "statements": [
                    {
                      "nativeSrc": "2845:26:6",
                      "nodeType": "YulAssignment",
                      "src": "2845:26:6",
                      "value": {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nativeSrc": "2857:9:6",
                            "nodeType": "YulIdentifier",
                            "src": "2857:9:6"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "2868:2:6",
                            "nodeType": "YulLiteral",
                            "src": "2868:2:6",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nativeSrc": "2853:3:6",
                          "nodeType": "YulIdentifier",
                          "src": "2853:3:6"
                        },
                        "nativeSrc": "2853:18:6",
                        "nodeType": "YulFunctionCall",
                        "src": "2853:18:6"
                      },
                      "variableNames": [
                        {
                          "name": "tail",
                          "nativeSrc": "2845:4:6",
                          "nodeType": "YulIdentifier",
                          "src": "2845:4:6"
                        }
                      ]
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "name": "value0",
                            "nativeSrc": "2923:6:6",
                            "nodeType": "YulIdentifier",
                            "src": "2923:6:6"
                          },
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nativeSrc": "2936:9:6",
                                "nodeType": "YulIdentifier",
                                "src": "2936:9:6"
                              },
                              {
                                "kind": "number",
                                "nativeSrc": "2947:1:6",
                                "nodeType": "YulLiteral",
                                "src": "2947:1:6",
                                "type": "",
                                "value": "0"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nativeSrc": "2932:3:6",
                              "nodeType": "YulIdentifier",
                              "src": "2932:3:6"
                            },
                            "nativeSrc": "2932:17:6",
                            "nodeType": "YulFunctionCall",
                            "src": "2932:17:6"
                          }
                        ],
                        "functionName": {
                          "name": "abi_encode_t_int256_to_t_int256_fromStack",
                          "nativeSrc": "2881:41:6",
                          "nodeType": "YulIdentifier",
                          "src": "2881:41:6"
                        },
                        "nativeSrc": "2881:69:6",
                        "nodeType": "YulFunctionCall",
                        "src": "2881:69:6"
                      },
                      "nativeSrc": "2881:69:6",
                      "nodeType": "YulExpressionStatement",
                      "src": "2881:69:6"
                    }
                  ]
                },
                "name": "abi_encode_tuple_t_int256__to_t_int256__fromStack_reversed",
                "nativeSrc": "2739:218:6",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "headStart",
                    "nativeSrc": "2807:9:6",
                    "nodeType": "YulTypedName",
                    "src": "2807:9:6",
                    "type": ""
                  },
                  {
                    "name": "value0",
                    "nativeSrc": "2819:6:6",
                    "nodeType": "YulTypedName",
                    "src": "2819:6:6",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "tail",
                    "nativeSrc": "2830:4:6",
                    "nodeType": "YulTypedName",
                    "src": "2830:4:6",
                    "type": ""
                  }
                ],
                "src": "2739:218:6"
              },
              {
                "body": {
                  "nativeSrc": "3028:53:6",
                  "nodeType": "YulBlock",
                  "src": "3028:53:6",
                  "statements": [
                    {
                      "expression": {
                        "arguments": [
                          {
                            "name": "pos",
                            "nativeSrc": "3045:3:6",
                            "nodeType": "YulIdentifier",
                            "src": "3045:3:6"
                          },
                          {
                            "arguments": [
                              {
                                "name": "value",
                                "nativeSrc": "3068:5:6",
                                "nodeType": "YulIdentifier",
                                "src": "3068:5:6"
                              }
                            ],
                            "functionName": {
                              "name": "cleanup_t_uint256",
                              "nativeSrc": "3050:17:6",
                              "nodeType": "YulIdentifier",
                              "src": "3050:17:6"
                            },
                            "nativeSrc": "3050:24:6",
                            "nodeType": "YulFunctionCall",
                            "src": "3050:24:6"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nativeSrc": "3038:6:6",
                          "nodeType": "YulIdentifier",
                          "src": "3038:6:6"
                        },
                        "nativeSrc": "3038:37:6",
                        "nodeType": "YulFunctionCall",
                        "src": "3038:37:6"
                      },
                      "nativeSrc": "3038:37:6",
                      "nodeType": "YulExpressionStatement",
                      "src": "3038:37:6"
                    }
                  ]
                },
                "name": "abi_encode_t_uint256_to_t_uint256_fromStack",
                "nativeSrc": "2963:118:6",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "value",
                    "nativeSrc": "3016:5:6",
                    "nodeType": "YulTypedName",
                    "src": "3016:5:6",
                    "type": ""
                  },
                  {
                    "name": "pos",
                    "nativeSrc": "3023:3:6",
                    "nodeType": "YulTypedName",
                    "src": "3023:3:6",
                    "type": ""
                  }
                ],
                "src": "2963:118:6"
              },
              {
                "body": {
                  "nativeSrc": "3185:124:6",
                  "nodeType": "YulBlock",
                  "src": "3185:124:6",
                  "statements": [
                    {
                      "nativeSrc": "3195:26:6",
                      "nodeType": "YulAssignment",
                      "src": "3195:26:6",
                      "value": {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nativeSrc": "3207:9:6",
                            "nodeType": "YulIdentifier",
                            "src": "3207:9:6"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "3218:2:6",
                            "nodeType": "YulLiteral",
                            "src": "3218:2:6",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nativeSrc": "3203:3:6",
                          "nodeType": "YulIdentifier",
                          "src": "3203:3:6"
                        },
                        "nativeSrc": "3203:18:6",
                        "nodeType": "YulFunctionCall",
                        "src": "3203:18:6"
                      },
                      "variableNames": [
                        {
                          "name": "tail",
                          "nativeSrc": "3195:4:6",
                          "nodeType": "YulIdentifier",
                          "src": "3195:4:6"
                        }
                      ]
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "name": "value0",
                            "nativeSrc": "3275:6:6",
                            "nodeType": "YulIdentifier",
                            "src": "3275:6:6"
                          },
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nativeSrc": "3288:9:6",
                                "nodeType": "YulIdentifier",
                                "src": "3288:9:6"
                              },
                              {
                                "kind": "number",
                                "nativeSrc": "3299:1:6",
                                "nodeType": "YulLiteral",
                                "src": "3299:1:6",
                                "type": "",
                                "value": "0"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nativeSrc": "3284:3:6",
                              "nodeType": "YulIdentifier",
                              "src": "3284:3:6"
                            },
                            "nativeSrc": "3284:17:6",
                            "nodeType": "YulFunctionCall",
                            "src": "3284:17:6"
                          }
                        ],
                        "functionName": {
                          "name": "abi_encode_t_uint256_to_t_uint256_fromStack",
                          "nativeSrc": "3231:43:6",
                          "nodeType": "YulIdentifier",
                          "src": "3231:43:6"
                        },
                        "nativeSrc": "3231:71:6",
                        "nodeType": "YulFunctionCall",
                        "src": "3231:71:6"
                      },
                      "nativeSrc": "3231:71:6",
                      "nodeType": "YulExpressionStatement",
                      "src": "3231:71:6"
                    }
                  ]
                },
                "name": "abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed",
                "nativeSrc": "3087:222:6",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "headStart",
                    "nativeSrc": "3157:9:6",
                    "nodeType": "YulTypedName",
                    "src": "3157:9:6",
                    "type": ""
                  },
                  {
                    "name": "value0",
                    "nativeSrc": "3169:6:6",
                    "nodeType": "YulTypedName",
                    "src": "3169:6:6",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "tail",
                    "nativeSrc": "3180:4:6",
                    "nodeType": "YulTypedName",
                    "src": "3180:4:6",
                    "type": ""
                  }
                ],
                "src": "3087:222:6"
              },
              {
                "body": {
                  "nativeSrc": "3374:40:6",
                  "nodeType": "YulBlock",
                  "src": "3374:40:6",
                  "statements": [
                    {
                      "nativeSrc": "3385:22:6",
                      "nodeType": "YulAssignment",
                      "src": "3385:22:6",
                      "value": {
                        "arguments": [
                          {
                            "name": "value",
                            "nativeSrc": "3401:5:6",
                            "nodeType": "YulIdentifier",
                            "src": "3401:5:6"
                          }
                        ],
                        "functionName": {
                          "name": "mload",
                          "nativeSrc": "3395:5:6",
                          "nodeType": "YulIdentifier",
                          "src": "3395:5:6"
                        },
                        "nativeSrc": "3395:12:6",
                        "nodeType": "YulFunctionCall",
                        "src": "3395:12:6"
                      },
                      "variableNames": [
                        {
                          "name": "length",
                          "nativeSrc": "3385:6:6",
                          "nodeType": "YulIdentifier",
                          "src": "3385:6:6"
                        }
                      ]
                    }
                  ]
                },
                "name": "array_length_t_string_memory_ptr",
                "nativeSrc": "3315:99:6",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "value",
                    "nativeSrc": "3357:5:6",
                    "nodeType": "YulTypedName",
                    "src": "3357:5:6",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "length",
                    "nativeSrc": "3367:6:6",
                    "nodeType": "YulTypedName",
                    "src": "3367:6:6",
                    "type": ""
                  }
                ],
                "src": "3315:99:6"
              },
              {
                "body": {
                  "nativeSrc": "3516:73:6",
                  "nodeType": "YulBlock",
                  "src": "3516:73:6",
                  "statements": [
                    {
                      "expression": {
                        "arguments": [
                          {
                            "name": "pos",
                            "nativeSrc": "3533:3:6",
                            "nodeType": "YulIdentifier",
                            "src": "3533:3:6"
                          },
                          {
                            "name": "length",
                            "nativeSrc": "3538:6:6",
                            "nodeType": "YulIdentifier",
                            "src": "3538:6:6"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nativeSrc": "3526:6:6",
                          "nodeType": "YulIdentifier",
                          "src": "3526:6:6"
                        },
                        "nativeSrc": "3526:19:6",
                        "nodeType": "YulFunctionCall",
                        "src": "3526:19:6"
                      },
                      "nativeSrc": "3526:19:6",
                      "nodeType": "YulExpressionStatement",
                      "src": "3526:19:6"
                    },
                    {
                      "nativeSrc": "3554:29:6",
                      "nodeType": "YulAssignment",
                      "src": "3554:29:6",
                      "value": {
                        "arguments": [
                          {
                            "name": "pos",
                            "nativeSrc": "3573:3:6",
                            "nodeType": "YulIdentifier",
                            "src": "3573:3:6"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "3578:4:6",
                            "nodeType": "YulLiteral",
                            "src": "3578:4:6",
                            "type": "",
                            "value": "0x20"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nativeSrc": "3569:3:6",
                          "nodeType": "YulIdentifier",
                          "src": "3569:3:6"
                        },
                        "nativeSrc": "3569:14:6",
                        "nodeType": "YulFunctionCall",
                        "src": "3569:14:6"
                      },
                      "variableNames": [
                        {
                          "name": "updated_pos",
                          "nativeSrc": "3554:11:6",
                          "nodeType": "YulIdentifier",
                          "src": "3554:11:6"
                        }
                      ]
                    }
                  ]
                },
                "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                "nativeSrc": "3420:169:6",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "pos",
                    "nativeSrc": "3488:3:6",
                    "nodeType": "YulTypedName",
                    "src": "3488:3:6",
                    "type": ""
                  },
                  {
                    "name": "length",
                    "nativeSrc": "3493:6:6",
                    "nodeType": "YulTypedName",
                    "src": "3493:6:6",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "updated_pos",
                    "nativeSrc": "3504:11:6",
                    "nodeType": "YulTypedName",
                    "src": "3504:11:6",
                    "type": ""
                  }
                ],
                "src": "3420:169:6"
              },
              {
                "body": {
                  "nativeSrc": "3657:77:6",
                  "nodeType": "YulBlock",
                  "src": "3657:77:6",
                  "statements": [
                    {
                      "expression": {
                        "arguments": [
                          {
                            "name": "dst",
                            "nativeSrc": "3674:3:6",
                            "nodeType": "YulIdentifier",
                            "src": "3674:3:6"
                          },
                          {
                            "name": "src",
                            "nativeSrc": "3679:3:6",
                            "nodeType": "YulIdentifier",
                            "src": "3679:3:6"
                          },
                          {
                            "name": "length",
                            "nativeSrc": "3684:6:6",
                            "nodeType": "YulIdentifier",
                            "src": "3684:6:6"
                          }
                        ],
                        "functionName": {
                          "name": "mcopy",
                          "nativeSrc": "3668:5:6",
                          "nodeType": "YulIdentifier",
                          "src": "3668:5:6"
                        },
                        "nativeSrc": "3668:23:6",
                        "nodeType": "YulFunctionCall",
                        "src": "3668:23:6"
                      },
                      "nativeSrc": "3668:23:6",
                      "nodeType": "YulExpressionStatement",
                      "src": "3668:23:6"
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "dst",
                                "nativeSrc": "3711:3:6",
                                "nodeType": "YulIdentifier",
                                "src": "3711:3:6"
                              },
                              {
                                "name": "length",
                                "nativeSrc": "3716:6:6",
                                "nodeType": "YulIdentifier",
                                "src": "3716:6:6"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nativeSrc": "3707:3:6",
                              "nodeType": "YulIdentifier",
                              "src": "3707:3:6"
                            },
                            "nativeSrc": "3707:16:6",
                            "nodeType": "YulFunctionCall",
                            "src": "3707:16:6"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "3725:1:6",
                            "nodeType": "YulLiteral",
                            "src": "3725:1:6",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nativeSrc": "3700:6:6",
                          "nodeType": "YulIdentifier",
                          "src": "3700:6:6"
                        },
                        "nativeSrc": "3700:27:6",
                        "nodeType": "YulFunctionCall",
                        "src": "3700:27:6"
                      },
                      "nativeSrc": "3700:27:6",
                      "nodeType": "YulExpressionStatement",
                      "src": "3700:27:6"
                    }
                  ]
                },
                "name": "copy_memory_to_memory_with_cleanup",
                "nativeSrc": "3595:139:6",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "src",
                    "nativeSrc": "3639:3:6",
                    "nodeType": "YulTypedName",
                    "src": "3639:3:6",
                    "type": ""
                  },
                  {
                    "name": "dst",
                    "nativeSrc": "3644:3:6",
                    "nodeType": "YulTypedName",
                    "src": "3644:3:6",
                    "type": ""
                  },
                  {
                    "name": "length",
                    "nativeSrc": "3649:6:6",
                    "nodeType": "YulTypedName",
                    "src": "3649:6:6",
                    "type": ""
                  }
                ],
                "src": "3595:139:6"
              },
              {
                "body": {
                  "nativeSrc": "3788:54:6",
                  "nodeType": "YulBlock",
                  "src": "3788:54:6",
                  "statements": [
                    {
                      "nativeSrc": "3798:38:6",
                      "nodeType": "YulAssignment",
                      "src": "3798:38:6",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "value",
                                "nativeSrc": "3816:5:6",
                                "nodeType": "YulIdentifier",
                                "src": "3816:5:6"
                              },
                              {
                                "kind": "number",
                                "nativeSrc": "3823:2:6",
                                "nodeType": "YulLiteral",
                                "src": "3823:2:6",
                                "type": "",
                                "value": "31"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nativeSrc": "3812:3:6",
                              "nodeType": "YulIdentifier",
                              "src": "3812:3:6"
                            },
                            "nativeSrc": "3812:14:6",
                            "nodeType": "YulFunctionCall",
                            "src": "3812:14:6"
                          },
                          {
                            "arguments": [
                              {
                                "kind": "number",
                                "nativeSrc": "3832:2:6",
                                "nodeType": "YulLiteral",
                                "src": "3832:2:6",
                                "type": "",
                                "value": "31"
                              }
                            ],
                            "functionName": {
                              "name": "not",
                              "nativeSrc": "3828:3:6",
                              "nodeType": "YulIdentifier",
                              "src": "3828:3:6"
                            },
                            "nativeSrc": "3828:7:6",
                            "nodeType": "YulFunctionCall",
                            "src": "3828:7:6"
                          }
                        ],
                        "functionName": {
                          "name": "and",
                          "nativeSrc": "3808:3:6",
                          "nodeType": "YulIdentifier",
                          "src": "3808:3:6"
                        },
                        "nativeSrc": "3808:28:6",
                        "nodeType": "YulFunctionCall",
                        "src": "3808:28:6"
                      },
                      "variableNames": [
                        {
                          "name": "result",
                          "nativeSrc": "3798:6:6",
                          "nodeType": "YulIdentifier",
                          "src": "3798:6:6"
                        }
                      ]
                    }
                  ]
                },
                "name": "round_up_to_mul_of_32",
                "nativeSrc": "3740:102:6",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "value",
                    "nativeSrc": "3771:5:6",
                    "nodeType": "YulTypedName",
                    "src": "3771:5:6",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "result",
                    "nativeSrc": "3781:6:6",
                    "nodeType": "YulTypedName",
                    "src": "3781:6:6",
                    "type": ""
                  }
                ],
                "src": "3740:102:6"
              },
              {
                "body": {
                  "nativeSrc": "3940:285:6",
                  "nodeType": "YulBlock",
                  "src": "3940:285:6",
                  "statements": [
                    {
                      "nativeSrc": "3950:53:6",
                      "nodeType": "YulVariableDeclaration",
                      "src": "3950:53:6",
                      "value": {
                        "arguments": [
                          {
                            "name": "value",
                            "nativeSrc": "3997:5:6",
                            "nodeType": "YulIdentifier",
                            "src": "3997:5:6"
                          }
                        ],
                        "functionName": {
                          "name": "array_length_t_string_memory_ptr",
                          "nativeSrc": "3964:32:6",
                          "nodeType": "YulIdentifier",
                          "src": "3964:32:6"
                        },
                        "nativeSrc": "3964:39:6",
                        "nodeType": "YulFunctionCall",
                        "src": "3964:39:6"
                      },
                      "variables": [
                        {
                          "name": "length",
                          "nativeSrc": "3954:6:6",
                          "nodeType": "YulTypedName",
                          "src": "3954:6:6",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "nativeSrc": "4012:78:6",
                      "nodeType": "YulAssignment",
                      "src": "4012:78:6",
                      "value": {
                        "arguments": [
                          {
                            "name": "pos",
                            "nativeSrc": "4078:3:6",
                            "nodeType": "YulIdentifier",
                            "src": "4078:3:6"
                          },
                          {
                            "name": "length",
                            "nativeSrc": "4083:6:6",
                            "nodeType": "YulIdentifier",
                            "src": "4083:6:6"
                          }
                        ],
                        "functionName": {
                          "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                          "nativeSrc": "4019:58:6",
                          "nodeType": "YulIdentifier",
                          "src": "4019:58:6"
                        },
                        "nativeSrc": "4019:71:6",
                        "nodeType": "YulFunctionCall",
                        "src": "4019:71:6"
                      },
                      "variableNames": [
                        {
                          "name": "pos",
                          "nativeSrc": "4012:3:6",
                          "nodeType": "YulIdentifier",
                          "src": "4012:3:6"
                        }
                      ]
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "value",
                                "nativeSrc": "4138:5:6",
                                "nodeType": "YulIdentifier",
                                "src": "4138:5:6"
                              },
                              {
                                "kind": "number",
                                "nativeSrc": "4145:4:6",
                                "nodeType": "YulLiteral",
                                "src": "4145:4:6",
                                "type": "",
                                "value": "0x20"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nativeSrc": "4134:3:6",
                              "nodeType": "YulIdentifier",
                              "src": "4134:3:6"
                            },
                            "nativeSrc": "4134:16:6",
                            "nodeType": "YulFunctionCall",
                            "src": "4134:16:6"
                          },
                          {
                            "name": "pos",
                            "nativeSrc": "4152:3:6",
                            "nodeType": "YulIdentifier",
                            "src": "4152:3:6"
                          },
                          {
                            "name": "length",
                            "nativeSrc": "4157:6:6",
                            "nodeType": "YulIdentifier",
                            "src": "4157:6:6"
                          }
                        ],
                        "functionName": {
                          "name": "copy_memory_to_memory_with_cleanup",
                          "nativeSrc": "4099:34:6",
                          "nodeType": "YulIdentifier",
                          "src": "4099:34:6"
                        },
                        "nativeSrc": "4099:65:6",
                        "nodeType": "YulFunctionCall",
                        "src": "4099:65:6"
                      },
                      "nativeSrc": "4099:65:6",
                      "nodeType": "YulExpressionStatement",
                      "src": "4099:65:6"
                    },
                    {
                      "nativeSrc": "4173:46:6",
                      "nodeType": "YulAssignment",
                      "src": "4173:46:6",
                      "value": {
                        "arguments": [
                          {
                            "name": "pos",
                            "nativeSrc": "4184:3:6",
                            "nodeType": "YulIdentifier",
                            "src": "4184:3:6"
                          },
                          {
                            "arguments": [
                              {
                                "name": "length",
                                "nativeSrc": "4211:6:6",
                                "nodeType": "YulIdentifier",
                                "src": "4211:6:6"
                              }
                            ],
                            "functionName": {
                              "name": "round_up_to_mul_of_32",
                              "nativeSrc": "4189:21:6",
                              "nodeType": "YulIdentifier",
                              "src": "4189:21:6"
                            },
                            "nativeSrc": "4189:29:6",
                            "nodeType": "YulFunctionCall",
                            "src": "4189:29:6"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nativeSrc": "4180:3:6",
                          "nodeType": "YulIdentifier",
                          "src": "4180:3:6"
                        },
                        "nativeSrc": "4180:39:6",
                        "nodeType": "YulFunctionCall",
                        "src": "4180:39:6"
                      },
                      "variableNames": [
                        {
                          "name": "end",
                          "nativeSrc": "4173:3:6",
                          "nodeType": "YulIdentifier",
                          "src": "4173:3:6"
                        }
                      ]
                    }
                  ]
                },
                "name": "abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack",
                "nativeSrc": "3848:377:6",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "value",
                    "nativeSrc": "3921:5:6",
                    "nodeType": "YulTypedName",
                    "src": "3921:5:6",
                    "type": ""
                  },
                  {
                    "name": "pos",
                    "nativeSrc": "3928:3:6",
                    "nodeType": "YulTypedName",
                    "src": "3928:3:6",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "end",
                    "nativeSrc": "3936:3:6",
                    "nodeType": "YulTypedName",
                    "src": "3936:3:6",
                    "type": ""
                  }
                ],
                "src": "3848:377:6"
              },
              {
                "body": {
                  "nativeSrc": "4349:195:6",
                  "nodeType": "YulBlock",
                  "src": "4349:195:6",
                  "statements": [
                    {
                      "nativeSrc": "4359:26:6",
                      "nodeType": "YulAssignment",
                      "src": "4359:26:6",
                      "value": {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nativeSrc": "4371:9:6",
                            "nodeType": "YulIdentifier",
                            "src": "4371:9:6"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "4382:2:6",
                            "nodeType": "YulLiteral",
                            "src": "4382:2:6",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nativeSrc": "4367:3:6",
                          "nodeType": "YulIdentifier",
                          "src": "4367:3:6"
                        },
                        "nativeSrc": "4367:18:6",
                        "nodeType": "YulFunctionCall",
                        "src": "4367:18:6"
                      },
                      "variableNames": [
                        {
                          "name": "tail",
                          "nativeSrc": "4359:4:6",
                          "nodeType": "YulIdentifier",
                          "src": "4359:4:6"
                        }
                      ]
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nativeSrc": "4406:9:6",
                                "nodeType": "YulIdentifier",
                                "src": "4406:9:6"
                              },
                              {
                                "kind": "number",
                                "nativeSrc": "4417:1:6",
                                "nodeType": "YulLiteral",
                                "src": "4417:1:6",
                                "type": "",
                                "value": "0"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nativeSrc": "4402:3:6",
                              "nodeType": "YulIdentifier",
                              "src": "4402:3:6"
                            },
                            "nativeSrc": "4402:17:6",
                            "nodeType": "YulFunctionCall",
                            "src": "4402:17:6"
                          },
                          {
                            "arguments": [
                              {
                                "name": "tail",
                                "nativeSrc": "4425:4:6",
                                "nodeType": "YulIdentifier",
                                "src": "4425:4:6"
                              },
                              {
                                "name": "headStart",
                                "nativeSrc": "4431:9:6",
                                "nodeType": "YulIdentifier",
                                "src": "4431:9:6"
                              }
                            ],
                            "functionName": {
                              "name": "sub",
                              "nativeSrc": "4421:3:6",
                              "nodeType": "YulIdentifier",
                              "src": "4421:3:6"
                            },
                            "nativeSrc": "4421:20:6",
                            "nodeType": "YulFunctionCall",
                            "src": "4421:20:6"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nativeSrc": "4395:6:6",
                          "nodeType": "YulIdentifier",
                          "src": "4395:6:6"
                        },
                        "nativeSrc": "4395:47:6",
                        "nodeType": "YulFunctionCall",
                        "src": "4395:47:6"
                      },
                      "nativeSrc": "4395:47:6",
                      "nodeType": "YulExpressionStatement",
                      "src": "4395:47:6"
                    },
                    {
                      "nativeSrc": "4451:86:6",
                      "nodeType": "YulAssignment",
                      "src": "4451:86:6",
                      "value": {
                        "arguments": [
                          {
                            "name": "value0",
                            "nativeSrc": "4523:6:6",
                            "nodeType": "YulIdentifier",
                            "src": "4523:6:6"
                          },
                          {
                            "name": "tail",
                            "nativeSrc": "4532:4:6",
                            "nodeType": "YulIdentifier",
                            "src": "4532:4:6"
                          }
                        ],
                        "functionName": {
                          "name": "abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack",
                          "nativeSrc": "4459:63:6",
                          "nodeType": "YulIdentifier",
                          "src": "4459:63:6"
                        },
                        "nativeSrc": "4459:78:6",
                        "nodeType": "YulFunctionCall",
                        "src": "4459:78:6"
                      },
                      "variableNames": [
                        {
                          "name": "tail",
                          "nativeSrc": "4451:4:6",
                          "nodeType": "YulIdentifier",
                          "src": "4451:4:6"
                        }
                      ]
                    }
                  ]
                },
                "name": "abi_encode_tuple_t_string_memory_ptr__to_t_string_memory_ptr__fromStack_reversed",
                "nativeSrc": "4231:313:6",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "headStart",
                    "nativeSrc": "4321:9:6",
                    "nodeType": "YulTypedName",
                    "src": "4321:9:6",
                    "type": ""
                  },
                  {
                    "name": "value0",
                    "nativeSrc": "4333:6:6",
                    "nodeType": "YulTypedName",
                    "src": "4333:6:6",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "tail",
                    "nativeSrc": "4344:4:6",
                    "nodeType": "YulTypedName",
                    "src": "4344:4:6",
                    "type": ""
                  }
                ],
                "src": "4231:313:6"
              },
              {
                "body": {
                  "nativeSrc": "4615:262:6",
                  "nodeType": "YulBlock",
                  "src": "4615:262:6",
                  "statements": [
                    {
                      "body": {
                        "nativeSrc": "4661:83:6",
                        "nodeType": "YulBlock",
                        "src": "4661:83:6",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [],
                              "functionName": {
                                "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                                "nativeSrc": "4663:77:6",
                                "nodeType": "YulIdentifier",
                                "src": "4663:77:6"
                              },
                              "nativeSrc": "4663:79:6",
                              "nodeType": "YulFunctionCall",
                              "src": "4663:79:6"
                            },
                            "nativeSrc": "4663:79:6",
                            "nodeType": "YulExpressionStatement",
                            "src": "4663:79:6"
                          }
                        ]
                      },
                      "condition": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "dataEnd",
                                "nativeSrc": "4636:7:6",
                                "nodeType": "YulIdentifier",
                                "src": "4636:7:6"
                              },
                              {
                                "name": "headStart",
                                "nativeSrc": "4645:9:6",
                                "nodeType": "YulIdentifier",
                                "src": "4645:9:6"
                              }
                            ],
                            "functionName": {
                              "name": "sub",
                              "nativeSrc": "4632:3:6",
                              "nodeType": "YulIdentifier",
                              "src": "4632:3:6"
                            },
                            "nativeSrc": "4632:23:6",
                            "nodeType": "YulFunctionCall",
                            "src": "4632:23:6"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "4657:2:6",
                            "nodeType": "YulLiteral",
                            "src": "4657:2:6",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "slt",
                          "nativeSrc": "4628:3:6",
                          "nodeType": "YulIdentifier",
                          "src": "4628:3:6"
                        },
                        "nativeSrc": "4628:32:6",
                        "nodeType": "YulFunctionCall",
                        "src": "4628:32:6"
                      },
                      "nativeSrc": "4625:119:6",
                      "nodeType": "YulIf",
                      "src": "4625:119:6"
                    },
                    {
                      "nativeSrc": "4754:116:6",
                      "nodeType": "YulBlock",
                      "src": "4754:116:6",
                      "statements": [
                        {
                          "nativeSrc": "4769:15:6",
                          "nodeType": "YulVariableDeclaration",
                          "src": "4769:15:6",
                          "value": {
                            "kind": "number",
                            "nativeSrc": "4783:1:6",
                            "nodeType": "YulLiteral",
                            "src": "4783:1:6",
                            "type": "",
                            "value": "0"
                          },
                          "variables": [
                            {
                              "name": "offset",
                              "nativeSrc": "4773:6:6",
                              "nodeType": "YulTypedName",
                              "src": "4773:6:6",
                              "type": ""
                            }
                          ]
                        },
                        {
                          "nativeSrc": "4798:62:6",
                          "nodeType": "YulAssignment",
                          "src": "4798:62:6",
                          "value": {
                            "arguments": [
                              {
                                "arguments": [
                                  {
                                    "name": "headStart",
                                    "nativeSrc": "4832:9:6",
                                    "nodeType": "YulIdentifier",
                                    "src": "4832:9:6"
                                  },
                                  {
                                    "name": "offset",
                                    "nativeSrc": "4843:6:6",
                                    "nodeType": "YulIdentifier",
                                    "src": "4843:6:6"
                                  }
                                ],
                                "functionName": {
                                  "name": "add",
                                  "nativeSrc": "4828:3:6",
                                  "nodeType": "YulIdentifier",
                                  "src": "4828:3:6"
                                },
                                "nativeSrc": "4828:22:6",
                                "nodeType": "YulFunctionCall",
                                "src": "4828:22:6"
                              },
                              {
                                "name": "dataEnd",
                                "nativeSrc": "4852:7:6",
                                "nodeType": "YulIdentifier",
                                "src": "4852:7:6"
                              }
                            ],
                            "functionName": {
                              "name": "abi_decode_t_uint80",
                              "nativeSrc": "4808:19:6",
                              "nodeType": "YulIdentifier",
                              "src": "4808:19:6"
                            },
                            "nativeSrc": "4808:52:6",
                            "nodeType": "YulFunctionCall",
                            "src": "4808:52:6"
                          },
                          "variableNames": [
                            {
                              "name": "value0",
                              "nativeSrc": "4798:6:6",
                              "nodeType": "YulIdentifier",
                              "src": "4798:6:6"
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                "name": "abi_decode_tuple_t_uint80",
                "nativeSrc": "4550:327:6",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "headStart",
                    "nativeSrc": "4585:9:6",
                    "nodeType": "YulTypedName",
                    "src": "4585:9:6",
                    "type": ""
                  },
                  {
                    "name": "dataEnd",
                    "nativeSrc": "4596:7:6",
                    "nodeType": "YulTypedName",
                    "src": "4596:7:6",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "value0",
                    "nativeSrc": "4608:6:6",
                    "nodeType": "YulTypedName",
                    "src": "4608:6:6",
                    "type": ""
                  }
                ],
                "src": "4550:327:6"
              },
              {
                "body": {
                  "nativeSrc": "4946:52:6",
                  "nodeType": "YulBlock",
                  "src": "4946:52:6",
                  "statements": [
                    {
                      "expression": {
                        "arguments": [
                          {
                            "name": "pos",
                            "nativeSrc": "4963:3:6",
                            "nodeType": "YulIdentifier",
                            "src": "4963:3:6"
                          },
                          {
                            "arguments": [
                              {
                                "name": "value",
                                "nativeSrc": "4985:5:6",
                                "nodeType": "YulIdentifier",
                                "src": "4985:5:6"
                              }
                            ],
                            "functionName": {
                              "name": "cleanup_t_uint80",
                              "nativeSrc": "4968:16:6",
                              "nodeType": "YulIdentifier",
                              "src": "4968:16:6"
                            },
                            "nativeSrc": "4968:23:6",
                            "nodeType": "YulFunctionCall",
                            "src": "4968:23:6"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nativeSrc": "4956:6:6",
                          "nodeType": "YulIdentifier",
                          "src": "4956:6:6"
                        },
                        "nativeSrc": "4956:36:6",
                        "nodeType": "YulFunctionCall",
                        "src": "4956:36:6"
                      },
                      "nativeSrc": "4956:36:6",
                      "nodeType": "YulExpressionStatement",
                      "src": "4956:36:6"
                    }
                  ]
                },
                "name": "abi_encode_t_uint80_to_t_uint80_fromStack",
                "nativeSrc": "4883:115:6",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "value",
                    "nativeSrc": "4934:5:6",
                    "nodeType": "YulTypedName",
                    "src": "4934:5:6",
                    "type": ""
                  },
                  {
                    "name": "pos",
                    "nativeSrc": "4941:3:6",
                    "nodeType": "YulTypedName",
                    "src": "4941:3:6",
                    "type": ""
                  }
                ],
                "src": "4883:115:6"
              },
              {
                "body": {
                  "nativeSrc": "5208:448:6",
                  "nodeType": "YulBlock",
                  "src": "5208:448:6",
                  "statements": [
                    {
                      "nativeSrc": "5218:27:6",
                      "nodeType": "YulAssignment",
                      "src": "5218:27:6",
                      "value": {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nativeSrc": "5230:9:6",
                            "nodeType": "YulIdentifier",
                            "src": "5230:9:6"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "5241:3:6",
                            "nodeType": "YulLiteral",
                            "src": "5241:3:6",
                            "type": "",
                            "value": "160"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nativeSrc": "5226:3:6",
                          "nodeType": "YulIdentifier",
                          "src": "5226:3:6"
                        },
                        "nativeSrc": "5226:19:6",
                        "nodeType": "YulFunctionCall",
                        "src": "5226:19:6"
                      },
                      "variableNames": [
                        {
                          "name": "tail",
                          "nativeSrc": "5218:4:6",
                          "nodeType": "YulIdentifier",
                          "src": "5218:4:6"
                        }
                      ]
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "name": "value0",
                            "nativeSrc": "5297:6:6",
                            "nodeType": "YulIdentifier",
                            "src": "5297:6:6"
                          },
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nativeSrc": "5310:9:6",
                                "nodeType": "YulIdentifier",
                                "src": "5310:9:6"
                              },
                              {
                                "kind": "number",
                                "nativeSrc": "5321:1:6",
                                "nodeType": "YulLiteral",
                                "src": "5321:1:6",
                                "type": "",
                                "value": "0"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nativeSrc": "5306:3:6",
                              "nodeType": "YulIdentifier",
                              "src": "5306:3:6"
                            },
                            "nativeSrc": "5306:17:6",
                            "nodeType": "YulFunctionCall",
                            "src": "5306:17:6"
                          }
                        ],
                        "functionName": {
                          "name": "abi_encode_t_uint80_to_t_uint80_fromStack",
                          "nativeSrc": "5255:41:6",
                          "nodeType": "YulIdentifier",
                          "src": "5255:41:6"
                        },
                        "nativeSrc": "5255:69:6",
                        "nodeType": "YulFunctionCall",
                        "src": "5255:69:6"
                      },
                      "nativeSrc": "5255:69:6",
                      "nodeType": "YulExpressionStatement",
                      "src": "5255:69:6"
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "name": "value1",
                            "nativeSrc": "5376:6:6",
                            "nodeType": "YulIdentifier",
                            "src": "5376:6:6"
                          },
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nativeSrc": "5389:9:6",
                                "nodeType": "YulIdentifier",
                                "src": "5389:9:6"
                              },
                              {
                                "kind": "number",
                                "nativeSrc": "5400:2:6",
                                "nodeType": "YulLiteral",
                                "src": "5400:2:6",
                                "type": "",
                                "value": "32"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nativeSrc": "5385:3:6",
                              "nodeType": "YulIdentifier",
                              "src": "5385:3:6"
                            },
                            "nativeSrc": "5385:18:6",
                            "nodeType": "YulFunctionCall",
                            "src": "5385:18:6"
                          }
                        ],
                        "functionName": {
                          "name": "abi_encode_t_int256_to_t_int256_fromStack",
                          "nativeSrc": "5334:41:6",
                          "nodeType": "YulIdentifier",
                          "src": "5334:41:6"
                        },
                        "nativeSrc": "5334:70:6",
                        "nodeType": "YulFunctionCall",
                        "src": "5334:70:6"
                      },
                      "nativeSrc": "5334:70:6",
                      "nodeType": "YulExpressionStatement",
                      "src": "5334:70:6"
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "name": "value2",
                            "nativeSrc": "5458:6:6",
                            "nodeType": "YulIdentifier",
                            "src": "5458:6:6"
                          },
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nativeSrc": "5471:9:6",
                                "nodeType": "YulIdentifier",
                                "src": "5471:9:6"
                              },
                              {
                                "kind": "number",
                                "nativeSrc": "5482:2:6",
                                "nodeType": "YulLiteral",
                                "src": "5482:2:6",
                                "type": "",
                                "value": "64"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nativeSrc": "5467:3:6",
                              "nodeType": "YulIdentifier",
                              "src": "5467:3:6"
                            },
                            "nativeSrc": "5467:18:6",
                            "nodeType": "YulFunctionCall",
                            "src": "5467:18:6"
                          }
                        ],
                        "functionName": {
                          "name": "abi_encode_t_uint256_to_t_uint256_fromStack",
                          "nativeSrc": "5414:43:6",
                          "nodeType": "YulIdentifier",
                          "src": "5414:43:6"
                        },
                        "nativeSrc": "5414:72:6",
                        "nodeType": "YulFunctionCall",
                        "src": "5414:72:6"
                      },
                      "nativeSrc": "5414:72:6",
                      "nodeType": "YulExpressionStatement",
                      "src": "5414:72:6"
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "name": "value3",
                            "nativeSrc": "5540:6:6",
                            "nodeType": "YulIdentifier",
                            "src": "5540:6:6"
                          },
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nativeSrc": "5553:9:6",
                                "nodeType": "YulIdentifier",
                                "src": "5553:9:6"
                              },
                              {
                                "kind": "number",
                                "nativeSrc": "5564:2:6",
                                "nodeType": "YulLiteral",
                                "src": "5564:2:6",
                                "type": "",
                                "value": "96"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nativeSrc": "5549:3:6",
                              "nodeType": "YulIdentifier",
                              "src": "5549:3:6"
                            },
                            "nativeSrc": "5549:18:6",
                            "nodeType": "YulFunctionCall",
                            "src": "5549:18:6"
                          }
                        ],
                        "functionName": {
                          "name": "abi_encode_t_uint256_to_t_uint256_fromStack",
                          "nativeSrc": "5496:43:6",
                          "nodeType": "YulIdentifier",
                          "src": "5496:43:6"
                        },
                        "nativeSrc": "5496:72:6",
                        "nodeType": "YulFunctionCall",
                        "src": "5496:72:6"
                      },
                      "nativeSrc": "5496:72:6",
                      "nodeType": "YulExpressionStatement",
                      "src": "5496:72:6"
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "name": "value4",
                            "nativeSrc": "5620:6:6",
                            "nodeType": "YulIdentifier",
                            "src": "5620:6:6"
                          },
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nativeSrc": "5633:9:6",
                                "nodeType": "YulIdentifier",
                                "src": "5633:9:6"
                              },
                              {
                                "kind": "number",
                                "nativeSrc": "5644:3:6",
                                "nodeType": "YulLiteral",
                                "src": "5644:3:6",
                                "type": "",
                                "value": "128"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nativeSrc": "5629:3:6",
                              "nodeType": "YulIdentifier",
                              "src": "5629:3:6"
                            },
                            "nativeSrc": "5629:19:6",
                            "nodeType": "YulFunctionCall",
                            "src": "5629:19:6"
                          }
                        ],
                        "functionName": {
                          "name": "abi_encode_t_uint80_to_t_uint80_fromStack",
                          "nativeSrc": "5578:41:6",
                          "nodeType": "YulIdentifier",
                          "src": "5578:41:6"
                        },
                        "nativeSrc": "5578:71:6",
                        "nodeType": "YulFunctionCall",
                        "src": "5578:71:6"
                      },
                      "nativeSrc": "5578:71:6",
                      "nodeType": "YulExpressionStatement",
                      "src": "5578:71:6"
                    }
                  ]
                },
                "name": "abi_encode_tuple_t_uint80_t_int256_t_uint256_t_uint256_t_uint80__to_t_uint80_t_int256_t_uint256_t_uint256_t_uint80__fromStack_reversed",
                "nativeSrc": "5004:652:6",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "headStart",
                    "nativeSrc": "5148:9:6",
                    "nodeType": "YulTypedName",
                    "src": "5148:9:6",
                    "type": ""
                  },
                  {
                    "name": "value4",
                    "nativeSrc": "5160:6:6",
                    "nodeType": "YulTypedName",
                    "src": "5160:6:6",
                    "type": ""
                  },
                  {
                    "name": "value3",
                    "nativeSrc": "5168:6:6",
                    "nodeType": "YulTypedName",
                    "src": "5168:6:6",
                    "type": ""
                  },
                  {
                    "name": "value2",
                    "nativeSrc": "5176:6:6",
                    "nodeType": "YulTypedName",
                    "src": "5176:6:6",
                    "type": ""
                  },
                  {
                    "name": "value1",
                    "nativeSrc": "5184:6:6",
                    "nodeType": "YulTypedName",
                    "src": "5184:6:6",
                    "type": ""
                  },
                  {
                    "name": "value0",
                    "nativeSrc": "5192:6:6",
                    "nodeType": "YulTypedName",
                    "src": "5192:6:6",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "tail",
                    "nativeSrc": "5203:4:6",
                    "nodeType": "YulTypedName",
                    "src": "5203:4:6",
                    "type": ""
                  }
                ],
                "src": "5004:652:6"
              },
              {
                "body": {
                  "nativeSrc": "5727:262:6",
                  "nodeType": "YulBlock",
                  "src": "5727:262:6",
                  "statements": [
                    {
                      "body": {
                        "nativeSrc": "5773:83:6",
                        "nodeType": "YulBlock",
                        "src": "5773:83:6",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [],
                              "functionName": {
                                "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                                "nativeSrc": "5775:77:6",
                                "nodeType": "YulIdentifier",
                                "src": "5775:77:6"
                              },
                              "nativeSrc": "5775:79:6",
                              "nodeType": "YulFunctionCall",
                              "src": "5775:79:6"
                            },
                            "nativeSrc": "5775:79:6",
                            "nodeType": "YulExpressionStatement",
                            "src": "5775:79:6"
                          }
                        ]
                      },
                      "condition": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "dataEnd",
                                "nativeSrc": "5748:7:6",
                                "nodeType": "YulIdentifier",
                                "src": "5748:7:6"
                              },
                              {
                                "name": "headStart",
                                "nativeSrc": "5757:9:6",
                                "nodeType": "YulIdentifier",
                                "src": "5757:9:6"
                              }
                            ],
                            "functionName": {
                              "name": "sub",
                              "nativeSrc": "5744:3:6",
                              "nodeType": "YulIdentifier",
                              "src": "5744:3:6"
                            },
                            "nativeSrc": "5744:23:6",
                            "nodeType": "YulFunctionCall",
                            "src": "5744:23:6"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "5769:2:6",
                            "nodeType": "YulLiteral",
                            "src": "5769:2:6",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "slt",
                          "nativeSrc": "5740:3:6",
                          "nodeType": "YulIdentifier",
                          "src": "5740:3:6"
                        },
                        "nativeSrc": "5740:32:6",
                        "nodeType": "YulFunctionCall",
                        "src": "5740:32:6"
                      },
                      "nativeSrc": "5737:119:6",
                      "nodeType": "YulIf",
                      "src": "5737:119:6"
                    },
                    {
                      "nativeSrc": "5866:116:6",
                      "nodeType": "YulBlock",
                      "src": "5866:116:6",
                      "statements": [
                        {
                          "nativeSrc": "5881:15:6",
                          "nodeType": "YulVariableDeclaration",
                          "src": "5881:15:6",
                          "value": {
                            "kind": "number",
                            "nativeSrc": "5895:1:6",
                            "nodeType": "YulLiteral",
                            "src": "5895:1:6",
                            "type": "",
                            "value": "0"
                          },
                          "variables": [
                            {
                              "name": "offset",
                              "nativeSrc": "5885:6:6",
                              "nodeType": "YulTypedName",
                              "src": "5885:6:6",
                              "type": ""
                            }
                          ]
                        },
                        {
                          "nativeSrc": "5910:62:6",
                          "nodeType": "YulAssignment",
                          "src": "5910:62:6",
                          "value": {
                            "arguments": [
                              {
                                "arguments": [
                                  {
                                    "name": "headStart",
                                    "nativeSrc": "5944:9:6",
                                    "nodeType": "YulIdentifier",
                                    "src": "5944:9:6"
                                  },
                                  {
                                    "name": "offset",
                                    "nativeSrc": "5955:6:6",
                                    "nodeType": "YulIdentifier",
                                    "src": "5955:6:6"
                                  }
                                ],
                                "functionName": {
                                  "name": "add",
                                  "nativeSrc": "5940:3:6",
                                  "nodeType": "YulIdentifier",
                                  "src": "5940:3:6"
                                },
                                "nativeSrc": "5940:22:6",
                                "nodeType": "YulFunctionCall",
                                "src": "5940:22:6"
                              },
                              {
                                "name": "dataEnd",
                                "nativeSrc": "5964:7:6",
                                "nodeType": "YulIdentifier",
                                "src": "5964:7:6"
                              }
                            ],
                            "functionName": {
                              "name": "abi_decode_t_int256",
                              "nativeSrc": "5920:19:6",
                              "nodeType": "YulIdentifier",
                              "src": "5920:19:6"
                            },
                            "nativeSrc": "5920:52:6",
                            "nodeType": "YulFunctionCall",
                            "src": "5920:52:6"
                          },
                          "variableNames": [
                            {
                              "name": "value0",
                              "nativeSrc": "5910:6:6",
                              "nodeType": "YulIdentifier",
                              "src": "5910:6:6"
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                "name": "abi_decode_tuple_t_int256",
                "nativeSrc": "5662:327:6",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "headStart",
                    "nativeSrc": "5697:9:6",
                    "nodeType": "YulTypedName",
                    "src": "5697:9:6",
                    "type": ""
                  },
                  {
                    "name": "dataEnd",
                    "nativeSrc": "5708:7:6",
                    "nodeType": "YulTypedName",
                    "src": "5708:7:6",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "value0",
                    "nativeSrc": "5720:6:6",
                    "nodeType": "YulTypedName",
                    "src": "5720:6:6",
                    "type": ""
                  }
                ],
                "src": "5662:327:6"
              },
              {
                "body": {
                  "nativeSrc": "6061:263:6",
                  "nodeType": "YulBlock",
                  "src": "6061:263:6",
                  "statements": [
                    {
                      "body": {
                        "nativeSrc": "6107:83:6",
                        "nodeType": "YulBlock",
                        "src": "6107:83:6",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [],
                              "functionName": {
                                "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                                "nativeSrc": "6109:77:6",
                                "nodeType": "YulIdentifier",
                                "src": "6109:77:6"
                              },
                              "nativeSrc": "6109:79:6",
                              "nodeType": "YulFunctionCall",
                              "src": "6109:79:6"
                            },
                            "nativeSrc": "6109:79:6",
                            "nodeType": "YulExpressionStatement",
                            "src": "6109:79:6"
                          }
                        ]
                      },
                      "condition": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "dataEnd",
                                "nativeSrc": "6082:7:6",
                                "nodeType": "YulIdentifier",
                                "src": "6082:7:6"
                              },
                              {
                                "name": "headStart",
                                "nativeSrc": "6091:9:6",
                                "nodeType": "YulIdentifier",
                                "src": "6091:9:6"
                              }
                            ],
                            "functionName": {
                              "name": "sub",
                              "nativeSrc": "6078:3:6",
                              "nodeType": "YulIdentifier",
                              "src": "6078:3:6"
                            },
                            "nativeSrc": "6078:23:6",
                            "nodeType": "YulFunctionCall",
                            "src": "6078:23:6"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "6103:2:6",
                            "nodeType": "YulLiteral",
                            "src": "6103:2:6",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "slt",
                          "nativeSrc": "6074:3:6",
                          "nodeType": "YulIdentifier",
                          "src": "6074:3:6"
                        },
                        "nativeSrc": "6074:32:6",
                        "nodeType": "YulFunctionCall",
                        "src": "6074:32:6"
                      },
                      "nativeSrc": "6071:119:6",
                      "nodeType": "YulIf",
                      "src": "6071:119:6"
                    },
                    {
                      "nativeSrc": "6200:117:6",
                      "nodeType": "YulBlock",
                      "src": "6200:117:6",
                      "statements": [
                        {
                          "nativeSrc": "6215:15:6",
                          "nodeType": "YulVariableDeclaration",
                          "src": "6215:15:6",
                          "value": {
                            "kind": "number",
                            "nativeSrc": "6229:1:6",
                            "nodeType": "YulLiteral",
                            "src": "6229:1:6",
                            "type": "",
                            "value": "0"
                          },
                          "variables": [
                            {
                              "name": "offset",
                              "nativeSrc": "6219:6:6",
                              "nodeType": "YulTypedName",
                              "src": "6219:6:6",
                              "type": ""
                            }
                          ]
                        },
                        {
                          "nativeSrc": "6244:63:6",
                          "nodeType": "YulAssignment",
                          "src": "6244:63:6",
                          "value": {
                            "arguments": [
                              {
                                "arguments": [
                                  {
                                    "name": "headStart",
                                    "nativeSrc": "6279:9:6",
                                    "nodeType": "YulIdentifier",
                                    "src": "6279:9:6"
                                  },
                                  {
                                    "name": "offset",
                                    "nativeSrc": "6290:6:6",
                                    "nodeType": "YulIdentifier",
                                    "src": "6290:6:6"
                                  }
                                ],
                                "functionName": {
                                  "name": "add",
                                  "nativeSrc": "6275:3:6",
                                  "nodeType": "YulIdentifier",
                                  "src": "6275:3:6"
                                },
                                "nativeSrc": "6275:22:6",
                                "nodeType": "YulFunctionCall",
                                "src": "6275:22:6"
                              },
                              {
                                "name": "dataEnd",
                                "nativeSrc": "6299:7:6",
                                "nodeType": "YulIdentifier",
                                "src": "6299:7:6"
                              }
                            ],
                            "functionName": {
                              "name": "abi_decode_t_uint256",
                              "nativeSrc": "6254:20:6",
                              "nodeType": "YulIdentifier",
                              "src": "6254:20:6"
                            },
                            "nativeSrc": "6254:53:6",
                            "nodeType": "YulFunctionCall",
                            "src": "6254:53:6"
                          },
                          "variableNames": [
                            {
                              "name": "value0",
                              "nativeSrc": "6244:6:6",
                              "nodeType": "YulIdentifier",
                              "src": "6244:6:6"
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                "name": "abi_decode_tuple_t_uint256",
                "nativeSrc": "5995:329:6",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "headStart",
                    "nativeSrc": "6031:9:6",
                    "nodeType": "YulTypedName",
                    "src": "6031:9:6",
                    "type": ""
                  },
                  {
                    "name": "dataEnd",
                    "nativeSrc": "6042:7:6",
                    "nodeType": "YulTypedName",
                    "src": "6042:7:6",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "value0",
                    "nativeSrc": "6054:6:6",
                    "nodeType": "YulTypedName",
                    "src": "6054:6:6",
                    "type": ""
                  }
                ],
                "src": "5995:329:6"
              },
              {
                "body": {
                  "nativeSrc": "6358:152:6",
                  "nodeType": "YulBlock",
                  "src": "6358:152:6",
                  "statements": [
                    {
                      "expression": {
                        "arguments": [
                          {
                            "kind": "number",
                            "nativeSrc": "6375:1:6",
                            "nodeType": "YulLiteral",
                            "src": "6375:1:6",
                            "type": "",
                            "value": "0"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "6378:77:6",
                            "nodeType": "YulLiteral",
                            "src": "6378:77:6",
                            "type": "",
                            "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nativeSrc": "6368:6:6",
                          "nodeType": "YulIdentifier",
                          "src": "6368:6:6"
                        },
                        "nativeSrc": "6368:88:6",
                        "nodeType": "YulFunctionCall",
                        "src": "6368:88:6"
                      },
                      "nativeSrc": "6368:88:6",
                      "nodeType": "YulExpressionStatement",
                      "src": "6368:88:6"
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "kind": "number",
                            "nativeSrc": "6472:1:6",
                            "nodeType": "YulLiteral",
                            "src": "6472:1:6",
                            "type": "",
                            "value": "4"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "6475:4:6",
                            "nodeType": "YulLiteral",
                            "src": "6475:4:6",
                            "type": "",
                            "value": "0x11"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nativeSrc": "6465:6:6",
                          "nodeType": "YulIdentifier",
                          "src": "6465:6:6"
                        },
                        "nativeSrc": "6465:15:6",
                        "nodeType": "YulFunctionCall",
                        "src": "6465:15:6"
                      },
                      "nativeSrc": "6465:15:6",
                      "nodeType": "YulExpressionStatement",
                      "src": "6465:15:6"
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "kind": "number",
                            "nativeSrc": "6496:1:6",
                            "nodeType": "YulLiteral",
                            "src": "6496:1:6",
                            "type": "",
                            "value": "0"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "6499:4:6",
                            "nodeType": "YulLiteral",
                            "src": "6499:4:6",
                            "type": "",
                            "value": "0x24"
                          }
                        ],
                        "functionName": {
                          "name": "revert",
                          "nativeSrc": "6489:6:6",
                          "nodeType": "YulIdentifier",
                          "src": "6489:6:6"
                        },
                        "nativeSrc": "6489:15:6",
                        "nodeType": "YulFunctionCall",
                        "src": "6489:15:6"
                      },
                      "nativeSrc": "6489:15:6",
                      "nodeType": "YulExpressionStatement",
                      "src": "6489:15:6"
                    }
                  ]
                },
                "name": "panic_error_0x11",
                "nativeSrc": "6330:180:6",
                "nodeType": "YulFunctionDefinition",
                "src": "6330:180:6"
              },
              {
                "body": {
                  "nativeSrc": "6559:190:6",
                  "nodeType": "YulBlock",
                  "src": "6559:190:6",
                  "statements": [
                    {
                      "nativeSrc": "6569:33:6",
                      "nodeType": "YulAssignment",
                      "src": "6569:33:6",
                      "value": {
                        "arguments": [
                          {
                            "name": "value",
                            "nativeSrc": "6596:5:6",
                            "nodeType": "YulIdentifier",
                            "src": "6596:5:6"
                          }
                        ],
                        "functionName": {
                          "name": "cleanup_t_uint256",
                          "nativeSrc": "6578:17:6",
                          "nodeType": "YulIdentifier",
                          "src": "6578:17:6"
                        },
                        "nativeSrc": "6578:24:6",
                        "nodeType": "YulFunctionCall",
                        "src": "6578:24:6"
                      },
                      "variableNames": [
                        {
                          "name": "value",
                          "nativeSrc": "6569:5:6",
                          "nodeType": "YulIdentifier",
                          "src": "6569:5:6"
                        }
                      ]
                    },
                    {
                      "body": {
                        "nativeSrc": "6692:22:6",
                        "nodeType": "YulBlock",
                        "src": "6692:22:6",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [],
                              "functionName": {
                                "name": "panic_error_0x11",
                                "nativeSrc": "6694:16:6",
                                "nodeType": "YulIdentifier",
                                "src": "6694:16:6"
                              },
                              "nativeSrc": "6694:18:6",
                              "nodeType": "YulFunctionCall",
                              "src": "6694:18:6"
                            },
                            "nativeSrc": "6694:18:6",
                            "nodeType": "YulExpressionStatement",
                            "src": "6694:18:6"
                          }
                        ]
                      },
                      "condition": {
                        "arguments": [
                          {
                            "name": "value",
                            "nativeSrc": "6617:5:6",
                            "nodeType": "YulIdentifier",
                            "src": "6617:5:6"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "6624:66:6",
                            "nodeType": "YulLiteral",
                            "src": "6624:66:6",
                            "type": "",
                            "value": "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
                          }
                        ],
                        "functionName": {
                          "name": "eq",
                          "nativeSrc": "6614:2:6",
                          "nodeType": "YulIdentifier",
                          "src": "6614:2:6"
                        },
                        "nativeSrc": "6614:77:6",
                        "nodeType": "YulFunctionCall",
                        "src": "6614:77:6"
                      },
                      "nativeSrc": "6611:103:6",
                      "nodeType": "YulIf",
                      "src": "6611:103:6"
                    },
                    {
                      "nativeSrc": "6723:20:6",
                      "nodeType": "YulAssignment",
                      "src": "6723:20:6",
                      "value": {
                        "arguments": [
                          {
                            "name": "value",
                            "nativeSrc": "6734:5:6",
                            "nodeType": "YulIdentifier",
                            "src": "6734:5:6"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "6741:1:6",
                            "nodeType": "YulLiteral",
                            "src": "6741:1:6",
                            "type": "",
                            "value": "1"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nativeSrc": "6730:3:6",
                          "nodeType": "YulIdentifier",
                          "src": "6730:3:6"
                        },
                        "nativeSrc": "6730:13:6",
                        "nodeType": "YulFunctionCall",
                        "src": "6730:13:6"
                      },
                      "variableNames": [
                        {
                          "name": "ret",
                          "nativeSrc": "6723:3:6",
                          "nodeType": "YulIdentifier",
                          "src": "6723:3:6"
                        }
                      ]
                    }
                  ]
                },
                "name": "increment_t_uint256",
                "nativeSrc": "6516:233:6",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "value",
                    "nativeSrc": "6545:5:6",
                    "nodeType": "YulTypedName",
                    "src": "6545:5:6",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "ret",
                    "nativeSrc": "6555:3:6",
                    "nodeType": "YulTypedName",
                    "src": "6555:3:6",
                    "type": ""
                  }
                ],
                "src": "6516:233:6"
              }
            ]
          },
          "contents": "{\n\n    function cleanup_t_uint8(value) -> cleaned {\n        cleaned := and(value, 0xff)\n    }\n\n    function abi_encode_t_uint8_to_t_uint8_fromStack(value, pos) {\n        mstore(pos, cleanup_t_uint8(value))\n    }\n\n    function abi_encode_tuple_t_uint8__to_t_uint8__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        abi_encode_t_uint8_to_t_uint8_fromStack(value0,  add(headStart, 0))\n\n    }\n\n    function allocate_unbounded() -> memPtr {\n        memPtr := mload(64)\n    }\n\n    function revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() {\n        revert(0, 0)\n    }\n\n    function revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db() {\n        revert(0, 0)\n    }\n\n    function cleanup_t_uint80(value) -> cleaned {\n        cleaned := and(value, 0xffffffffffffffffffff)\n    }\n\n    function validator_revert_t_uint80(value) {\n        if iszero(eq(value, cleanup_t_uint80(value))) { revert(0, 0) }\n    }\n\n    function abi_decode_t_uint80(offset, end) -> value {\n        value := calldataload(offset)\n        validator_revert_t_uint80(value)\n    }\n\n    function cleanup_t_int256(value) -> cleaned {\n        cleaned := value\n    }\n\n    function validator_revert_t_int256(value) {\n        if iszero(eq(value, cleanup_t_int256(value))) { revert(0, 0) }\n    }\n\n    function abi_decode_t_int256(offset, end) -> value {\n        value := calldataload(offset)\n        validator_revert_t_int256(value)\n    }\n\n    function cleanup_t_uint256(value) -> cleaned {\n        cleaned := value\n    }\n\n    function validator_revert_t_uint256(value) {\n        if iszero(eq(value, cleanup_t_uint256(value))) { revert(0, 0) }\n    }\n\n    function abi_decode_t_uint256(offset, end) -> value {\n        value := calldataload(offset)\n        validator_revert_t_uint256(value)\n    }\n\n    function abi_decode_tuple_t_uint80t_int256t_uint256t_uint256(headStart, dataEnd) -> value0, value1, value2, value3 {\n        if slt(sub(dataEnd, headStart), 128) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_uint80(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := 32\n\n            value1 := abi_decode_t_int256(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := 64\n\n            value2 := abi_decode_t_uint256(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := 96\n\n            value3 := abi_decode_t_uint256(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function abi_encode_t_int256_to_t_int256_fromStack(value, pos) {\n        mstore(pos, cleanup_t_int256(value))\n    }\n\n    function abi_encode_tuple_t_int256__to_t_int256__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        abi_encode_t_int256_to_t_int256_fromStack(value0,  add(headStart, 0))\n\n    }\n\n    function abi_encode_t_uint256_to_t_uint256_fromStack(value, pos) {\n        mstore(pos, cleanup_t_uint256(value))\n    }\n\n    function abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        abi_encode_t_uint256_to_t_uint256_fromStack(value0,  add(headStart, 0))\n\n    }\n\n    function array_length_t_string_memory_ptr(value) -> length {\n\n        length := mload(value)\n\n    }\n\n    function array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, length) -> updated_pos {\n        mstore(pos, length)\n        updated_pos := add(pos, 0x20)\n    }\n\n    function copy_memory_to_memory_with_cleanup(src, dst, length) {\n\n        mcopy(dst, src, length)\n        mstore(add(dst, length), 0)\n\n    }\n\n    function round_up_to_mul_of_32(value) -> result {\n        result := and(add(value, 31), not(31))\n    }\n\n    function abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack(value, pos) -> end {\n        let length := array_length_t_string_memory_ptr(value)\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, length)\n        copy_memory_to_memory_with_cleanup(add(value, 0x20), pos, length)\n        end := add(pos, round_up_to_mul_of_32(length))\n    }\n\n    function abi_encode_tuple_t_string_memory_ptr__to_t_string_memory_ptr__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack(value0,  tail)\n\n    }\n\n    function abi_decode_tuple_t_uint80(headStart, dataEnd) -> value0 {\n        if slt(sub(dataEnd, headStart), 32) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_uint80(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function abi_encode_t_uint80_to_t_uint80_fromStack(value, pos) {\n        mstore(pos, cleanup_t_uint80(value))\n    }\n\n    function abi_encode_tuple_t_uint80_t_int256_t_uint256_t_uint256_t_uint80__to_t_uint80_t_int256_t_uint256_t_uint256_t_uint80__fromStack_reversed(headStart , value4, value3, value2, value1, value0) -> tail {\n        tail := add(headStart, 160)\n\n        abi_encode_t_uint80_to_t_uint80_fromStack(value0,  add(headStart, 0))\n\n        abi_encode_t_int256_to_t_int256_fromStack(value1,  add(headStart, 32))\n\n        abi_encode_t_uint256_to_t_uint256_fromStack(value2,  add(headStart, 64))\n\n        abi_encode_t_uint256_to_t_uint256_fromStack(value3,  add(headStart, 96))\n\n        abi_encode_t_uint80_to_t_uint80_fromStack(value4,  add(headStart, 128))\n\n    }\n\n    function abi_decode_tuple_t_int256(headStart, dataEnd) -> value0 {\n        if slt(sub(dataEnd, headStart), 32) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_int256(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function abi_decode_tuple_t_uint256(headStart, dataEnd) -> value0 {\n        if slt(sub(dataEnd, headStart), 32) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_uint256(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function panic_error_0x11() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x11)\n        revert(0, 0x24)\n    }\n\n    function increment_t_uint256(value) -> ret {\n        value := cleanup_t_uint256(value)\n        if eq(value, 0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff) { panic_error_0x11() }\n        ret := add(value, 1)\n    }\n\n}\n",
          "id": 6,
          "language": "Yul",
          "name": "#utility.yul"
        }
      ],
      "immutableReferences": {},
      "linkReferences": {},
      "object": "608060405234801561000f575f5ffd5b50600436106100b2575f3560e01c80638205bf6a1161006f5780638205bf6a146101685780639a6fc8f514610186578063a87a20ce146101ba578063b5ab58dc146101d6578063b633620c14610206578063feaf968c14610236576100b2565b8063313ce567146100b65780634aa2011f146100d457806350d25bcd146100f057806354fd4d501461010e578063668a0f021461012c5780637284e4161461014a575b5f5ffd5b6100be610258565b6040516100cb91906104ac565b60405180910390f35b6100ee60048036038101906100e9919061056e565b610269565b005b6100f86102d8565b60405161010591906105e1565b60405180910390f35b6101166102de565b6040516101239190610609565b60405180910390f35b6101346102e2565b6040516101419190610609565b60405180910390f35b6101526102e8565b60405161015f9190610692565b60405180910390f35b610170610325565b60405161017d9190610609565b60405180910390f35b6101a0600480360381019061019b91906106b2565b61032b565b6040516101b19594939291906106ec565b60405180910390f35b6101d460048036038101906101cf919061073d565b61039f565b005b6101f060048036038101906101eb9190610768565b61040f565b6040516101fd91906105e1565b60405180910390f35b610220600480360381019061021b9190610768565b610424565b60405161022d9190610609565b60405180910390f35b61023e610439565b60405161024f9594939291906106ec565b60405180910390f35b5f5f9054906101000a900460ff1681565b8369ffffffffffffffffffff1660038190555082600181905550816002819055508260045f60035481526020019081526020015f20819055508160055f60035481526020019081526020015f20819055508060065f60035481526020019081526020015f208190555050505050565b60015481565b5f81565b60035481565b60606040518060400160405280601f81526020017f76302e382f74657374732f4d6f636b563341676772656761746f722e736f6c00815250905090565b60025481565b5f5f5f5f5f8560045f8869ffffffffffffffffffff1681526020019081526020015f205460065f8969ffffffffffffffffffff1681526020019081526020015f205460055f8a69ffffffffffffffffffff1681526020019081526020015f2054899450945094509450945091939590929450565b806001819055504260028190555060035f8154809291906103bf906107c0565b91905055508060045f60035481526020019081526020015f20819055504260055f60035481526020019081526020015f20819055504260065f60035481526020019081526020015f208190555050565b6004602052805f5260405f205f915090505481565b6005602052805f5260405f205f915090505481565b5f5f5f5f5f60035460045f60035481526020019081526020015f205460065f60035481526020019081526020015f205460055f60035481526020019081526020015f2054600354945094509450945094509091929394565b5f60ff82169050919050565b6104a681610491565b82525050565b5f6020820190506104bf5f83018461049d565b92915050565b5f5ffd5b5f69ffffffffffffffffffff82169050919050565b6104e7816104c9565b81146104f1575f5ffd5b50565b5f81359050610502816104de565b92915050565b5f819050919050565b61051a81610508565b8114610524575f5ffd5b50565b5f8135905061053581610511565b92915050565b5f819050919050565b61054d8161053b565b8114610557575f5ffd5b50565b5f8135905061056881610544565b92915050565b5f5f5f5f60808587031215610586576105856104c5565b5b5f610593878288016104f4565b94505060206105a487828801610527565b93505060406105b58782880161055a565b92505060606105c68782880161055a565b91505092959194509250565b6105db81610508565b82525050565b5f6020820190506105f45f8301846105d2565b92915050565b6106038161053b565b82525050565b5f60208201905061061c5f8301846105fa565b92915050565b5f81519050919050565b5f82825260208201905092915050565b8281835e5f83830152505050565b5f601f19601f8301169050919050565b5f61066482610622565b61066e818561062c565b935061067e81856020860161063c565b6106878161064a565b840191505092915050565b5f6020820190508181035f8301526106aa818461065a565b905092915050565b5f602082840312156106c7576106c66104c5565b5b5f6106d4848285016104f4565b91505092915050565b6106e6816104c9565b82525050565b5f60a0820190506106ff5f8301886106dd565b61070c60208301876105d2565b61071960408301866105fa565b61072660608301856105fa565b61073360808301846106dd565b9695505050505050565b5f60208284031215610752576107516104c5565b5b5f61075f84828501610527565b91505092915050565b5f6020828403121561077d5761077c6104c5565b5b5f61078a8482850161055a565b91505092915050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f6107ca8261053b565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82036107fc576107fb610793565b5b60018201905091905056fea264697066735822122000e0b881af7a128c3d973ee4c185b63460ac33d7e43b06cd0b6c07500cb24f6a64736f6c634300081c0033",
      "opcodes": "PUSH1 0x80 PUSH1 0x40 MSTORE CALLVALUE DUP1 ISZERO PUSH2 0xF JUMPI PUSH0 PUSH0 REVERT JUMPDEST POP PUSH1 0x4 CALLDATASIZE LT PUSH2 0xB2 JUMPI PUSH0 CALLDATALOAD PUSH1 0xE0 SHR DUP1 PUSH4 0x8205BF6A GT PUSH2 0x6F JUMPI DUP1 PUSH4 0x8205BF6A EQ PUSH2 0x168 JUMPI DUP1 PUSH4 0x9A6FC8F5 EQ PUSH2 0x186 JUMPI DUP1 PUSH4 0xA87A20CE EQ PUSH2 0x1BA JUMPI DUP1 PUSH4 0xB5AB58DC EQ PUSH2 0x1D6 JUMPI DUP1 PUSH4 0xB633620C EQ PUSH2 0x206 JUMPI DUP1 PUSH4 0xFEAF968C EQ PUSH2 0x236 JUMPI PUSH2 0xB2 JUMP JUMPDEST DUP1 PUSH4 0x313CE567 EQ PUSH2 0xB6 JUMPI DUP1 PUSH4 0x4AA2011F EQ PUSH2 0xD4 JUMPI DUP1 PUSH4 0x50D25BCD EQ PUSH2 0xF0 JUMPI DUP1 PUSH4 0x54FD4D50 EQ PUSH2 0x10E JUMPI DUP1 PUSH4 0x668A0F02 EQ PUSH2 0x12C JUMPI DUP1 PUSH4 0x7284E416 EQ PUSH2 0x14A JUMPI JUMPDEST PUSH0 PUSH0 REVERT JUMPDEST PUSH2 0xBE PUSH2 0x258 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0xCB SWAP2 SWAP1 PUSH2 0x4AC JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH2 0xEE PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 PUSH2 0xE9 SWAP2 SWAP1 PUSH2 0x56E JUMP JUMPDEST PUSH2 0x269 JUMP JUMPDEST STOP JUMPDEST PUSH2 0xF8 PUSH2 0x2D8 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x105 SWAP2 SWAP1 PUSH2 0x5E1 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH2 0x116 PUSH2 0x2DE JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x123 SWAP2 SWAP1 PUSH2 0x609 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH2 0x134 PUSH2 0x2E2 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x141 SWAP2 SWAP1 PUSH2 0x609 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH2 0x152 PUSH2 0x2E8 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x15F SWAP2 SWAP1 PUSH2 0x692 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH2 0x170 PUSH2 0x325 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x17D SWAP2 SWAP1 PUSH2 0x609 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH2 0x1A0 PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 PUSH2 0x19B SWAP2 SWAP1 PUSH2 0x6B2 JUMP JUMPDEST PUSH2 0x32B JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x1B1 SWAP6 SWAP5 SWAP4 SWAP3 SWAP2 SWAP1 PUSH2 0x6EC JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH2 0x1D4 PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 PUSH2 0x1CF SWAP2 SWAP1 PUSH2 0x73D JUMP JUMPDEST PUSH2 0x39F JUMP JUMPDEST STOP JUMPDEST PUSH2 0x1F0 PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 PUSH2 0x1EB SWAP2 SWAP1 PUSH2 0x768 JUMP JUMPDEST PUSH2 0x40F JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x1FD SWAP2 SWAP1 PUSH2 0x5E1 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH2 0x220 PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 PUSH2 0x21B SWAP2 SWAP1 PUSH2 0x768 JUMP JUMPDEST PUSH2 0x424 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x22D SWAP2 SWAP1 PUSH2 0x609 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH2 0x23E PUSH2 0x439 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x24F SWAP6 SWAP5 SWAP4 SWAP3 SWAP2 SWAP1 PUSH2 0x6EC JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH0 PUSH0 SWAP1 SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH1 0xFF AND DUP2 JUMP JUMPDEST DUP4 PUSH10 0xFFFFFFFFFFFFFFFFFFFF AND PUSH1 0x3 DUP2 SWAP1 SSTORE POP DUP3 PUSH1 0x1 DUP2 SWAP1 SSTORE POP DUP2 PUSH1 0x2 DUP2 SWAP1 SSTORE POP DUP3 PUSH1 0x4 PUSH0 PUSH1 0x3 SLOAD DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH0 KECCAK256 DUP2 SWAP1 SSTORE POP DUP2 PUSH1 0x5 PUSH0 PUSH1 0x3 SLOAD DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH0 KECCAK256 DUP2 SWAP1 SSTORE POP DUP1 PUSH1 0x6 PUSH0 PUSH1 0x3 SLOAD DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH0 KECCAK256 DUP2 SWAP1 SSTORE POP POP POP POP POP JUMP JUMPDEST PUSH1 0x1 SLOAD DUP2 JUMP JUMPDEST PUSH0 DUP2 JUMP JUMPDEST PUSH1 0x3 SLOAD DUP2 JUMP JUMPDEST PUSH1 0x60 PUSH1 0x40 MLOAD DUP1 PUSH1 0x40 ADD PUSH1 0x40 MSTORE DUP1 PUSH1 0x1F DUP2 MSTORE PUSH1 0x20 ADD PUSH32 0x76302E382F74657374732F4D6F636B563341676772656761746F722E736F6C00 DUP2 MSTORE POP SWAP1 POP SWAP1 JUMP JUMPDEST PUSH1 0x2 SLOAD DUP2 JUMP JUMPDEST PUSH0 PUSH0 PUSH0 PUSH0 PUSH0 DUP6 PUSH1 0x4 PUSH0 DUP9 PUSH10 0xFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH0 KECCAK256 SLOAD PUSH1 0x6 PUSH0 DUP10 PUSH10 0xFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH0 KECCAK256 SLOAD PUSH1 0x5 PUSH0 DUP11 PUSH10 0xFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH0 KECCAK256 SLOAD DUP10 SWAP5 POP SWAP5 POP SWAP5 POP SWAP5 POP SWAP5 POP SWAP2 SWAP4 SWAP6 SWAP1 SWAP3 SWAP5 POP JUMP JUMPDEST DUP1 PUSH1 0x1 DUP2 SWAP1 SSTORE POP TIMESTAMP PUSH1 0x2 DUP2 SWAP1 SSTORE POP PUSH1 0x3 PUSH0 DUP2 SLOAD DUP1 SWAP3 SWAP2 SWAP1 PUSH2 0x3BF SWAP1 PUSH2 0x7C0 JUMP JUMPDEST SWAP2 SWAP1 POP SSTORE POP DUP1 PUSH1 0x4 PUSH0 PUSH1 0x3 SLOAD DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH0 KECCAK256 DUP2 SWAP1 SSTORE POP TIMESTAMP PUSH1 0x5 PUSH0 PUSH1 0x3 SLOAD DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH0 KECCAK256 DUP2 SWAP1 SSTORE POP TIMESTAMP PUSH1 0x6 PUSH0 PUSH1 0x3 SLOAD DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH0 KECCAK256 DUP2 SWAP1 SSTORE POP POP JUMP JUMPDEST PUSH1 0x4 PUSH1 0x20 MSTORE DUP1 PUSH0 MSTORE PUSH1 0x40 PUSH0 KECCAK256 PUSH0 SWAP2 POP SWAP1 POP SLOAD DUP2 JUMP JUMPDEST PUSH1 0x5 PUSH1 0x20 MSTORE DUP1 PUSH0 MSTORE PUSH1 0x40 PUSH0 KECCAK256 PUSH0 SWAP2 POP SWAP1 POP SLOAD DUP2 JUMP JUMPDEST PUSH0 PUSH0 PUSH0 PUSH0 PUSH0 PUSH1 0x3 SLOAD PUSH1 0x4 PUSH0 PUSH1 0x3 SLOAD DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH0 KECCAK256 SLOAD PUSH1 0x6 PUSH0 PUSH1 0x3 SLOAD DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH0 KECCAK256 SLOAD PUSH1 0x5 PUSH0 PUSH1 0x3 SLOAD DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH0 KECCAK256 SLOAD PUSH1 0x3 SLOAD SWAP5 POP SWAP5 POP SWAP5 POP SWAP5 POP SWAP5 POP SWAP1 SWAP2 SWAP3 SWAP4 SWAP5 JUMP JUMPDEST PUSH0 PUSH1 0xFF DUP3 AND SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH2 0x4A6 DUP2 PUSH2 0x491 JUMP JUMPDEST DUP3 MSTORE POP POP JUMP JUMPDEST PUSH0 PUSH1 0x20 DUP3 ADD SWAP1 POP PUSH2 0x4BF PUSH0 DUP4 ADD DUP5 PUSH2 0x49D JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH0 PUSH0 REVERT JUMPDEST PUSH0 PUSH10 0xFFFFFFFFFFFFFFFFFFFF DUP3 AND SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH2 0x4E7 DUP2 PUSH2 0x4C9 JUMP JUMPDEST DUP2 EQ PUSH2 0x4F1 JUMPI PUSH0 PUSH0 REVERT JUMPDEST POP JUMP JUMPDEST PUSH0 DUP2 CALLDATALOAD SWAP1 POP PUSH2 0x502 DUP2 PUSH2 0x4DE JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH0 DUP2 SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH2 0x51A DUP2 PUSH2 0x508 JUMP JUMPDEST DUP2 EQ PUSH2 0x524 JUMPI PUSH0 PUSH0 REVERT JUMPDEST POP JUMP JUMPDEST PUSH0 DUP2 CALLDATALOAD SWAP1 POP PUSH2 0x535 DUP2 PUSH2 0x511 JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH0 DUP2 SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH2 0x54D DUP2 PUSH2 0x53B JUMP JUMPDEST DUP2 EQ PUSH2 0x557 JUMPI PUSH0 PUSH0 REVERT JUMPDEST POP JUMP JUMPDEST PUSH0 DUP2 CALLDATALOAD SWAP1 POP PUSH2 0x568 DUP2 PUSH2 0x544 JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH0 PUSH0 PUSH0 PUSH0 PUSH1 0x80 DUP6 DUP8 SUB SLT ISZERO PUSH2 0x586 JUMPI PUSH2 0x585 PUSH2 0x4C5 JUMP JUMPDEST JUMPDEST PUSH0 PUSH2 0x593 DUP8 DUP3 DUP9 ADD PUSH2 0x4F4 JUMP JUMPDEST SWAP5 POP POP PUSH1 0x20 PUSH2 0x5A4 DUP8 DUP3 DUP9 ADD PUSH2 0x527 JUMP JUMPDEST SWAP4 POP POP PUSH1 0x40 PUSH2 0x5B5 DUP8 DUP3 DUP9 ADD PUSH2 0x55A JUMP JUMPDEST SWAP3 POP POP PUSH1 0x60 PUSH2 0x5C6 DUP8 DUP3 DUP9 ADD PUSH2 0x55A JUMP JUMPDEST SWAP2 POP POP SWAP3 SWAP6 SWAP2 SWAP5 POP SWAP3 POP JUMP JUMPDEST PUSH2 0x5DB DUP2 PUSH2 0x508 JUMP JUMPDEST DUP3 MSTORE POP POP JUMP JUMPDEST PUSH0 PUSH1 0x20 DUP3 ADD SWAP1 POP PUSH2 0x5F4 PUSH0 DUP4 ADD DUP5 PUSH2 0x5D2 JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH2 0x603 DUP2 PUSH2 0x53B JUMP JUMPDEST DUP3 MSTORE POP POP JUMP JUMPDEST PUSH0 PUSH1 0x20 DUP3 ADD SWAP1 POP PUSH2 0x61C PUSH0 DUP4 ADD DUP5 PUSH2 0x5FA JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH0 DUP2 MLOAD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH0 DUP3 DUP3 MSTORE PUSH1 0x20 DUP3 ADD SWAP1 POP SWAP3 SWAP2 POP POP JUMP JUMPDEST DUP3 DUP2 DUP4 MCOPY PUSH0 DUP4 DUP4 ADD MSTORE POP POP POP JUMP JUMPDEST PUSH0 PUSH1 0x1F NOT PUSH1 0x1F DUP4 ADD AND SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH0 PUSH2 0x664 DUP3 PUSH2 0x622 JUMP JUMPDEST PUSH2 0x66E DUP2 DUP6 PUSH2 0x62C JUMP JUMPDEST SWAP4 POP PUSH2 0x67E DUP2 DUP6 PUSH1 0x20 DUP7 ADD PUSH2 0x63C JUMP JUMPDEST PUSH2 0x687 DUP2 PUSH2 0x64A JUMP JUMPDEST DUP5 ADD SWAP2 POP POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH0 PUSH1 0x20 DUP3 ADD SWAP1 POP DUP2 DUP2 SUB PUSH0 DUP4 ADD MSTORE PUSH2 0x6AA DUP2 DUP5 PUSH2 0x65A JUMP JUMPDEST SWAP1 POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH0 PUSH1 0x20 DUP3 DUP5 SUB SLT ISZERO PUSH2 0x6C7 JUMPI PUSH2 0x6C6 PUSH2 0x4C5 JUMP JUMPDEST JUMPDEST PUSH0 PUSH2 0x6D4 DUP5 DUP3 DUP6 ADD PUSH2 0x4F4 JUMP JUMPDEST SWAP2 POP POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH2 0x6E6 DUP2 PUSH2 0x4C9 JUMP JUMPDEST DUP3 MSTORE POP POP JUMP JUMPDEST PUSH0 PUSH1 0xA0 DUP3 ADD SWAP1 POP PUSH2 0x6FF PUSH0 DUP4 ADD DUP9 PUSH2 0x6DD JUMP JUMPDEST PUSH2 0x70C PUSH1 0x20 DUP4 ADD DUP8 PUSH2 0x5D2 JUMP JUMPDEST PUSH2 0x719 PUSH1 0x40 DUP4 ADD DUP7 PUSH2 0x5FA JUMP JUMPDEST PUSH2 0x726 PUSH1 0x60 DUP4 ADD DUP6 PUSH2 0x5FA JUMP JUMPDEST PUSH2 0x733 PUSH1 0x80 DUP4 ADD DUP5 PUSH2 0x6DD JUMP JUMPDEST SWAP7 SWAP6 POP POP POP POP POP POP JUMP JUMPDEST PUSH0 PUSH1 0x20 DUP3 DUP5 SUB SLT ISZERO PUSH2 0x752 JUMPI PUSH2 0x751 PUSH2 0x4C5 JUMP JUMPDEST JUMPDEST PUSH0 PUSH2 0x75F DUP5 DUP3 DUP6 ADD PUSH2 0x527 JUMP JUMPDEST SWAP2 POP POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH0 PUSH1 0x20 DUP3 DUP5 SUB SLT ISZERO PUSH2 0x77D JUMPI PUSH2 0x77C PUSH2 0x4C5 JUMP JUMPDEST JUMPDEST PUSH0 PUSH2 0x78A DUP5 DUP3 DUP6 ADD PUSH2 0x55A JUMP JUMPDEST SWAP2 POP POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH32 0x4E487B7100000000000000000000000000000000000000000000000000000000 PUSH0 MSTORE PUSH1 0x11 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH0 REVERT JUMPDEST PUSH0 PUSH2 0x7CA DUP3 PUSH2 0x53B JUMP JUMPDEST SWAP2 POP PUSH32 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF DUP3 SUB PUSH2 0x7FC JUMPI PUSH2 0x7FB PUSH2 0x793 JUMP JUMPDEST JUMPDEST PUSH1 0x1 DUP3 ADD SWAP1 POP SWAP2 SWAP1 POP JUMP INVALID LOG2 PUSH5 0x6970667358 0x22 SLT KECCAK256 STOP 0xE0 0xB8 DUP2 0xAF PUSH27 0x128C3D973EE4C185B63460AC33D7E43B06CD0B6C07500CB24F6A64 PUSH20 0x6F6C634300081C00330000000000000000000000 ",
      "sourceMap": "684:176:5:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;529:30:3;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;1251:326;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;563:35;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;480:44;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;645:35;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;2230:121;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;602:39;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;1581:297;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;;;;;:::i;:::-;;;;;;;;975:272;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;685:52;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;741:56;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;1882:344;;;:::i;:::-;;;;;;;;;;;:::i;:::-;;;;;;;;529:30;;;;;;;;;;;;;:::o;1251:326::-;1376:8;1362:22;;:11;:22;;;;1405:7;1390:12;:22;;;;1436:10;1418:15;:28;;;;1477:7;1452:9;:22;1462:11;;1452:22;;;;;;;;;;;:32;;;;1518:10;1490:12;:25;1503:11;;1490:25;;;;;;;;;;;:38;;;;1562:10;1534:12;:25;1547:11;;1534:25;;;;;;;;;;;:38;;;;1251:326;;;;:::o;563:35::-;;;;:::o;480:44::-;523:1;480:44;:::o;645:35::-;;;;:::o;2230:121::-;2285:13;2306:40;;;;;;;;;;;;;;;;;;;2230:121;:::o;602:39::-;;;;:::o;1581:297::-;1676:14;1692:13;1707:17;1726;1745:22;1785:8;1795:9;:19;1805:8;1795:19;;;;;;;;;;;;;;1816:12;:22;1829:8;1816:22;;;;;;;;;;;;;;1840:12;:22;1853:8;1840:22;;;;;;;;;;;;;;1864:8;1777:96;;;;;;;;;;1581:297;;;;;;;:::o;975:272::-;1041:7;1026:12;:22;;;;1072:15;1054;:33;;;;1093:11;;:13;;;;;;;;;:::i;:::-;;;;;;1137:7;1112:9;:22;1122:11;;1112:22;;;;;;;;;;;:32;;;;1178:15;1150:12;:25;1163:11;;1150:25;;;;;;;;;;;:43;;;;1227:15;1199:12;:25;1212:11;;1199:25;;;;;;;;;;;:43;;;;975:272;:::o;685:52::-;;;;;;;;;;;;;;;;;:::o;741:56::-;;;;;;;;;;;;;;;;;:::o;1882:344::-;1957:14;1973:13;1988:17;2007;2026:22;2080:11;;2100:9;:22;2110:11;;2100:22;;;;;;;;;;;;2130:12;:25;2143:11;;2130:25;;;;;;;;;;;;2163:12;:25;2176:11;;2163:25;;;;;;;;;;;;2203:11;;2058:163;;;;;;;;;;1882:344;;;;;:::o;7:86:6:-;42:7;82:4;75:5;71:16;60:27;;7:86;;;:::o;99:112::-;182:22;198:5;182:22;:::i;:::-;177:3;170:35;99:112;;:::o;217:214::-;306:4;344:2;333:9;329:18;321:26;;357:67;421:1;410:9;406:17;397:6;357:67;:::i;:::-;217:214;;;;:::o;518:117::-;627:1;624;617:12;764:105;800:7;840:22;833:5;829:34;818:45;;764:105;;;:::o;875:120::-;947:23;964:5;947:23;:::i;:::-;940:5;937:34;927:62;;985:1;982;975:12;927:62;875:120;:::o;1001:137::-;1046:5;1084:6;1071:20;1062:29;;1100:32;1126:5;1100:32;:::i;:::-;1001:137;;;;:::o;1144:76::-;1180:7;1209:5;1198:16;;1144:76;;;:::o;1226:120::-;1298:23;1315:5;1298:23;:::i;:::-;1291:5;1288:34;1278:62;;1336:1;1333;1326:12;1278:62;1226:120;:::o;1352:137::-;1397:5;1435:6;1422:20;1413:29;;1451:32;1477:5;1451:32;:::i;:::-;1352:137;;;;:::o;1495:77::-;1532:7;1561:5;1550:16;;1495:77;;;:::o;1578:122::-;1651:24;1669:5;1651:24;:::i;:::-;1644:5;1641:35;1631:63;;1690:1;1687;1680:12;1631:63;1578:122;:::o;1706:139::-;1752:5;1790:6;1777:20;1768:29;;1806:33;1833:5;1806:33;:::i;:::-;1706:139;;;;:::o;1851:761::-;1935:6;1943;1951;1959;2008:3;1996:9;1987:7;1983:23;1979:33;1976:120;;;2015:79;;:::i;:::-;1976:120;2135:1;2160:52;2204:7;2195:6;2184:9;2180:22;2160:52;:::i;:::-;2150:62;;2106:116;2261:2;2287:52;2331:7;2322:6;2311:9;2307:22;2287:52;:::i;:::-;2277:62;;2232:117;2388:2;2414:53;2459:7;2450:6;2439:9;2435:22;2414:53;:::i;:::-;2404:63;;2359:118;2516:2;2542:53;2587:7;2578:6;2567:9;2563:22;2542:53;:::i;:::-;2532:63;;2487:118;1851:761;;;;;;;:::o;2618:115::-;2703:23;2720:5;2703:23;:::i;:::-;2698:3;2691:36;2618:115;;:::o;2739:218::-;2830:4;2868:2;2857:9;2853:18;2845:26;;2881:69;2947:1;2936:9;2932:17;2923:6;2881:69;:::i;:::-;2739:218;;;;:::o;2963:118::-;3050:24;3068:5;3050:24;:::i;:::-;3045:3;3038:37;2963:118;;:::o;3087:222::-;3180:4;3218:2;3207:9;3203:18;3195:26;;3231:71;3299:1;3288:9;3284:17;3275:6;3231:71;:::i;:::-;3087:222;;;;:::o;3315:99::-;3367:6;3401:5;3395:12;3385:22;;3315:99;;;:::o;3420:169::-;3504:11;3538:6;3533:3;3526:19;3578:4;3573:3;3569:14;3554:29;;3420:169;;;;:::o;3595:139::-;3684:6;3679:3;3674;3668:23;3725:1;3716:6;3711:3;3707:16;3700:27;3595:139;;;:::o;3740:102::-;3781:6;3832:2;3828:7;3823:2;3816:5;3812:14;3808:28;3798:38;;3740:102;;;:::o;3848:377::-;3936:3;3964:39;3997:5;3964:39;:::i;:::-;4019:71;4083:6;4078:3;4019:71;:::i;:::-;4012:78;;4099:65;4157:6;4152:3;4145:4;4138:5;4134:16;4099:65;:::i;:::-;4189:29;4211:6;4189:29;:::i;:::-;4184:3;4180:39;4173:46;;3940:285;3848:377;;;;:::o;4231:313::-;4344:4;4382:2;4371:9;4367:18;4359:26;;4431:9;4425:4;4421:20;4417:1;4406:9;4402:17;4395:47;4459:78;4532:4;4523:6;4459:78;:::i;:::-;4451:86;;4231:313;;;;:::o;4550:327::-;4608:6;4657:2;4645:9;4636:7;4632:23;4628:32;4625:119;;;4663:79;;:::i;:::-;4625:119;4783:1;4808:52;4852:7;4843:6;4832:9;4828:22;4808:52;:::i;:::-;4798:62;;4754:116;4550:327;;;;:::o;4883:115::-;4968:23;4985:5;4968:23;:::i;:::-;4963:3;4956:36;4883:115;;:::o;5004:652::-;5203:4;5241:3;5230:9;5226:19;5218:27;;5255:69;5321:1;5310:9;5306:17;5297:6;5255:69;:::i;:::-;5334:70;5400:2;5389:9;5385:18;5376:6;5334:70;:::i;:::-;5414:72;5482:2;5471:9;5467:18;5458:6;5414:72;:::i;:::-;5496;5564:2;5553:9;5549:18;5540:6;5496:72;:::i;:::-;5578:71;5644:3;5633:9;5629:19;5620:6;5578:71;:::i;:::-;5004:652;;;;;;;;:::o;5662:327::-;5720:6;5769:2;5757:9;5748:7;5744:23;5740:32;5737:119;;;5775:79;;:::i;:::-;5737:119;5895:1;5920:52;5964:7;5955:6;5944:9;5940:22;5920:52;:::i;:::-;5910:62;;5866:116;5662:327;;;;:::o;5995:329::-;6054:6;6103:2;6091:9;6082:7;6078:23;6074:32;6071:119;;;6109:79;;:::i;:::-;6071:119;6229:1;6254:53;6299:7;6290:6;6279:9;6275:22;6254:53;:::i;:::-;6244:63;;6200:117;5995:329;;;;:::o;6330:180::-;6378:77;6375:1;6368:88;6475:4;6472:1;6465:15;6499:4;6496:1;6489:15;6516:233;6555:3;6578:24;6596:5;6578:24;:::i;:::-;6569:33;;6624:66;6617:5;6614:77;6611:103;;6694:18;;:::i;:::-;6611:103;6741:1;6734:5;6730:13;6723:20;;6516:233;;;:::o"
    },
    "gasEstimates": {
      "creation": {
        "codeDepositCost": "421800",
        "executionCost": "infinite",
        "totalCost": "infinite"
      },
      "external": {
        "decimals()": "2466",
        "description()": "infinite",
        "getAnswer(uint256)": "2820",
        "getRoundData(uint80)": "infinite",
        "getTimestamp(uint256)": "infinite",
        "latestAnswer()": "2470",
        "latestRound()": "2514",
        "latestRoundData()": "infinite",
        "latestTimestamp()": "2425",
        "updateAnswer(int256)": "141894",
        "updateRoundData(uint80,int256,uint256,uint256)": "infinite",
        "version()": "391"
      }
    },
    "methodIdentifiers": {
      "decimals()": "313ce567",
      "description()": "7284e416",
      "getAnswer(uint256)": "b5ab58dc",
      "getRoundData(uint80)": "9a6fc8f5",
      "getTimestamp(uint256)": "b633620c",
      "latestAnswer()": "50d25bcd",
      "latestRound()": "668a0f02",
      "latestRoundData()": "feaf968c",
      "latestTimestamp()": "8205bf6a",
      "updateAnswer(int256)": "a87a20ce",
      "updateRoundData(uint80,int256,uint256,uint256)": "4aa2011f",
      "version()": "54fd4d50"
    }
  },
  "metadata": "{\"compiler\":{\"version\":\"0.8.28+commit.7893614a\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"uint8\",\"name\":\"_decimals\",\"type\":\"uint8\"},{\"internalType\":\"int256\",\"name\":\"_initialAnswer\",\"type\":\"int256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"int256\",\"name\":\"current\",\"type\":\"int256\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"roundId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"updatedAt\",\"type\":\"uint256\"}],\"name\":\"AnswerUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"roundId\",\"type\":\"uint256\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"startedBy\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"startedAt\",\"type\":\"uint256\"}],\"name\":\"NewRound\",\"type\":\"event\"},{\"inputs\":[],\"name\":\"decimals\",\"outputs\":[{\"internalType\":\"uint8\",\"name\":\"\",\"type\":\"uint8\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"description\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"getAnswer\",\"outputs\":[{\"internalType\":\"int256\",\"name\":\"\",\"type\":\"int256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint80\",\"name\":\"_roundId\",\"type\":\"uint80\"}],\"name\":\"getRoundData\",\"outputs\":[{\"internalType\":\"uint80\",\"name\":\"roundId\",\"type\":\"uint80\"},{\"internalType\":\"int256\",\"name\":\"answer\",\"type\":\"int256\"},{\"internalType\":\"uint256\",\"name\":\"startedAt\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"updatedAt\",\"type\":\"uint256\"},{\"internalType\":\"uint80\",\"name\":\"answeredInRound\",\"type\":\"uint80\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"getTimestamp\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"latestAnswer\",\"outputs\":[{\"internalType\":\"int256\",\"name\":\"\",\"type\":\"int256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"latestRound\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"latestRoundData\",\"outputs\":[{\"internalType\":\"uint80\",\"name\":\"roundId\",\"type\":\"uint80\"},{\"internalType\":\"int256\",\"name\":\"answer\",\"type\":\"int256\"},{\"internalType\":\"uint256\",\"name\":\"startedAt\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"updatedAt\",\"type\":\"uint256\"},{\"internalType\":\"uint80\",\"name\":\"answeredInRound\",\"type\":\"uint80\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"latestTimestamp\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"int256\",\"name\":\"_answer\",\"type\":\"int256\"}],\"name\":\"updateAnswer\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint80\",\"name\":\"_roundId\",\"type\":\"uint80\"},{\"internalType\":\"int256\",\"name\":\"_answer\",\"type\":\"int256\"},{\"internalType\":\"uint256\",\"name\":\"_timestamp\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_startedAt\",\"type\":\"uint256\"}],\"name\":\"updateRoundData\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"version\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"project/contracts/mocks/MockV3Aggregator.sol\":\"MyMockV3Aggregator\"},\"evmVersion\":\"cancun\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\",\"useLiteralContent\":true},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[\"project/:@chainlink/contracts/=npm/@chainlink/contracts@1.4.0/\"]},\"sources\":{\"npm/@chainlink/contracts@1.4.0/src/v0.8/shared/interfaces/AggregatorInterface.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\npragma solidity ^0.8.0;\\n\\n// solhint-disable-next-line interface-starts-with-i\\ninterface AggregatorInterface {\\n  function latestAnswer() external view returns (int256);\\n\\n  function latestTimestamp() external view returns (uint256);\\n\\n  function latestRound() external view returns (uint256);\\n\\n  function getAnswer(uint256 roundId) external view returns (int256);\\n\\n  function getTimestamp(uint256 roundId) external view returns (uint256);\\n\\n  event AnswerUpdated(int256 indexed current, uint256 indexed roundId, uint256 updatedAt);\\n\\n  event NewRound(uint256 indexed roundId, address indexed startedBy, uint256 startedAt);\\n}\\n\",\"keccak256\":\"0x2450923d9bc223f53bcbbd50a17405929ce5322200e8ce053c7918030cbb7844\",\"license\":\"MIT\"},\"npm/@chainlink/contracts@1.4.0/src/v0.8/shared/interfaces/AggregatorV2V3Interface.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\npragma solidity ^0.8.0;\\n\\nimport {AggregatorInterface} from \\\"./AggregatorInterface.sol\\\";\\nimport {AggregatorV3Interface} from \\\"./AggregatorV3Interface.sol\\\";\\n\\n// solhint-disable-next-line interface-starts-with-i\\ninterface AggregatorV2V3Interface is AggregatorInterface, AggregatorV3Interface {}\\n\",\"keccak256\":\"0xd5e222c5dd223490b766da8e45266101dd3635b1ba31d9b7a3a80d49f7640f85\",\"license\":\"MIT\"},\"npm/@chainlink/contracts@1.4.0/src/v0.8/shared/interfaces/AggregatorV3Interface.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\npragma solidity ^0.8.0;\\n\\n// solhint-disable-next-line interface-starts-with-i\\ninterface AggregatorV3Interface {\\n  function decimals() external view returns (uint8);\\n\\n  function description() external view returns (string memory);\\n\\n  function version() external view returns (uint256);\\n\\n  function getRoundData(\\n    uint80 _roundId\\n  ) external view returns (uint80 roundId, int256 answer, uint256 startedAt, uint256 updatedAt, uint80 answeredInRound);\\n\\n  function latestRoundData()\\n    external\\n    view\\n    returns (uint80 roundId, int256 answer, uint256 startedAt, uint256 updatedAt, uint80 answeredInRound);\\n}\\n\",\"keccak256\":\"0x257a8d28fa83d3d942547c8e129ef465e4b5f3f31171e7be4739a4c98da6b4f0\",\"license\":\"MIT\"},\"npm/@chainlink/contracts@1.4.0/src/v0.8/shared/mocks/MockV3Aggregator.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\npragma solidity ^0.8.0;\\n\\nimport {AggregatorV2V3Interface} from \\\"../interfaces/AggregatorV2V3Interface.sol\\\";\\n\\n/**\\n * @title MockV3Aggregator\\n * @notice Based on the FluxAggregator contract\\n * @notice Use this contract when you need to test\\n * other contract's ability to read data from an\\n * aggregator contract, but how the aggregator got\\n * its answer is unimportant\\n */\\n// solhint-disable\\ncontract MockV3Aggregator is AggregatorV2V3Interface {\\n  uint256 public constant override version = 0;\\n\\n  uint8 public override decimals;\\n  int256 public override latestAnswer;\\n  uint256 public override latestTimestamp;\\n  uint256 public override latestRound;\\n\\n  mapping(uint256 => int256) public override getAnswer;\\n  mapping(uint256 => uint256) public override getTimestamp;\\n  mapping(uint256 => uint256) private getStartedAt;\\n\\n  constructor(uint8 _decimals, int256 _initialAnswer) {\\n    decimals = _decimals;\\n    updateAnswer(_initialAnswer);\\n  }\\n\\n  function updateAnswer(int256 _answer) public {\\n    latestAnswer = _answer;\\n    latestTimestamp = block.timestamp;\\n    latestRound++;\\n    getAnswer[latestRound] = _answer;\\n    getTimestamp[latestRound] = block.timestamp;\\n    getStartedAt[latestRound] = block.timestamp;\\n  }\\n\\n  function updateRoundData(uint80 _roundId, int256 _answer, uint256 _timestamp, uint256 _startedAt) public {\\n    latestRound = _roundId;\\n    latestAnswer = _answer;\\n    latestTimestamp = _timestamp;\\n    getAnswer[latestRound] = _answer;\\n    getTimestamp[latestRound] = _timestamp;\\n    getStartedAt[latestRound] = _startedAt;\\n  }\\n\\n  function getRoundData(\\n    uint80 _roundId\\n  )\\n    external\\n    view\\n    override\\n    returns (uint80 roundId, int256 answer, uint256 startedAt, uint256 updatedAt, uint80 answeredInRound)\\n  {\\n    return (_roundId, getAnswer[_roundId], getStartedAt[_roundId], getTimestamp[_roundId], _roundId);\\n  }\\n\\n  function latestRoundData()\\n    external\\n    view\\n    override\\n    returns (uint80 roundId, int256 answer, uint256 startedAt, uint256 updatedAt, uint80 answeredInRound)\\n  {\\n    return (\\n      uint80(latestRound),\\n      getAnswer[latestRound],\\n      getStartedAt[latestRound],\\n      getTimestamp[latestRound],\\n      uint80(latestRound)\\n    );\\n  }\\n\\n  function description() external pure override returns (string memory) {\\n    return \\\"v0.8/tests/MockV3Aggregator.sol\\\";\\n  }\\n}\\n\",\"keccak256\":\"0x27a9502fd9c7decd2d3213653050e29bdfa2f5e71f2a83d4c98120de4b9c711f\",\"license\":\"MIT\"},\"project/contracts/mocks/MockV3Aggregator.sol\":{\"content\":\"//SPDX-License-Identifier: MIT\\n// mock\\u5408\\u7ea6\\uff0c\\n// FundMe\\u5408\\u7ea6\\u4e2d\\u7528\\u5230\\u4e86dataFeed\\u5408\\u7ea6\\uff0c\\u9700\\u8981\\u5728\\u6d4b\\u8bd5\\u7684\\u65f6\\u5019\\u5fc5\\u987b\\u5728sepolia\\u4e2d\\u8fdb\\u884c\\u3002\\n// MockV3Aggregator  mock\\u5408\\u7ea6\\u5b9e\\u73b0\\u4e86dataFeed\\u5408\\u7ea6\\u7684\\u57fa\\u672c\\u529f\\u80fd\\uff0c\\u53ea\\u9700\\u8981\\u5728\\u672c\\u5730\\u90e8\\u7f72\\u5c31\\u53ef\\u4ee5\\uff0c\\u4e0d\\u9700\\u8981\\u518dsepolia\\u4e2d\\u8fdb\\u884c\\u3002\\n// \\u8fd9\\u4e2amock\\u5408\\u7ea6\\u9700\\u8981\\u4e24\\u4e2a\\u53c2\\u6570\\n// decimals\\uff1amock\\u5408\\u7ea6\\u63d0\\u4f9b\\u7684\\u4ef7\\u683c\\u6570\\u636e\\uff0c\\u540e\\u9762\\u6709\\u51e0\\u4e2a0\\u3002\\u8bbe\\u4e3a8\\n// initialAnswer\\uff1a\\u8fd4\\u56de\\u4ef7\\u683c\\uff0c\\u771f\\u6b63\\u7684\\u9884\\u8a00\\u673a\\u5408\\u7ea6\\u5e94\\u8be5\\u662f\\u4ece\\u5916\\u90e8\\u83b7\\u53d6\\u7684\\uff0c\\u8fd9\\u4e2amock\\u5408\\u7ea6\\u662f\\u81ea\\u5df1\\u8bbe\\u5b9a\\u7684\\u3002300000000000\\uff083000\\u540e\\u97628\\u4e2a\\u96f6\\uff09\\npragma solidity ^0.8.20;\\n\\nimport {MockV3Aggregator} from \\\"@chainlink/contracts/src/v0.8/shared/mocks/MockV3Aggregator.sol\\\";\\n\\ncontract MyMockV3Aggregator is MockV3Aggregator {\\n    constructor(\\n        uint8 _decimals,\\n        int256 _initialAnswer\\n    ) MockV3Aggregator(_decimals, _initialAnswer) {}\\n}\\n\",\"keccak256\":\"0x5aa45c98fabf2cb68c5f57b7202381fc248c0e638302dd2f66dda681f5a58b24\",\"license\":\"MIT\"}},\"version\":1}",
  "storageLayout": {
    "storage": [
      {
        "astId": 118,
        "contract": "project/contracts/mocks/MockV3Aggregator.sol:MyMockV3Aggregator",
        "label": "decimals",
        "offset": 0,
        "slot": "0",
        "type": "t_uint8"
      },
      {
        "astId": 121,
        "contract": "project/contracts/mocks/MockV3Aggregator.sol:MyMockV3Aggregator",
        "label": "latestAnswer",
        "offset": 0,
        "slot": "1",
        "type": "t_int256"
      },
      {
        "astId": 124,
        "contract": "project/contracts/mocks/MockV3Aggregator.sol:MyMockV3Aggregator",
        "label": "latestTimestamp",
        "offset": 0,
        "slot": "2",
        "type": "t_uint256"
      },
      {
        "astId": 127,
        "contract": "project/contracts/mocks/MockV3Aggregator.sol:MyMockV3Aggregator",
        "label": "latestRound",
        "offset": 0,
        "slot": "3",
        "type": "t_uint256"
      },
      {
        "astId": 132,
        "contract": "project/contracts/mocks/MockV3Aggregator.sol:MyMockV3Aggregator",
        "label": "getAnswer",
        "offset": 0,
        "slot": "4",
        "type": "t_mapping(t_uint256,t_int256)"
      },
      {
        "astId": 137,
        "contract": "project/contracts/mocks/MockV3Aggregator.sol:MyMockV3Aggregator",
        "label": "getTimestamp",
        "offset": 0,
        "slot": "5",
        "type": "t_mapping(t_uint256,t_uint256)"
      },
      {
        "astId": 141,
        "contract": "project/contracts/mocks/MockV3Aggregator.sol:MyMockV3Aggregator",
        "label": "getStartedAt",
        "offset": 0,
        "slot": "6",
        "type": "t_mapping(t_uint256,t_uint256)"
      }
    ],
    "types": {
      "t_int256": {
        "encoding": "inplace",
        "label": "int256",
        "numberOfBytes": "32"
      },
      "t_mapping(t_uint256,t_int256)": {
        "encoding": "mapping",
        "key": "t_uint256",
        "label": "mapping(uint256 => int256)",
        "numberOfBytes": "32",
        "value": "t_int256"
      },
      "t_mapping(t_uint256,t_uint256)": {
        "encoding": "mapping",
        "key": "t_uint256",
        "label": "mapping(uint256 => uint256)",
        "numberOfBytes": "32",
        "value": "t_uint256"
      },
      "t_uint256": {
        "encoding": "inplace",
        "label": "uint256",
        "numberOfBytes": "32"
      },
      "t_uint8": {
        "encoding": "inplace",
        "label": "uint8",
        "numberOfBytes": "1"
      }
    }
  },
  "userdoc": {
    "kind": "user",
    "methods": {},
    "version": 1
  }
};