//closure 闭包
//高阶函数不仅可以接受函数 也可以返回函数
function lazy_sum(arr){
    let sum = function(){   //作为参数返回的时候会保存相关参数和变量  方便
        return arr.reduce((x,y)=>{
            return x+y;
        });
    }
    return sum;
}
let f = lazy_sum([1,2,3]);
console.log(f());
//注意！！！：返回的函数里如果使用了其他变量，其他变量改变会导致返回的函数执行结果改变
//尽量不要使用循环变量或者后续变化的变量  因为不单单是返回的时候赋了固定的值 使用的时候才确定值
//！！！！

//创建匿名函数且立刻执行
(function (x){return x})(1);

//例子一：后续变化的参数作为返回函数  可用let改正
function count(){
    let arr1=[];
    for(var i=1;i<=3;i++){  //如果用let i则变成1 4 9 
        arr1.push(()=>{return i*i;});
    }
    return arr1;
}
let arr1 = count();
let f1 = arr1[0];
let f2 = arr1[1];
let f3 = arr1[2];
console.log(f1());
console.log(f2());
console.log(f3());

//例子二  用匿名函数改正
function count(){
    let arr1=[];
    for(var i=1;i<=3;i++){  //如果用let则变成1 4 9 
        (function (x){arr1.push(()=>{return x*x;});})(i);
    }
    return arr1;
}
let arr1 = count();
let f1 = arr1[0];
let f2 = arr1[1];
let f3 = arr1[2];
console.log(f1());
console.log(f2());
console.log(f3());


//闭包就像是一个带有private参数的方法，外部无法访问第一层函数的内部变量，但是可以运行第一层函数里面的函数
//里面的函数可以读取外部第一层函数的变量