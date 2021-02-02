import {h} from './h.js'
import patch from './patch.js'
const vnode1 = h('div',{},[
    h('p1',{},'aaa'),
    h('p1',{},'bbb'),
    h('p1',{},'ccc'),
    h('p1',{},'ddd')
])
const vnode2 =h('div',{},[
    h('p1',{},'ddd'),
    h('p1',{},'ccc'),
    h('p1',{},'aaa'),
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
}