console.time('main1');
for(var i=0;i<10000;i++){
	
}
console.timeEnd('main1');
console.log('end');

//huidiao
setTimeout(()=>{
	for(var i=0;i<1000;i++){}
	console.log('middle sentence');
},0);

console.log('the end sentence')

console.time('main2');
//**spend time
//var data = get('http://www.baidu.com');

// setTimeout(()=>{
// 	var data = get....
// },0);
//**user another api 

get('http://www.baidu.com',funciton(data){
	console.log(data);
});


console.timeEnd('main2');