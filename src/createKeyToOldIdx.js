export default function createKeyToOldIdx(children, beginIdx, endIdx) {
    let i, key
    const map = {}
    for (i = beginIdx; i <= endIdx; ++i) {
      key = children[i].key
      if (key) map[key] = i
    }
    return map
  }