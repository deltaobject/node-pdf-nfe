"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatTime = void 0;
function formatTime(date) {
    if (!date)
        return '';
    return date.substring(11, 19);
}
exports.formatTime = formatTime;
