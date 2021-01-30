export default function createElement(vnode){
    let domNode = document.createElement(vnode.sel)
    if(vnode.text&&(vnode.children===undefined||vnode.children.length===0)){
        domNode.innerText = vnode.text
    }else if(vnode.children&&vnode.children.length){
        console.log(vnode.children)
        for(let d of vnode.children){
            console.log(d,'d')
            let ch = createElement(d)
            domNode.appendChild(ch)
        }
    }
    vnode.elm = domNode
    return domNode
}