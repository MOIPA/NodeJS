function abs(x) {
    if (x >= 0) {
        return x;
    } else {
        return -x;
    }
}
var abs = function (x) {
    if (typeof x !== 'number') {
        throw 'Not a number';
    }
    if (x >= 0) {
        return x;
    } else {
        return -x;
    }
};

//两者等价
console.log(abs(-10,120));
// console.log(abs());

//arguments 只在函数内部起作用，可以获取参数
function foo(x) {
    console.log('x = ' + x); // 10
    for (var i=0; i<arguments.length; i++) {
        console.log('arg ' + i + ' = ' + arguments[i]); // 10, 20, 30
    }
}
foo(10, 20, 30);
//rest参数 代表额外参数
function myRest(a,b,...rest){
    for(let key in rest){
        console.log(rest[key]);
    }
}
myRest(1,2,3,4,5,6);
