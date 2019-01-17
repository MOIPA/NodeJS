let arr1 = [1,2,'3'];
console.log(arr1.length);
arr1[0]='1';
arr1[5]='6';
console.log(arr1);
console.log(arr1.indexOf(2));

console.log(arr1.slice(0,2));
arr1.push(7);
arr1.pop();

arr1.unshift('a','b','c');
console.log(arr1);
arr1.shift();
arr1.sort();
console.log(arr1);

console.log(arr1.reverse());

console.log("===============");
//splice !
let arr2 = [1,2,3,4,5,6];
arr2.splice(2,3,'a','b'); //从第2个开始删除3个元素 ，添加a,b
console.log(arr2);

//concat 拼接数组
console.log(arr2.concat('x','y',arr1)); 

//join !!!!! //非常常用的方法 每个字符后面加上
console.log(arr2.join('=>'));
