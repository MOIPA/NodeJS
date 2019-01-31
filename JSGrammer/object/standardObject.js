console.log(typeof 123);
console.log(typeof NaN);
console.log(typeof 'str');
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof Math.abs);
console.log(typeof null);
console.log(typeof []);
console.log(typeof {});


//js提供了包装对象 类似java的int和integer integer对象里头有int字段

//使用包装对象初始化，都会变为对象而不是基础类型   所以最好别用
let n = new Number(123);
let b = new Boolean(true);
let s = new String('str');
console.log(n===123); //false
console.log(new Number('123'));

console.log(Number('123')); //不用new会变为基础类型类似parseInt
// 总结一下，有这么几条规则需要遵守：

// 不要使用new Number()、new Boolean()、new String()创建包装对象；

// 用parseInt()或parseFloat()来转换任意类型到number；

// 用String()来转换任意类型到string，或者直接调用某个对象的toString()方法；

// 通常不必把任意类型转换为boolean再判断，因为可以直接写if (myVar) {...}；

// typeof操作符可以判断出number、boolean、string、function和undefined；

// 判断Array要使用Array.isArray(arr)；

// 判断null请使用myVar === null；

// 判断某个全局变量是否存在用typeof window.myVar === 'undefined'；

// 函数内部判断某个变量是否存在用typeof myVar === 'undefined'。

// 123.toString(); // SyntaxError
// 遇到这种情况，要特殊处理一下：

// 123..toString(); // '123', 注意是两个点！
// (123).toString(); // '123'