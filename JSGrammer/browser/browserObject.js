//1.window 对象 innerWidth innerHeight

console.log(`${window.innerHeight} + ${window.innerWidth}`);
//不包含工具栏什么的

console.log(`${window.outerHeight} + ${window.outerWidth}`);
//包含工具栏什么的


//2.navigator对象 浏览器信息
// navigator.appName：浏览器名称；
// navigator.appVersion：浏览器版本；
// navigator.language：浏览器设置的语言；
// navigator.platform：操作系统类型；
// navigator.userAgent：浏览器设定的User-Agent字符串

//3. screen对象 屏幕信息 
// screen.width：屏幕宽度，以像素为单位；

//4. location对象 当前页面的url
location.protocol; // 'http'
location.host; // 'www.example.com'
location.port; // '8080'
location.pathname; // '/path/index.html'
location.search; // '?a=1&b=2'
location.hash; // 'TOP'

//加载一个新的页面：
location.assign('http://www.google.com');
//重新加载当且页面
location.reload();

//5.document对象  就是dom树的树根 一个html文件就是一颗dom树
document.title;
document.getElementById('id');

// document对象还有一个cookie属性，可以获取当前页面的Cookie。
// Cookie是由服务器发送的key-value标示符。因为HTTP协议是无状态的，但是服务器要区分到底是哪个用户发过来的请求，就可以用Cookie来区分。当一个用户成功登录后，服务器发送一个Cookie给浏览器，例如user=ABC123XYZ(加密的字符串)...，此后，浏览器访问该网站时，会在请求头附上这个Cookie，服务器根据Cookie即可区分出用户。
// Cookie还可以存储网站的一些设置，例如，页面显示的语言等等。
// JavaScript可以通过document.cookie读取到当前页面的Cookie：
document.cookie;

//注意！！：
// 由于JavaScript能读取到页面的Cookie，而用户的登录信息通常也存在Cookie中，这就造成了巨大的安全隐患，这是因为在HTML页面中引入第三方的JavaScript代码是允许的：
// <!-- 当前页面在wwwexample.com -->
// <html>
//     <head>
//         <script src="http://www.foo.com/jquery.js"></script>
//     </head>
//     ...
// </html>
// 如果引入的第三方的JavaScript中存在恶意代码，则www.foo.com网站将直接获取到www.example.com网站的用户登录信息。
// 为了解决这个问题，服务器在设置Cookie时可以使用httpOnly，设定了httpOnly的Cookie将不能被JavaScript读取。这个行为由浏览器实现，主流浏览器均支持httpOnly选项，IE从IE6 SP1开始支持。
// 为了确保安全，服务器端在设置Cookie时，应该始终坚持使用httpOnly。

// 6.history对象   任何情况都不该使用！！！
history.back() //后退
history.forward() //前进
