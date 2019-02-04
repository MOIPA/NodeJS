//可以不用__proto__或者Object.create
//其他方式创建对象
//函数也看作对象 每个构造函数都有一个prototype的方法
//每个对象都有__proto__属性 每个方法都是对象所以prototype也有__proto__属性
//每个__proto__指向自身构造函数的prototype
//
function foo(){
    return 0;
};
//foo --> Function.prototype --> Object.prototype -->null
//Function.prototype定义了apply()所以所有方法可以调用apply


//1.使用构造函数  关键字new 创建的不同对象属性不同 但是原型相同
function Student(name){
    this.name = name;
    this.hello = function(){
        console.log('hello'+this.name);
    }
}
let xiaoming = new Student('xiaoming');//new时创建对象 this绑定这个对象
let xiaowang = new Student('xiaowang');  //然后就会返回this（创建的新对象）
console.log("name:"+xiaoming.name+xiaowang.name);
xiaoming.hello();
console.log(xiaoming.__proto__ ===xiaowang.__proto__);
console.log(xiaoming.__proto__===Student.prototype);
console.log(Student.prototype.__proto__);


//                          [Student]
//                          { 
//                            [prototype]
//                          }   ||
//                              ||
// [xiaoming]               [prototype]
// { - name                 {
//   - __proto__  ======>     -hello
// }                        }
//                           ^
// [xiaowang]                ||   
// { - name                  ||
//   - __proto__ =============
// }
// xiaoming和xiaohong各自的name不同，这是对的，否则我们无法区分谁是谁了。

// xiaoming和xiaohong各自的hello是一个函数，但它们是两个不同的函数，虽然函数名称和代码都是相同的！

// 如果我们通过new Student()创建了很多对象，这些对象的hello函数实际上只需要共享同一个函数就可以了，这样可以节省很多内存。

// 要让创建的对象共享一个hello函数，根据对象的属性查找原则，我们只要把hello函数移动到xiaoming、xiaohong这些对象共同的原型上就可以了，也就是Student.prototype

function SharedStudent(name){
    this.name = name;
}
let tr = new SharedStudent('tr');
SharedStudent.prototype.hello =function(){
    console.log("shared function: "+this.name);
}
// console.log(tr.name);
tr.hello();


//2. 更进一步，写一个创建函数封装new操作
function newStudent(props){
    this.name = props.name||'nobody';   //提供默认参数
    this.age = props.age||-1;
}
newStudent.prototype.hello = function(){    //编写公共函数
    console.log("new Student name : "+`${this.name}`+" age : "+this.age);
}
function createStudent(props){
    return new newStudent(props);
}
let tzq = createStudent({name:'tzq'});
tzq.hello();

function Cat(name) {
    this.name = name;
}
Cat.prototype.say = function(){
    return `Hello, ${this.name}!`
}
// 测试:
var kitty = new Cat('Kitty');
var doraemon = new Cat('哆啦A梦');
if (kitty && kitty.name === 'Kitty' && kitty.say && typeof kitty.say === 'function' && kitty.say() === 'Hello, Kitty!' && kitty.say === doraemon.say) {
    console.log('测试通过!');
} else {
    console.log('测试失败!'+doraemon.say());
}
// kitty.say && typeof kitty.say === 'function'