import VNode from './vnode.js'
import createElement from './createElement.js'
export default function(oldVNode,newVNode){
    if(!oldVNode.sel){
        console.log(oldVNode.tagName)
        oldVNode = VNode(oldVNode.tagName.toLowerCase,{},undefined,undefined,oldVNode)
    }
    if(oldVNode.sel===newVNode.sel&&oldVNode.key===newVNode.key){
        console.log('是同一个节点，将使用最小量更新，敬请期待')
    }else{
        const newNodeElm = createElement(newVNode)
        oldVNode.elm.parentNode.insertBefore(newNodeElm,oldVNode.elm)
        oldVNode.elm.parentNode.removeChild(oldVNode.elm)
    }
}