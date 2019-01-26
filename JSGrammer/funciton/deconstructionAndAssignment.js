//js的解构赋值  非常好用的一个玩意
'use strict';
//数组解构赋值
var [x,y,z]=[1,2,3];
console.log(x+y+z);

let [a,b,[c,d]] = ['a','b',['c','d']];
console.log(a+b+c+d);

//注意对象解构赋值的时候，想要获得值必须变量名和对象属性名同名
let person = {
    name:'tr',
    age:'18',
    addr:{     //注意 addr不会赋值 内部属性会
        city:'nj',
        street:'1r'
    }
}
// let {name,age,addr:{city,street}} = person;
// console.log(name,city);
let person2={
    name:'tr',
    age:19
}
let {name,age:ages,addr=true} = person2; //如果没有赋值 使用默认值
console.log(name+ages+addr);

//注意： 声明过的变量无法出现在这里面！！！
//解决方法 加入（）
({name,age:ages,addr=true} = person2);
console.log(name+ages+addr);

//使用这种特性后大大方便：
//比如交换
let x1=1,y1=2;
[x1,y1]=[y1,x1]
console.log(x1,y1);