---
title: 使用 Go 进行 Solidity ABI 编解码
categories:
  - blockchain
date: 2019-06-29 09:45:47
tags:
---

## 类型对应关系

| 类型             | Solidity | Go                 |
| ---------------- | -------- | ------------------ |
| 字符串           | string   | string             |
| 布尔             | bool     | bool               |
| 地址             | address  | common.Address     |
| 无符号整数       | uintN    | uintN 或 \*big.Int |
| 有符号整数       | intN     | intN 或 \*big.Int  |
| 固定长度字节数组 | bytesN   | [N]byte            |
| 动态长度字节数组 | bytes    | []byte             |
| 固定长度数组     | T[k]     | array              |
| 动态长度数组     | T[]      | slice              |
| 枚举             | enum     | uintN              |
| 映射             | mapping  | -                  |
| 结构体           | struct   | -                  |

备注：

- solidity 中 uintN 和 intN 类型如果和 go 内置类型名相同，那么就一一对应，否则就是 `*big.Int` 类型。比如说 Solidity `uint8` 对应 go 的 `uint8` 而 solidity 中 `uint256` 以及 `uint160` 等就对应 go `*big.Int` 类型
- 固定长度数组对应相应类型数组，比如 Solidity `int[2]` 对应 go 的 `[2]int`
- 动态长度数组对应相应类型的切片，比如 Solidity 的 `int[]` 对应 go 的 `[]int`
- 枚举对应一个无符号的整数，具体根据枚举数量，一般为 `uint8` 类型
- mapping 只能使用 storage 存储类型，不能作为函数参数和函数作用域变量，只能用于状态变量
- struct 结构体 ABI 编解码目前处于实验阶段

## 使用示例

```go
package main

import (
	"fmt"
	"strings"

	"github.com/ethereum/go-ethereum/accounts/abi"
	"github.com/ethereum/go-ethereum/common"
)

const abiraw = `[
	{
		"constant": false,
		"inputs": [
			{
				"name": "param",
				"type": "address"
			}
		],
		"name": "addrTy",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	}
]`

func main() {
	abi, err := abi.JSON(strings.NewReader(abiraw))
	if err != nil {
		panic(err)
	}
	address := common.HexToAddress("0xca35b7d915458ef540ade6068dfe2f44e8fa733c")
	out, err := abi.Pack("addrTy", address)
	if err != nil {
		panic(err)
	}
	fmt.Printf("%x\n", out[4:])
}
```
