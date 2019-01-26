//作用域

//js中会提升变量 且会自动添加；所以注意return
'use strict';

function foo(){
    var x= 1;
    x = x+1;
}
// x = x+2;  之作用在{}
function foo(){
    var x=1;
    function bar(){
        var y=x+1;
    }
    var z=y+1;
}
// foo();  外部无法访问内部
function foo(){
    var x=1;
    function bar(){
        var x='a';
        console.log(x);
    }
    console.log(x);
    bar();
}
// foo(); //ok  内部可以访问外部且如果重名则覆盖

function foo(){ //变量提升
    var x=1;
    console.log(x+y);
    var y=2;
}
// foo(); //函数不会报错 因为y在引擎中被放在了声明区域和x一起声明

//由于变量提升 我们应该批量手动声明
function foo(){
    var 
        x=1,
        y=2,
        z=3;
    console.log(x+y+z);
}
// foo();


//global alcance 全局作用域
//访问全局变量和访问window.<variable>是一样的
var bateMe = 1;
console.log(bateMe);
// console.log(window.bateMe); 在浏览器运行才有window对象
//类似的 alert也是个window的变量

//name space 命名空间  非常有用，可以防止函数名冲突，将所有函数挂在一个全局变量下
var myApp = {};
myApp.name = 'my function set';
myApp.version = 1.0;
myApp.foo = function(){
    return 'my function set';
}
console.log(myApp.foo()); //使用起来和对象一样

//local alcance 局部作用域
function foo(){
    for(var i=0;i<10;i++){}
    console.log(i); //i 任然存活 所以出现了块级变量let
}
// foo();
function foo(){
    for(let i=0;i<10;i++){}
    console.log(i); //i 任然存活 所以出现了块级变量let
}
// foo(); error