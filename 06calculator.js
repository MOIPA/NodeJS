//implement a calculator
'use strict'   //start start mode
//1. receive args
const args = process.argv.slice(2);     //array  0: node  pwd .  1:the progarm  pwd
if(args.length !==3){
	console.log('unillegal args');
	return;
}
//2. analyze
let para1 = args[0];
let op = args[1];
let para2 = args[2];
//3. calc and output
switch(op){
	case '+':console.log(parseFloat(para1)+parseFloat(para2));break;
	case '-':console.log(parseFloat(para1)-parseFloat(para2));break;
}
// the simplest way eval:
let result = eval(`${para1} ${op} ${para2}`);
console.log('the eval result '+result);

//use module
const calc = require('./09moduleProgram/calc.js');
switch(op){
	case '+':console.log(calc.add(para1,para2));break;
	case '-':console.log(calc.minus(para1,para2));break;
}
