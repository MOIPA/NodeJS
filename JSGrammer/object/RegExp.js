//正则表达式
// \w匹配一个字母  \d匹配一个数字
//  .匹配任意字符
// 匹配变长字符： *(任意个字符) +（至少一个字符）？（0/1个字符）{n}(n个字符){n,m}（n-m）个字符

let reg = new RegExp('ABC\\-001');
let reg2 = /ABC\-001/;
reg.test('010-12345'); //true

//可以用正则切割字符串
let res = 'a b c'.split(/\s+/);
console.log(res);