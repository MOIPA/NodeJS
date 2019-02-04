//prototype 原型 类似java的类 js也是将万物看为对象
//因为js是不区分类和实例的，可以从某个实例创建实例

//当我们用obj.xxx访问一个对象的属性时，JavaScript引擎先在当前对象上查找该属性，如果没有找到，就到其原型对象上找，如果还没有找到，就一直上溯到Object.prototype对象，最后，如果还没有找到，就只能返回undefined。

//1 直接使用改变实例的__proto__
let Student = {
    name:'n',
    age:0,
    getAge:function(){
        return this.age+"_"+this.name;
    }
};

let xiaomin = {
    name:'xiaoming'
};
xiaomin.__proto__=Student;
console.log(xiaomin.name);
console.log(xiaomin.getAge());

//2 创建原型的另一种 使用一个函数和Object.create()
//然和object.create()实际还是指向__proto__
function createStudent(name){
    let s = Object.create(Student);
    s.name = name;
    return s;
}
let xiaomin2 = createStudent('xm');
Student.age=11;
console.log(xiaomin2.getAge());
console.log(xiaomin2.__proto__===Student);
