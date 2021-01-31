import {h} from './h.js'
import patch from './patch.js'
const vnode1 = h('div',{},[
    h('p',{},'我'),
    h('p',{},'是'),
    h('p',{},'老'),
    '节点'
])
const vnode2 = h('div',{},[
    h('p',{},'我'),
    h('p',{},'是'),
    h('p',{},'新'),
    '节点'
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