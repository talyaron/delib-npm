"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findPathInMapIndex = findPathInMapIndex;
function findPathInMapIndex(mapIndex, key) {
    const indexItem = mapIndex.index.find(item => item.key === key);
    return indexItem ? indexItem.path : undefined;
}
