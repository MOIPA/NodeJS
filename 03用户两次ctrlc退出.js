var exit =false;

setInterval(function(){
   console.log('print');
},1000);

process.on('SIGINT',()=>{
 if(exit){
   process.exit();
   console.log('exit...');
}
console.log('again...');
exit=true;
setTimeout(()=>{
   exit=false;
},1000);
});
