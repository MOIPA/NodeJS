//生成器 generator es6标准 类似函数可以返回多次
////yield就是输出 一次next到yield暂停
function* foo(x){
    yield x+1;
    yield x+2;
    return x+3;
}

//普通斐波那契数列
function fib(max){
    let 
        t,
        a=0,
        b=1,
        arr=[0,1];
    while(arr.length<max){
        [a,b] = [b,a+b];
        arr.push(b);
    }
    return arr;
}
console.log(fib(5));

//改用generator
function* fib(max){
    let 
        t,
        a=0,
        b=1,
        n=0;
    while(n<max){
        yield a;
        [a,b]=[b,a+b];
        n++;
    }
    return;
}
let f = fib(5); //fib()创建generator对象
// console.log(f.next().value); //返回的value是yield定义的
// console.log(f.next());
// console.log(f.next());
// console.log(f.next());
// console.log(f.next());
// console.log(f.next());

for(let x of fib(10)){  //for...of 也是es6的用于遍历数组，直接返回value
    console.log(x);
}

//generator 好处一：保存状态  
//例：编写自增id ，普通需要一个变量保存当前id
function *next_id(){
    let current_id=0;
    while(true){
        current_id++;
        yield current_id;  //yield就是输出 一次next到yield暂停
        console.log("paused");
        // yield 1000;
        // console.log("paused again");
    }
}
let nid = next_id();
console.log(nid.next());
console.log(nid.next());
// console.log(nid.next());