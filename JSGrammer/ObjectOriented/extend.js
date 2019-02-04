function Student(props){
    this.name = props.name||'nobody';
    // console.log("debug Student: "+this.name);
}
Student.prototype.hello = function(){
    console.log("name: "+this.name+" ,grade: "+this.grade);
}
function PrimaryStudent(props){
    Student.call(this,props);
    this.grade = props.grade||1;
}//当new Primary 时 创建一个实例this指向这个实例执行   this.name = ... 和this.grade=...

//继承实际就是原型链的关系 这里的关系是 new PrimaryStudent() ----> PrimaryStudent.prototype ----> Object.prototype ----> null
//改为new PrimaryStudent() ----> PrimaryStudent.prototype ----> Student.prototype ----> Object.prototype ----> null

//其实很简答，每个原型都是用来存放公共函数的，constructor指向瞄准原型的对象

// [xiaomin]        [PrimaryStudent.prototype]    [Student.prototype]               [Object.prototype]                    [null]
//    ||                ||                          ||                                ||                                    ||
//  __proto__  ===>     [].__proto__    ===>        [new F].__proto__   ===>          [].__proto__           ==>           null

//把继承封装起来
function inherits(child,parent){
    let F = function(){};
    F.prototype = parent.prototype;
    child.prototype = new F();
    child.prototype.constructors = child;
}
inherits(PrimaryStudent,Student);  //将他们继承 现在PrimaryStudent原型为

let xm = new PrimaryStudent({
    name: 'xm',
    grade: 2
});
// console.log(xm instanceof PrimaryStudent);
// console.log(xm instanceof Student);
// console.log(xm.name);
xm.hello();


// 2. easy way
function Base(props){
    // this.base = props.base;
}
Base.prototype.check = function(){
    console.log(`sub:${this.sub} base:${this.base}`);
}
function Sub(props){
    this.sub = props.sub;
    Base.call(this,props);
}
// inherits(Sub,Base);
Sub.prototype = new Base();
let sub = new Sub({base:'bb',sub:'ss'});
sub.check();