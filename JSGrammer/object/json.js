//json的数据类型：
// number boolean string null array object
//字符集必须是utf-8   必须用“”
'use strict';
let tr = {
    name:'tr',
    age:18,
    skills:["java","c"]
};
let jsonTr = JSON.stringify(tr,['name']," ");//第二个参数用于指定输出属性 可以传入数组，也可以传入函数
console.log(jsonTr);

//对象===》json
//可以再对象中使用toJson方法
tr = {
    name:'tr',
    age:18,
    skills:["java","c"],
    toJSON:function(){  //不能用箭头函数
        return{
            'Name':this.name,
            'SKILLS':this.skills
        };
    }
};
console.log(JSON.stringify(tr));

//json===》对象
let obj = JSON.parse('{"name":"tr","age":18}',(key,value)=>{
    if(key==='name'){
        return 'sir '+value;
    }
    return value;
});
console.log(JSON.stringify(obj));