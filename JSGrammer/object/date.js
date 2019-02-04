let now = new Date();
console.log(now);
console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDate());
console.log(now.getDay());
console.log(now.getHours());
console.log(now.getTime());

//Date对象中 月份是0-11！！！

//手动创建日期 简单的
let d = new Date(2010,0,1);
console.log(d.getDay());

//复杂创建日期  先获取时间戳,再转为date对象
let d2 = Date.parse('2010-12-01T11:11:11.111+08:00');
console.log(d2);
d2 = new Date(d2);
console.log(d2.getMonth());