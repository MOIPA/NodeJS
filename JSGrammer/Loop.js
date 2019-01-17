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
    
for(let key in a1)console.log(key+"==>"+a1[key]);