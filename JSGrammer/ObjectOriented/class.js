//原来的实现原型链太过复杂 es6引用class

//原来的：
function OldStudent(name){
    this.name = name;
}
OldStudent.prototype.hello = function(){
    console.log('hello '+this.name);
}

//现在
class Student{     //避免了分散代码
    constructor(name){
        this.name = name;
    }
    hello(){
        console.log(`hello ${this.name}`);
    }
} 
let xm = new Student('xm');
xm.hello();

//class 继承
class PrimaryStudent extends Student{
    constructor(name,grade){
        super(name);
        this.grade = grade;
    }
    myGrade(){
        console.log(`I am at ${this.grade}`);
    }
}


//class 和原型链写法有什么区别？ 没有 只是简化 
//用es6小心 有的浏览器不支持 可以用babel转化

let nxm = new PrimaryStudent('xxm',1);
nxm.hello();
nxm.myGrade();