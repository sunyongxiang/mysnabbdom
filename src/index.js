import {h} from './h.js'
import patch from './patch.js'
const vnode1 = h('div',{},[
    h('h1',{key:'aaa'},'aaa'),
    h('h2',{key:'bbb'},'bbb'),
    h('h3',{key:'ccc'},'ccc'),
    h('h4',{key:'ddd'},'ddd')
])
const vnode2 =h('div',{},[
    h('p1',{key:'aaa'},'aaa'),
    h('p1',{key:'fff'},'fff'),
    h('p1',{key:'ccc'},'ccc'),
])
var div = document.createElement("div");
div.setAttribute("id", "contanier");
document.body.appendChild(div)
const contanier = document.getElementById('contanier')
patch(contanier,vnode1)
var btn = document.createElement("button");
btn.setAttribute("id", "btn");
btn.innerText = '按钮'
document.body.appendChild(btn)
btn.onclick = ()=>{
    patch(vnode1,vnode2)
    console.log(vnode2)
}