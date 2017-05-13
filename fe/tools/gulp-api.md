
## gulp.src(globs[, options]) 方法  

读取并输出所有与给定的 glob（文件匹配符）或 glob 数组相匹配的文件。返回一个 Vinyl 文件 的流（stream），以便通过管道传送（pipe）给插件处理。
```js
gulp.src('client/templates/*.jade')
  .pipe(jade())
  .pipe(minify())
  .pipe(gulp.dest('build/minified_templates'));
```
glob 可以是 `node-glob` 语法，或者也可以直接给定一个明确的文件路径。

**globs 参数**

类型：字符串（String）或数组（Array）

需要读取的 glob 或 glob 数组。

需要注意的是，多个 glob 会按顺序进行解析，这意味着以下意图是可以实现的：

```js
// 排除所有以字母 b 开头的 JS 文件，但不排除 bad.js
gulp.src(['*.js', '!b*.js', 'bad.js'])
```

请注意：`glob` 的 `symlink` 追踪行为是可以选择的，你必须在选项参数中指定 `follow: true`，以便传给 `node-glob`。

**options 参数**

类型：对象（Object）

通过 glob-stream 传给 node-glob 的选项。

除了 node-glob 和 glob-stream 所支持的选项之外，Gulp 还增加了一些额外的选项：

● options.cwd 选项

（译注：这个选项其实是 node-glob 的选项，并没有必要列在 Gulp 的 API 文档中。）

指定匹配文件时以哪个目录作为基准目录。可以是一个相对于当前工作目录的相对路径。

类型：字符串（String）

默认值：process.cwd()

● options.buffer 选项

类型：布尔值（Boolean）

默认值：true

如果此选项被设置为 false，那么将会以 stream 的形式（而不是以 buffer 文件的形式）返回 file.contents。在处理大文件时，这个选项会很有用。

请注意：插件可能并没有实现对 stream 的支持。

● options.read 选项

类型：布尔值（Boolean）

默认值：true

如果此选项被设置为 false，那么 file.contents 将会返回空（null），即完全不会去读取文件。

● options.base 选项

类型：字符串（String）

默认值：所有出现在 glob 之前的东西（请参见 glob2base）

比如说，假设在 client/js/somedir 路径下的有一个叫 somefile.js 的文件：
```js
// 以下代码将匹配 'client/js/somedir/somefile.js'，并将 `base` 解析为 `client/js/`
gulp.src('client/js/**/*.js')
  .pipe(minify())
  .pipe(gulp.dest('build'));  // 将写到 'build/somedir/somefile.js' 文件

gulp.src('client/js/**/*.js', { base: 'client' })
  .pipe(minify())
  .pipe(gulp.dest('build'));  // 将写到 'build/js/somedir/somefile.js' 文件
```
● options.since 选项

类型：日期（Date）或数字（Number）

把这个选择设置为一个日期或时间戳将会丢弃所有在此时间点后没有发生变化的文件。

● options.passthrough 选项

类型：布尔值（Boolean）

默认值：false

如果设置为 true，将会创建一个读写双向流（duplex stream），这个流将把所有匹配的文件直接传输并输出。（译注：实际上我并不知道这句话在说什么，翻译可能有误。）

● options.allowEmpty 选项

类型：布尔值（Boolean）

默认值：false

如果设置为 true，将允许单文件形式的 glob 匹配失败。否则，那些只能匹配单个文件（比如 ./foo/bar.js）的 glob 一旦匹配不到文件，就会抛出错误。
```js
// 如果 app/scripts.js 文件不存在，则会抛出错误
gulp.src('app/scripts.js')
  .pipe(...);

// 这样就不会抛出错误
gulp.src('app/scripts.js', { allowEmpty: true })
  .pipe(...);
gulp.dest(path[, options]) 方法  
```
接收 pipe 来的数据，并写入文件。它会重新输出所有数据，因此你可以将数据 pipe 到多个文件夹。指定的文件夹如果还不存在，将会被自动创建。
```js
gulp.src('./client/templates/*.jade')
  .pipe(jade())
  .pipe(gulp.dest('./build/templates'))
  .pipe(minify())
  .pipe(gulp.dest('./build/minified_templates'));
```

写入路径的计算方式是在给定的目标路径后面加上各文件的相对路径。而相对路径是通过文件 base 来得到的。更多信息请参见上面的 

## gulp.src 方法。

**path 参数**

类型：字符串（String）或函数（Function）

