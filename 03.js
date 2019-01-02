var exit =false;

process.on('SIGINT',()=>{
 if(exit){
   process.exit();
}
}
