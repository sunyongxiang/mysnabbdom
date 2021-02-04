import createElement from './createElement.js'
import sameVNode from './sameVNode.js'
import createKeyToOldIdx from './createKeyToOldIdx.js'
export default function patchVNode(oldVNode,newVNode){
    newVNode.elm = oldVNode.elm
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
        newVNode.elm = oldVNode.elm
        let startIndex = 0
        let endIndex = oldVNode.children.length-1
        let newStartIndex = 0
        let newEndIndex = newVNode.children.length-1
        let oldKeyToIdx , idxInOld
        while(startIndex<=endIndex&&newStartIndex<=newEndIndex){
            if(oldVNode.children[startIndex]===undefined){
                startIndex++
            }else if(oldVNode.children[endIndex]===undefined){
                endIndex--
            }else if(sameVNode(oldVNode.children[startIndex],newVNode.children[newStartIndex])){
                patchVNode(oldVNode.children[startIndex],newVNode.children[newStartIndex])
                startIndex++
                newStartIndex++
            }else if(sameVNode(oldVNode.children[endIndex],newVNode.children[newEndIndex])){
                patchVNode(oldVNode.children[endIndex],newVNode.children[newEndIndex])
                endIndex --
                newEndIndex -- 
            }else if(sameVNode(oldVNode.children[startIndex],newVNode.children[newEndIndex])){
                patchVnode(oldVNode.children[startIndex], newVNode.children[newEndIndex])
                oldVNode.elm.insertBefore(oldVNode.children[startIndex], oldVNode.children[endIndex].nextSibling)
                startIndex++
                newEndIndex--
            }else if(sameVNode(oldVNode.children[endIndex],newVNode.children[newStartIndex])){
                patchVnode(oldVNode.children[endIndex], newVNode.children[newStartIndex])
                oldVNode.elm.insertBefore(oldVNode.children[endIndex], oldVNode.children[startIndex])
                newStartIndex++
                endIndex-- 
            }else{
                if(!oldKeyToIdx){
                    oldKeyToIdx = createKeyToOldIdx(oldVNode.children,startIndex,endIndex)
                }
                idxInOld =newVNode.children[newStartIndex].key ? oldKeyToIdx[newVNode.children[newStartIndex].key]
                : findIdxInOld(newVNode.children[newStartIndex], oldCh, startIndex, endIndex)
                if (!idxInOld) { 
                    const node = createElement(newVNode.children[newStartIndex])
                    oldVNode.elm.insertBefore(node, oldVNode.children[startIndex].elm)
                } else {
                    let vnodeToMove = oldVNode.children[idxInOld]
                    if (sameVNode(oldVNode.children[idxInOld], newVNode.children[newStartIndex])) {
                        patchVNode(oldVNode.children[idxInOld], newVNode.children[newStartIndex])
                        oldCh[idxInOld] = undefined
                        oldVNode.elm.insertBefore(oldVNode.children[i].elm, oldVNode.children[startIndex].elm)
                    } else {
                        const node = createElement(newVNode.children[newStartIndex])
                        oldVNode.elm.insertBefore(node, oldVNode.children[startIndex].elm)
                    }
                }
                newStartIndex++
            }
        }
        if(startIndex>endIndex){
            for(;newStartIndex<=newEndIndex;newStartIndex++){
                const node = createElement(newVNode.children[newStartIndex])
                oldVNode.elm.appendChild(node)
            }
        }else if(newStartIndex>newEndIndex){
            for(;startIndex<=endIndex;startIndex++){
                if(oldVNode.children[startIndex])
                    oldVNode.elm.removeChild(oldVNode.children[startIndex].elm)
            }
        }
    }
}