文件的写入路径（输出目录）。也可以是一个可以返回输出目录的函数，这个函数将会被传入一个 vinyl 文件实例。

**options 参数**

类型：对象（Object）

● options.cwd 选项

类型：字符串（String）

默认值：process.cwd()

为输出目录指定 cwd。仅当指定的输出目录是相对路径时，这个选项才会生效。

● options.mode 选项

类型：字符串（String）或数字（Number）

默认值：输入文件的权限模式（file.stat.mode）。如果输入文件没有模式属性，则取进程的模式。

使用八进制的权限标记来指定输出文件将以什么模式来创建：比如 "0744"、0744 或 484（十进制形态的 0744）。

● options.dirMode 选项

类型：字符串（String）或数字（Number）

默认值：进程的模式。

使用八进制的权限标记来指定输出目录将以什么模式来创建：比如 "0744"、0744 或 484（十进制形态的 0744）。

● options.overwrite 选项

类型：布尔值（Boolean）

默认值：true

指定在相同路径下已经存在同名文件时是否覆盖。

## gulp.symlink(folder[, options]) 方法  

它的功能和 gulp.dest 与十分相似，但它会创建 symlink，而不是复制目录。

**folder 参数**

类型：字符串（String）或函数（Function）

一个文件夹路径。也可以是一个函数，这个函数可以接受一个文件并返回文件夹路径。

**options 参数**

类型：对象（Object）

● options.cwd 选项

类型：字符串（String）

默认值：process.cwd()

为输出目录指定 cwd。仅当指定的输出目录是相对路径时，这个选项才会生效。

● options.dirMode 选项

类型：字符串（String）或数字（Number）

默认值：取进程的模式。

使用八进制的权限标记来指定输出目录将以什么模式来创建：比如 "0744"、0744 或 484（十进制形态的 0744）。

## gulp.task([name,] fn) 方法  

这个方法可以定义一个任务，以便暴露给 Gulp 命令行工具（gulp-cli）以及 gulp.series、gulp.parallel 和 gulp.lastRun 方法；这个方法继承自 undertaker。
```js
gulp.task(function someTask() {
  // 在这里干一些活
});
```
也可以获取一个已经注册的任务。
```js
// someTask 是一个已经注册的任务函数
var someTask = gulp.task('someTask');
```

**name 参数**

如果没有提供这个 name 参数的话，任务将以函数的 name 或 displayName 属性来命名。如果 fn 参数的 name 和 displayName 属性都为空的话，那这个 name 参数就是必选的了。

由于任务可以在命令行运行，因此需要避免在任务名中使用空格。

**fn 参数**

完成某个任务的具体操作的函数。通常它的形式是这样的：
```js
function someTask() {
  return gulp.src(['some/glob/**/*.ext']).pipe(someplugin());
}
someTask.description = 'Does something';
```

## gulp.task(someTask)
Gulp 任务都是异步的，Gulp 使用 async-done 来等待任务的完成。任务在调用时会传入一个回调函数作为参数，这个回调函数会在任务完成时被调用。或者换一种方式，任务可以返回一个流、一个 promise、一个子进程，或一个 RxJS 可观察事件流，以便标记任务的结束。

警告：已经不再支持同步任务了，如果任务函数没有采用以上任何一种策略来标记任务的结束，那么任务将永远也无法完成。不过，它抛出的错误会被 Gulp 捕获。

**fn 参数的属性**

● fn.name 属性

如果 gulp.task 方法的可选参数 name 没有指定时，gulp.task 将使用函数的 name 属性来给任务命名。

请注意：Function.name 属性是不可写的；它无法被写入或修改。如果你需要给一个函数指定函数名，或者想在函数名中使用不允许的字符，可以用 displayName 属性来代替。对于匿名函数来说，这个属性是空的：

```js
function foo() {};
foo.name === 'foo' // true

var bar = function() {};
bar.name === '' // true

bar.name = 'bar'
bar.name === '' // true
```
● fn.displayName 属性

如果函数是匿名函数，或者 gulp.task 方法的可选参数 name 没有指定时，gulp.task 将使用函数的 displayName 属性来给任务命名。

● fn.description 属性

gulp-cli 在列出任务时，会紧随任务名之后打印出这段描述。

```js
var gulp = require('gulp');

function test(done){
  done();
}
test.description = 'I do nothing';

gulp.task(test);
$> gulp --tasks
[12:00:02] Tasks for ~/Documents/some-project/gulpfile.js
[12:00:02] └── test  I do nothing
```

