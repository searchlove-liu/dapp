// decimals：mock合约提供的价格数据，后面有几个0。设为8
// initialAnswer：返回价格，真正的预言机合约应该是从外部获取的，这个mock合约是自己设定的。300000000000（3000后面8个零）
// 属于MyMockV3Aggregator的构造参数
export const DECIMALS = 8
export const INITIAL_ANSWER = 300000000000

// 锁定时间。属于FundMe构造函数参数
export const LOCK_TIME = 240n
export const DATAFEED_ADDR = "0x694AA1769357215DE4FAC081bf1f309aDC325306"
