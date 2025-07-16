"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatProtocol = void 0;
function formatProtocol(protocol) {
    if (!protocol)
        return '';
    return protocol.replace(/(.{3})(?=.)/g, '$1 ');
}
exports.formatProtocol = formatProtocol;
