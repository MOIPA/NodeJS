var fps = 24;

var frames=[];//每个成员都是一针
frames[frames.length]=`
  =     =
     _
`;
frames[frames.length]=`
  =     =
     ^
`;
frames[frames.length]=`
  =     =
     v
`;

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

