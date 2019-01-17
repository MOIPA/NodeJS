var fs = require('fs');
fs.stat('./frames/1.txt',(eror,data)=>{
	console.log(data);
});