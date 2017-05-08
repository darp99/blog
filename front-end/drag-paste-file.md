来源于[阮一峰的javascript教程](http://javascript.ruanyifeng.com/htmlapi/file.html#toc4)，添加部分注释信息

假设有一个表单，用于用户选取图片。

`<input type="file" name="picture" accept="image/png, image/jpeg"/>`

一旦用户选中图片，将其显示在canvas的函数可以这样写：
```js
document.querySelector('input[name=picture]').onchange = function(e){
     readFile(e.target.files[0]);
}

function readFile(file){

  var reader = new FileReader();

  reader.onload = function(e){
    applyDataUrlToCanvas( reader.result );
  };

  reader.reaAsDataURL(file);
}
```

还可以在canvas上面定义拖放事件，允许用户直接拖放图片到上面。  

```js
// stop FireFox from replacing the whole page with the file.
canvas.ondragover = function () { return false; };

// Add drop handler
canvas.ondrop = function (e) {
//阻止浏览器默认打开图片事件以及冒泡
  e.stopPropagation();
  e.preventDefault(); 
//对event进行兼容处理
  e = e || window.event;
//drag 事件包含dataTransfer属性，files属性可以获得所有文件列表
  var files = e.dataTransfer.files;
  if(files){
    readFile(files[0]);
  }
};
```

所有的拖放事件都有一个dataTransfer属性，它包含拖放过程涉及的二进制数据。

还可以让canvas显示剪贴板中的图片。

```js
document.onpaste = function(e){
  e.preventDefault();
  //refer <https://developer.mozilla.org/en-US/docs/Web/API/DataTransferItem>
  //paste事件包含clipboard属性，item获取所有粘贴列表
  if(e.clipboardData&&e.clipboardData.items){
    // pasted image
    for(var i=0, items = e.clipboardData.items;i<items.length;i++){
        //kind属性返回一个字符串 “file”或者“string”
        //DataTransferItem.kind Read only The kind of drag data item, string or file.
        //DataTransferItem.type Read only The drag data item's type, typically a MIME type.
      if( items[i].kind==='file' && items[i].type.match(/^image/) ){
        //DataTransferItem.getAsFile() Returns the File object associated with the drag data item (or null if the drag item is not a file).
        readFile(items[i].getAsFile());
        break;
      }
    }
  }
  return false;
};
```