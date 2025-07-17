"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFaturaDuplicata = void 0;
const date_fns_1 = require("date-fns");
const utils_1 = require("../../../../domain/use-cases/utils");
const secao_1 = require("./secao");
function getFaturaDuplicata({ y, doc, ajusteX, ajusteY, margemEsquerda, margemTopo, cobr }) {
    if (!cobr || Object.keys(cobr).length === 0) {
        return doc.y;
    }
    (0, secao_1.secao)({
        doc,
        value: 'FATURA / DUPLICATA',
        x: 1.0,
        y: y + 12,
        largura: 0,
        ajusteX,
        ajusteY,
        margemEsquerda,
        margemTopo
    });
    if (cobr.dup && cobr.dup.length > 0) {
        const duplicatas = cobr.dup;
        const fontSize = 8;
        const padding = 4;
        const gap = 4;
        const colWidth = 90;
        const tableTop = y + 30;
        const rowHeight = fontSize + 2;
        const boxHeight = rowHeight * 3 + padding * 2;
        duplicatas.forEach((dup, idx) => {
            const cellX = margemEsquerda + idx * (colWidth + gap);
            doc
                .lineWidth(0.5)
                .rect(cellX, tableTop, colWidth, boxHeight)
                .stroke();
            const lines = [
                { label: 'Núm.', value: dup.nDup },
                { label: 'Venc.', value: (0, date_fns_1.format)((0, date_fns_1.parseISO)(dup.dVenc), 'dd/MM/yyyy') },
                { label: 'Valor', value: `R$${(0, utils_1.formatNumber)(dup.vDup, 2)}` }
            ];
            lines.forEach((line, rowIndex) => {
                const textY = tableTop + padding + rowHeight * rowIndex + (rowIndex === 0 ? 0 : 0);
                doc
                    .font('negrito')
                    .fontSize(fontSize)
                    .text(line.label, cellX + padding, textY, {
                    width: colWidth - padding * 2,
                    align: 'left',
                    lineBreak: false
                });
                doc
                    .font('normal')
                    .fontSize(fontSize)
                    .text(line.value, cellX + padding, textY, {
                    width: colWidth - padding * 2,
                    align: 'right',
                    lineBreak: false
                });
            });
        });
        doc.y = tableTop + boxHeight + padding;
    }
    return doc.y;
}
exports.getFaturaDuplicata = getFaturaDuplicata;
