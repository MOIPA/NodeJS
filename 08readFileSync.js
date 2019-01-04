//readFile
var fs = require('fs');
// fs.readFile('./frames/1.txt','utf-8',(err,data)=>{
// 	if(err) throw err;
// 	console.log(data);
// });

// fs.writeFile('./message.txt',"hello nodejs",(err)=>{
// 	if(err) throw err;
// 	console.log('writed');
// })
var announce = `
********BolgSystem*********
	1 : watch log
	2 : attach log
	3 : create a new log
	4 : delete a log
`;
var commandStatus = -1;
var nameStatus=-1;
var contentStatus=1;
//if contentStatus is -1 : need content

process.stdout.write(announce);

process.stdin.on('data',(data)=>{
	// console.log(data.toString().trim());
	data = data.toString().trim();

	if(contentStatus==-1){
		// commandStatus=data;
		if(commandStatus==2){
			//attach file need to judge is the file exist!
			if(!fs.existsSync('./'+nameStatus)){
				console.log('file does not exist');
				process.exit();
			}
		}
		fs.writeFile('./'+nameStatus,data,(err)=>{
			if(err)throw err;
			console.log('recorded the file');
			process.exit();
		});	
		
	}
	//do what done  which file
	if(commandStatus!=-1&&nameStatus==-1){
		nameStatus=data;
		if(commandStatus==2||commandStatus==3){
			console.log('please enter the log content...');
			contentStatus=-1;
		}else{
			if(commandStatus==1){
				// console.log('do watch log');
				fs.readFile('./'+nameStatus,'utf-8',(err,contents)=>{
					if (err) {throw err;}
					console.log(contents);
					process.exit();
				});
			}
			if(commandStatus==4){
				// console.log('do delete log');
				fs.unlink('./'+nameStatus,(err)=>{
					if(err) throw err;
					console.log('log deleted ');
					process.exit();
				});
			}
		}
	}

	//do what
	if(commandStatus==-1){
		commandStatus=data;
		if (commandStatus<1||commandStatus>4) {process.exit()};
		console.log('please enter the file name');
	}
	//not -1 execute the command
	
});