"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.maxKeyInObject = void 0;
function maxKeyInObject(obj) {
    return Object.keys(obj).reduce((a, b) => obj[a] > obj[b] ? a : b);
}
exports.maxKeyInObject = maxKeyInObject;
