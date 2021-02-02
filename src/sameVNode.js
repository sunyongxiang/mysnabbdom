export default function sameVNode(oldVNode,newVNode){
    return oldVNode.key === newVNode.key && oldVNode.sel === newVNode.sel
}