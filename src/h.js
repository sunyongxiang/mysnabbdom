import VNode from './vnode.js'
export const h = (sel,data,c)=>{
    if(typeof(c)==='string'||typeof(c)==='number'){
        return VNode(sel,data,undefined,c,undefined)
    }else if(Array.isArray(c)){
        let children = []
        for(let d of c){
            if(typeof(d)==='object'){
                children.push(d)
            }else if(typeof(d)==='string'||typeof(d)==='number'){
                children.push(VNode(undefined,undefined,undefined,d,undefined))
            }
        }
        return VNode(sel,data,children,undefined,undefined)
    }else if(typeof(c)==='object'){
        return VNode(sel,data,[c],undefined,undefined)
    }
}