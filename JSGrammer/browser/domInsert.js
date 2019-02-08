//1.转移dom节点
// <!-- HTML结构 -->
// <p id="js">JavaScript</p>
// <div id="list">
//     <p id="java">Java</p>
//     <p id="python">Python</p>
//     <p id="scheme">Scheme</p>
// </div>

// 把<p id="js">JavaScript</p>添加到<div id="list">的最后一项：

let 
    js = document.getElementById('js'),
    list = document.getElementById('list');
list.appendChild(js);
//结果：
// <!-- HTML结构 -->
// <div id="list">
//     <p id="java">Java</p>
//     <p id="python">Python</p>
//     <p id="scheme">Scheme</p>
//     <p id="js">JavaScript</p>
// </div>
// 因为我们插入的js节点已经存在于当前的文档树，因此这个节点首先会从原先的位置删除，再插入到新的位置。

// 2. 新增dom节点
let list = document.getElementById('list');
let newNode = document.createElement('p');
newNode.id='newNode';
newNode.innerText = 'newNode';
list.appendChild(newNode);

// 动态创建了一个<style>节点，然后把它添加到<head>节点的末尾，这样就动态地给文档添加了新的CSS定义：
let d = document.createElement('style');
d.setAttribute('type','text/css');
d.innerHTML = 'p {color:red}';
document.getElementsByTagName('head')[0].appendChild(d);


// 3.转移dom节点到之前
// 使用parentElement.insertBefore(newElement, referenceElement);，子节点会插入到referenceElement之前。
// <!-- HTML结构 -->
// <div id="list">
//     <p id="java">Java</p>
//     <p id="python">Python</p>
//     <p id="scheme">Scheme</p>
// </div>
// 可以这么写：

var
    list = document.getElementById('list'),
    ref = document.getElementById('python'),
    haskell = document.createElement('p');
haskell.id = 'haskell';
haskell.innerText = 'Haskell';
list.insertBefore(haskell, ref);
// 新的HTML结构如下：

// <!-- HTML结构 -->
// <div id="list">
//     <p id="java">Java</p>
//     <p id="haskell">Haskell</p>
//     <p id="python">Python</p>
//     <p id="scheme">Scheme</p>
// </div>

