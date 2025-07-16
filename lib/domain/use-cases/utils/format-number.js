"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatNumber = void 0;
function formatNumber(number, decimals) {
    return Intl.NumberFormat('pt-BR', { minimumFractionDigits: decimals }).format(Number(number));
}
exports.formatNumber = formatNumber;
