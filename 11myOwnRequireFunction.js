//自己实现一个require函数

function $require(id){
   //先找到文件  如果文件不存在报错
   const fs = require('fs');
   const fileName = __dirname+id;
   //读取文件内容
   let code = fs.readFileSync(__dirname+id,'utf8');
   //执行内容代码 需要为代码做一个私有空间 传递文件
   let module = {id:fileName,exports:{}};
   let exports = module.exports;
   code = `(function(require,module,exports){${code}})($require,module,exports)`;
   //返回值
}
