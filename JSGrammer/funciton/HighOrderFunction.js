//高阶函数 : 接受函数作为参数
function add(x,y,f){
    return f(x)+f(y);
}
let 
    x=-1,
    y=1,
    f=Math.abs;
console.log(add(x,y,f));

//------------

//map 接受运算规则（方法）作用到每个数组成员然后返回新的数组
function pow(x){
    return x*x;
}
let arr1 = [1,2,3,4];
let results = arr1.map(pow);
console.log(results);

//-------------

//reduce 接受规则（规则必须接受两个参数）对两个对象运算然后将结果入栈，直到剩下最后结果
let res = arr1.reduce(function(x,y){
    return x+y;
})
console.log(res);

//--------------

//reduce可以用作很多有意思的算法
let arr2=[1,2,3];
console.log(arr2.reduce(function(x,y){
    return x*10+y;
}));


function nor(x){
    let outString = '';
    let firstC = x.toString().substring(0,1);
    let restC = x.toString().substring(1,x.toString().length);
    outString = firstC.toUpperCase()+restC.toLowerCase();
    // console.log(x);
    return outString;
}

let arr3 = ['nancy','ttR','RyN'];
console.log(arr3.map(nor));


//-------------------------

//filter  接受规则判断是否删除元素
let arr4 = [1,2,3,4,4,2];
let res2= arr4.filter(function(ele){
    if(ele%2===0)return true;
});
console.log(res2);
//filter 的回调函数可以接受三个参数
let res3 = arr4.filter((element,index,self)=>{
    //element:数组元素
    //index:数组下标
    //self:数组
    if(self.indexOf(element)===index)return true;
});
console.log(res3);

//sort 接受规则的排序 本质就是比大小
//但是默认的规则使将元素转为ascall排序 所以10比2小！！！！
let res4 = arr4.sort((x,y)=>{
    if(x>y)return true;
    return false;
});
console.log(res4);