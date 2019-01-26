'use strict'
//坑爹的this指针

//普通对象函数定义
let person = {
    name:'tr',
    birth:1997,
    age:function(){
        let y = new Date().getFullYear();
        return y-this.birth; //this这是指向person
    }
}
console.log(person.age());

//---------------

function age_p2(){
    let y = new Date().getFullYear();
    return y-this.birth; //this 单独调用函数指向window 通过p2调用则是p2
}
let p2={
    name:'some one',
    birth:1992,
    age:age_p2
}
console.log(p2.age()); 

//---------------
//总结：必须是object.xx才能使指针指向object

let p3={
    name:'p3',
    birth:1990,
    age:function(){
        let that = this;
        function getAge(){ //这样便于解构
            let y = new Date().getFullYear();
            return y-that.birth;
        } //然而this在嵌套中会变回undefined 解决方案：var that = this
        return getAge();
    }    
}
let {age:getAge} = p3;
// console.log(getAge()); //获得函数 直接使用this为undefiend 
console.log(p3.age());

//---------------------

//apply 解决this指针问题
function age_p4(){
    let y = new Date().getFullYear();
    return y-this.birth; //this 单独调用函数指向window 通过p2调用则是p2
}
let p4={
    name:'some one',
    birth:1992,
    age:age_p4
}
console.log("p4 call "+p4.age()); 
console.log(age_p4.apply(p4,[1,2])); //方法使用apply 第一个参数使内部this执行的对象，第二个数组[]为本来的入参
console.log(age_p4.call(p4,1,2)); //call与apply的不同在于不会打包参数为数组
