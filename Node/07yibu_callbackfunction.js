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

//1. if need call back the function must be put on the end
// get('http://www.baidu.com',funciton(data){
// 	console.log(data);
// });
//2. error first callback
// function getFileAsync(path,callback){
// 	if(error){
// 		callback(new Error('xxx wrong'));
// 	}else{
// 		callback(null,data);
// 	}
// }

console.timeEnd('main2');

//example:
function isEven(number,callback){
	if(typeof number==='number'){
		if(number%2){
			callback(null,'it is even')
		}else{
			callback(null,'it is odd');
		}
	}else{
		//throw new Error('not a number');
		callback (new Error('not a number'));
	}
}

isEven(10,(error,data)=>{
	if (error) throw error;
	console.log(data);
});
isEven('asdf',(error,data)=>{
	if (error) throw error;
	console.log(data);
});