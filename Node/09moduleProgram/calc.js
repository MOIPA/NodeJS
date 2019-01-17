//calc.js
// define(function(require,module,exports){

	function convert(input){
		return parseFloat(input);
	}
	function add(a,b){
		return convert(a)+convert(b);
	}
	function minus(a,b){
		return convert(a)-convert(b);
	}
	module.exports= {add,minus};
	//exports={
		// add:add,
		// minus:minus
	// };
// });