**异步任务支持**

● 接受一个回调函数
```js
var del = require('del');

gulp.task('clean', function(done) {
  del(['.build/'], done);
});
```

这个回调函数接受一个可选的 Error 对象。如果它收到错误，这个任务将失败。

● 返回一个 stream
```js
gulp.task('somename', function() {
  return gulp.src('client/**/*.js')
    .pipe(minify())
    .pipe(gulp.dest('build'));
});
```
● 返回一个 promise
```js
var Promise = require('promise');
var del = require('del');

gulp.task('clean', function() {
  return new Promise(function (resolve, reject) {
    del(['.build/'], function(err) {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
});
```
或者：

```js
var promisedDel = require('promised-del');

gulp.task('clean', function() {
  return promisedDel(['.build/']);
});
```

● 返回一个子进程
```js
gulp.task('clean', function() {
  return spawn('rm', ['-rf', path.join(__dirname, 'build')]);
});
```
● 返回一个 RxJS 可观察事件流
```js
var Observable = require('rx').Observable;

gulp.task('sometask', function() {
  return Observable.return(42);
});
gulp.lastRun(taskName, [timeResolution]) 方法  
```

返回指定任务在上一次成功运行时的时间戳。时间是任务开始的时间。如果任务还没有运行过，则返回 undefined。

**taskName 参数**

类型：字符串（String）

已注册的任务的任务名，或任务函数的函数名。

**timeResolution 参数**

类型：数字（Number）

默认值：在 node v0.10 下是 1000，在 node v0.12（和 iojs v1.5）下是 0。

用于设定返回的时间戳的精度。假设有一个叫 "someTask" 的任务在 1426000004321 这个时间运行过：
```js
gulp.lastRun('someTask', 1000) 将返回 1426000004000。
gulp.lastRun('someTask', 100) 将返回 1426000004300。
```
`timeResolutio` 允许你把运行时间和文件的 `mtime stat` 属性进行比较。这个属性的时间精度在不同的 node 版本和文件系统下各有不同：

在 node v0.10 下，所有文件的 mtime stat 时间精度最高只有 1s；
在 node v0.12 和 iojs v1.5 下，最高有 1ms；
对于 FAT32 下的文件来说，其 mtime 时间精度最高只有 2s；
对于 HFS+ 和 Ext3 来说，是 1s；
对于 NTFS 来说，在 node v0.10 下是 1s，在 node 0.12 下是 100ms；
对于 Ext4 来说，在 node v0.10 下是 1s，在 node 0.12 下是 1ms。
gulp.parallel(...tasks) 方法  

接受多个任务名或任务函数，返回这些任务或函数组合之后形成一个函数。

如果使用的是任务名的话，任务必须是已经注册过的。

当这个组合后的函数被执行时，它包含的各项任务或函数将会并行执行，即它们会同时启动并运行。只要有一个错误发生，所有任务的运行都将结束。
```js
gulp.task('one', function(done) {
  // 在这里干一些活
  done();
});

gulp.task('two', function(done) {
  // 在这里干一些活
  done();
});

gulp.task('default', gulp.parallel('one', 'two', function(done) {
  // 在这里再多干一些活
  done();
}));
```
**tasks 参数**

类型：数组（Array）、字符串（String）或函数（Function）

一个任务名、一个函数，或是由这两者所构成的数组。

## gulp.series(...tasks) 方法  

接受多个任务名或任务函数，返回这些任务或函数组合之后形成一个函数。

如果使用的是任务名的话，任务必须是已经注册过的。

当这个组合后的函数被执行时，它包含的各项任务或函数将会串行执行，即各项任务会等待它前面的任务完成后再运行。只要有一个错误发生，所有任务的运行都将结束。
```js
gulp.task('one', function(done) {
  // 在这里干一些活
  done();
});

gulp.task('two', function(done) {
  // 在这里干一些活
  done();
});

gulp.task('default', gulp.series('one', 'two', function(done) {
  // 在这里再多干一些活
  done();
}));
```
**tasks 参数**

类型：数组（Array）、字符串（String）或函数（Function）

一个任务名、一个函数，或是由这两者所构成的数组。

gulp.watch(globs[, opts], fn) 方法  

第一个参数 globs 用于指定文件系统中的哪些文件会被监视；接下来的 options 参数是可选的，用于配置监视器；最后的 fn 参数是当文件变动时调用的任务函数。

返回一个 chokidar 监视器实例。

