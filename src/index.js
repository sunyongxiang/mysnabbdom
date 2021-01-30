import {h} from './h.js'
import patch from './patch.js'
const vnode1 = h('ul',{},[
    h('li',{},'aaa'),
    h('li',{},'bbb'),
    h('li',{},'ccc')
])
const vnode2 = h('div',{},[
    h('p',{},'天才'),
    h('h1',{},'就是'),
    h('bold',{},'本人')
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