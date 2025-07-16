"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatDate = void 0;
function formatDate(date) {
    if (!date)
        return '';
    const [ano, mes, dia] = date.substring(0, 10).split('-');
    return dia.padStart(2, '0') + '/' + mes.toString().padStart(2, '0') + '/' + ano;
}
exports.formatDate = formatDate;