gulp.watch('js/**/*.js', gulp.parallel('concat', 'uglify'));
在上面的例子中，gulp.watch 会监视 js/ 目录下所有扩展名为 js 的文件。每当这些文件改动时，都会调用 gulp.parallel 所返回的函数。

**globs 参数**

类型：字符串（String）或数组（Array）

可以是一个路径字符串，或由多个路径字符串组成的数组；也可以是一个 glob，或由多个 glob 组成的数组。它将指定哪些文件的变动将受到监视。

**opts 参数**

类型：对象（Object）

delay（毫秒，默认值为 200）。它表示在触发任务函数（fn）之前等待的延时。在大批量修改文件时（比如对大量文件进查找、替换操作），我们往往需要等一小会儿，此时这个选项就显得非常有用了。
queue（布尔值，默认值为 true）。它决定文件的一连串变更所触发的同一个 fn 是否以队列的方式执行。对于耗时的任务函数来说较为适用。
ignoreInitial（布尔值，默认值为 true）。如果设置为 false，则在 chokidar 的实例化期间如果发现文件变更也会调用 fn。如果你希望在启动期间就能触发 fn，则可以尝试这个选项。这个选项会传给 chokidar，但 Gulp 传给它的默认值是 true 而不是 chokidar 自己的默认值 false。
需要传给 chokidar 的选项。

通常会用到的选项如下：

ignored（兼容 [anymatch] 的定义）：定义哪些文件或路径需要从监视范围中排除掉。
usePolling（布尔值，默认值为 false）：当此选项为 true 时，将采用基于 stat 轮询的监视方法。如果要在网络挂载磁盘或虚拟机的文件系统上监视文件的话，这个选项通常是有必要的。
cwd（路径字符串）：指定了监视路径在推断时所采用的基准路径。随事件发射的路径都是以此作为基准的相对路径。
alwaysStat（布尔值，默认值为 false）：如果信赖 fs.Stats 对象的话（在可用时，这个对象会在 add、addDir 和 change 事件发生时作为第二个参数传过来），那把这个选项设置为 true 可以确保这个对象会在这些事件发生时提供给下面的 fn 参数。可能存在轻微的性能损耗。
完整的选项说明请参阅 chokidar 项目的 README。

**fn 参数**

类型：Function

如果提供了 fn 这个参数，它就会在监视器触发任何一个 change、add 或 unlink 事件时被调用。它会自动以默认的 200 毫秒周期进行 debounce，后续的调用将排队依次执行。这个默认值可以在 options 中修改。（译注：听起来原文中的 “debounce” 应该是 “throttle”？总之大家明白这个意思就行了。）

（译注：与 gulp.task() 的 fn 参数类似，这里的 fn 也是一个异步函数。）我们需要给这个 fn 函数设置一个 callback 参数，当 fn 内的工作完成时需要调用一下这个 callback 来宣告任务已完成。如果你不想用这种方式来实现 fn 的异步特性，也可以通过以下方式来实现：

让 fn 返回一个流（Stream）或事件触发器（EventEmitter）
让 fn 返回一个子进程
让 fn 返回一个 Promise
让 fn 返回一个可观察事件流（Observable）
当这个异步函数宣告自己已经运行完成时，如果另一次运行计划已经在队列中了，那么队列会继续往下走。

gulp.watch 会返回一个经过包装的 chokidar FSWatcher 对象。我们也可以把监听函数直接绑定到任何 chokidar 的事件上，比如 addDir、unlinkDir 和 error 等。只有把监听函数直接绑定到这些事件上，我们才能访问到 chokidar 的回调函数的参数，比如 path 等。
```js
var watcher = gulp.watch('js/**/*.js', gulp.parallel('concat', 'uglify'));
watcher.on('change', function(path, stats) {
  console.log('File ' + path + ' was changed');
});

watcher.on('unlink', function(path) {
  console.log('File ' + path + ' was removed');
});
```
● fn 的 path 参数

类型：字符串（String）

发生变动的文件的路径。如果指定了 opts.cwd 的话，path 是相对于它的。

● fn 的 stats 参数

类型：对象（Object）

当可用时，File stats 对象会传进来。将 alwaysStat 选项设置为 true 可以确保一个 file stat 对象会传过来。

监视器的各种方法

● watcher.close() 方法

关闭这个文件监视器。

● watcher.add(glob) 方法

让一个已经在运行的监视器实例监视额外的 glob（或 glob 数组）。

● watcher.unwatch(glob) 方法

