// src/application/helpers/generate-pdf/nfe/load-fontes.ts

/**
 * Mapeia nomes lógicos para fontes padrão do PDFKit (Times-Roman).
 */
export function loadFonts(doc: PDFKit.PDFDocument): void {
  doc.registerFont('normal', 'Times-Roman');
  doc.registerFont('negrito', 'Times-Bold');
  doc.registerFont('italico', 'Times-Italic');
  doc.registerFont('negrito-italico', 'Times-BoldItalic');
}

/**
 * Para NFC-e, usa Helvetica como alternativa leve e moderna.
 */
export function loadFontsNFCe(doc: PDFKit.PDFDocument): void {
  doc.registerFont('normal', 'Helvetica');
  doc.registerFont('negrito', 'Helvetica-Bold');
  doc.registerFont('italico', 'Helvetica-Oblique');
  doc.registerFont('negrito-italico', 'Helvetica-BoldOblique');
}
