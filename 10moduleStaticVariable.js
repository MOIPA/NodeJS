console.log(__dirname);
console.log(__filename);

const fs = require('fs');
fs.readFile(__dirname+'/../NodeJS/01.js',(error,content)=>{
   if(error)throw error;
//   console.log(content);
//   console.log(content.toString());
});

//module object

console.log(module);
