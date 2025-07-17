// src/application/helpers/generate-pdf/nfe/load-fontes.ts

export function loadFonts(doc: PDFKit.PDFDocument): void {
  doc.registerFont('normal', 'Times-Roman');
  doc.registerFont('negrito', 'Times-Bold');
  doc.registerFont('italico', 'Times-Italic');
  doc.registerFont('negrito-italico', 'Times-BoldItalic');
}

export function loadFontsNFCe(doc: PDFKit.PDFDocument): void {
  doc.registerFont('normal', 'Helvetica');
  doc.registerFont('negrito', 'Helvetica-Bold');
  doc.registerFont('italico', 'Helvetica-Oblique');
  doc.registerFont('negrito-italico', 'Helvetica-BoldOblique');
}
