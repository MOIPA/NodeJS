### Node REPL环境
> 相当于是chrome的控制太，使用的都是v8引擎
>启动严格模式 node --use_strict
>启动非严格模式 node
>启动代码 node *.js


###语法
####全局变量
   1. 相当于chrome的window
      var a=10; global.a;
   2. process.stdout.write("");    往控制台输出
   3. process.argv 传参数组
   4. process.stdin和stdout 和模板字符串
