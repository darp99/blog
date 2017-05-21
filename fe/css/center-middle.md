## 集中垂直以及水平居中的方法

### 使用表格
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>table middle</title>
    <style>
        .wrap {
            display: table;
            height: 900px;
            width: 100%;
            text-align: center;
            border: 1px dotted gray;
        }

        .td {
            font-size: 72px;
            font-weight: 700;
            vertical-align: middle;
            display: table-cell;
        }
    </style>
</head>

<body>
    <div class="wrap">
        <div class="td">
            center text!
        </div>
    </div>
</body>

</html>
```

### 使用伪元素

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>table middle</title>
    <style>
        .wrap {
            height: 900px;
            max-height: 100%;
            font-size: 0.001px;
            text-align: center;
        }

        .wrap::before {
            content: '';
            display: inline-block;
            height: 100%;
            vertical-align: middle;
        }

        .td {
            display: inline-block;
            font-size: 72px;
            max-width: 100%;
            vertical-align: middle;
        }
    </style>
</head>

<body>
    <div class="wrap">
        <div class="td">
            center text!
        </div>
    </div>
</body>

</html>
```

### 使用 Flex 布局

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>table middle</title>
    <style>
        body,
        html {
            height: 100%;
        }

        .wrap {
            height: 100%;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
        }


        .td {
            /*display: flex;*/
            font-size: 72px;
        }
    </style>
</head>

<body>
    <div class="wrap">
        <div class="td">
            center text!
        </div>
    </div>
</body>

</html>
```