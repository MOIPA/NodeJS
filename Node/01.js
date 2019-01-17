console.log(process.argv.toString());


var log = function(message){
        process.stdout.write(message+'\n');
}
var log2 = (message)=>{
        process.stdout.write(message+'\n');
}

var msg='hello';
//模板字符串
process.stdout.write(`
   ${msg} word
`);
