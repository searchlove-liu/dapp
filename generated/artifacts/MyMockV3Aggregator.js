export const Artifact_MyMockV3Aggregator = /** @type {const} **/ ({
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
  "bytecode": "0x608060405234801561000f575f5ffd5b5060405161050f38038061050f83398101604081905261002e916100a4565b5f805460ff191660ff8416179055818161004781610050565b505050506100f9565b60018190554260025560038054905f610068836100d5565b9091555050600380545f908152600460209081526040808320949094558254825260058152838220429081905592548252600690529190912055565b5f5f604083850312156100b5575f5ffd5b825160ff811681146100c5575f5ffd5b6020939093015192949293505050565b5f600182016100f257634e487b7160e01b5f52601160045260245ffd5b5060010190565b610409806101065f395ff3fe608060405234801561000f575f5ffd5b50600436106100b1575f3560e01c80638205bf6a1161006e5780638205bf6a1461019a5780639a6fc8f5146101a3578063a87a20ce14610220578063b5ab58dc14610233578063b633620c14610252578063feaf968c14610271575f5ffd5b8063313ce567146100b55780634aa2011f146100d857806350d25bcd1461013457806354fd4d501461014b578063668a0f02146101525780637284e4161461015b575b5f5ffd5b5f546100c19060ff1681565b60405160ff90911681526020015b60405180910390f35b6101326100e636600461030d565b69ffffffffffffffffffff9093166003818155600184905560028390555f9182526004602090815260408084209590955581548352600581528483209390935554815260069091522055565b005b61013d60015481565b6040519081526020016100cf565b61013d5f81565b61013d60035481565b604080518082018252601f81527f76302e382f74657374732f4d6f636b563341676772656761746f722e736f6c00602082015290516100cf9190610343565b61013d60025481565b6101e96101b1366004610378565b69ffffffffffffffffffff81165f90815260046020908152604080832054600683528184205460059093529220549293919290918490565b6040805169ffffffffffffffffffff968716815260208101959095528401929092526060830152909116608082015260a0016100cf565b61013261022e366004610398565b61029b565b61013d610241366004610398565b60046020525f908152604090205481565b61013d610260366004610398565b60056020525f908152604090205481565b6003545f8181526004602090815260408083205460068352818420546005909352922054836101e9565b60018190554260025560038054905f6102b3836103af565b9091555050600380545f908152600460209081526040808320949094558254825260058152838220429081905592548252600690529190912055565b803569ffffffffffffffffffff81168114610308575f5ffd5b919050565b5f5f5f5f60808587031215610320575f5ffd5b610329856102ef565b966020860135965060408601359560600135945092505050565b602081525f82518060208401528060208501604085015e5f604082850101526040601f19601f83011684010191505092915050565b5f60208284031215610388575f5ffd5b610391826102ef565b9392505050565b5f602082840312156103a8575f5ffd5b5035919050565b5f600182016103cc57634e487b7160e01b5f52601160045260245ffd5b506001019056fea2646970667358221220e101512d174377aae20ec779e2e28080bd585df9fe85e5749043a167f49ade9964736f6c634300081c0033",
  "deployedBytecode": "0x608060405234801561000f575f5ffd5b50600436106100b1575f3560e01c80638205bf6a1161006e5780638205bf6a1461019a5780639a6fc8f5146101a3578063a87a20ce14610220578063b5ab58dc14610233578063b633620c14610252578063feaf968c14610271575f5ffd5b8063313ce567146100b55780634aa2011f146100d857806350d25bcd1461013457806354fd4d501461014b578063668a0f02146101525780637284e4161461015b575b5f5ffd5b5f546100c19060ff1681565b60405160ff90911681526020015b60405180910390f35b6101326100e636600461030d565b69ffffffffffffffffffff9093166003818155600184905560028390555f9182526004602090815260408084209590955581548352600581528483209390935554815260069091522055565b005b61013d60015481565b6040519081526020016100cf565b61013d5f81565b61013d60035481565b604080518082018252601f81527f76302e382f74657374732f4d6f636b563341676772656761746f722e736f6c00602082015290516100cf9190610343565b61013d60025481565b6101e96101b1366004610378565b69ffffffffffffffffffff81165f90815260046020908152604080832054600683528184205460059093529220549293919290918490565b6040805169ffffffffffffffffffff968716815260208101959095528401929092526060830152909116608082015260a0016100cf565b61013261022e366004610398565b61029b565b61013d610241366004610398565b60046020525f908152604090205481565b61013d610260366004610398565b60056020525f908152604090205481565b6003545f8181526004602090815260408083205460068352818420546005909352922054836101e9565b60018190554260025560038054905f6102b3836103af565b9091555050600380545f908152600460209081526040808320949094558254825260058152838220429081905592548252600690529190912055565b803569ffffffffffffffffffff81168114610308575f5ffd5b919050565b5f5f5f5f60808587031215610320575f5ffd5b610329856102ef565b966020860135965060408601359560600135945092505050565b602081525f82518060208401528060208501604085015e5f604082850101526040601f19601f83011684010191505092915050565b5f60208284031215610388575f5ffd5b610391826102ef565b9392505050565b5f602082840312156103a8575f5ffd5b5035919050565b5f600182016103cc57634e487b7160e01b5f52601160045260245ffd5b506001019056fea2646970667358221220e101512d174377aae20ec779e2e28080bd585df9fe85e5749043a167f49ade9964736f6c634300081c0033",
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
        "@_329": {
          "entryPoint": null,
          "id": 329,
          "parameterSlots": 2,
          "returnSlots": 0
        },
        "@updateAnswer_195": {
          "entryPoint": 80,
          "id": 195,
          "parameterSlots": 1,
          "returnSlots": 0
        },
        "abi_decode_tuple_t_uint8t_int256_fromMemory": {
          "entryPoint": 164,
          "id": null,
          "parameterSlots": 2,
          "returnSlots": 2
        },
        "increment_t_uint256": {
          "entryPoint": 213,
          "id": null,
          "parameterSlots": 1,
          "returnSlots": 1
        }
      },
      "generatedSources": [
        {
          "ast": {
            "nativeSrc": "0:586:5",
            "nodeType": "YulBlock",
            "src": "0:586:5",
            "statements": [
              {
                "nativeSrc": "6:3:5",
                "nodeType": "YulBlock",
                "src": "6:3:5",
                "statements": []
              },
              {
                "body": {
                  "nativeSrc": "109:238:5",
                  "nodeType": "YulBlock",
                  "src": "109:238:5",
                  "statements": [
                    {
                      "body": {
                        "nativeSrc": "155:16:5",
                        "nodeType": "YulBlock",
                        "src": "155:16:5",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nativeSrc": "164:1:5",
                                  "nodeType": "YulLiteral",
                                  "src": "164:1:5",
                                  "type": "",
                                  "value": "0"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "167:1:5",
                                  "nodeType": "YulLiteral",
                                  "src": "167:1:5",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "revert",
                                "nativeSrc": "157:6:5",
                                "nodeType": "YulIdentifier",
                                "src": "157:6:5"
                              },
                              "nativeSrc": "157:12:5",
                              "nodeType": "YulFunctionCall",
                              "src": "157:12:5"
                            },
                            "nativeSrc": "157:12:5",
                            "nodeType": "YulExpressionStatement",
                            "src": "157:12:5"
                          }
                        ]
                      },
                      "condition": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "dataEnd",
                                "nativeSrc": "130:7:5",
                                "nodeType": "YulIdentifier",
                                "src": "130:7:5"
                              },
                              {
                                "name": "headStart",
                                "nativeSrc": "139:9:5",
                                "nodeType": "YulIdentifier",
                                "src": "139:9:5"
                              }
                            ],
                            "functionName": {
                              "name": "sub",
                              "nativeSrc": "126:3:5",
                              "nodeType": "YulIdentifier",
                              "src": "126:3:5"
                            },
                            "nativeSrc": "126:23:5",
                            "nodeType": "YulFunctionCall",
                            "src": "126:23:5"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "151:2:5",
                            "nodeType": "YulLiteral",
                            "src": "151:2:5",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "slt",
                          "nativeSrc": "122:3:5",
                          "nodeType": "YulIdentifier",
                          "src": "122:3:5"
                        },
                        "nativeSrc": "122:32:5",
                        "nodeType": "YulFunctionCall",
                        "src": "122:32:5"
                      },
                      "nativeSrc": "119:52:5",
                      "nodeType": "YulIf",
                      "src": "119:52:5"
                    },
                    {
                      "nativeSrc": "180:29:5",
                      "nodeType": "YulVariableDeclaration",
                      "src": "180:29:5",
                      "value": {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nativeSrc": "199:9:5",
                            "nodeType": "YulIdentifier",
                            "src": "199:9:5"
                          }
                        ],
                        "functionName": {
                          "name": "mload",
                          "nativeSrc": "193:5:5",
                          "nodeType": "YulIdentifier",
                          "src": "193:5:5"
                        },
                        "nativeSrc": "193:16:5",
                        "nodeType": "YulFunctionCall",
                        "src": "193:16:5"
                      },
                      "variables": [
                        {
                          "name": "value",
                          "nativeSrc": "184:5:5",
                          "nodeType": "YulTypedName",
                          "src": "184:5:5",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "body": {
                        "nativeSrc": "257:16:5",
                        "nodeType": "YulBlock",
                        "src": "257:16:5",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nativeSrc": "266:1:5",
                                  "nodeType": "YulLiteral",
                                  "src": "266:1:5",
                                  "type": "",
                                  "value": "0"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "269:1:5",
                                  "nodeType": "YulLiteral",
                                  "src": "269:1:5",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "revert",
                                "nativeSrc": "259:6:5",
                                "nodeType": "YulIdentifier",
                                "src": "259:6:5"
                              },
                              "nativeSrc": "259:12:5",
                              "nodeType": "YulFunctionCall",
                              "src": "259:12:5"
                            },
                            "nativeSrc": "259:12:5",
                            "nodeType": "YulExpressionStatement",
                            "src": "259:12:5"
                          }
                        ]
                      },
                      "condition": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "value",
                                "nativeSrc": "231:5:5",
                                "nodeType": "YulIdentifier",
                                "src": "231:5:5"
                              },
                              {
                                "arguments": [
                                  {
                                    "name": "value",
                                    "nativeSrc": "242:5:5",
                                    "nodeType": "YulIdentifier",
                                    "src": "242:5:5"
                                  },
                                  {
                                    "kind": "number",
                                    "nativeSrc": "249:4:5",
                                    "nodeType": "YulLiteral",
                                    "src": "249:4:5",
                                    "type": "",
                                    "value": "0xff"
                                  }
                                ],
                                "functionName": {
                                  "name": "and",
                                  "nativeSrc": "238:3:5",
                                  "nodeType": "YulIdentifier",
                                  "src": "238:3:5"
                                },
                                "nativeSrc": "238:16:5",
                                "nodeType": "YulFunctionCall",
                                "src": "238:16:5"
                              }
                            ],
                            "functionName": {
                              "name": "eq",
                              "nativeSrc": "228:2:5",
                              "nodeType": "YulIdentifier",
                              "src": "228:2:5"
                            },
                            "nativeSrc": "228:27:5",
                            "nodeType": "YulFunctionCall",
                            "src": "228:27:5"
                          }
                        ],
                        "functionName": {
                          "name": "iszero",
                          "nativeSrc": "221:6:5",
                          "nodeType": "YulIdentifier",
                          "src": "221:6:5"
                        },
                        "nativeSrc": "221:35:5",
                        "nodeType": "YulFunctionCall",
                        "src": "221:35:5"
                      },
                      "nativeSrc": "218:55:5",
                      "nodeType": "YulIf",
                      "src": "218:55:5"
                    },
                    {
                      "nativeSrc": "282:15:5",
                      "nodeType": "YulAssignment",
                      "src": "282:15:5",
                      "value": {
                        "name": "value",
                        "nativeSrc": "292:5:5",
                        "nodeType": "YulIdentifier",
                        "src": "292:5:5"
                      },
                      "variableNames": [
                        {
                          "name": "value0",
                          "nativeSrc": "282:6:5",
                          "nodeType": "YulIdentifier",
                          "src": "282:6:5"
                        }
                      ]
                    },
                    {
                      "nativeSrc": "306:35:5",
                      "nodeType": "YulAssignment",
                      "src": "306:35:5",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nativeSrc": "326:9:5",
                                "nodeType": "YulIdentifier",
                                "src": "326:9:5"
                              },
                              {
                                "kind": "number",
                                "nativeSrc": "337:2:5",
                                "nodeType": "YulLiteral",
                                "src": "337:2:5",
                                "type": "",
                                "value": "32"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nativeSrc": "322:3:5",
                              "nodeType": "YulIdentifier",
                              "src": "322:3:5"
                            },
                            "nativeSrc": "322:18:5",
                            "nodeType": "YulFunctionCall",
                            "src": "322:18:5"
                          }
                        ],
                        "functionName": {
                          "name": "mload",
                          "nativeSrc": "316:5:5",
                          "nodeType": "YulIdentifier",
                          "src": "316:5:5"
                        },
                        "nativeSrc": "316:25:5",
                        "nodeType": "YulFunctionCall",
                        "src": "316:25:5"
                      },
                      "variableNames": [
                        {
                          "name": "value1",
                          "nativeSrc": "306:6:5",
                          "nodeType": "YulIdentifier",
                          "src": "306:6:5"
                        }
                      ]
                    }
                  ]
                },
                "name": "abi_decode_tuple_t_uint8t_int256_fromMemory",
                "nativeSrc": "14:333:5",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "headStart",
                    "nativeSrc": "67:9:5",
                    "nodeType": "YulTypedName",
                    "src": "67:9:5",
                    "type": ""
                  },
                  {
                    "name": "dataEnd",
                    "nativeSrc": "78:7:5",
                    "nodeType": "YulTypedName",
                    "src": "78:7:5",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "value0",
                    "nativeSrc": "90:6:5",
                    "nodeType": "YulTypedName",
                    "src": "90:6:5",
                    "type": ""
                  },
                  {
                    "name": "value1",
                    "nativeSrc": "98:6:5",
                    "nodeType": "YulTypedName",
                    "src": "98:6:5",
                    "type": ""
                  }
                ],
                "src": "14:333:5"
              },
              {
                "body": {
                  "nativeSrc": "399:185:5",
                  "nodeType": "YulBlock",
                  "src": "399:185:5",
                  "statements": [
                    {
                      "body": {
                        "nativeSrc": "438:111:5",
                        "nodeType": "YulBlock",
                        "src": "438:111:5",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nativeSrc": "459:1:5",
                                  "nodeType": "YulLiteral",
                                  "src": "459:1:5",
                                  "type": "",
                                  "value": "0"
                                },
                                {
                                  "arguments": [
                                    {
                                      "kind": "number",
                                      "nativeSrc": "466:3:5",
                                      "nodeType": "YulLiteral",
                                      "src": "466:3:5",
                                      "type": "",
                                      "value": "224"
                                    },
                                    {
                                      "kind": "number",
                                      "nativeSrc": "471:10:5",
                                      "nodeType": "YulLiteral",
                                      "src": "471:10:5",
                                      "type": "",
                                      "value": "0x4e487b71"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "shl",
                                    "nativeSrc": "462:3:5",
                                    "nodeType": "YulIdentifier",
                                    "src": "462:3:5"
                                  },
                                  "nativeSrc": "462:20:5",
                                  "nodeType": "YulFunctionCall",
                                  "src": "462:20:5"
                                }
                              ],
                              "functionName": {
                                "name": "mstore",
                                "nativeSrc": "452:6:5",
                                "nodeType": "YulIdentifier",
                                "src": "452:6:5"
                              },
                              "nativeSrc": "452:31:5",
                              "nodeType": "YulFunctionCall",
                              "src": "452:31:5"
                            },
                            "nativeSrc": "452:31:5",
                            "nodeType": "YulExpressionStatement",
                            "src": "452:31:5"
                          },
                          {
                            "expression": {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nativeSrc": "503:1:5",
                                  "nodeType": "YulLiteral",
                                  "src": "503:1:5",
                                  "type": "",
                                  "value": "4"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "506:4:5",
                                  "nodeType": "YulLiteral",
                                  "src": "506:4:5",
                                  "type": "",
                                  "value": "0x11"
                                }
                              ],
                              "functionName": {
                                "name": "mstore",
                                "nativeSrc": "496:6:5",
                                "nodeType": "YulIdentifier",
                                "src": "496:6:5"
                              },
                              "nativeSrc": "496:15:5",
                              "nodeType": "YulFunctionCall",
                              "src": "496:15:5"
                            },
                            "nativeSrc": "496:15:5",
                            "nodeType": "YulExpressionStatement",
                            "src": "496:15:5"
                          },
                          {
                            "expression": {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nativeSrc": "531:1:5",
                                  "nodeType": "YulLiteral",
                                  "src": "531:1:5",
                                  "type": "",
                                  "value": "0"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "534:4:5",
                                  "nodeType": "YulLiteral",
                                  "src": "534:4:5",
                                  "type": "",
                                  "value": "0x24"
                                }
                              ],
                              "functionName": {
                                "name": "revert",
                                "nativeSrc": "524:6:5",
                                "nodeType": "YulIdentifier",
                                "src": "524:6:5"
                              },
                              "nativeSrc": "524:15:5",
                              "nodeType": "YulFunctionCall",
                              "src": "524:15:5"
                            },
                            "nativeSrc": "524:15:5",
                            "nodeType": "YulExpressionStatement",
                            "src": "524:15:5"
                          }
                        ]
                      },
                      "condition": {
                        "arguments": [
                          {
                            "name": "value",
                            "nativeSrc": "415:5:5",
                            "nodeType": "YulIdentifier",
                            "src": "415:5:5"
                          },
                          {
                            "arguments": [
                              {
                                "kind": "number",
                                "nativeSrc": "426:1:5",
                                "nodeType": "YulLiteral",
                                "src": "426:1:5",
                                "type": "",
                                "value": "0"
                              }
                            ],
                            "functionName": {
                              "name": "not",
                              "nativeSrc": "422:3:5",
                              "nodeType": "YulIdentifier",
                              "src": "422:3:5"
                            },
                            "nativeSrc": "422:6:5",
                            "nodeType": "YulFunctionCall",
                            "src": "422:6:5"
                          }
                        ],
                        "functionName": {
                          "name": "eq",
                          "nativeSrc": "412:2:5",
                          "nodeType": "YulIdentifier",
                          "src": "412:2:5"
                        },
                        "nativeSrc": "412:17:5",
                        "nodeType": "YulFunctionCall",
                        "src": "412:17:5"
                      },
                      "nativeSrc": "409:140:5",
                      "nodeType": "YulIf",
                      "src": "409:140:5"
                    },
                    {
                      "nativeSrc": "558:20:5",
                      "nodeType": "YulAssignment",
                      "src": "558:20:5",
                      "value": {
                        "arguments": [
                          {
                            "name": "value",
                            "nativeSrc": "569:5:5",
                            "nodeType": "YulIdentifier",
                            "src": "569:5:5"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "576:1:5",
                            "nodeType": "YulLiteral",
                            "src": "576:1:5",
                            "type": "",
                            "value": "1"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nativeSrc": "565:3:5",
                          "nodeType": "YulIdentifier",
                          "src": "565:3:5"
                        },
                        "nativeSrc": "565:13:5",
                        "nodeType": "YulFunctionCall",
                        "src": "565:13:5"
                      },
                      "variableNames": [
                        {
                          "name": "ret",
                          "nativeSrc": "558:3:5",
                          "nodeType": "YulIdentifier",
                          "src": "558:3:5"
                        }
                      ]
                    }
                  ]
                },
                "name": "increment_t_uint256",
                "nativeSrc": "352:232:5",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "value",
                    "nativeSrc": "381:5:5",
                    "nodeType": "YulTypedName",
                    "src": "381:5:5",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "ret",
                    "nativeSrc": "391:3:5",
                    "nodeType": "YulTypedName",
                    "src": "391:3:5",
                    "type": ""
                  }
                ],
                "src": "352:232:5"
              }
            ]
          },
          "contents": "{\n    { }\n    function abi_decode_tuple_t_uint8t_int256_fromMemory(headStart, dataEnd) -> value0, value1\n    {\n        if slt(sub(dataEnd, headStart), 64) { revert(0, 0) }\n        let value := mload(headStart)\n        if iszero(eq(value, and(value, 0xff))) { revert(0, 0) }\n        value0 := value\n        value1 := mload(add(headStart, 32))\n    }\n    function increment_t_uint256(value) -> ret\n    {\n        if eq(value, not(0))\n        {\n            mstore(0, shl(224, 0x4e487b71))\n            mstore(4, 0x11)\n            revert(0, 0x24)\n        }\n        ret := add(value, 1)\n    }\n}",
          "id": 5,
          "language": "Yul",
          "name": "#utility.yul"
        }
      ],
      "linkReferences": {},
      "object": "608060405234801561000f575f5ffd5b5060405161050f38038061050f83398101604081905261002e916100a4565b5f805460ff191660ff8416179055818161004781610050565b505050506100f9565b60018190554260025560038054905f610068836100d5565b9091555050600380545f908152600460209081526040808320949094558254825260058152838220429081905592548252600690529190912055565b5f5f604083850312156100b5575f5ffd5b825160ff811681146100c5575f5ffd5b6020939093015192949293505050565b5f600182016100f257634e487b7160e01b5f52601160045260245ffd5b5060010190565b610409806101065f395ff3fe608060405234801561000f575f5ffd5b50600436106100b1575f3560e01c80638205bf6a1161006e5780638205bf6a1461019a5780639a6fc8f5146101a3578063a87a20ce14610220578063b5ab58dc14610233578063b633620c14610252578063feaf968c14610271575f5ffd5b8063313ce567146100b55780634aa2011f146100d857806350d25bcd1461013457806354fd4d501461014b578063668a0f02146101525780637284e4161461015b575b5f5ffd5b5f546100c19060ff1681565b60405160ff90911681526020015b60405180910390f35b6101326100e636600461030d565b69ffffffffffffffffffff9093166003818155600184905560028390555f9182526004602090815260408084209590955581548352600581528483209390935554815260069091522055565b005b61013d60015481565b6040519081526020016100cf565b61013d5f81565b61013d60035481565b604080518082018252601f81527f76302e382f74657374732f4d6f636b563341676772656761746f722e736f6c00602082015290516100cf9190610343565b61013d60025481565b6101e96101b1366004610378565b69ffffffffffffffffffff81165f90815260046020908152604080832054600683528184205460059093529220549293919290918490565b6040805169ffffffffffffffffffff968716815260208101959095528401929092526060830152909116608082015260a0016100cf565b61013261022e366004610398565b61029b565b61013d610241366004610398565b60046020525f908152604090205481565b61013d610260366004610398565b60056020525f908152604090205481565b6003545f8181526004602090815260408083205460068352818420546005909352922054836101e9565b60018190554260025560038054905f6102b3836103af565b9091555050600380545f908152600460209081526040808320949094558254825260058152838220429081905592548252600690529190912055565b803569ffffffffffffffffffff81168114610308575f5ffd5b919050565b5f5f5f5f60808587031215610320575f5ffd5b610329856102ef565b966020860135965060408601359560600135945092505050565b602081525f82518060208401528060208501604085015e5f604082850101526040601f19601f83011684010191505092915050565b5f60208284031215610388575f5ffd5b610391826102ef565b9392505050565b5f602082840312156103a8575f5ffd5b5035919050565b5f600182016103cc57634e487b7160e01b5f52601160045260245ffd5b506001019056fea2646970667358221220e101512d174377aae20ec779e2e28080bd585df9fe85e5749043a167f49ade9964736f6c634300081c0033",
      "opcodes": "PUSH1 0x80 PUSH1 0x40 MSTORE CALLVALUE DUP1 ISZERO PUSH2 0xF JUMPI PUSH0 PUSH0 REVERT JUMPDEST POP PUSH1 0x40 MLOAD PUSH2 0x50F CODESIZE SUB DUP1 PUSH2 0x50F DUP4 CODECOPY DUP2 ADD PUSH1 0x40 DUP2 SWAP1 MSTORE PUSH2 0x2E SWAP2 PUSH2 0xA4 JUMP JUMPDEST PUSH0 DUP1 SLOAD PUSH1 0xFF NOT AND PUSH1 0xFF DUP5 AND OR SWAP1 SSTORE DUP2 DUP2 PUSH2 0x47 DUP2 PUSH2 0x50 JUMP JUMPDEST POP POP POP POP PUSH2 0xF9 JUMP JUMPDEST PUSH1 0x1 DUP2 SWAP1 SSTORE TIMESTAMP PUSH1 0x2 SSTORE PUSH1 0x3 DUP1 SLOAD SWAP1 PUSH0 PUSH2 0x68 DUP4 PUSH2 0xD5 JUMP JUMPDEST SWAP1 SWAP2 SSTORE POP POP PUSH1 0x3 DUP1 SLOAD PUSH0 SWAP1 DUP2 MSTORE PUSH1 0x4 PUSH1 0x20 SWAP1 DUP2 MSTORE PUSH1 0x40 DUP1 DUP4 KECCAK256 SWAP5 SWAP1 SWAP5 SSTORE DUP3 SLOAD DUP3 MSTORE PUSH1 0x5 DUP2 MSTORE DUP4 DUP3 KECCAK256 TIMESTAMP SWAP1 DUP2 SWAP1 SSTORE SWAP3 SLOAD DUP3 MSTORE PUSH1 0x6 SWAP1 MSTORE SWAP2 SWAP1 SWAP2 KECCAK256 SSTORE JUMP JUMPDEST PUSH0 PUSH0 PUSH1 0x40 DUP4 DUP6 SUB SLT ISZERO PUSH2 0xB5 JUMPI PUSH0 PUSH0 REVERT JUMPDEST DUP3 MLOAD PUSH1 0xFF DUP2 AND DUP2 EQ PUSH2 0xC5 JUMPI PUSH0 PUSH0 REVERT JUMPDEST PUSH1 0x20 SWAP4 SWAP1 SWAP4 ADD MLOAD SWAP3 SWAP5 SWAP3 SWAP4 POP POP POP JUMP JUMPDEST PUSH0 PUSH1 0x1 DUP3 ADD PUSH2 0xF2 JUMPI PUSH4 0x4E487B71 PUSH1 0xE0 SHL PUSH0 MSTORE PUSH1 0x11 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH0 REVERT JUMPDEST POP PUSH1 0x1 ADD SWAP1 JUMP JUMPDEST PUSH2 0x409 DUP1 PUSH2 0x106 PUSH0 CODECOPY PUSH0 RETURN INVALID PUSH1 0x80 PUSH1 0x40 MSTORE CALLVALUE DUP1 ISZERO PUSH2 0xF JUMPI PUSH0 PUSH0 REVERT JUMPDEST POP PUSH1 0x4 CALLDATASIZE LT PUSH2 0xB1 JUMPI PUSH0 CALLDATALOAD PUSH1 0xE0 SHR DUP1 PUSH4 0x8205BF6A GT PUSH2 0x6E JUMPI DUP1 PUSH4 0x8205BF6A EQ PUSH2 0x19A JUMPI DUP1 PUSH4 0x9A6FC8F5 EQ PUSH2 0x1A3 JUMPI DUP1 PUSH4 0xA87A20CE EQ PUSH2 0x220 JUMPI DUP1 PUSH4 0xB5AB58DC EQ PUSH2 0x233 JUMPI DUP1 PUSH4 0xB633620C EQ PUSH2 0x252 JUMPI DUP1 PUSH4 0xFEAF968C EQ PUSH2 0x271 JUMPI PUSH0 PUSH0 REVERT JUMPDEST DUP1 PUSH4 0x313CE567 EQ PUSH2 0xB5 JUMPI DUP1 PUSH4 0x4AA2011F EQ PUSH2 0xD8 JUMPI DUP1 PUSH4 0x50D25BCD EQ PUSH2 0x134 JUMPI DUP1 PUSH4 0x54FD4D50 EQ PUSH2 0x14B JUMPI DUP1 PUSH4 0x668A0F02 EQ PUSH2 0x152 JUMPI DUP1 PUSH4 0x7284E416 EQ PUSH2 0x15B JUMPI JUMPDEST PUSH0 PUSH0 REVERT JUMPDEST PUSH0 SLOAD PUSH2 0xC1 SWAP1 PUSH1 0xFF AND DUP2 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH1 0xFF SWAP1 SWAP2 AND DUP2 MSTORE PUSH1 0x20 ADD JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH2 0x132 PUSH2 0xE6 CALLDATASIZE PUSH1 0x4 PUSH2 0x30D JUMP JUMPDEST PUSH10 0xFFFFFFFFFFFFFFFFFFFF SWAP1 SWAP4 AND PUSH1 0x3 DUP2 DUP2 SSTORE PUSH1 0x1 DUP5 SWAP1 SSTORE PUSH1 0x2 DUP4 SWAP1 SSTORE PUSH0 SWAP2 DUP3 MSTORE PUSH1 0x4 PUSH1 0x20 SWAP1 DUP2 MSTORE PUSH1 0x40 DUP1 DUP5 KECCAK256 SWAP6 SWAP1 SWAP6 SSTORE DUP2 SLOAD DUP4 MSTORE PUSH1 0x5 DUP2 MSTORE DUP5 DUP4 KECCAK256 SWAP4 SWAP1 SWAP4 SSTORE SLOAD DUP2 MSTORE PUSH1 0x6 SWAP1 SWAP2 MSTORE KECCAK256 SSTORE JUMP JUMPDEST STOP JUMPDEST PUSH2 0x13D PUSH1 0x1 SLOAD DUP2 JUMP JUMPDEST PUSH1 0x40 MLOAD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH2 0xCF JUMP JUMPDEST PUSH2 0x13D PUSH0 DUP2 JUMP JUMPDEST PUSH2 0x13D PUSH1 0x3 SLOAD DUP2 JUMP JUMPDEST PUSH1 0x40 DUP1 MLOAD DUP1 DUP3 ADD DUP3 MSTORE PUSH1 0x1F DUP2 MSTORE PUSH32 0x76302E382F74657374732F4D6F636B563341676772656761746F722E736F6C00 PUSH1 0x20 DUP3 ADD MSTORE SWAP1 MLOAD PUSH2 0xCF SWAP2 SWAP1 PUSH2 0x343 JUMP JUMPDEST PUSH2 0x13D PUSH1 0x2 SLOAD DUP2 JUMP JUMPDEST PUSH2 0x1E9 PUSH2 0x1B1 CALLDATASIZE PUSH1 0x4 PUSH2 0x378 JUMP JUMPDEST PUSH10 0xFFFFFFFFFFFFFFFFFFFF DUP2 AND PUSH0 SWAP1 DUP2 MSTORE PUSH1 0x4 PUSH1 0x20 SWAP1 DUP2 MSTORE PUSH1 0x40 DUP1 DUP4 KECCAK256 SLOAD PUSH1 0x6 DUP4 MSTORE DUP2 DUP5 KECCAK256 SLOAD PUSH1 0x5 SWAP1 SWAP4 MSTORE SWAP3 KECCAK256 SLOAD SWAP3 SWAP4 SWAP2 SWAP3 SWAP1 SWAP2 DUP5 SWAP1 JUMP JUMPDEST PUSH1 0x40 DUP1 MLOAD PUSH10 0xFFFFFFFFFFFFFFFFFFFF SWAP7 DUP8 AND DUP2 MSTORE PUSH1 0x20 DUP2 ADD SWAP6 SWAP1 SWAP6 MSTORE DUP5 ADD SWAP3 SWAP1 SWAP3 MSTORE PUSH1 0x60 DUP4 ADD MSTORE SWAP1 SWAP2 AND PUSH1 0x80 DUP3 ADD MSTORE PUSH1 0xA0 ADD PUSH2 0xCF JUMP JUMPDEST PUSH2 0x132 PUSH2 0x22E CALLDATASIZE PUSH1 0x4 PUSH2 0x398 JUMP JUMPDEST PUSH2 0x29B JUMP JUMPDEST PUSH2 0x13D PUSH2 0x241 CALLDATASIZE PUSH1 0x4 PUSH2 0x398 JUMP JUMPDEST PUSH1 0x4 PUSH1 0x20 MSTORE PUSH0 SWAP1 DUP2 MSTORE PUSH1 0x40 SWAP1 KECCAK256 SLOAD DUP2 JUMP JUMPDEST PUSH2 0x13D PUSH2 0x260 CALLDATASIZE PUSH1 0x4 PUSH2 0x398 JUMP JUMPDEST PUSH1 0x5 PUSH1 0x20 MSTORE PUSH0 SWAP1 DUP2 MSTORE PUSH1 0x40 SWAP1 KECCAK256 SLOAD DUP2 JUMP JUMPDEST PUSH1 0x3 SLOAD PUSH0 DUP2 DUP2 MSTORE PUSH1 0x4 PUSH1 0x20 SWAP1 DUP2 MSTORE PUSH1 0x40 DUP1 DUP4 KECCAK256 SLOAD PUSH1 0x6 DUP4 MSTORE DUP2 DUP5 KECCAK256 SLOAD PUSH1 0x5 SWAP1 SWAP4 MSTORE SWAP3 KECCAK256 SLOAD DUP4 PUSH2 0x1E9 JUMP JUMPDEST PUSH1 0x1 DUP2 SWAP1 SSTORE TIMESTAMP PUSH1 0x2 SSTORE PUSH1 0x3 DUP1 SLOAD SWAP1 PUSH0 PUSH2 0x2B3 DUP4 PUSH2 0x3AF JUMP JUMPDEST SWAP1 SWAP2 SSTORE POP POP PUSH1 0x3 DUP1 SLOAD PUSH0 SWAP1 DUP2 MSTORE PUSH1 0x4 PUSH1 0x20 SWAP1 DUP2 MSTORE PUSH1 0x40 DUP1 DUP4 KECCAK256 SWAP5 SWAP1 SWAP5 SSTORE DUP3 SLOAD DUP3 MSTORE PUSH1 0x5 DUP2 MSTORE DUP4 DUP3 KECCAK256 TIMESTAMP SWAP1 DUP2 SWAP1 SSTORE SWAP3 SLOAD DUP3 MSTORE PUSH1 0x6 SWAP1 MSTORE SWAP2 SWAP1 SWAP2 KECCAK256 SSTORE JUMP JUMPDEST DUP1 CALLDATALOAD PUSH10 0xFFFFFFFFFFFFFFFFFFFF DUP2 AND DUP2 EQ PUSH2 0x308 JUMPI PUSH0 PUSH0 REVERT JUMPDEST SWAP2 SWAP1 POP JUMP JUMPDEST PUSH0 PUSH0 PUSH0 PUSH0 PUSH1 0x80 DUP6 DUP8 SUB SLT ISZERO PUSH2 0x320 JUMPI PUSH0 PUSH0 REVERT JUMPDEST PUSH2 0x329 DUP6 PUSH2 0x2EF JUMP JUMPDEST SWAP7 PUSH1 0x20 DUP7 ADD CALLDATALOAD SWAP7 POP PUSH1 0x40 DUP7 ADD CALLDATALOAD SWAP6 PUSH1 0x60 ADD CALLDATALOAD SWAP5 POP SWAP3 POP POP POP JUMP JUMPDEST PUSH1 0x20 DUP2 MSTORE PUSH0 DUP3 MLOAD DUP1 PUSH1 0x20 DUP5 ADD MSTORE DUP1 PUSH1 0x20 DUP6 ADD PUSH1 0x40 DUP6 ADD MCOPY PUSH0 PUSH1 0x40 DUP3 DUP6 ADD ADD MSTORE PUSH1 0x40 PUSH1 0x1F NOT PUSH1 0x1F DUP4 ADD AND DUP5 ADD ADD SWAP2 POP POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH0 PUSH1 0x20 DUP3 DUP5 SUB SLT ISZERO PUSH2 0x388 JUMPI PUSH0 PUSH0 REVERT JUMPDEST PUSH2 0x391 DUP3 PUSH2 0x2EF JUMP JUMPDEST SWAP4 SWAP3 POP POP POP JUMP JUMPDEST PUSH0 PUSH1 0x20 DUP3 DUP5 SUB SLT ISZERO PUSH2 0x3A8 JUMPI PUSH0 PUSH0 REVERT JUMPDEST POP CALLDATALOAD SWAP2 SWAP1 POP JUMP JUMPDEST PUSH0 PUSH1 0x1 DUP3 ADD PUSH2 0x3CC JUMPI PUSH4 0x4E487B71 PUSH1 0xE0 SHL PUSH0 MSTORE PUSH1 0x11 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH0 REVERT JUMPDEST POP PUSH1 0x1 ADD SWAP1 JUMP INVALID LOG2 PUSH5 0x6970667358 0x22 SLT KECCAK256 0xE1 ADD MLOAD 0x2D OR NUMBER PUSH24 0xAAE20EC779E2E28080BD585DF9FE85E5749043A167F49ADE SWAP10 PUSH5 0x736F6C6343 STOP ADDMOD SHR STOP CALLER ",
      "sourceMap": "684:176:4:-:0;;;738:120;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;912:8:3;:20;;-1:-1:-1;;912:20:3;;;;;;;;840:14:4;938:28:3;840:14:4;938:12:3;:28::i;:::-;854:117;;738:120:4;;684:176;;975:272:3;1026:12;:22;;;1072:15;1054;:33;1093:11;:13;;;-1:-1:-1;1093:13:3;;;:::i;:::-;;;;-1:-1:-1;;1122:11:3;;;1112:22;;;;:9;:22;;;;;;;;:32;;;;1163:11;;1150:25;;:12;:25;;;;;1178:15;1150:43;;;;1212:11;;1199:25;;:12;:25;;;;;;:43;975:272::o;14:333:5:-;90:6;98;151:2;139:9;130:7;126:23;122:32;119:52;;;167:1;164;157:12;119:52;199:9;193:16;249:4;242:5;238:16;231:5;228:27;218:55;;269:1;266;259:12;218:55;337:2;322:18;;;;316:25;292:5;;316:25;;-1:-1:-1;;;14:333:5:o;352:232::-;391:3;412:17;;;409:140;;471:10;466:3;462:20;459:1;452:31;506:4;503:1;496:15;534:4;531:1;524:15;409:140;-1:-1:-1;576:1:5;565:13;;352:232::o;:::-;684:176:4;;;;;;"
    },
    "deployedBytecode": {
      "functionDebugData": {
        "@decimals_118": {
          "entryPoint": null,
          "id": 118,
          "parameterSlots": 0,
          "returnSlots": 0
        },
        "@description_310": {
          "entryPoint": null,
          "id": 310,
          "parameterSlots": 0,
          "returnSlots": 1
        },
        "@getAnswer_132": {
          "entryPoint": null,
          "id": 132,
          "parameterSlots": 0,
          "returnSlots": 0
        },
        "@getRoundData_267": {
          "entryPoint": null,
          "id": 267,
          "parameterSlots": 1,
          "returnSlots": 5
        },
        "@getTimestamp_137": {
          "entryPoint": null,
          "id": 137,
          "parameterSlots": 0,
          "returnSlots": 0
        },
        "@latestAnswer_121": {
          "entryPoint": null,
          "id": 121,
          "parameterSlots": 0,
          "returnSlots": 0
        },
        "@latestRoundData_301": {
          "entryPoint": null,
          "id": 301,
          "parameterSlots": 0,
          "returnSlots": 5
        },
        "@latestRound_127": {
          "entryPoint": null,
          "id": 127,
          "parameterSlots": 0,
          "returnSlots": 0
        },
        "@latestTimestamp_124": {
          "entryPoint": null,
          "id": 124,
          "parameterSlots": 0,
          "returnSlots": 0
        },
        "@updateAnswer_195": {
          "entryPoint": 667,
          "id": 195,
          "parameterSlots": 1,
          "returnSlots": 0
        },
        "@updateRoundData_237": {
          "entryPoint": null,
          "id": 237,
          "parameterSlots": 4,
          "returnSlots": 0
        },
        "@version_115": {
          "entryPoint": null,
          "id": 115,
          "parameterSlots": 0,
          "returnSlots": 0
        },
        "abi_decode_tuple_t_int256": {
          "entryPoint": 920,
          "id": null,
          "parameterSlots": 2,
          "returnSlots": 1
        },
        "abi_decode_tuple_t_uint256": {
          "entryPoint": null,
          "id": null,
          "parameterSlots": 2,
          "returnSlots": 1
        },
        "abi_decode_tuple_t_uint80": {
          "entryPoint": 888,
          "id": null,
          "parameterSlots": 2,
          "returnSlots": 1
        },
        "abi_decode_tuple_t_uint80t_int256t_uint256t_uint256": {
          "entryPoint": 781,
          "id": null,
          "parameterSlots": 2,
          "returnSlots": 4
        },
        "abi_decode_uint80": {
          "entryPoint": 751,
          "id": null,
          "parameterSlots": 1,
          "returnSlots": 1
        },
        "abi_encode_tuple_t_int256__to_t_int256__fromStack_reversed": {
          "entryPoint": null,
          "id": null,
          "parameterSlots": 2,
          "returnSlots": 1
        },
        "abi_encode_tuple_t_string_memory_ptr__to_t_string_memory_ptr__fromStack_reversed": {
          "entryPoint": 835,
          "id": null,
          "parameterSlots": 2,
          "returnSlots": 1
        },
        "abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed": {
          "entryPoint": null,
          "id": null,
          "parameterSlots": 2,
          "returnSlots": 1
        },
        "abi_encode_tuple_t_uint80_t_int256_t_uint256_t_uint256_t_uint80__to_t_uint80_t_int256_t_uint256_t_uint256_t_uint80__fromStack_reversed": {
          "entryPoint": null,
          "id": null,
          "parameterSlots": 6,
          "returnSlots": 1
        },
        "abi_encode_tuple_t_uint8__to_t_uint8__fromStack_reversed": {
          "entryPoint": null,
          "id": null,
          "parameterSlots": 2,
          "returnSlots": 1
        },
        "increment_t_uint256": {
          "entryPoint": 943,
          "id": null,
          "parameterSlots": 1,
          "returnSlots": 1
        }
      },
      "generatedSources": [
        {
          "ast": {
            "nativeSrc": "0:3115:5",
            "nodeType": "YulBlock",
            "src": "0:3115:5",
            "statements": [
              {
                "nativeSrc": "6:3:5",
                "nodeType": "YulBlock",
                "src": "6:3:5",
                "statements": []
              },
              {
                "body": {
                  "nativeSrc": "111:87:5",
                  "nodeType": "YulBlock",
                  "src": "111:87:5",
                  "statements": [
                    {
                      "nativeSrc": "121:26:5",
                      "nodeType": "YulAssignment",
                      "src": "121:26:5",
                      "value": {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nativeSrc": "133:9:5",
                            "nodeType": "YulIdentifier",
                            "src": "133:9:5"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "144:2:5",
                            "nodeType": "YulLiteral",
                            "src": "144:2:5",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nativeSrc": "129:3:5",
                          "nodeType": "YulIdentifier",
                          "src": "129:3:5"
                        },
                        "nativeSrc": "129:18:5",
                        "nodeType": "YulFunctionCall",
                        "src": "129:18:5"
                      },
                      "variableNames": [
                        {
                          "name": "tail",
                          "nativeSrc": "121:4:5",
                          "nodeType": "YulIdentifier",
                          "src": "121:4:5"
                        }
                      ]
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nativeSrc": "163:9:5",
                            "nodeType": "YulIdentifier",
                            "src": "163:9:5"
                          },
                          {
                            "arguments": [
                              {
                                "name": "value0",
                                "nativeSrc": "178:6:5",
                                "nodeType": "YulIdentifier",
                                "src": "178:6:5"
                              },
                              {
                                "kind": "number",
                                "nativeSrc": "186:4:5",
                                "nodeType": "YulLiteral",
                                "src": "186:4:5",
                                "type": "",
                                "value": "0xff"
                              }
                            ],
                            "functionName": {
                              "name": "and",
                              "nativeSrc": "174:3:5",
                              "nodeType": "YulIdentifier",
                              "src": "174:3:5"
                            },
                            "nativeSrc": "174:17:5",
                            "nodeType": "YulFunctionCall",
                            "src": "174:17:5"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nativeSrc": "156:6:5",
                          "nodeType": "YulIdentifier",
                          "src": "156:6:5"
                        },
                        "nativeSrc": "156:36:5",
                        "nodeType": "YulFunctionCall",
                        "src": "156:36:5"
                      },
                      "nativeSrc": "156:36:5",
                      "nodeType": "YulExpressionStatement",
                      "src": "156:36:5"
                    }
                  ]
                },
                "name": "abi_encode_tuple_t_uint8__to_t_uint8__fromStack_reversed",
                "nativeSrc": "14:184:5",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "headStart",
                    "nativeSrc": "80:9:5",
                    "nodeType": "YulTypedName",
                    "src": "80:9:5",
                    "type": ""
                  },
                  {
                    "name": "value0",
                    "nativeSrc": "91:6:5",
                    "nodeType": "YulTypedName",
                    "src": "91:6:5",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "tail",
                    "nativeSrc": "102:4:5",
                    "nodeType": "YulTypedName",
                    "src": "102:4:5",
                    "type": ""
                  }
                ],
                "src": "14:184:5"
              },
              {
                "body": {
                  "nativeSrc": "251:127:5",
                  "nodeType": "YulBlock",
                  "src": "251:127:5",
                  "statements": [
                    {
                      "nativeSrc": "261:29:5",
                      "nodeType": "YulAssignment",
                      "src": "261:29:5",
                      "value": {
                        "arguments": [
                          {
                            "name": "offset",
                            "nativeSrc": "283:6:5",
                            "nodeType": "YulIdentifier",
                            "src": "283:6:5"
                          }
                        ],
                        "functionName": {
                          "name": "calldataload",
                          "nativeSrc": "270:12:5",
                          "nodeType": "YulIdentifier",
                          "src": "270:12:5"
                        },
                        "nativeSrc": "270:20:5",
                        "nodeType": "YulFunctionCall",
                        "src": "270:20:5"
                      },
                      "variableNames": [
                        {
                          "name": "value",
                          "nativeSrc": "261:5:5",
                          "nodeType": "YulIdentifier",
                          "src": "261:5:5"
                        }
                      ]
                    },
                    {
                      "body": {
                        "nativeSrc": "356:16:5",
                        "nodeType": "YulBlock",
                        "src": "356:16:5",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nativeSrc": "365:1:5",
                                  "nodeType": "YulLiteral",
                                  "src": "365:1:5",
                                  "type": "",
                                  "value": "0"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "368:1:5",
                                  "nodeType": "YulLiteral",
                                  "src": "368:1:5",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "revert",
                                "nativeSrc": "358:6:5",
                                "nodeType": "YulIdentifier",
                                "src": "358:6:5"
                              },
                              "nativeSrc": "358:12:5",
                              "nodeType": "YulFunctionCall",
                              "src": "358:12:5"
                            },
                            "nativeSrc": "358:12:5",
                            "nodeType": "YulExpressionStatement",
                            "src": "358:12:5"
                          }
                        ]
                      },
                      "condition": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "value",
                                "nativeSrc": "312:5:5",
                                "nodeType": "YulIdentifier",
                                "src": "312:5:5"
                              },
                              {
                                "arguments": [
                                  {
                                    "name": "value",
                                    "nativeSrc": "323:5:5",
                                    "nodeType": "YulIdentifier",
                                    "src": "323:5:5"
                                  },
                                  {
                                    "kind": "number",
                                    "nativeSrc": "330:22:5",
                                    "nodeType": "YulLiteral",
                                    "src": "330:22:5",
                                    "type": "",
                                    "value": "0xffffffffffffffffffff"
                                  }
                                ],
                                "functionName": {
                                  "name": "and",
                                  "nativeSrc": "319:3:5",
                                  "nodeType": "YulIdentifier",
                                  "src": "319:3:5"
                                },
                                "nativeSrc": "319:34:5",
                                "nodeType": "YulFunctionCall",
                                "src": "319:34:5"
                              }
                            ],
                            "functionName": {
                              "name": "eq",
                              "nativeSrc": "309:2:5",
                              "nodeType": "YulIdentifier",
                              "src": "309:2:5"
                            },
                            "nativeSrc": "309:45:5",
                            "nodeType": "YulFunctionCall",
                            "src": "309:45:5"
                          }
                        ],
                        "functionName": {
                          "name": "iszero",
                          "nativeSrc": "302:6:5",
                          "nodeType": "YulIdentifier",
                          "src": "302:6:5"
                        },
                        "nativeSrc": "302:53:5",
                        "nodeType": "YulFunctionCall",
                        "src": "302:53:5"
                      },
                      "nativeSrc": "299:73:5",
                      "nodeType": "YulIf",
                      "src": "299:73:5"
                    }
                  ]
                },
                "name": "abi_decode_uint80",
                "nativeSrc": "203:175:5",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "offset",
                    "nativeSrc": "230:6:5",
                    "nodeType": "YulTypedName",
                    "src": "230:6:5",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "value",
                    "nativeSrc": "241:5:5",
                    "nodeType": "YulTypedName",
                    "src": "241:5:5",
                    "type": ""
                  }
                ],
                "src": "203:175:5"
              },
              {
                "body": {
                  "nativeSrc": "502:419:5",
                  "nodeType": "YulBlock",
                  "src": "502:419:5",
                  "statements": [
                    {
                      "body": {
                        "nativeSrc": "549:16:5",
                        "nodeType": "YulBlock",
                        "src": "549:16:5",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nativeSrc": "558:1:5",
                                  "nodeType": "YulLiteral",
                                  "src": "558:1:5",
                                  "type": "",
                                  "value": "0"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "561:1:5",
                                  "nodeType": "YulLiteral",
                                  "src": "561:1:5",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "revert",
                                "nativeSrc": "551:6:5",
                                "nodeType": "YulIdentifier",
                                "src": "551:6:5"
                              },
                              "nativeSrc": "551:12:5",
                              "nodeType": "YulFunctionCall",
                              "src": "551:12:5"
                            },
                            "nativeSrc": "551:12:5",
                            "nodeType": "YulExpressionStatement",
                            "src": "551:12:5"
                          }
                        ]
                      },
                      "condition": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "dataEnd",
                                "nativeSrc": "523:7:5",
                                "nodeType": "YulIdentifier",
                                "src": "523:7:5"
                              },
                              {
                                "name": "headStart",
                                "nativeSrc": "532:9:5",
                                "nodeType": "YulIdentifier",
                                "src": "532:9:5"
                              }
                            ],
                            "functionName": {
                              "name": "sub",
                              "nativeSrc": "519:3:5",
                              "nodeType": "YulIdentifier",
                              "src": "519:3:5"
                            },
                            "nativeSrc": "519:23:5",
                            "nodeType": "YulFunctionCall",
                            "src": "519:23:5"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "544:3:5",
                            "nodeType": "YulLiteral",
                            "src": "544:3:5",
                            "type": "",
                            "value": "128"
                          }
                        ],
                        "functionName": {
                          "name": "slt",
                          "nativeSrc": "515:3:5",
                          "nodeType": "YulIdentifier",
                          "src": "515:3:5"
                        },
                        "nativeSrc": "515:33:5",
                        "nodeType": "YulFunctionCall",
                        "src": "515:33:5"
                      },
                      "nativeSrc": "512:53:5",
                      "nodeType": "YulIf",
                      "src": "512:53:5"
                    },
                    {
                      "nativeSrc": "574:38:5",
                      "nodeType": "YulAssignment",
                      "src": "574:38:5",
                      "value": {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nativeSrc": "602:9:5",
                            "nodeType": "YulIdentifier",
                            "src": "602:9:5"
                          }
                        ],
                        "functionName": {
                          "name": "abi_decode_uint80",
                          "nativeSrc": "584:17:5",
                          "nodeType": "YulIdentifier",
                          "src": "584:17:5"
                        },
                        "nativeSrc": "584:28:5",
                        "nodeType": "YulFunctionCall",
                        "src": "584:28:5"
                      },
                      "variableNames": [
                        {
                          "name": "value0",
                          "nativeSrc": "574:6:5",
                          "nodeType": "YulIdentifier",
                          "src": "574:6:5"
                        }
                      ]
                    },
                    {
                      "nativeSrc": "621:14:5",
                      "nodeType": "YulVariableDeclaration",
                      "src": "621:14:5",
                      "value": {
                        "kind": "number",
                        "nativeSrc": "634:1:5",
                        "nodeType": "YulLiteral",
                        "src": "634:1:5",
                        "type": "",
                        "value": "0"
                      },
                      "variables": [
                        {
                          "name": "value",
                          "nativeSrc": "625:5:5",
                          "nodeType": "YulTypedName",
                          "src": "625:5:5",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "nativeSrc": "644:41:5",
                      "nodeType": "YulAssignment",
                      "src": "644:41:5",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nativeSrc": "670:9:5",
                                "nodeType": "YulIdentifier",
                                "src": "670:9:5"
                              },
                              {
                                "kind": "number",
                                "nativeSrc": "681:2:5",
                                "nodeType": "YulLiteral",
                                "src": "681:2:5",
                                "type": "",
                                "value": "32"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nativeSrc": "666:3:5",
                              "nodeType": "YulIdentifier",
                              "src": "666:3:5"
                            },
                            "nativeSrc": "666:18:5",
                            "nodeType": "YulFunctionCall",
                            "src": "666:18:5"
                          }
                        ],
                        "functionName": {
                          "name": "calldataload",
                          "nativeSrc": "653:12:5",
                          "nodeType": "YulIdentifier",
                          "src": "653:12:5"
                        },
                        "nativeSrc": "653:32:5",
                        "nodeType": "YulFunctionCall",
                        "src": "653:32:5"
                      },
                      "variableNames": [
                        {
                          "name": "value",
                          "nativeSrc": "644:5:5",
                          "nodeType": "YulIdentifier",
                          "src": "644:5:5"
                        }
                      ]
                    },
                    {
                      "nativeSrc": "694:15:5",
                      "nodeType": "YulAssignment",
                      "src": "694:15:5",
                      "value": {
                        "name": "value",
                        "nativeSrc": "704:5:5",
                        "nodeType": "YulIdentifier",
                        "src": "704:5:5"
                      },
                      "variableNames": [
                        {
                          "name": "value1",
                          "nativeSrc": "694:6:5",
                          "nodeType": "YulIdentifier",
                          "src": "694:6:5"
                        }
                      ]
                    },
                    {
                      "nativeSrc": "718:16:5",
                      "nodeType": "YulVariableDeclaration",
                      "src": "718:16:5",
                      "value": {
                        "kind": "number",
                        "nativeSrc": "733:1:5",
                        "nodeType": "YulLiteral",
                        "src": "733:1:5",
                        "type": "",
                        "value": "0"
                      },
                      "variables": [
                        {
                          "name": "value_1",
                          "nativeSrc": "722:7:5",
                          "nodeType": "YulTypedName",
                          "src": "722:7:5",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "nativeSrc": "743:43:5",
                      "nodeType": "YulAssignment",
                      "src": "743:43:5",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nativeSrc": "771:9:5",
                                "nodeType": "YulIdentifier",
                                "src": "771:9:5"
                              },
                              {
                                "kind": "number",
                                "nativeSrc": "782:2:5",
                                "nodeType": "YulLiteral",
                                "src": "782:2:5",
                                "type": "",
                                "value": "64"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nativeSrc": "767:3:5",
                              "nodeType": "YulIdentifier",
                              "src": "767:3:5"
                            },
                            "nativeSrc": "767:18:5",
                            "nodeType": "YulFunctionCall",
                            "src": "767:18:5"
                          }
                        ],
                        "functionName": {
                          "name": "calldataload",
                          "nativeSrc": "754:12:5",
                          "nodeType": "YulIdentifier",
                          "src": "754:12:5"
                        },
                        "nativeSrc": "754:32:5",
                        "nodeType": "YulFunctionCall",
                        "src": "754:32:5"
                      },
                      "variableNames": [
                        {
                          "name": "value_1",
                          "nativeSrc": "743:7:5",
                          "nodeType": "YulIdentifier",
                          "src": "743:7:5"
                        }
                      ]
                    },
                    {
                      "nativeSrc": "795:17:5",
                      "nodeType": "YulAssignment",
                      "src": "795:17:5",
                      "value": {
                        "name": "value_1",
                        "nativeSrc": "805:7:5",
                        "nodeType": "YulIdentifier",
                        "src": "805:7:5"
                      },
                      "variableNames": [
                        {
                          "name": "value2",
                          "nativeSrc": "795:6:5",
                          "nodeType": "YulIdentifier",
                          "src": "795:6:5"
                        }
                      ]
                    },
                    {
                      "nativeSrc": "821:16:5",
                      "nodeType": "YulVariableDeclaration",
                      "src": "821:16:5",
                      "value": {
                        "kind": "number",
                        "nativeSrc": "836:1:5",
                        "nodeType": "YulLiteral",
                        "src": "836:1:5",
                        "type": "",
                        "value": "0"
                      },
                      "variables": [
                        {
                          "name": "value_2",
                          "nativeSrc": "825:7:5",
                          "nodeType": "YulTypedName",
                          "src": "825:7:5",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "nativeSrc": "846:43:5",
                      "nodeType": "YulAssignment",
                      "src": "846:43:5",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nativeSrc": "874:9:5",
                                "nodeType": "YulIdentifier",
                                "src": "874:9:5"
                              },
                              {
                                "kind": "number",
                                "nativeSrc": "885:2:5",
                                "nodeType": "YulLiteral",
                                "src": "885:2:5",
                                "type": "",
                                "value": "96"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nativeSrc": "870:3:5",
                              "nodeType": "YulIdentifier",
                              "src": "870:3:5"
                            },
                            "nativeSrc": "870:18:5",
                            "nodeType": "YulFunctionCall",
                            "src": "870:18:5"
                          }
                        ],
                        "functionName": {
                          "name": "calldataload",
                          "nativeSrc": "857:12:5",
                          "nodeType": "YulIdentifier",
                          "src": "857:12:5"
                        },
                        "nativeSrc": "857:32:5",
                        "nodeType": "YulFunctionCall",
                        "src": "857:32:5"
                      },
                      "variableNames": [
                        {
                          "name": "value_2",
                          "nativeSrc": "846:7:5",
                          "nodeType": "YulIdentifier",
                          "src": "846:7:5"
                        }
                      ]
                    },
                    {
                      "nativeSrc": "898:17:5",
                      "nodeType": "YulAssignment",
                      "src": "898:17:5",
                      "value": {
                        "name": "value_2",
                        "nativeSrc": "908:7:5",
                        "nodeType": "YulIdentifier",
                        "src": "908:7:5"
                      },
                      "variableNames": [
                        {
                          "name": "value3",
                          "nativeSrc": "898:6:5",
                          "nodeType": "YulIdentifier",
                          "src": "898:6:5"
                        }
                      ]
                    }
                  ]
                },
                "name": "abi_decode_tuple_t_uint80t_int256t_uint256t_uint256",
                "nativeSrc": "383:538:5",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "headStart",
                    "nativeSrc": "444:9:5",
                    "nodeType": "YulTypedName",
                    "src": "444:9:5",
                    "type": ""
                  },
                  {
                    "name": "dataEnd",
                    "nativeSrc": "455:7:5",
                    "nodeType": "YulTypedName",
                    "src": "455:7:5",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "value0",
                    "nativeSrc": "467:6:5",
                    "nodeType": "YulTypedName",
                    "src": "467:6:5",
                    "type": ""
                  },
                  {
                    "name": "value1",
                    "nativeSrc": "475:6:5",
                    "nodeType": "YulTypedName",
                    "src": "475:6:5",
                    "type": ""
                  },
                  {
                    "name": "value2",
                    "nativeSrc": "483:6:5",
                    "nodeType": "YulTypedName",
                    "src": "483:6:5",
                    "type": ""
                  },
                  {
                    "name": "value3",
                    "nativeSrc": "491:6:5",
                    "nodeType": "YulTypedName",
                    "src": "491:6:5",
                    "type": ""
                  }
                ],
                "src": "383:538:5"
              },
              {
                "body": {
                  "nativeSrc": "1025:76:5",
                  "nodeType": "YulBlock",
                  "src": "1025:76:5",
                  "statements": [
                    {
                      "nativeSrc": "1035:26:5",
                      "nodeType": "YulAssignment",
                      "src": "1035:26:5",
                      "value": {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nativeSrc": "1047:9:5",
                            "nodeType": "YulIdentifier",
                            "src": "1047:9:5"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "1058:2:5",
                            "nodeType": "YulLiteral",
                            "src": "1058:2:5",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nativeSrc": "1043:3:5",
                          "nodeType": "YulIdentifier",
                          "src": "1043:3:5"
                        },
                        "nativeSrc": "1043:18:5",
                        "nodeType": "YulFunctionCall",
                        "src": "1043:18:5"
                      },
                      "variableNames": [
                        {
                          "name": "tail",
                          "nativeSrc": "1035:4:5",
                          "nodeType": "YulIdentifier",
                          "src": "1035:4:5"
                        }
                      ]
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nativeSrc": "1077:9:5",
                            "nodeType": "YulIdentifier",
                            "src": "1077:9:5"
                          },
                          {
                            "name": "value0",
                            "nativeSrc": "1088:6:5",
                            "nodeType": "YulIdentifier",
                            "src": "1088:6:5"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nativeSrc": "1070:6:5",
                          "nodeType": "YulIdentifier",
                          "src": "1070:6:5"
                        },
                        "nativeSrc": "1070:25:5",
                        "nodeType": "YulFunctionCall",
                        "src": "1070:25:5"
                      },
                      "nativeSrc": "1070:25:5",
                      "nodeType": "YulExpressionStatement",
                      "src": "1070:25:5"
                    }
                  ]
                },
                "name": "abi_encode_tuple_t_int256__to_t_int256__fromStack_reversed",
                "nativeSrc": "926:175:5",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "headStart",
                    "nativeSrc": "994:9:5",
                    "nodeType": "YulTypedName",
                    "src": "994:9:5",
                    "type": ""
                  },
                  {
                    "name": "value0",
                    "nativeSrc": "1005:6:5",
                    "nodeType": "YulTypedName",
                    "src": "1005:6:5",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "tail",
                    "nativeSrc": "1016:4:5",
                    "nodeType": "YulTypedName",
                    "src": "1016:4:5",
                    "type": ""
                  }
                ],
                "src": "926:175:5"
              },
              {
                "body": {
                  "nativeSrc": "1207:76:5",
                  "nodeType": "YulBlock",
                  "src": "1207:76:5",
                  "statements": [
                    {
                      "nativeSrc": "1217:26:5",
                      "nodeType": "YulAssignment",
                      "src": "1217:26:5",
                      "value": {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nativeSrc": "1229:9:5",
                            "nodeType": "YulIdentifier",
                            "src": "1229:9:5"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "1240:2:5",
                            "nodeType": "YulLiteral",
                            "src": "1240:2:5",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nativeSrc": "1225:3:5",
                          "nodeType": "YulIdentifier",
                          "src": "1225:3:5"
                        },
                        "nativeSrc": "1225:18:5",
                        "nodeType": "YulFunctionCall",
                        "src": "1225:18:5"
                      },
                      "variableNames": [
                        {
                          "name": "tail",
                          "nativeSrc": "1217:4:5",
                          "nodeType": "YulIdentifier",
                          "src": "1217:4:5"
                        }
                      ]
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nativeSrc": "1259:9:5",
                            "nodeType": "YulIdentifier",
                            "src": "1259:9:5"
                          },
                          {
                            "name": "value0",
                            "nativeSrc": "1270:6:5",
                            "nodeType": "YulIdentifier",
                            "src": "1270:6:5"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nativeSrc": "1252:6:5",
                          "nodeType": "YulIdentifier",
                          "src": "1252:6:5"
                        },
                        "nativeSrc": "1252:25:5",
                        "nodeType": "YulFunctionCall",
                        "src": "1252:25:5"
                      },
                      "nativeSrc": "1252:25:5",
                      "nodeType": "YulExpressionStatement",
                      "src": "1252:25:5"
                    }
                  ]
                },
                "name": "abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed",
                "nativeSrc": "1106:177:5",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "headStart",
                    "nativeSrc": "1176:9:5",
                    "nodeType": "YulTypedName",
                    "src": "1176:9:5",
                    "type": ""
                  },
                  {
                    "name": "value0",
                    "nativeSrc": "1187:6:5",
                    "nodeType": "YulTypedName",
                    "src": "1187:6:5",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "tail",
                    "nativeSrc": "1198:4:5",
                    "nodeType": "YulTypedName",
                    "src": "1198:4:5",
                    "type": ""
                  }
                ],
                "src": "1106:177:5"
              },
              {
                "body": {
                  "nativeSrc": "1409:297:5",
                  "nodeType": "YulBlock",
                  "src": "1409:297:5",
                  "statements": [
                    {
                      "expression": {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nativeSrc": "1426:9:5",
                            "nodeType": "YulIdentifier",
                            "src": "1426:9:5"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "1437:2:5",
                            "nodeType": "YulLiteral",
                            "src": "1437:2:5",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nativeSrc": "1419:6:5",
                          "nodeType": "YulIdentifier",
                          "src": "1419:6:5"
                        },
                        "nativeSrc": "1419:21:5",
                        "nodeType": "YulFunctionCall",
                        "src": "1419:21:5"
                      },
                      "nativeSrc": "1419:21:5",
                      "nodeType": "YulExpressionStatement",
                      "src": "1419:21:5"
                    },
                    {
                      "nativeSrc": "1449:27:5",
                      "nodeType": "YulVariableDeclaration",
                      "src": "1449:27:5",
                      "value": {
                        "arguments": [
                          {
                            "name": "value0",
                            "nativeSrc": "1469:6:5",
                            "nodeType": "YulIdentifier",
                            "src": "1469:6:5"
                          }
                        ],
                        "functionName": {
                          "name": "mload",
                          "nativeSrc": "1463:5:5",
                          "nodeType": "YulIdentifier",
                          "src": "1463:5:5"
                        },
                        "nativeSrc": "1463:13:5",
                        "nodeType": "YulFunctionCall",
                        "src": "1463:13:5"
                      },
                      "variables": [
                        {
                          "name": "length",
                          "nativeSrc": "1453:6:5",
                          "nodeType": "YulTypedName",
                          "src": "1453:6:5",
                          "type": ""
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
                                "nativeSrc": "1496:9:5",
                                "nodeType": "YulIdentifier",
                                "src": "1496:9:5"
                              },
                              {
                                "kind": "number",
                                "nativeSrc": "1507:2:5",
                                "nodeType": "YulLiteral",
                                "src": "1507:2:5",
                                "type": "",
                                "value": "32"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nativeSrc": "1492:3:5",
                              "nodeType": "YulIdentifier",
                              "src": "1492:3:5"
                            },
                            "nativeSrc": "1492:18:5",
                            "nodeType": "YulFunctionCall",
                            "src": "1492:18:5"
                          },
                          {
                            "name": "length",
                            "nativeSrc": "1512:6:5",
                            "nodeType": "YulIdentifier",
                            "src": "1512:6:5"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nativeSrc": "1485:6:5",
                          "nodeType": "YulIdentifier",
                          "src": "1485:6:5"
                        },
                        "nativeSrc": "1485:34:5",
                        "nodeType": "YulFunctionCall",
                        "src": "1485:34:5"
                      },
                      "nativeSrc": "1485:34:5",
                      "nodeType": "YulExpressionStatement",
                      "src": "1485:34:5"
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nativeSrc": "1538:9:5",
                                "nodeType": "YulIdentifier",
                                "src": "1538:9:5"
                              },
                              {
                                "kind": "number",
                                "nativeSrc": "1549:2:5",
                                "nodeType": "YulLiteral",
                                "src": "1549:2:5",
                                "type": "",
                                "value": "64"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nativeSrc": "1534:3:5",
                              "nodeType": "YulIdentifier",
                              "src": "1534:3:5"
                            },
                            "nativeSrc": "1534:18:5",
                            "nodeType": "YulFunctionCall",
                            "src": "1534:18:5"
                          },
                          {
                            "arguments": [
                              {
                                "name": "value0",
                                "nativeSrc": "1558:6:5",
                                "nodeType": "YulIdentifier",
                                "src": "1558:6:5"
                              },
                              {
                                "kind": "number",
                                "nativeSrc": "1566:2:5",
                                "nodeType": "YulLiteral",
                                "src": "1566:2:5",
                                "type": "",
                                "value": "32"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nativeSrc": "1554:3:5",
                              "nodeType": "YulIdentifier",
                              "src": "1554:3:5"
                            },
                            "nativeSrc": "1554:15:5",
                            "nodeType": "YulFunctionCall",
                            "src": "1554:15:5"
                          },
                          {
                            "name": "length",
                            "nativeSrc": "1571:6:5",
                            "nodeType": "YulIdentifier",
                            "src": "1571:6:5"
                          }
                        ],
                        "functionName": {
                          "name": "mcopy",
                          "nativeSrc": "1528:5:5",
                          "nodeType": "YulIdentifier",
                          "src": "1528:5:5"
                        },
                        "nativeSrc": "1528:50:5",
                        "nodeType": "YulFunctionCall",
                        "src": "1528:50:5"
                      },
                      "nativeSrc": "1528:50:5",
                      "nodeType": "YulExpressionStatement",
                      "src": "1528:50:5"
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "arguments": [
                                  {
                                    "name": "headStart",
                                    "nativeSrc": "1602:9:5",
                                    "nodeType": "YulIdentifier",
                                    "src": "1602:9:5"
                                  },
                                  {
                                    "name": "length",
                                    "nativeSrc": "1613:6:5",
                                    "nodeType": "YulIdentifier",
                                    "src": "1613:6:5"
                                  }
                                ],
                                "functionName": {
                                  "name": "add",
                                  "nativeSrc": "1598:3:5",
                                  "nodeType": "YulIdentifier",
                                  "src": "1598:3:5"
                                },
                                "nativeSrc": "1598:22:5",
                                "nodeType": "YulFunctionCall",
                                "src": "1598:22:5"
                              },
                              {
                                "kind": "number",
                                "nativeSrc": "1622:2:5",
                                "nodeType": "YulLiteral",
                                "src": "1622:2:5",
                                "type": "",
                                "value": "64"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nativeSrc": "1594:3:5",
                              "nodeType": "YulIdentifier",
                              "src": "1594:3:5"
                            },
                            "nativeSrc": "1594:31:5",
                            "nodeType": "YulFunctionCall",
                            "src": "1594:31:5"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "1627:1:5",
                            "nodeType": "YulLiteral",
                            "src": "1627:1:5",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nativeSrc": "1587:6:5",
                          "nodeType": "YulIdentifier",
                          "src": "1587:6:5"
                        },
                        "nativeSrc": "1587:42:5",
                        "nodeType": "YulFunctionCall",
                        "src": "1587:42:5"
                      },
                      "nativeSrc": "1587:42:5",
                      "nodeType": "YulExpressionStatement",
                      "src": "1587:42:5"
                    },
                    {
                      "nativeSrc": "1638:62:5",
                      "nodeType": "YulAssignment",
                      "src": "1638:62:5",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nativeSrc": "1654:9:5",
                                "nodeType": "YulIdentifier",
                                "src": "1654:9:5"
                              },
                              {
                                "arguments": [
                                  {
                                    "arguments": [
                                      {
                                        "name": "length",
                                        "nativeSrc": "1673:6:5",
                                        "nodeType": "YulIdentifier",
                                        "src": "1673:6:5"
                                      },
                                      {
                                        "kind": "number",
                                        "nativeSrc": "1681:2:5",
                                        "nodeType": "YulLiteral",
                                        "src": "1681:2:5",
                                        "type": "",
                                        "value": "31"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "add",
                                      "nativeSrc": "1669:3:5",
                                      "nodeType": "YulIdentifier",
                                      "src": "1669:3:5"
                                    },
                                    "nativeSrc": "1669:15:5",
                                    "nodeType": "YulFunctionCall",
                                    "src": "1669:15:5"
                                  },
                                  {
                                    "arguments": [
                                      {
                                        "kind": "number",
                                        "nativeSrc": "1690:2:5",
                                        "nodeType": "YulLiteral",
                                        "src": "1690:2:5",
                                        "type": "",
                                        "value": "31"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "not",
                                      "nativeSrc": "1686:3:5",
                                      "nodeType": "YulIdentifier",
                                      "src": "1686:3:5"
                                    },
                                    "nativeSrc": "1686:7:5",
                                    "nodeType": "YulFunctionCall",
                                    "src": "1686:7:5"
                                  }
                                ],
                                "functionName": {
                                  "name": "and",
                                  "nativeSrc": "1665:3:5",
                                  "nodeType": "YulIdentifier",
                                  "src": "1665:3:5"
                                },
                                "nativeSrc": "1665:29:5",
                                "nodeType": "YulFunctionCall",
                                "src": "1665:29:5"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nativeSrc": "1650:3:5",
                              "nodeType": "YulIdentifier",
                              "src": "1650:3:5"
                            },
                            "nativeSrc": "1650:45:5",
                            "nodeType": "YulFunctionCall",
                            "src": "1650:45:5"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "1697:2:5",
                            "nodeType": "YulLiteral",
                            "src": "1697:2:5",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nativeSrc": "1646:3:5",
                          "nodeType": "YulIdentifier",
                          "src": "1646:3:5"
                        },
                        "nativeSrc": "1646:54:5",
                        "nodeType": "YulFunctionCall",
                        "src": "1646:54:5"
                      },
                      "variableNames": [
                        {
                          "name": "tail",
                          "nativeSrc": "1638:4:5",
                          "nodeType": "YulIdentifier",
                          "src": "1638:4:5"
                        }
                      ]
                    }
                  ]
                },
                "name": "abi_encode_tuple_t_string_memory_ptr__to_t_string_memory_ptr__fromStack_reversed",
                "nativeSrc": "1288:418:5",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "headStart",
                    "nativeSrc": "1378:9:5",
                    "nodeType": "YulTypedName",
                    "src": "1378:9:5",
                    "type": ""
                  },
                  {
                    "name": "value0",
                    "nativeSrc": "1389:6:5",
                    "nodeType": "YulTypedName",
                    "src": "1389:6:5",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "tail",
                    "nativeSrc": "1400:4:5",
                    "nodeType": "YulTypedName",
                    "src": "1400:4:5",
                    "type": ""
                  }
                ],
                "src": "1288:418:5"
              },
              {
                "body": {
                  "nativeSrc": "1780:115:5",
                  "nodeType": "YulBlock",
                  "src": "1780:115:5",
                  "statements": [
                    {
                      "body": {
                        "nativeSrc": "1826:16:5",
                        "nodeType": "YulBlock",
                        "src": "1826:16:5",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nativeSrc": "1835:1:5",
                                  "nodeType": "YulLiteral",
                                  "src": "1835:1:5",
                                  "type": "",
                                  "value": "0"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "1838:1:5",
                                  "nodeType": "YulLiteral",
                                  "src": "1838:1:5",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "revert",
                                "nativeSrc": "1828:6:5",
                                "nodeType": "YulIdentifier",
                                "src": "1828:6:5"
                              },
                              "nativeSrc": "1828:12:5",
                              "nodeType": "YulFunctionCall",
                              "src": "1828:12:5"
                            },
                            "nativeSrc": "1828:12:5",
                            "nodeType": "YulExpressionStatement",
                            "src": "1828:12:5"
                          }
                        ]
                      },
                      "condition": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "dataEnd",
                                "nativeSrc": "1801:7:5",
                                "nodeType": "YulIdentifier",
                                "src": "1801:7:5"
                              },
                              {
                                "name": "headStart",
                                "nativeSrc": "1810:9:5",
                                "nodeType": "YulIdentifier",
                                "src": "1810:9:5"
                              }
                            ],
                            "functionName": {
                              "name": "sub",
                              "nativeSrc": "1797:3:5",
                              "nodeType": "YulIdentifier",
                              "src": "1797:3:5"
                            },
                            "nativeSrc": "1797:23:5",
                            "nodeType": "YulFunctionCall",
                            "src": "1797:23:5"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "1822:2:5",
                            "nodeType": "YulLiteral",
                            "src": "1822:2:5",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "slt",
                          "nativeSrc": "1793:3:5",
                          "nodeType": "YulIdentifier",
                          "src": "1793:3:5"
                        },
                        "nativeSrc": "1793:32:5",
                        "nodeType": "YulFunctionCall",
                        "src": "1793:32:5"
                      },
                      "nativeSrc": "1790:52:5",
                      "nodeType": "YulIf",
                      "src": "1790:52:5"
                    },
                    {
                      "nativeSrc": "1851:38:5",
                      "nodeType": "YulAssignment",
                      "src": "1851:38:5",
                      "value": {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nativeSrc": "1879:9:5",
                            "nodeType": "YulIdentifier",
                            "src": "1879:9:5"
                          }
                        ],
                        "functionName": {
                          "name": "abi_decode_uint80",
                          "nativeSrc": "1861:17:5",
                          "nodeType": "YulIdentifier",
                          "src": "1861:17:5"
                        },
                        "nativeSrc": "1861:28:5",
                        "nodeType": "YulFunctionCall",
                        "src": "1861:28:5"
                      },
                      "variableNames": [
                        {
                          "name": "value0",
                          "nativeSrc": "1851:6:5",
                          "nodeType": "YulIdentifier",
                          "src": "1851:6:5"
                        }
                      ]
                    }
                  ]
                },
                "name": "abi_decode_tuple_t_uint80",
                "nativeSrc": "1711:184:5",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "headStart",
                    "nativeSrc": "1746:9:5",
                    "nodeType": "YulTypedName",
                    "src": "1746:9:5",
                    "type": ""
                  },
                  {
                    "name": "dataEnd",
                    "nativeSrc": "1757:7:5",
                    "nodeType": "YulTypedName",
                    "src": "1757:7:5",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "value0",
                    "nativeSrc": "1769:6:5",
                    "nodeType": "YulTypedName",
                    "src": "1769:6:5",
                    "type": ""
                  }
                ],
                "src": "1711:184:5"
              },
              {
                "body": {
                  "nativeSrc": "2107:308:5",
                  "nodeType": "YulBlock",
                  "src": "2107:308:5",
                  "statements": [
                    {
                      "nativeSrc": "2117:27:5",
                      "nodeType": "YulAssignment",
                      "src": "2117:27:5",
                      "value": {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nativeSrc": "2129:9:5",
                            "nodeType": "YulIdentifier",
                            "src": "2129:9:5"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "2140:3:5",
                            "nodeType": "YulLiteral",
                            "src": "2140:3:5",
                            "type": "",
                            "value": "160"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nativeSrc": "2125:3:5",
                          "nodeType": "YulIdentifier",
                          "src": "2125:3:5"
                        },
                        "nativeSrc": "2125:19:5",
                        "nodeType": "YulFunctionCall",
                        "src": "2125:19:5"
                      },
                      "variableNames": [
                        {
                          "name": "tail",
                          "nativeSrc": "2117:4:5",
                          "nodeType": "YulIdentifier",
                          "src": "2117:4:5"
                        }
                      ]
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nativeSrc": "2160:9:5",
                            "nodeType": "YulIdentifier",
                            "src": "2160:9:5"
                          },
                          {
                            "arguments": [
                              {
                                "name": "value0",
                                "nativeSrc": "2175:6:5",
                                "nodeType": "YulIdentifier",
                                "src": "2175:6:5"
                              },
                              {
                                "kind": "number",
                                "nativeSrc": "2183:22:5",
                                "nodeType": "YulLiteral",
                                "src": "2183:22:5",
                                "type": "",
                                "value": "0xffffffffffffffffffff"
                              }
                            ],
                            "functionName": {
                              "name": "and",
                              "nativeSrc": "2171:3:5",
                              "nodeType": "YulIdentifier",
                              "src": "2171:3:5"
                            },
                            "nativeSrc": "2171:35:5",
                            "nodeType": "YulFunctionCall",
                            "src": "2171:35:5"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nativeSrc": "2153:6:5",
                          "nodeType": "YulIdentifier",
                          "src": "2153:6:5"
                        },
                        "nativeSrc": "2153:54:5",
                        "nodeType": "YulFunctionCall",
                        "src": "2153:54:5"
                      },
                      "nativeSrc": "2153:54:5",
                      "nodeType": "YulExpressionStatement",
                      "src": "2153:54:5"
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nativeSrc": "2227:9:5",
                                "nodeType": "YulIdentifier",
                                "src": "2227:9:5"
                              },
                              {
                                "kind": "number",
                                "nativeSrc": "2238:2:5",
                                "nodeType": "YulLiteral",
                                "src": "2238:2:5",
                                "type": "",
                                "value": "32"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nativeSrc": "2223:3:5",
                              "nodeType": "YulIdentifier",
                              "src": "2223:3:5"
                            },
                            "nativeSrc": "2223:18:5",
                            "nodeType": "YulFunctionCall",
                            "src": "2223:18:5"
                          },
                          {
                            "name": "value1",
                            "nativeSrc": "2243:6:5",
                            "nodeType": "YulIdentifier",
                            "src": "2243:6:5"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nativeSrc": "2216:6:5",
                          "nodeType": "YulIdentifier",
                          "src": "2216:6:5"
                        },
                        "nativeSrc": "2216:34:5",
                        "nodeType": "YulFunctionCall",
                        "src": "2216:34:5"
                      },
                      "nativeSrc": "2216:34:5",
                      "nodeType": "YulExpressionStatement",
                      "src": "2216:34:5"
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nativeSrc": "2270:9:5",
                                "nodeType": "YulIdentifier",
                                "src": "2270:9:5"
                              },
                              {
                                "kind": "number",
                                "nativeSrc": "2281:2:5",
                                "nodeType": "YulLiteral",
                                "src": "2281:2:5",
                                "type": "",
                                "value": "64"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nativeSrc": "2266:3:5",
                              "nodeType": "YulIdentifier",
                              "src": "2266:3:5"
                            },
                            "nativeSrc": "2266:18:5",
                            "nodeType": "YulFunctionCall",
                            "src": "2266:18:5"
                          },
                          {
                            "name": "value2",
                            "nativeSrc": "2286:6:5",
                            "nodeType": "YulIdentifier",
                            "src": "2286:6:5"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nativeSrc": "2259:6:5",
                          "nodeType": "YulIdentifier",
                          "src": "2259:6:5"
                        },
                        "nativeSrc": "2259:34:5",
                        "nodeType": "YulFunctionCall",
                        "src": "2259:34:5"
                      },
                      "nativeSrc": "2259:34:5",
                      "nodeType": "YulExpressionStatement",
                      "src": "2259:34:5"
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nativeSrc": "2313:9:5",
                                "nodeType": "YulIdentifier",
                                "src": "2313:9:5"
                              },
                              {
                                "kind": "number",
                                "nativeSrc": "2324:2:5",
                                "nodeType": "YulLiteral",
                                "src": "2324:2:5",
                                "type": "",
                                "value": "96"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nativeSrc": "2309:3:5",
                              "nodeType": "YulIdentifier",
                              "src": "2309:3:5"
                            },
                            "nativeSrc": "2309:18:5",
                            "nodeType": "YulFunctionCall",
                            "src": "2309:18:5"
                          },
                          {
                            "name": "value3",
                            "nativeSrc": "2329:6:5",
                            "nodeType": "YulIdentifier",
                            "src": "2329:6:5"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nativeSrc": "2302:6:5",
                          "nodeType": "YulIdentifier",
                          "src": "2302:6:5"
                        },
                        "nativeSrc": "2302:34:5",
                        "nodeType": "YulFunctionCall",
                        "src": "2302:34:5"
                      },
                      "nativeSrc": "2302:34:5",
                      "nodeType": "YulExpressionStatement",
                      "src": "2302:34:5"
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nativeSrc": "2356:9:5",
                                "nodeType": "YulIdentifier",
                                "src": "2356:9:5"
                              },
                              {
                                "kind": "number",
                                "nativeSrc": "2367:3:5",
                                "nodeType": "YulLiteral",
                                "src": "2367:3:5",
                                "type": "",
                                "value": "128"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nativeSrc": "2352:3:5",
                              "nodeType": "YulIdentifier",
                              "src": "2352:3:5"
                            },
                            "nativeSrc": "2352:19:5",
                            "nodeType": "YulFunctionCall",
                            "src": "2352:19:5"
                          },
                          {
                            "arguments": [
                              {
                                "name": "value4",
                                "nativeSrc": "2377:6:5",
                                "nodeType": "YulIdentifier",
                                "src": "2377:6:5"
                              },
                              {
                                "kind": "number",
                                "nativeSrc": "2385:22:5",
                                "nodeType": "YulLiteral",
                                "src": "2385:22:5",
                                "type": "",
                                "value": "0xffffffffffffffffffff"
                              }
                            ],
                            "functionName": {
                              "name": "and",
                              "nativeSrc": "2373:3:5",
                              "nodeType": "YulIdentifier",
                              "src": "2373:3:5"
                            },
                            "nativeSrc": "2373:35:5",
                            "nodeType": "YulFunctionCall",
                            "src": "2373:35:5"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nativeSrc": "2345:6:5",
                          "nodeType": "YulIdentifier",
                          "src": "2345:6:5"
                        },
                        "nativeSrc": "2345:64:5",
                        "nodeType": "YulFunctionCall",
                        "src": "2345:64:5"
                      },
                      "nativeSrc": "2345:64:5",
                      "nodeType": "YulExpressionStatement",
                      "src": "2345:64:5"
                    }
                  ]
                },
                "name": "abi_encode_tuple_t_uint80_t_int256_t_uint256_t_uint256_t_uint80__to_t_uint80_t_int256_t_uint256_t_uint256_t_uint80__fromStack_reversed",
                "nativeSrc": "1900:515:5",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "headStart",
                    "nativeSrc": "2044:9:5",
                    "nodeType": "YulTypedName",
                    "src": "2044:9:5",
                    "type": ""
                  },
                  {
                    "name": "value4",
                    "nativeSrc": "2055:6:5",
                    "nodeType": "YulTypedName",
                    "src": "2055:6:5",
                    "type": ""
                  },
                  {
                    "name": "value3",
                    "nativeSrc": "2063:6:5",
                    "nodeType": "YulTypedName",
                    "src": "2063:6:5",
                    "type": ""
                  },
                  {
                    "name": "value2",
                    "nativeSrc": "2071:6:5",
                    "nodeType": "YulTypedName",
                    "src": "2071:6:5",
                    "type": ""
                  },
                  {
                    "name": "value1",
                    "nativeSrc": "2079:6:5",
                    "nodeType": "YulTypedName",
                    "src": "2079:6:5",
                    "type": ""
                  },
                  {
                    "name": "value0",
                    "nativeSrc": "2087:6:5",
                    "nodeType": "YulTypedName",
                    "src": "2087:6:5",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "tail",
                    "nativeSrc": "2098:4:5",
                    "nodeType": "YulTypedName",
                    "src": "2098:4:5",
                    "type": ""
                  }
                ],
                "src": "1900:515:5"
              },
              {
                "body": {
                  "nativeSrc": "2489:156:5",
                  "nodeType": "YulBlock",
                  "src": "2489:156:5",
                  "statements": [
                    {
                      "body": {
                        "nativeSrc": "2535:16:5",
                        "nodeType": "YulBlock",
                        "src": "2535:16:5",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nativeSrc": "2544:1:5",
                                  "nodeType": "YulLiteral",
                                  "src": "2544:1:5",
                                  "type": "",
                                  "value": "0"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "2547:1:5",
                                  "nodeType": "YulLiteral",
                                  "src": "2547:1:5",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "revert",
                                "nativeSrc": "2537:6:5",
                                "nodeType": "YulIdentifier",
                                "src": "2537:6:5"
                              },
                              "nativeSrc": "2537:12:5",
                              "nodeType": "YulFunctionCall",
                              "src": "2537:12:5"
                            },
                            "nativeSrc": "2537:12:5",
                            "nodeType": "YulExpressionStatement",
                            "src": "2537:12:5"
                          }
                        ]
                      },
                      "condition": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "dataEnd",
                                "nativeSrc": "2510:7:5",
                                "nodeType": "YulIdentifier",
                                "src": "2510:7:5"
                              },
                              {
                                "name": "headStart",
                                "nativeSrc": "2519:9:5",
                                "nodeType": "YulIdentifier",
                                "src": "2519:9:5"
                              }
                            ],
                            "functionName": {
                              "name": "sub",
                              "nativeSrc": "2506:3:5",
                              "nodeType": "YulIdentifier",
                              "src": "2506:3:5"
                            },
                            "nativeSrc": "2506:23:5",
                            "nodeType": "YulFunctionCall",
                            "src": "2506:23:5"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "2531:2:5",
                            "nodeType": "YulLiteral",
                            "src": "2531:2:5",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "slt",
                          "nativeSrc": "2502:3:5",
                          "nodeType": "YulIdentifier",
                          "src": "2502:3:5"
                        },
                        "nativeSrc": "2502:32:5",
                        "nodeType": "YulFunctionCall",
                        "src": "2502:32:5"
                      },
                      "nativeSrc": "2499:52:5",
                      "nodeType": "YulIf",
                      "src": "2499:52:5"
                    },
                    {
                      "nativeSrc": "2560:14:5",
                      "nodeType": "YulVariableDeclaration",
                      "src": "2560:14:5",
                      "value": {
                        "kind": "number",
                        "nativeSrc": "2573:1:5",
                        "nodeType": "YulLiteral",
                        "src": "2573:1:5",
                        "type": "",
                        "value": "0"
                      },
                      "variables": [
                        {
                          "name": "value",
                          "nativeSrc": "2564:5:5",
                          "nodeType": "YulTypedName",
                          "src": "2564:5:5",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "nativeSrc": "2583:32:5",
                      "nodeType": "YulAssignment",
                      "src": "2583:32:5",
                      "value": {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nativeSrc": "2605:9:5",
                            "nodeType": "YulIdentifier",
                            "src": "2605:9:5"
                          }
                        ],
                        "functionName": {
                          "name": "calldataload",
                          "nativeSrc": "2592:12:5",
                          "nodeType": "YulIdentifier",
                          "src": "2592:12:5"
                        },
                        "nativeSrc": "2592:23:5",
                        "nodeType": "YulFunctionCall",
                        "src": "2592:23:5"
                      },
                      "variableNames": [
                        {
                          "name": "value",
                          "nativeSrc": "2583:5:5",
                          "nodeType": "YulIdentifier",
                          "src": "2583:5:5"
                        }
                      ]
                    },
                    {
                      "nativeSrc": "2624:15:5",
                      "nodeType": "YulAssignment",
                      "src": "2624:15:5",
                      "value": {
                        "name": "value",
                        "nativeSrc": "2634:5:5",
                        "nodeType": "YulIdentifier",
                        "src": "2634:5:5"
                      },
                      "variableNames": [
                        {
                          "name": "value0",
                          "nativeSrc": "2624:6:5",
                          "nodeType": "YulIdentifier",
                          "src": "2624:6:5"
                        }
                      ]
                    }
                  ]
                },
                "name": "abi_decode_tuple_t_int256",
                "nativeSrc": "2420:225:5",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "headStart",
                    "nativeSrc": "2455:9:5",
                    "nodeType": "YulTypedName",
                    "src": "2455:9:5",
                    "type": ""
                  },
                  {
                    "name": "dataEnd",
                    "nativeSrc": "2466:7:5",
                    "nodeType": "YulTypedName",
                    "src": "2466:7:5",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "value0",
                    "nativeSrc": "2478:6:5",
                    "nodeType": "YulTypedName",
                    "src": "2478:6:5",
                    "type": ""
                  }
                ],
                "src": "2420:225:5"
              },
              {
                "body": {
                  "nativeSrc": "2720:156:5",
                  "nodeType": "YulBlock",
                  "src": "2720:156:5",
                  "statements": [
                    {
                      "body": {
                        "nativeSrc": "2766:16:5",
                        "nodeType": "YulBlock",
                        "src": "2766:16:5",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nativeSrc": "2775:1:5",
                                  "nodeType": "YulLiteral",
                                  "src": "2775:1:5",
                                  "type": "",
                                  "value": "0"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "2778:1:5",
                                  "nodeType": "YulLiteral",
                                  "src": "2778:1:5",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "revert",
                                "nativeSrc": "2768:6:5",
                                "nodeType": "YulIdentifier",
                                "src": "2768:6:5"
                              },
                              "nativeSrc": "2768:12:5",
                              "nodeType": "YulFunctionCall",
                              "src": "2768:12:5"
                            },
                            "nativeSrc": "2768:12:5",
                            "nodeType": "YulExpressionStatement",
                            "src": "2768:12:5"
                          }
                        ]
                      },
                      "condition": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "dataEnd",
                                "nativeSrc": "2741:7:5",
                                "nodeType": "YulIdentifier",
                                "src": "2741:7:5"
                              },
                              {
                                "name": "headStart",
                                "nativeSrc": "2750:9:5",
                                "nodeType": "YulIdentifier",
                                "src": "2750:9:5"
                              }
                            ],
                            "functionName": {
                              "name": "sub",
                              "nativeSrc": "2737:3:5",
                              "nodeType": "YulIdentifier",
                              "src": "2737:3:5"
                            },
                            "nativeSrc": "2737:23:5",
                            "nodeType": "YulFunctionCall",
                            "src": "2737:23:5"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "2762:2:5",
                            "nodeType": "YulLiteral",
                            "src": "2762:2:5",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "slt",
                          "nativeSrc": "2733:3:5",
                          "nodeType": "YulIdentifier",
                          "src": "2733:3:5"
                        },
                        "nativeSrc": "2733:32:5",
                        "nodeType": "YulFunctionCall",
                        "src": "2733:32:5"
                      },
                      "nativeSrc": "2730:52:5",
                      "nodeType": "YulIf",
                      "src": "2730:52:5"
                    },
                    {
                      "nativeSrc": "2791:14:5",
                      "nodeType": "YulVariableDeclaration",
                      "src": "2791:14:5",
                      "value": {
                        "kind": "number",
                        "nativeSrc": "2804:1:5",
                        "nodeType": "YulLiteral",
                        "src": "2804:1:5",
                        "type": "",
                        "value": "0"
                      },
                      "variables": [
                        {
                          "name": "value",
                          "nativeSrc": "2795:5:5",
                          "nodeType": "YulTypedName",
                          "src": "2795:5:5",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "nativeSrc": "2814:32:5",
                      "nodeType": "YulAssignment",
                      "src": "2814:32:5",
                      "value": {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nativeSrc": "2836:9:5",
                            "nodeType": "YulIdentifier",
                            "src": "2836:9:5"
                          }
                        ],
                        "functionName": {
                          "name": "calldataload",
                          "nativeSrc": "2823:12:5",
                          "nodeType": "YulIdentifier",
                          "src": "2823:12:5"
                        },
                        "nativeSrc": "2823:23:5",
                        "nodeType": "YulFunctionCall",
                        "src": "2823:23:5"
                      },
                      "variableNames": [
                        {
                          "name": "value",
                          "nativeSrc": "2814:5:5",
                          "nodeType": "YulIdentifier",
                          "src": "2814:5:5"
                        }
                      ]
                    },
                    {
                      "nativeSrc": "2855:15:5",
                      "nodeType": "YulAssignment",
                      "src": "2855:15:5",
                      "value": {
                        "name": "value",
                        "nativeSrc": "2865:5:5",
                        "nodeType": "YulIdentifier",
                        "src": "2865:5:5"
                      },
                      "variableNames": [
                        {
                          "name": "value0",
                          "nativeSrc": "2855:6:5",
                          "nodeType": "YulIdentifier",
                          "src": "2855:6:5"
                        }
                      ]
                    }
                  ]
                },
                "name": "abi_decode_tuple_t_uint256",
                "nativeSrc": "2650:226:5",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "headStart",
                    "nativeSrc": "2686:9:5",
                    "nodeType": "YulTypedName",
                    "src": "2686:9:5",
                    "type": ""
                  },
                  {
                    "name": "dataEnd",
                    "nativeSrc": "2697:7:5",
                    "nodeType": "YulTypedName",
                    "src": "2697:7:5",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "value0",
                    "nativeSrc": "2709:6:5",
                    "nodeType": "YulTypedName",
                    "src": "2709:6:5",
                    "type": ""
                  }
                ],
                "src": "2650:226:5"
              },
              {
                "body": {
                  "nativeSrc": "2928:185:5",
                  "nodeType": "YulBlock",
                  "src": "2928:185:5",
                  "statements": [
                    {
                      "body": {
                        "nativeSrc": "2967:111:5",
                        "nodeType": "YulBlock",
                        "src": "2967:111:5",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nativeSrc": "2988:1:5",
                                  "nodeType": "YulLiteral",
                                  "src": "2988:1:5",
                                  "type": "",
                                  "value": "0"
                                },
                                {
                                  "arguments": [
                                    {
                                      "kind": "number",
                                      "nativeSrc": "2995:3:5",
                                      "nodeType": "YulLiteral",
                                      "src": "2995:3:5",
                                      "type": "",
                                      "value": "224"
                                    },
                                    {
                                      "kind": "number",
                                      "nativeSrc": "3000:10:5",
                                      "nodeType": "YulLiteral",
                                      "src": "3000:10:5",
                                      "type": "",
                                      "value": "0x4e487b71"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "shl",
                                    "nativeSrc": "2991:3:5",
                                    "nodeType": "YulIdentifier",
                                    "src": "2991:3:5"
                                  },
                                  "nativeSrc": "2991:20:5",
                                  "nodeType": "YulFunctionCall",
                                  "src": "2991:20:5"
                                }
                              ],
                              "functionName": {
                                "name": "mstore",
                                "nativeSrc": "2981:6:5",
                                "nodeType": "YulIdentifier",
                                "src": "2981:6:5"
                              },
                              "nativeSrc": "2981:31:5",
                              "nodeType": "YulFunctionCall",
                              "src": "2981:31:5"
                            },
                            "nativeSrc": "2981:31:5",
                            "nodeType": "YulExpressionStatement",
                            "src": "2981:31:5"
                          },
                          {
                            "expression": {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nativeSrc": "3032:1:5",
                                  "nodeType": "YulLiteral",
                                  "src": "3032:1:5",
                                  "type": "",
                                  "value": "4"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "3035:4:5",
                                  "nodeType": "YulLiteral",
                                  "src": "3035:4:5",
                                  "type": "",
                                  "value": "0x11"
                                }
                              ],
                              "functionName": {
                                "name": "mstore",
                                "nativeSrc": "3025:6:5",
                                "nodeType": "YulIdentifier",
                                "src": "3025:6:5"
                              },
                              "nativeSrc": "3025:15:5",
                              "nodeType": "YulFunctionCall",
                              "src": "3025:15:5"
                            },
                            "nativeSrc": "3025:15:5",
                            "nodeType": "YulExpressionStatement",
                            "src": "3025:15:5"
                          },
                          {
                            "expression": {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nativeSrc": "3060:1:5",
                                  "nodeType": "YulLiteral",
                                  "src": "3060:1:5",
                                  "type": "",
                                  "value": "0"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "3063:4:5",
                                  "nodeType": "YulLiteral",
                                  "src": "3063:4:5",
                                  "type": "",
                                  "value": "0x24"
                                }
                              ],
                              "functionName": {
                                "name": "revert",
                                "nativeSrc": "3053:6:5",
                                "nodeType": "YulIdentifier",
                                "src": "3053:6:5"
                              },
                              "nativeSrc": "3053:15:5",
                              "nodeType": "YulFunctionCall",
                              "src": "3053:15:5"
                            },
                            "nativeSrc": "3053:15:5",
                            "nodeType": "YulExpressionStatement",
                            "src": "3053:15:5"
                          }
                        ]
                      },
                      "condition": {
                        "arguments": [
                          {
                            "name": "value",
                            "nativeSrc": "2944:5:5",
                            "nodeType": "YulIdentifier",
                            "src": "2944:5:5"
                          },
                          {
                            "arguments": [
                              {
                                "kind": "number",
                                "nativeSrc": "2955:1:5",
                                "nodeType": "YulLiteral",
                                "src": "2955:1:5",
                                "type": "",
                                "value": "0"
                              }
                            ],
                            "functionName": {
                              "name": "not",
                              "nativeSrc": "2951:3:5",
                              "nodeType": "YulIdentifier",
                              "src": "2951:3:5"
                            },
                            "nativeSrc": "2951:6:5",
                            "nodeType": "YulFunctionCall",
                            "src": "2951:6:5"
                          }
                        ],
                        "functionName": {
                          "name": "eq",
                          "nativeSrc": "2941:2:5",
                          "nodeType": "YulIdentifier",
                          "src": "2941:2:5"
                        },
                        "nativeSrc": "2941:17:5",
                        "nodeType": "YulFunctionCall",
                        "src": "2941:17:5"
                      },
                      "nativeSrc": "2938:140:5",
                      "nodeType": "YulIf",
                      "src": "2938:140:5"
                    },
                    {
                      "nativeSrc": "3087:20:5",
                      "nodeType": "YulAssignment",
                      "src": "3087:20:5",
                      "value": {
                        "arguments": [
                          {
                            "name": "value",
                            "nativeSrc": "3098:5:5",
                            "nodeType": "YulIdentifier",
                            "src": "3098:5:5"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "3105:1:5",
                            "nodeType": "YulLiteral",
                            "src": "3105:1:5",
                            "type": "",
                            "value": "1"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nativeSrc": "3094:3:5",
                          "nodeType": "YulIdentifier",
                          "src": "3094:3:5"
                        },
                        "nativeSrc": "3094:13:5",
                        "nodeType": "YulFunctionCall",
                        "src": "3094:13:5"
                      },
                      "variableNames": [
                        {
                          "name": "ret",
                          "nativeSrc": "3087:3:5",
                          "nodeType": "YulIdentifier",
                          "src": "3087:3:5"
                        }
                      ]
                    }
                  ]
                },
                "name": "increment_t_uint256",
                "nativeSrc": "2881:232:5",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "value",
                    "nativeSrc": "2910:5:5",
                    "nodeType": "YulTypedName",
                    "src": "2910:5:5",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "ret",
                    "nativeSrc": "2920:3:5",
                    "nodeType": "YulTypedName",
                    "src": "2920:3:5",
                    "type": ""
                  }
                ],
                "src": "2881:232:5"
              }
            ]
          },
          "contents": "{\n    { }\n    function abi_encode_tuple_t_uint8__to_t_uint8__fromStack_reversed(headStart, value0) -> tail\n    {\n        tail := add(headStart, 32)\n        mstore(headStart, and(value0, 0xff))\n    }\n    function abi_decode_uint80(offset) -> value\n    {\n        value := calldataload(offset)\n        if iszero(eq(value, and(value, 0xffffffffffffffffffff))) { revert(0, 0) }\n    }\n    function abi_decode_tuple_t_uint80t_int256t_uint256t_uint256(headStart, dataEnd) -> value0, value1, value2, value3\n    {\n        if slt(sub(dataEnd, headStart), 128) { revert(0, 0) }\n        value0 := abi_decode_uint80(headStart)\n        let value := 0\n        value := calldataload(add(headStart, 32))\n        value1 := value\n        let value_1 := 0\n        value_1 := calldataload(add(headStart, 64))\n        value2 := value_1\n        let value_2 := 0\n        value_2 := calldataload(add(headStart, 96))\n        value3 := value_2\n    }\n    function abi_encode_tuple_t_int256__to_t_int256__fromStack_reversed(headStart, value0) -> tail\n    {\n        tail := add(headStart, 32)\n        mstore(headStart, value0)\n    }\n    function abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed(headStart, value0) -> tail\n    {\n        tail := add(headStart, 32)\n        mstore(headStart, value0)\n    }\n    function abi_encode_tuple_t_string_memory_ptr__to_t_string_memory_ptr__fromStack_reversed(headStart, value0) -> tail\n    {\n        mstore(headStart, 32)\n        let length := mload(value0)\n        mstore(add(headStart, 32), length)\n        mcopy(add(headStart, 64), add(value0, 32), length)\n        mstore(add(add(headStart, length), 64), 0)\n        tail := add(add(headStart, and(add(length, 31), not(31))), 64)\n    }\n    function abi_decode_tuple_t_uint80(headStart, dataEnd) -> value0\n    {\n        if slt(sub(dataEnd, headStart), 32) { revert(0, 0) }\n        value0 := abi_decode_uint80(headStart)\n    }\n    function abi_encode_tuple_t_uint80_t_int256_t_uint256_t_uint256_t_uint80__to_t_uint80_t_int256_t_uint256_t_uint256_t_uint80__fromStack_reversed(headStart, value4, value3, value2, value1, value0) -> tail\n    {\n        tail := add(headStart, 160)\n        mstore(headStart, and(value0, 0xffffffffffffffffffff))\n        mstore(add(headStart, 32), value1)\n        mstore(add(headStart, 64), value2)\n        mstore(add(headStart, 96), value3)\n        mstore(add(headStart, 128), and(value4, 0xffffffffffffffffffff))\n    }\n    function abi_decode_tuple_t_int256(headStart, dataEnd) -> value0\n    {\n        if slt(sub(dataEnd, headStart), 32) { revert(0, 0) }\n        let value := 0\n        value := calldataload(headStart)\n        value0 := value\n    }\n    function abi_decode_tuple_t_uint256(headStart, dataEnd) -> value0\n    {\n        if slt(sub(dataEnd, headStart), 32) { revert(0, 0) }\n        let value := 0\n        value := calldataload(headStart)\n        value0 := value\n    }\n    function increment_t_uint256(value) -> ret\n    {\n        if eq(value, not(0))\n        {\n            mstore(0, shl(224, 0x4e487b71))\n            mstore(4, 0x11)\n            revert(0, 0x24)\n        }\n        ret := add(value, 1)\n    }\n}",
          "id": 5,
          "language": "Yul",
          "name": "#utility.yul"
        }
      ],
      "immutableReferences": {},
      "linkReferences": {},
      "object": "608060405234801561000f575f5ffd5b50600436106100b1575f3560e01c80638205bf6a1161006e5780638205bf6a1461019a5780639a6fc8f5146101a3578063a87a20ce14610220578063b5ab58dc14610233578063b633620c14610252578063feaf968c14610271575f5ffd5b8063313ce567146100b55780634aa2011f146100d857806350d25bcd1461013457806354fd4d501461014b578063668a0f02146101525780637284e4161461015b575b5f5ffd5b5f546100c19060ff1681565b60405160ff90911681526020015b60405180910390f35b6101326100e636600461030d565b69ffffffffffffffffffff9093166003818155600184905560028390555f9182526004602090815260408084209590955581548352600581528483209390935554815260069091522055565b005b61013d60015481565b6040519081526020016100cf565b61013d5f81565b61013d60035481565b604080518082018252601f81527f76302e382f74657374732f4d6f636b563341676772656761746f722e736f6c00602082015290516100cf9190610343565b61013d60025481565b6101e96101b1366004610378565b69ffffffffffffffffffff81165f90815260046020908152604080832054600683528184205460059093529220549293919290918490565b6040805169ffffffffffffffffffff968716815260208101959095528401929092526060830152909116608082015260a0016100cf565b61013261022e366004610398565b61029b565b61013d610241366004610398565b60046020525f908152604090205481565b61013d610260366004610398565b60056020525f908152604090205481565b6003545f8181526004602090815260408083205460068352818420546005909352922054836101e9565b60018190554260025560038054905f6102b3836103af565b9091555050600380545f908152600460209081526040808320949094558254825260058152838220429081905592548252600690529190912055565b803569ffffffffffffffffffff81168114610308575f5ffd5b919050565b5f5f5f5f60808587031215610320575f5ffd5b610329856102ef565b966020860135965060408601359560600135945092505050565b602081525f82518060208401528060208501604085015e5f604082850101526040601f19601f83011684010191505092915050565b5f60208284031215610388575f5ffd5b610391826102ef565b9392505050565b5f602082840312156103a8575f5ffd5b5035919050565b5f600182016103cc57634e487b7160e01b5f52601160045260245ffd5b506001019056fea2646970667358221220e101512d174377aae20ec779e2e28080bd585df9fe85e5749043a167f49ade9964736f6c634300081c0033",
      "opcodes": "PUSH1 0x80 PUSH1 0x40 MSTORE CALLVALUE DUP1 ISZERO PUSH2 0xF JUMPI PUSH0 PUSH0 REVERT JUMPDEST POP PUSH1 0x4 CALLDATASIZE LT PUSH2 0xB1 JUMPI PUSH0 CALLDATALOAD PUSH1 0xE0 SHR DUP1 PUSH4 0x8205BF6A GT PUSH2 0x6E JUMPI DUP1 PUSH4 0x8205BF6A EQ PUSH2 0x19A JUMPI DUP1 PUSH4 0x9A6FC8F5 EQ PUSH2 0x1A3 JUMPI DUP1 PUSH4 0xA87A20CE EQ PUSH2 0x220 JUMPI DUP1 PUSH4 0xB5AB58DC EQ PUSH2 0x233 JUMPI DUP1 PUSH4 0xB633620C EQ PUSH2 0x252 JUMPI DUP1 PUSH4 0xFEAF968C EQ PUSH2 0x271 JUMPI PUSH0 PUSH0 REVERT JUMPDEST DUP1 PUSH4 0x313CE567 EQ PUSH2 0xB5 JUMPI DUP1 PUSH4 0x4AA2011F EQ PUSH2 0xD8 JUMPI DUP1 PUSH4 0x50D25BCD EQ PUSH2 0x134 JUMPI DUP1 PUSH4 0x54FD4D50 EQ PUSH2 0x14B JUMPI DUP1 PUSH4 0x668A0F02 EQ PUSH2 0x152 JUMPI DUP1 PUSH4 0x7284E416 EQ PUSH2 0x15B JUMPI JUMPDEST PUSH0 PUSH0 REVERT JUMPDEST PUSH0 SLOAD PUSH2 0xC1 SWAP1 PUSH1 0xFF AND DUP2 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH1 0xFF SWAP1 SWAP2 AND DUP2 MSTORE PUSH1 0x20 ADD JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH2 0x132 PUSH2 0xE6 CALLDATASIZE PUSH1 0x4 PUSH2 0x30D JUMP JUMPDEST PUSH10 0xFFFFFFFFFFFFFFFFFFFF SWAP1 SWAP4 AND PUSH1 0x3 DUP2 DUP2 SSTORE PUSH1 0x1 DUP5 SWAP1 SSTORE PUSH1 0x2 DUP4 SWAP1 SSTORE PUSH0 SWAP2 DUP3 MSTORE PUSH1 0x4 PUSH1 0x20 SWAP1 DUP2 MSTORE PUSH1 0x40 DUP1 DUP5 KECCAK256 SWAP6 SWAP1 SWAP6 SSTORE DUP2 SLOAD DUP4 MSTORE PUSH1 0x5 DUP2 MSTORE DUP5 DUP4 KECCAK256 SWAP4 SWAP1 SWAP4 SSTORE SLOAD DUP2 MSTORE PUSH1 0x6 SWAP1 SWAP2 MSTORE KECCAK256 SSTORE JUMP JUMPDEST STOP JUMPDEST PUSH2 0x13D PUSH1 0x1 SLOAD DUP2 JUMP JUMPDEST PUSH1 0x40 MLOAD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH2 0xCF JUMP JUMPDEST PUSH2 0x13D PUSH0 DUP2 JUMP JUMPDEST PUSH2 0x13D PUSH1 0x3 SLOAD DUP2 JUMP JUMPDEST PUSH1 0x40 DUP1 MLOAD DUP1 DUP3 ADD DUP3 MSTORE PUSH1 0x1F DUP2 MSTORE PUSH32 0x76302E382F74657374732F4D6F636B563341676772656761746F722E736F6C00 PUSH1 0x20 DUP3 ADD MSTORE SWAP1 MLOAD PUSH2 0xCF SWAP2 SWAP1 PUSH2 0x343 JUMP JUMPDEST PUSH2 0x13D PUSH1 0x2 SLOAD DUP2 JUMP JUMPDEST PUSH2 0x1E9 PUSH2 0x1B1 CALLDATASIZE PUSH1 0x4 PUSH2 0x378 JUMP JUMPDEST PUSH10 0xFFFFFFFFFFFFFFFFFFFF DUP2 AND PUSH0 SWAP1 DUP2 MSTORE PUSH1 0x4 PUSH1 0x20 SWAP1 DUP2 MSTORE PUSH1 0x40 DUP1 DUP4 KECCAK256 SLOAD PUSH1 0x6 DUP4 MSTORE DUP2 DUP5 KECCAK256 SLOAD PUSH1 0x5 SWAP1 SWAP4 MSTORE SWAP3 KECCAK256 SLOAD SWAP3 SWAP4 SWAP2 SWAP3 SWAP1 SWAP2 DUP5 SWAP1 JUMP JUMPDEST PUSH1 0x40 DUP1 MLOAD PUSH10 0xFFFFFFFFFFFFFFFFFFFF SWAP7 DUP8 AND DUP2 MSTORE PUSH1 0x20 DUP2 ADD SWAP6 SWAP1 SWAP6 MSTORE DUP5 ADD SWAP3 SWAP1 SWAP3 MSTORE PUSH1 0x60 DUP4 ADD MSTORE SWAP1 SWAP2 AND PUSH1 0x80 DUP3 ADD MSTORE PUSH1 0xA0 ADD PUSH2 0xCF JUMP JUMPDEST PUSH2 0x132 PUSH2 0x22E CALLDATASIZE PUSH1 0x4 PUSH2 0x398 JUMP JUMPDEST PUSH2 0x29B JUMP JUMPDEST PUSH2 0x13D PUSH2 0x241 CALLDATASIZE PUSH1 0x4 PUSH2 0x398 JUMP JUMPDEST PUSH1 0x4 PUSH1 0x20 MSTORE PUSH0 SWAP1 DUP2 MSTORE PUSH1 0x40 SWAP1 KECCAK256 SLOAD DUP2 JUMP JUMPDEST PUSH2 0x13D PUSH2 0x260 CALLDATASIZE PUSH1 0x4 PUSH2 0x398 JUMP JUMPDEST PUSH1 0x5 PUSH1 0x20 MSTORE PUSH0 SWAP1 DUP2 MSTORE PUSH1 0x40 SWAP1 KECCAK256 SLOAD DUP2 JUMP JUMPDEST PUSH1 0x3 SLOAD PUSH0 DUP2 DUP2 MSTORE PUSH1 0x4 PUSH1 0x20 SWAP1 DUP2 MSTORE PUSH1 0x40 DUP1 DUP4 KECCAK256 SLOAD PUSH1 0x6 DUP4 MSTORE DUP2 DUP5 KECCAK256 SLOAD PUSH1 0x5 SWAP1 SWAP4 MSTORE SWAP3 KECCAK256 SLOAD DUP4 PUSH2 0x1E9 JUMP JUMPDEST PUSH1 0x1 DUP2 SWAP1 SSTORE TIMESTAMP PUSH1 0x2 SSTORE PUSH1 0x3 DUP1 SLOAD SWAP1 PUSH0 PUSH2 0x2B3 DUP4 PUSH2 0x3AF JUMP JUMPDEST SWAP1 SWAP2 SSTORE POP POP PUSH1 0x3 DUP1 SLOAD PUSH0 SWAP1 DUP2 MSTORE PUSH1 0x4 PUSH1 0x20 SWAP1 DUP2 MSTORE PUSH1 0x40 DUP1 DUP4 KECCAK256 SWAP5 SWAP1 SWAP5 SSTORE DUP3 SLOAD DUP3 MSTORE PUSH1 0x5 DUP2 MSTORE DUP4 DUP3 KECCAK256 TIMESTAMP SWAP1 DUP2 SWAP1 SSTORE SWAP3 SLOAD DUP3 MSTORE PUSH1 0x6 SWAP1 MSTORE SWAP2 SWAP1 SWAP2 KECCAK256 SSTORE JUMP JUMPDEST DUP1 CALLDATALOAD PUSH10 0xFFFFFFFFFFFFFFFFFFFF DUP2 AND DUP2 EQ PUSH2 0x308 JUMPI PUSH0 PUSH0 REVERT JUMPDEST SWAP2 SWAP1 POP JUMP JUMPDEST PUSH0 PUSH0 PUSH0 PUSH0 PUSH1 0x80 DUP6 DUP8 SUB SLT ISZERO PUSH2 0x320 JUMPI PUSH0 PUSH0 REVERT JUMPDEST PUSH2 0x329 DUP6 PUSH2 0x2EF JUMP JUMPDEST SWAP7 PUSH1 0x20 DUP7 ADD CALLDATALOAD SWAP7 POP PUSH1 0x40 DUP7 ADD CALLDATALOAD SWAP6 PUSH1 0x60 ADD CALLDATALOAD SWAP5 POP SWAP3 POP POP POP JUMP JUMPDEST PUSH1 0x20 DUP2 MSTORE PUSH0 DUP3 MLOAD DUP1 PUSH1 0x20 DUP5 ADD MSTORE DUP1 PUSH1 0x20 DUP6 ADD PUSH1 0x40 DUP6 ADD MCOPY PUSH0 PUSH1 0x40 DUP3 DUP6 ADD ADD MSTORE PUSH1 0x40 PUSH1 0x1F NOT PUSH1 0x1F DUP4 ADD AND DUP5 ADD ADD SWAP2 POP POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH0 PUSH1 0x20 DUP3 DUP5 SUB SLT ISZERO PUSH2 0x388 JUMPI PUSH0 PUSH0 REVERT JUMPDEST PUSH2 0x391 DUP3 PUSH2 0x2EF JUMP JUMPDEST SWAP4 SWAP3 POP POP POP JUMP JUMPDEST PUSH0 PUSH1 0x20 DUP3 DUP5 SUB SLT ISZERO PUSH2 0x3A8 JUMPI PUSH0 PUSH0 REVERT JUMPDEST POP CALLDATALOAD SWAP2 SWAP1 POP JUMP JUMPDEST PUSH0 PUSH1 0x1 DUP3 ADD PUSH2 0x3CC JUMPI PUSH4 0x4E487B71 PUSH1 0xE0 SHL PUSH0 MSTORE PUSH1 0x11 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH0 REVERT JUMPDEST POP PUSH1 0x1 ADD SWAP1 JUMP INVALID LOG2 PUSH5 0x6970667358 0x22 SLT KECCAK256 0xE1 ADD MLOAD 0x2D OR NUMBER PUSH24 0xAAE20EC779E2E28080BD585DF9FE85E5749043A167F49ADE SWAP10 PUSH5 0x736F6C6343 STOP ADDMOD SHR STOP CALLER ",
      "sourceMap": "684:176:4:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;529:30:3;;;;;;;;;;;;186:4:5;174:17;;;156:36;;144:2;129:18;529:30:3;;;;;;;;1251:326;;;;;;:::i;:::-;1362:22;;;;:11;:22;;;1390:12;:22;;;-1:-1:-1;1418:28:3;;;-1:-1:-1;1452:22:3;;;:9;:22;;;;;;;;:32;;;;1503:11;;1490:25;;:12;:25;;;;;:38;;;;1547:11;1534:25;;:12;:25;;;;:38;1251:326;;;563:35;;;;;;;;;1070:25:5;;;1058:2;1043:18;563:35:3;926:175:5;480:44:3;;523:1;480:44;;645:35;;;;;;2230:121;2306:40;;;;;;;;;;;;;;;;2230:121;;;;2306:40;2230:121;:::i;602:39::-;;;;;;1581:297;;;;;;:::i;:::-;1795:19;;;1676:14;1795:19;;;:9;:19;;;;;;;;;1816:12;:22;;;;;;1840:12;:22;;;;;;1795:19;;;;1816:22;;1795:19;;1581:297;;;;;2183:22:5;2171:35;;;2153:54;;2238:2;2223:18;;2216:34;;;;2266:18;;2259:34;;;;2324:2;2309:18;;2302:34;2373:35;;;2367:3;2352:19;;2345:64;2140:3;2125:19;1581:297:3;1900:515:5;975:272:3;;;;;;:::i;:::-;;:::i;685:52::-;;;;;;:::i;:::-;;;;;;;;;;;;;;741:56;;;;;;:::i;:::-;;;;;;;;;;;;;;1882:344;2080:11;;1957:14;2100:22;;;:9;:22;;;;;;;;;2130:12;:25;;;;;;2163:12;:25;;;;;;2080:11;1882:344;;975:272;1026:12;:22;;;1072:15;1054;:33;1093:11;:13;;;-1:-1:-1;1093:13:3;;;:::i;:::-;;;;-1:-1:-1;;1122:11:3;;;1112:22;;;;:9;:22;;;;;;;;:32;;;;1163:11;;1150:25;;:12;:25;;;;;1178:15;1150:43;;;;1212:11;;1199:25;;:12;:25;;;;;;:43;975:272::o;203:175:5:-;270:20;;330:22;319:34;;309:45;;299:73;;368:1;365;358:12;299:73;203:175;;;:::o;383:538::-;467:6;475;483;491;544:3;532:9;523:7;519:23;515:33;512:53;;;561:1;558;551:12;512:53;584:28;602:9;584:28;:::i;:::-;574:38;681:2;666:18;;653:32;;-1:-1:-1;782:2:5;767:18;;754:32;;885:2;870:18;857:32;;-1:-1:-1;383:538:5;-1:-1:-1;;;383:538:5:o;1288:418::-;1437:2;1426:9;1419:21;1400:4;1469:6;1463:13;1512:6;1507:2;1496:9;1492:18;1485:34;1571:6;1566:2;1558:6;1554:15;1549:2;1538:9;1534:18;1528:50;1627:1;1622:2;1613:6;1602:9;1598:22;1594:31;1587:42;1697:2;1690;1686:7;1681:2;1673:6;1669:15;1665:29;1654:9;1650:45;1646:54;1638:62;;;1288:418;;;;:::o;1711:184::-;1769:6;1822:2;1810:9;1801:7;1797:23;1793:32;1790:52;;;1838:1;1835;1828:12;1790:52;1861:28;1879:9;1861:28;:::i;:::-;1851:38;1711:184;-1:-1:-1;;;1711:184:5:o;2420:225::-;2478:6;2531:2;2519:9;2510:7;2506:23;2502:32;2499:52;;;2547:1;2544;2537:12;2499:52;-1:-1:-1;2592:23:5;;2420:225;-1:-1:-1;2420:225:5:o;2881:232::-;2920:3;2941:17;;;2938:140;;3000:10;2995:3;2991:20;2988:1;2981:31;3035:4;3032:1;3025:15;3063:4;3060:1;3053:15;2938:140;-1:-1:-1;3105:1:5;3094:13;;2881:232::o"
    },
    "gasEstimates": {
      "creation": {
        "codeDepositCost": "206600",
        "executionCost": "infinite",
        "totalCost": "infinite"
      },
      "external": {
        "decimals()": "2301",
        "description()": "infinite",
        "getAnswer(uint256)": "2501",
        "getRoundData(uint80)": "6975",
        "getTimestamp(uint256)": "2523",
        "latestAnswer()": "2339",
        "latestRound()": "2383",
        "latestRoundData()": "8991",
        "latestTimestamp()": "2294",
        "updateAnswer(int256)": "141599",
        "updateRoundData(uint80,int256,uint256,uint256)": "137411",
        "version()": "260"
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
  "metadata": "{\"compiler\":{\"version\":\"0.8.28+commit.7893614a\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"uint8\",\"name\":\"_decimals\",\"type\":\"uint8\"},{\"internalType\":\"int256\",\"name\":\"_initialAnswer\",\"type\":\"int256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"int256\",\"name\":\"current\",\"type\":\"int256\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"roundId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"updatedAt\",\"type\":\"uint256\"}],\"name\":\"AnswerUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"roundId\",\"type\":\"uint256\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"startedBy\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"startedAt\",\"type\":\"uint256\"}],\"name\":\"NewRound\",\"type\":\"event\"},{\"inputs\":[],\"name\":\"decimals\",\"outputs\":[{\"internalType\":\"uint8\",\"name\":\"\",\"type\":\"uint8\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"description\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"getAnswer\",\"outputs\":[{\"internalType\":\"int256\",\"name\":\"\",\"type\":\"int256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint80\",\"name\":\"_roundId\",\"type\":\"uint80\"}],\"name\":\"getRoundData\",\"outputs\":[{\"internalType\":\"uint80\",\"name\":\"roundId\",\"type\":\"uint80\"},{\"internalType\":\"int256\",\"name\":\"answer\",\"type\":\"int256\"},{\"internalType\":\"uint256\",\"name\":\"startedAt\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"updatedAt\",\"type\":\"uint256\"},{\"internalType\":\"uint80\",\"name\":\"answeredInRound\",\"type\":\"uint80\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"getTimestamp\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"latestAnswer\",\"outputs\":[{\"internalType\":\"int256\",\"name\":\"\",\"type\":\"int256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"latestRound\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"latestRoundData\",\"outputs\":[{\"internalType\":\"uint80\",\"name\":\"roundId\",\"type\":\"uint80\"},{\"internalType\":\"int256\",\"name\":\"answer\",\"type\":\"int256\"},{\"internalType\":\"uint256\",\"name\":\"startedAt\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"updatedAt\",\"type\":\"uint256\"},{\"internalType\":\"uint80\",\"name\":\"answeredInRound\",\"type\":\"uint80\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"latestTimestamp\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"int256\",\"name\":\"_answer\",\"type\":\"int256\"}],\"name\":\"updateAnswer\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint80\",\"name\":\"_roundId\",\"type\":\"uint80\"},{\"internalType\":\"int256\",\"name\":\"_answer\",\"type\":\"int256\"},{\"internalType\":\"uint256\",\"name\":\"_timestamp\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_startedAt\",\"type\":\"uint256\"}],\"name\":\"updateRoundData\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"version\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"project/contracts/mocks/MockV3Aggregator.sol\":\"MyMockV3Aggregator\"},\"evmVersion\":\"cancun\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\",\"useLiteralContent\":true},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\"project/:@chainlink/contracts/=npm/@chainlink/contracts@1.4.0/\"]},\"sources\":{\"npm/@chainlink/contracts@1.4.0/src/v0.8/shared/interfaces/AggregatorInterface.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\npragma solidity ^0.8.0;\\n\\n// solhint-disable-next-line interface-starts-with-i\\ninterface AggregatorInterface {\\n  function latestAnswer() external view returns (int256);\\n\\n  function latestTimestamp() external view returns (uint256);\\n\\n  function latestRound() external view returns (uint256);\\n\\n  function getAnswer(uint256 roundId) external view returns (int256);\\n\\n  function getTimestamp(uint256 roundId) external view returns (uint256);\\n\\n  event AnswerUpdated(int256 indexed current, uint256 indexed roundId, uint256 updatedAt);\\n\\n  event NewRound(uint256 indexed roundId, address indexed startedBy, uint256 startedAt);\\n}\\n\",\"keccak256\":\"0x2450923d9bc223f53bcbbd50a17405929ce5322200e8ce053c7918030cbb7844\",\"license\":\"MIT\"},\"npm/@chainlink/contracts@1.4.0/src/v0.8/shared/interfaces/AggregatorV2V3Interface.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\npragma solidity ^0.8.0;\\n\\nimport {AggregatorInterface} from \\\"./AggregatorInterface.sol\\\";\\nimport {AggregatorV3Interface} from \\\"./AggregatorV3Interface.sol\\\";\\n\\n// solhint-disable-next-line interface-starts-with-i\\ninterface AggregatorV2V3Interface is AggregatorInterface, AggregatorV3Interface {}\\n\",\"keccak256\":\"0xd5e222c5dd223490b766da8e45266101dd3635b1ba31d9b7a3a80d49f7640f85\",\"license\":\"MIT\"},\"npm/@chainlink/contracts@1.4.0/src/v0.8/shared/interfaces/AggregatorV3Interface.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\npragma solidity ^0.8.0;\\n\\n// solhint-disable-next-line interface-starts-with-i\\ninterface AggregatorV3Interface {\\n  function decimals() external view returns (uint8);\\n\\n  function description() external view returns (string memory);\\n\\n  function version() external view returns (uint256);\\n\\n  function getRoundData(\\n    uint80 _roundId\\n  ) external view returns (uint80 roundId, int256 answer, uint256 startedAt, uint256 updatedAt, uint80 answeredInRound);\\n\\n  function latestRoundData()\\n    external\\n    view\\n    returns (uint80 roundId, int256 answer, uint256 startedAt, uint256 updatedAt, uint80 answeredInRound);\\n}\\n\",\"keccak256\":\"0x257a8d28fa83d3d942547c8e129ef465e4b5f3f31171e7be4739a4c98da6b4f0\",\"license\":\"MIT\"},\"npm/@chainlink/contracts@1.4.0/src/v0.8/shared/mocks/MockV3Aggregator.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\npragma solidity ^0.8.0;\\n\\nimport {AggregatorV2V3Interface} from \\\"../interfaces/AggregatorV2V3Interface.sol\\\";\\n\\n/**\\n * @title MockV3Aggregator\\n * @notice Based on the FluxAggregator contract\\n * @notice Use this contract when you need to test\\n * other contract's ability to read data from an\\n * aggregator contract, but how the aggregator got\\n * its answer is unimportant\\n */\\n// solhint-disable\\ncontract MockV3Aggregator is AggregatorV2V3Interface {\\n  uint256 public constant override version = 0;\\n\\n  uint8 public override decimals;\\n  int256 public override latestAnswer;\\n  uint256 public override latestTimestamp;\\n  uint256 public override latestRound;\\n\\n  mapping(uint256 => int256) public override getAnswer;\\n  mapping(uint256 => uint256) public override getTimestamp;\\n  mapping(uint256 => uint256) private getStartedAt;\\n\\n  constructor(uint8 _decimals, int256 _initialAnswer) {\\n    decimals = _decimals;\\n    updateAnswer(_initialAnswer);\\n  }\\n\\n  function updateAnswer(int256 _answer) public {\\n    latestAnswer = _answer;\\n    latestTimestamp = block.timestamp;\\n    latestRound++;\\n    getAnswer[latestRound] = _answer;\\n    getTimestamp[latestRound] = block.timestamp;\\n    getStartedAt[latestRound] = block.timestamp;\\n  }\\n\\n  function updateRoundData(uint80 _roundId, int256 _answer, uint256 _timestamp, uint256 _startedAt) public {\\n    latestRound = _roundId;\\n    latestAnswer = _answer;\\n    latestTimestamp = _timestamp;\\n    getAnswer[latestRound] = _answer;\\n    getTimestamp[latestRound] = _timestamp;\\n    getStartedAt[latestRound] = _startedAt;\\n  }\\n\\n  function getRoundData(\\n    uint80 _roundId\\n  )\\n    external\\n    view\\n    override\\n    returns (uint80 roundId, int256 answer, uint256 startedAt, uint256 updatedAt, uint80 answeredInRound)\\n  {\\n    return (_roundId, getAnswer[_roundId], getStartedAt[_roundId], getTimestamp[_roundId], _roundId);\\n  }\\n\\n  function latestRoundData()\\n    external\\n    view\\n    override\\n    returns (uint80 roundId, int256 answer, uint256 startedAt, uint256 updatedAt, uint80 answeredInRound)\\n  {\\n    return (\\n      uint80(latestRound),\\n      getAnswer[latestRound],\\n      getStartedAt[latestRound],\\n      getTimestamp[latestRound],\\n      uint80(latestRound)\\n    );\\n  }\\n\\n  function description() external pure override returns (string memory) {\\n    return \\\"v0.8/tests/MockV3Aggregator.sol\\\";\\n  }\\n}\\n\",\"keccak256\":\"0x27a9502fd9c7decd2d3213653050e29bdfa2f5e71f2a83d4c98120de4b9c711f\",\"license\":\"MIT\"},\"project/contracts/mocks/MockV3Aggregator.sol\":{\"content\":\"//SPDX-License-Identifier: MIT\\n// mock\\u5408\\u7ea6\\uff0c\\n// FundMe\\u5408\\u7ea6\\u4e2d\\u7528\\u5230\\u4e86dataFeed\\u5408\\u7ea6\\uff0c\\u9700\\u8981\\u5728\\u6d4b\\u8bd5\\u7684\\u65f6\\u5019\\u5fc5\\u987b\\u5728sepolia\\u4e2d\\u8fdb\\u884c\\u3002\\n// MockV3Aggregator  mock\\u5408\\u7ea6\\u5b9e\\u73b0\\u4e86dataFeed\\u5408\\u7ea6\\u7684\\u57fa\\u672c\\u529f\\u80fd\\uff0c\\u53ea\\u9700\\u8981\\u5728\\u672c\\u5730\\u90e8\\u7f72\\u5c31\\u53ef\\u4ee5\\uff0c\\u4e0d\\u9700\\u8981\\u518dsepolia\\u4e2d\\u8fdb\\u884c\\u3002\\n// \\u8fd9\\u4e2amock\\u5408\\u7ea6\\u9700\\u8981\\u4e24\\u4e2a\\u53c2\\u6570\\n// decimals\\uff1amock\\u5408\\u7ea6\\u63d0\\u4f9b\\u7684\\u4ef7\\u683c\\u6570\\u636e\\uff0c\\u540e\\u9762\\u6709\\u51e0\\u4e2a0\\u3002\\u8bbe\\u4e3a8\\n// initialAnswer\\uff1a\\u8fd4\\u56de\\u4ef7\\u683c\\uff0c\\u771f\\u6b63\\u7684\\u9884\\u8a00\\u673a\\u5408\\u7ea6\\u5e94\\u8be5\\u662f\\u4ece\\u5916\\u90e8\\u83b7\\u53d6\\u7684\\uff0c\\u8fd9\\u4e2amock\\u5408\\u7ea6\\u662f\\u81ea\\u5df1\\u8bbe\\u5b9a\\u7684\\u3002300000000000\\uff083000\\u540e\\u97628\\u4e2a\\u96f6\\uff09\\npragma solidity ^0.8.20;\\n\\nimport {MockV3Aggregator} from \\\"@chainlink/contracts/src/v0.8/shared/mocks/MockV3Aggregator.sol\\\";\\n\\ncontract MyMockV3Aggregator is MockV3Aggregator {\\n    constructor(\\n        uint8 _decimals,\\n        int256 _initialAnswer\\n    ) MockV3Aggregator(_decimals, _initialAnswer) {}\\n}\\n\",\"keccak256\":\"0x5aa45c98fabf2cb68c5f57b7202381fc248c0e638302dd2f66dda681f5a58b24\",\"license\":\"MIT\"}},\"version\":1}",
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
});