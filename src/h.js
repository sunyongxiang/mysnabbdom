import VNode from './vnode.js'
export const h = (sel,data,c)=>{
    if(typeof(c)==='string'){
        return VNode(sel,data,undefined,c,undefined)
    }else if(Array.isArray(c)){
        let children = []
        for(let d of c){
            children.push(d)
        }
        return VNode(sel,data,children,undefined,undefined)
    }else if(typeof(c)==='object'){
        return VNode(sel,data,[c],undefined,undefined)
    }
}