// decimals：mock合约提供的价格数据，后面有几个0。设为8
// initialAnswer：返回价格，真正的预言机合约应该是从外部获取的，这个mock合约是自己设定的。300000000000（3000后面8个零）
// 属于MyMockV3Aggregator的构造参数
export const DECIMALS = 8
export const INITIAL_ANSWER = 300000000000

// 锁定时间，这里单位是秒。属于FundMe构造函数参数
export const LOCK_TIME = 60n
export const DATAFEED_ADDR = "0x694AA1769357215DE4FAC081bf1f309aDC325306"
export const CONFIRMATIONS = 3

// 每个网络的datafeed：https://docs.chain.link/data-feeds/price-feeds/addresses?page=1&testnetPage=1
export const networkConfig = new Map([
    ["sepolia", "0x694AA1769357215DE4FAC081bf1f309aDC325306"],
    // bnbchain test
    ["bnbChain", "0x143db3CEEfbdfe5631aDD3E50f7614B6ba708BA7"]
])
