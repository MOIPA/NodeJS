//表单操作
// HTML表单的输入控件主要有以下几种：
// 文本框，对应的<input type="text">，用于输入文本；
// 口令框，对应的<input type="password">，用于输入口令；
// 单选框，对应的<input type="radio">，用于选择一项；
// 复选框，对应的<input type="checkbox">，用于选择多项；
// 下拉框，对应的<select>，用于选择一项；
// 隐藏文本，对应的<input type="hidden">，用户不可见，但表单提交时会把隐藏文本发送到服务器。

//获取值
let input = document.getElementById('a');
input.value;
input.checked;

//设置值
input.value = '';

//提交表单有两种方式
// 1. 通过<form>元素的submit  缺点是最后一行回车也会提交
// <!-- HTML -->
// <form id="test-form">
//     <input type="text" name="test">
//     <button type="button" onclick="doSubmitForm()">Submit</button>
// </form>

// <script>
// function doSubmitForm() {
//     var form = document.getElementById('test-form');
//     // 可以在此修改form的input...
//     // 提交form:
//     form.submit();
// }
// </script>

// 2. 通过对form本身的onsubmit事件
// <!-- HTML -->
// <form id="test-form" onsubmit="return checkForm()">
//     <input type="text" name="test">
//     <button type="submit">Submit</button>
// </form>

// <script>
// function checkForm() {
//     var form = document.getElementById('test-form');
//     // 可以在此修改form的input...
//     // 继续下一步:
//     return true;
// }
// </script>


// 注意要return true来告诉浏览器继续提交，如果return false，浏览器将不会继续提交form，这种情况通常对应用户输入有误，提示用户错误信息后终止提交form。

// 在检查和修改<input>时，要充分利用<input type="hidden">来传递数据。

// 例如，很多登录表单希望用户输入用户名和口令，但是，安全考虑，提交表单时不传输明文口令，而是口令的MD5。普通JavaScript开发人员会直接修改<input>：

// <!-- HTML -->
// <form id="login-form" method="post" onsubmit="return checkForm()">
//     <input type="text" id="username" name="username">
//     <input type="password" id="password" name="password">
//     <button type="submit">Submit</button>
// </form>

// <script>
// function checkForm() {
//     var pwd = document.getElementById('password');
//     // 把用户输入的明文变为MD5:
//     pwd.value = toMD5(pwd.value);
//     // 继续下一步:
//     return true;
// }
// </script>
// 这个做法看上去没啥问题，但用户输入了口令提交时，口令框的显示会突然从几个*变成32个*（因为MD5有32个字符）。

// 要想不改变用户的输入，可以利用<input type="hidden">实现：

// <!-- HTML -->
// <form id="login-form" method="post" onsubmit="return checkForm()">
//     <input type="text" id="username" name="username">
//     <input type="password" id="input-password">
//     <input type="hidden" id="md5-password" name="password">
//     <button type="submit">Submit</button>
// </form>

// <script>
// function checkForm() {
//     var input_pwd = document.getElementById('input-password');
//     var md5_pwd = document.getElementById('md5-password');
//     // 把用户输入的明文变为MD5:
//     md5_pwd.value = toMD5(input_pwd.value);
//     // 继续下一步:
//     return true;
// }
// </script>
// 注意到id为md5-password的<input>标记了name="password"，而用户输入的id为input-password的<input>没有name属性。没有name属性的<input>的数据不会被提交。