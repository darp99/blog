## 原生js实现复制对象和扩展对象
现有3个对象字面量：
```js
var o1 = {
    hello: 1, 
    old: 555
};

var o2 = {
    abc: 55555555,
    hello: 2,
    fun: function () {
        alert(111);
    }
};

var o3 = {
    third: 9999
};

```
jQuery 的 extend() 方法能很方便的实现扩展对象方法，语法如下：`$.extend(obj1,boj2,obj3)`;  

现在要实现的是：原生 JS 实现复制对象，扩展对象，类似 jQuery 中的 extend() 方法。
```js
function cloneObj(oldObj) { //复制对象方法
    if (typeof (oldObj) != 'object')
        return oldObj;
    if (oldObj == null)
        return oldObj;
    var newObj = new Object();
    for (var i in oldObj)
        newObj[i] = cloneObj(oldObj[i]);
    return newObj;
};


/*
// 将对象序列化再解析回来
// 对象中如果有函数、undefined、XML对象则不能正确复制
var obj = {a:1,b:2}  
var newObj = JSON.parse(JSON.stringify(obj));  
newObj.a=3;  
console.log(obj);  
console.log(newObj);  

*/
function extendObj() { //扩展对象
    var args = arguments;
    if (args.length < 2) return;
    var temp = cloneObj(args[0]); //调用复制对象方法
    for (var n = 1; n < args.length; n++) {
        for (var i in args[n]) {
            temp[i] = args[n][i];
        }
    }
    return temp;
}
var extendObjTest = extendObj(o1, o2, o3);
console.log(extendObjTest);

var cloneObj1 = cloneObj(o1)
console.log(cloneObj1);
```