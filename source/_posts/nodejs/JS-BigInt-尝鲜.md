---
title: JS BigInt 尝鲜
tags:
  - BigInt
  - ES
categories:
  - Node.js
date: 2018-05-19 22:20:54
---

JavaScript 所有数字内部都是 Double64 类型，所以数值的精度最多只能到 53 个二进制位，大于这个范围的整数是无法精确表示的。

<img width="456" alt="2018-05-01 10 09 59" src="https://user-images.githubusercontent.com/24730006/39458512-d661b1a8-4d27-11e8-805c-01b5fd3a060f.png">

在很多金融场景如果使用 JS 的话就得使用一些 BigNumber 库。其中以太坊 web3.js 使用的是最为流行的是 [bignumber.js](https://github.com/MikeMcl/bignumber.js)，并且包含 `.d.ts` 类型提示，推荐在生产环境使用。

因为这些库表示大数的方式是以 16 进制字符串表示的，通常在实践中还需要使用 `Buffer.from()` 转换成二进制对象，还是有很多不方便，需要写很多辅助函数。不过以后我们就可以使用官方标准库中的 BigInt 了。

目前（2018年5月1日）BigInt 提案已经进入 TC39 stage 3，不过还是被 V8 引擎提前实现，本文所有代码示例基于 Chrome Canary  68.0.3415.0，如下图所示。

<img width="518" alt="2018-05-01 9 10 04" src="https://user-images.githubusercontent.com/24730006/39457635-ba564466-4d21-11e8-9d91-f1cab5e5854e.png">

BigInt 表示没有精度和大小限制的整数，为了兼容性考虑，在数字后面添加后缀`n` 和普通数字类型区分，使用二进制八进制和十六进制也可以表示。

<img width="380" alt="2018-05-01 9 49 05" src="https://user-images.githubusercontent.com/24730006/39458122-ee49152a-4d24-11e8-9397-34397d74197b.png">

数字的字符串形式可以类似于 `Number()` 使用 `BigInt()` 直接转换为 BigInt，需要注意的是参数检查和 Number() 是一致的，是不能使用 `123n` 字符串形式的参数，不过提案中还有一个静态函数 `BigInt.paseInt()` 目前V8 还没支持。

<img width="466" alt="2018-05-01 9 48 07" src="https://user-images.githubusercontent.com/24730006/39458109-cba3ee14-4d24-11e8-8de2-e17606b12df6.png">

BitInt 除了不能和 number 类型直接运算之外，其它方面和普通的数值运算没有多少区别，除法运算始终返回整数形式。

<img width="523" alt="2018-05-01 9 46 51" src="https://user-images.githubusercontent.com/24730006/39458079-9dae0a3a-4d24-11e8-9959-6286c065cf6b.png">

BigInt 也存在隐式转换，在相等运算符`==`、不同类型运算以及强制类型转化函数，都还存在 JS 远古传统。

<img width="510" alt="2018-05-01 9 51 43" src="https://user-images.githubusercontent.com/24730006/39458223-8cffd2e4-4d25-11e8-9550-9b3d8165b20f.png">

更多内容可以参考 [BigInt 提案](https://github.com/tc39/proposal-bigint)