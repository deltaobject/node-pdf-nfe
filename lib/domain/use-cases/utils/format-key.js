"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatKey = void 0;
function formatKey(key) {
    return key.replace(/(.{4})(?=.)/g, '$1 ');
}
exports.formatKey = formatKey;
