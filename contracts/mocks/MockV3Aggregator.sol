//SPDX-License-Identifier: MIT
// mock合约，
// FundMe合约中用到了dataFeed合约，需要在测试的时候必须在sepolia中进行。
// MockV3Aggregator  mock合约实现了dataFeed合约的基本功能，只需要在本地部署就可以，不需要再sepolia中进行。
// 这个mock合约需要两个参数
// decimals：mock合约提供的价格数据，后面有几个0。设为8
// initialAnswer：返回价格，真正的预言机合约应该是从外部获取的，这个mock合约是自己设定的。300000000000（3000后面8个零）
pragma solidity ^0.8.20;

import {MockV3Aggregator} from "@chainlink/contracts/src/v0.8/shared/mocks/MockV3Aggregator.sol";

contract MyMockV3Aggregator is MockV3Aggregator {
    constructor(
        uint8 _decimals,
        int256 _initialAnswer
    ) MockV3Aggregator(_decimals, _initialAnswer) {}
}
