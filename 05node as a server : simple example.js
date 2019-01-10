//node as a server : simple example

//v8队es6支持分为三个级别：根本不支持，直接支持，严格模式支持
//如果发现数量从0-2-4-.。。是因为谷歌浏览器请求了两次
//node server only has one thread!!!!!!!!
const http = require('http');
 let count = 0;
 const server =  http.createServer((req,rep)=>{
 	rep.write(`hello node server ,you are the ${count++}`);
 	rep.end();
 });

 server.listen(1997,(err)=>{
 	if(err) throw err;
 	console.log('succeed port: 1997');
 });
