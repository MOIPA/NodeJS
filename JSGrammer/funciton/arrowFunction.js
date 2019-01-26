(x => console.log(x * x))(2);
//x=> x*x  箭头函数，相当于 function(x) return x*x;
//箭头函数相当于匿名函数
//1.如果箭头函数有多条语句 得用{}
x => {
    if (x > 0) return x;
    return -x;
}
//2.多个参数用（）
let fn = (x, y) => {

}
//3.返回对象如果一条得用（）
fn = (x)=>({foo:x});
console.log(fn(1).foo);

//4.箭头函数修复了this  所以使用apply和call第一个参数会无效化
let obj = {
    name:'tr',
    birth:1997,
    age:function(){
        // return function(){
        //     return new Date().getFullYear()-this.birth;
        // }
        return ()=>{
            return new Date().getFullYear()-this.birth;
        }
    }
}
let getAge = obj.age();
console.log(getAge());