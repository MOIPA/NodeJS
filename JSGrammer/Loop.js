// for(let i=0;i<10;i++)console.log(i);

let p1 = {
    name:'t',
    age:1
}
// for(let key in p1)console.log(key);
let a1 = [1,2,3];

for(let key in p1)
    if(p1.hasOwnProperty(key)){
        console.log(key+"==>"+p1[key]);
    }
    
//in 遍历出来的有属性
for(let key in a1)console.log(key+"==>"+a1[key]);

//of 遍历出来的是value
for(let key of a1)console.log(key+"==>"+a1[key]);