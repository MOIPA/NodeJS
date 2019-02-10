//函数执行成功或者失败会执行回调函数 如果是异步的 ，但是这样可能导致回调地狱
//promise就是某个函数成功后执行resolve（）promise对象才会执行then

// 生成一个0-2之间的随机数，如果小于1，则等待一段时间后返回成功，否则返回失败：
let p1 = new Promise(function(resolve,reject){
    let timeOut = Math.random()*2;
    console.log('time is :'+timeOut);
    
    setTimeout(function(){
        if(timeOut<1){
            console.log('resolved do then');
            resolve(' OK');
        }else{
            console.log('rejected do catch');
            reject(' NOT OK');
        }
    },timeOut);
});
p1.then(function(succData){   //promise对象只有执行了resolve才执行then
    console.log('did then'+succData);
}).catch(function(errData){
    console.log('did catch'+errData);//
});

// Promise对象可以串联起来，所以上述代码可以简化为：

// new Promise(...).then(function (result) {
//     console.log('成功：' + result);
// }).catch(function (reason) {
//     console.log('失败：' + reason);
// });

// Promise还可以做更多的事情，比如，有若干个异步任务，需要先做任务1，如果成功后再做任务2，任何任务失败则不再继续并执行错误处理函数。

// 要串行执行这样的异步任务，不用Promise需要写一层一层的嵌套代码。有了Promise，我们只需要简单地写：

// job1.then(job2).then(job3).catch(handleError);
// 其中，job1、job2和job3都是Promise对象。

// 0.5秒后返回input*input的计算结果:
function multiply(input) {
    return new Promise(function (resolve, reject) {
        log('calculating ' + input + ' x ' + input + '...');
        setTimeout(resolve, 500, input * input);
    });
}

// 0.5秒后返回input+input的计算结果:
function add(input) {
    return new Promise(function (resolve, reject) {
        log('calculating ' + input + ' + ' + input + '...');
        setTimeout(resolve, 500, input + input);
    });
}

var p = new Promise(function (resolve, reject) {
    log('start new Promise...');
    resolve(123);
});

p.then(multiply)
 .then(add)
 .then(multiply)
 .then(add)
 .then(function (result) {
    log('Got value: ' + result);
});


//promise和ajax结合
// ajax函数将返回Promise对象:
function ajax(method, url, data) {
    var request = new XMLHttpRequest();
    return new Promise(function (resolve, reject) {
        request.onreadystatechange = function () {
            if (request.readyState === 4) {
                if (request.status === 200) {
                    resolve(request.responseText);
                } else {
                    reject(request.status);
                }
            }
        };
        request.open(method, url);
        request.send(data);
    });
}
var log = document.getElementById('test-promise-ajax-result');
var p = ajax('GET', '/api/categories');
p.then(function (text) { // 如果AJAX成功，获得响应内容
    log.innerText = text;
}).catch(function (status) { // 如果AJAX失败，获得响应代码
    log.innerText = 'ERROR: ' + status;
});


// Promise还可以并行执行异步任务！！！！！！！！！！！。
var p1 = new Promise(function (resolve, reject) {
    setTimeout(resolve, 500, 'P1');
});
var p2 = new Promise(function (resolve, reject) {
    setTimeout(resolve, 600, 'P2');
});
// 同时执行p1和p2，并在它们都完成后执行then:
Promise.all([p1, p2]).then(function (results) {
    console.log(results); // 获得一个Array: ['P1', 'P2']
});

// 有些时候，多个异步任务是为了容错。比如，同时向两个URL读取用户的个人信息，只需要获得先返回的结果即可。这种情况下，用Promise.race()实现：

var p1 = new Promise(function (resolve, reject) {
    setTimeout(resolve, 500, 'P1');
});
var p2 = new Promise(function (resolve, reject) {
    setTimeout(resolve, 600, 'P2');
});
Promise.race([p1, p2]).then(function (result) {
    console.log(result); // 'P1'
});