停止监听一个 glob（或 glob 数组），但仍然保持监视器的运行，只在剩下的监听路径上触发事件。

gulp.tree(options) 方法  

返回所有任务的树形结构。这个方法继承自 undertaker。请参见 undertaker 文档中的这个函数。

**options 参数**

类型：对象（Object）

传给 undertaker 的选项。

● options.deep 选项

类型：布尔值（Boolean）

默认值：false

如果设置为 true，会返回整个树形结构。
gulpfile 示例

```js
gulp.task('one', function(done) {
  // 在这里干一些活
  done();
});

gulp.task('two', function(done) {
  // 在这里干一些活
  done();
});

gulp.task('three', function(done) {
  // 在这里干一些活
  done();
});

gulp.task('four', gulp.series('one', 'two'));

gulp.task('five',
  gulp.series('four',
    gulp.parallel('three', function(done) {
      // 在这里再多干一些活
      done();
    })
  )
);
```
树形结构输出示例
```js
gulp.tree()

// output: [ 'one', 'two', 'three', 'four', 'five' ]

gulp.tree({ deep: true })

/*output: [
   {
      "label":"one",
      "type":"task",
      "nodes":[]
   },
   {
      "label":"two",
      "type":"task",
      "nodes":[]
   },
   {
      "label":"three",
      "type":"task",
      "nodes":[]
   },
   {
      "label":"four",
      "type":"task",
      "nodes":[
          {
            "label":"<series>",
            "type":"function",
            "nodes":[
               {
                  "label":"one",
                  "type":"task",
                  "nodes":[]
               },
               {
                  "label":"two",
                  "type":"task",
                  "nodes":[]
               }
            ]
         }
      ]
   },
   {
      "label":"five",
      "type":"task",
      "nodes":[
         {
            "label":"<series>",
            "type":"function",
            "nodes":[
               {
                  "label":"four",
                  "type":"task",
                  "nodes":[
                     {
                        "label":"<series>",
                        "type":"function",
                        "nodes":[
                           {
                              "label":"one",
                              "type":"task",
                              "nodes":[]
                           },
                           {
                              "label":"two",
                              "type":"task",
                              "nodes":[]
                           }
                        ]
                     }
                  ]
               },
               {
                  "label":"<parallel>",
                  "type":"function",
                  "nodes":[
                     {
                        "label":"three",
                        "type":"task",
                        "nodes":[]
                     },
                     {
                        "label":"<anonymous>",
                        "type":"function",
                        "nodes":[]
                     }
                  ]
               }
            ]
         }
      ]
   }
]
*/
```
gulp.registry([registry]) 方法  

获取或设置底层的任务注册表。这个方法继承自 undertaker；请参见 undertaker 文档的 注册项 部分。这个方法可帮助你修改注册表，进而允许你以各种不同的方式来增强 Gulp。至少在以下三种应用场景下会到自定义注册表：

共享任务
共享功能（比如说，你可以覆盖任务的原型来增加一些额外的日志功能、绑定任务元数据或加入某些配置信息等）
处理其它在注册表的生命周期内的挂钩子的行为（这方面的例子可以参见 gulp-hub）
如果要建立你自己的自定注册表，请参见 undertaker 文档中的自定义注册表部分。

**registry 参数**

一个注册表实例。当传入这个参数时，当前注册表中的任务将会被转移到新的注册表中，而且当前注册表会被替换为这个新的注册表。

**示例**

下面这段示例展示了如何创建并使用一个简单的自定义注册表来添加任务。
```js
//gulpfile.js
var gulp = require('gulp');

var companyTasks = require('./myCompanyTasksRegistry.js');

gulp.registry(companyTasks);

gulp.task('one', gulp.parallel('someCompanyTask', function(done) {
  console.log('in task one');
  done();
}));
```

```js
//myCompanyTasksRegistry.js
var util = require('util');

var DefaultRegistry = require('undertaker-registry');

function MyCompanyTasksRegistry() {
  DefaultRegistry.call(this);
}
util.inherits(MyCompanyTasksRegistry, DefaultRegistry);

MyCompanyTasksRegistry.prototype.init = function(gulp) {
  gulp.task('clean', function(done) {
    done();
  });
  gulp.task('someCompanyTask', function(done) {
    console.log('performing some company task.');
    done();
  });
};

module.exports = new MyCompanyTasksRegistry();
```

本文转载来自 [css魔法](https://mp.weixin.qq.com/s/0ZFpK3ytmfrCiuWENhFiWg) 