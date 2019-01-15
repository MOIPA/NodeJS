#
# Node REPL环境
> 相当于是chrome的控制器，使用的都是v8引擎  但是node平台有对操作系统的操作 
>启动严格模式 node --use_strict
>启动非严格模式 node
>启动代码 node *.js


### 语法
#### 全局变量 process
   1. 相当于chrome的window
      var a=10; global.a;
   2. process.stdout.write("");    往控制台输出
   3. process.argv 传参数组
   4. process.stdin和stdout 和模板字符串
   5. const a = 0; 常量定义
   6. let i = 0; let区别与var，对于let定义的变量会在生命周期后销毁。多用于for循环，比var好！！
#### debug
   1. node debug *.js
   2. help
   3. watch("i")
#### 文件读取
   1. var fs = require('fs');
   2. fs.readFileSync(`filename`,'utf-8');
#### 清空控制台
   1. process.stdout.write('\033[2J');
   2. process.stdout.write('\033[0f');
#### 重复
   1. setInterval(function(){},1000);
#### 异步编程
   1. 07 ... .js   
#### 模块化
  模块的定义：一个js文件就是一个模块，拥有自己的模块对象
               模块内部是一个独立的作用域
               模块之间只能通过导入导出的方式使用
   1. node作为服务器只运行一个线程，通过事件驱动的队列实现
   2. 文件模块：自己写的文件就是功能模块
   3. 核心模块：NODE自带的一套基本模块也称为node的api
   4. 社区或第三放开发的模块，可以直接使用
   5. 导入模块理解：就是运行这个模块的内容，如果是方法的定义就不会执行方法本身，具体见10module。。。
      如果在导入文件里面进行文件操作,都是以导入文件的那个文件为基准，所有的文件操作都是绝对或者是物理路径才是最安全的（__dirname）。
   6. 模块内部都是私有空间，定义的变量不会被引用者使用
   7. module:模块对象
      exports:映射到module.exports的别名
      require(): require.cache
                  require.extensions
                 require.main
                 require.resolve()

##### module对象
   1. module.parent指的是使用这个module的文件，children指的是子模块
   2. path指的是require时候的执行顺序
   3. 最大的用处是使用它来进行模块的导出：module.exports={};
##### exports对象
   1. 这个对象是对module.exports的别名 即：exports = module.exports
         但是如果module.exports = {}指向了其他的对象，则exports就无法使用了
         所以会有 exports = module.exports = {};
         但是尴尬的是很多人还是使用的module.exports = {}; 
   2. 推荐 exports = module.exports = {name:value};

##### require对象
   1. 功能： 读入并且执行一个js文件然后返回该文件的exports对象
