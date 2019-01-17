let obj1 = {
    "name":"tr",
    height:178,
    id:117,
    'middle-school':'zjg',  //如果带特殊字符必须用 ‘’
    age:18 
};
console.log(obj1.height);
console.log(obj1.name);
console.log(obj1["middle-school"]);

//动态操作对象

//增加属性
obj1.birthTime = "1997";
console.log(obj1.birthTime);
//删除属性
delete obj1.age;
console.log(obj1);
//检测是否具有属性,但无法判断是不是非继承的属性
console.log('age' in obj1);
console.log('toString' in obj1);

//判断是不是非继承而是自己的属性
console.log(obj1.hasOwnProperty('name'));
console.log(obj1.hasOwnProperty('toString'));
