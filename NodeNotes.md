### Node REPL环境
> 相当于是chrome的控制太，使用的都是v8引擎  但是node平台有对操作系统的操作 
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
