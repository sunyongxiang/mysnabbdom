import createElement from './createElement.js'
import sameVNode from './sameVNode.js'
export default function patchVNode(oldVNode,newVNode){
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
        let startIndex = 0
        let endIndex = oldVNode.children.length-1
        let newStartIndex = 0
        let newEndIndex = newVNode.children.length-1
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
                for(let i = 0;i<oldVNode.children.length;i++){
                    if(sameVNode(oldVNode.children[i],newVNode.children[newStartIndex])){
                        patchVnode(oldVNode.children[i], newVNode.children[newStartIndex])
                        oldVNode.elm.insertBefore(oldVNode.children[endIndex], oldVNode.children[startIndex])
                        oldVNode.children[i] =undefined
                        newStartIndex++
                        break
                    }
                }
            }
        }
        if(startIndex>endIndex){
            console.log(newStartIndex,newEndIndex)
            for(;newStartIndex<=newEndIndex;newStartIndex++){
                const node = createElement(newVNode.children[newStartIndex])
                console.log(node)
                oldVNode.elm.appendChild(node)
            }
        }
        else if(newStartIndex>newEndIndex){
            for(;startIndex<=endIndex;startIndex++){
                if(ldVNode.children[startIndex])
                    oldVNode.elm.removeChild(oldVNode.children[startIndex].elm)
            }
        }
    }
}