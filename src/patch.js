import VNode from './vnode.js'
import createElement from './createElement.js'
export default function(oldVNode,newVNode){
    if(!oldVNode.sel){
        oldVNode = VNode(oldVNode.tagName.toLowerCase,{},undefined,undefined,oldVNode)
    }
    if(oldVNode.sel===newVNode.sel&&oldVNode.key===newVNode.key){
        if(newVNode===oldVNode){
            return
        }else if(newVNode.text&&(newVNode.children===undefined||newVNode.children.length===0)){
            if(newVNode.text!==oldVNode.text)
                oldVNode.elm.innerText = newVNode.text
        }else if(oldVNode.children===undefined||oldVNode.children.length===0){
            oldVNode.elm.innerText = ''
            for(let d of newVNode.children){
                const node = createElement(d)
                oldVNode.elm.appendChild(node)
            }
        }else{
            console.log('diff最小量更新算法')
        }
    }else{
        const newNodeElm = createElement(newVNode)
        oldVNode.elm.parentNode.insertBefore(newNodeElm,oldVNode.elm)
        oldVNode.elm.parentNode.removeChild(oldVNode.elm)
    }
}