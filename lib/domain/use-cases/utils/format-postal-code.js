"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatPostalCode = void 0;
function formatPostalCode(postalCode) {
    if (!postalCode)
        return '';
    return postalCode.replace(/^(\d{2})(\d{3})(\d{3})$/, '$1.$2-$3');
}
exports.formatPostalCode = formatPostalCode;
