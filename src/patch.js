import VNode from './vnode.js'
import createElement from './createElement.js'
import patchVNode from './patchVNode.js'
export default function(oldVNode,newVNode){
    if(!oldVNode.sel){
        oldVNode = VNode(oldVNode.tagName.toLowerCase,{},undefined,undefined,oldVNode)
    }
    if(oldVNode.sel===newVNode.sel&&oldVNode.key===newVNode.key){
        patchVNode(oldVNode,newVNode)
    }else{
        const newNodeElm = createElement(newVNode)
        oldVNode.elm.parentNode.insertBefore(newNodeElm,oldVNode.elm)
        oldVNode.elm.parentNode.removeChild(oldVNode.elm)
    }
}