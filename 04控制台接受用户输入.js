//process.stdin.on('data',((data)=>{
//   process.stdout.write(`entered:${data}`);
//}));

var q = 'name?\n';
var users={
   'user1':'123',
   'user2':'234'
};

var input;
var userName= '';

process.stdout.write(q);
process.stdin.on('data',(input)=>{
        //获取键值队集合
   //process.stdout.write(typeof input);  //input 实际是个流对象
   input  = input.toString().trim();
   if(userName==''){
      if(Object.keys(users).indexOf(input)==-1){
          process.stdout.write("error name\n");       
          process.stdout.write(q);
      }else{
          userName=input;
          process.stdout.write('enter pwd\n');
      }
   }
   else{ 
      var pwd = users[userName];
      if(pwd == input){
         process.stdout.write("loging in");
         process.exit();
      }
      else{
         userName  = '';
          process.stdout.write("error pwd\n");       
          process.stdout.write(q);
      }
   }
});
