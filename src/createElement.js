export default function createElement(vnode){
    let domNode = document.createElement(vnode.sel)
    if(vnode.text&&(vnode.children===undefined||vnode.children.length===0)){
        let textNode = document.createTextNode(vnode.text);
        domNode.appendChild(textNode)
    }else if(vnode.children&&vnode.children.length){
        console.log(vnode.children)
        for(let d of vnode.children){
            if(d.sel){
                let ch = createElement(d)
                domNode.appendChild(ch)
            }else{
                let textNode = document.createTextNode(d.text);
                domNode.appendChild(textNode)
            }
            
        }
    }
    vnode.elm = domNode
    return domNode
}