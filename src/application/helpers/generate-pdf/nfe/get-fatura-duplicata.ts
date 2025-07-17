import { format, parseISO } from 'date-fns';
import { formatNumber } from '../../../../domain/use-cases/utils';
import type { GeneratePdf } from '../../../../types';
import { secao } from './secao';

/**
 * Desenha a seção de Fatura e duplicatas em caixas separadas.
 * Cada duplicata exibe três linhas: Núm., Venc. e Valor.
 * Cabeçalhos alinhados à esquerda; valores alinhados à direita.
 * Espaçamento entre caixas definido por `gap`.
 */
export function getFaturaDuplicata({
  y,
  doc,
  ajusteX,
  ajusteY,
  margemDireita,
  margemEsquerda,
  margemTopo,
  larguraDoFormulario,
  cobr
}: GeneratePdf.InputFaturaDuplicata): number {
  if (!cobr || Object.keys(cobr).length === 0) {
    return doc.y;
  }

  // 1) Cabeçalho da seção
  secao({
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

  // 3) Caixas de Duplicatas
  if (cobr.dup && cobr.dup.length > 0) {
    const duplicatas = cobr.dup;
    const fontSize = 8;
    const padding = 4;
    const gap = 4; // espaço entre caixas

    // medir largura máxima de conteúdo (número, data e valor)

    const colWidth = 90

    const tableTop = y + 30;
    const rowHeight = fontSize + 2;
    const boxHeight = rowHeight * 3 + padding * 2;

    duplicatas.forEach((dup, idx) => {
      const cellX = margemEsquerda + idx * (colWidth + gap);

      // 3.1) Desenha caixa
      doc
        .lineWidth(0.5)
        .rect(cellX, tableTop, colWidth, boxHeight)
        .stroke();

      // 3.3) Cabeçalhos alinhados à esquerda e valores à direita
      const lines = [
        { label: 'Núm.', value: dup.nDup },
        { label: 'Venc.', value: format(parseISO(dup.dVenc), 'dd/MM/yyyy') },
        { label: 'Valor', value: `R$${formatNumber(dup.vDup, 2)}` }
      ];

      lines.forEach((line, rowIndex) => {
        const textY = tableTop + padding + rowHeight * rowIndex + (rowIndex === 0 ? 0 : 0);
        // label
        doc
          .font('negrito')
          .fontSize(fontSize)
          .text(line.label, cellX + padding, textY, {
            width: colWidth - padding * 2,
            align: 'left',
            lineBreak: false
          });

        // valor
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

    // 3.4) Atualiza posição Y para próximo conteúdo
    doc.y = tableTop + boxHeight + padding;
  }

  return doc.y;
}
