export function findPathInMapIndex(mapIndex, key) {
    const indexItem = mapIndex.index.find(item => item.key === key);
    return indexItem ? indexItem.path : undefined;
}
//# sourceMappingURL=mapCont.js.map