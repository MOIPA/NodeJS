var fps = 10;
var fs = require('fs');

var frames=[];//每个成员都是一针
for(var i=1;i<7;i++){
frames[frames.length] = fs.readFileSync(`./Node/frames/${i}.txt`,'utf-8');
}

var current=0;
var render = ()=>{
//清空控制台
process.stdout.write('\033[2J');
process.stdout.write('\033[0f');
//输出新内容;
process.stdout.write(frames[current++]+"\n");
current%=frames.length;
};

setInterval(render,1000/fps);

