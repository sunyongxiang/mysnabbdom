import sameVNode from './sameVNode.js'
export default function findIdxInOld (node, oldCh, start, end) {
    for (let i = start; i < end; i++) {
      const c = oldCh[i]
      if (c && sameVnode(node, c)) return i
    }
}