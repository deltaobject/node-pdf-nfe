// src/application/helpers/generate-pdf/nfe/load-fontes.ts
import path from 'path';
import type PDFKit from 'pdfkit';

export function loadFonts(doc: PDFKit.PDFDocument): void {
  // process.cwd() → /user/projeto/sgi-app
  const fontDir = path.join(process.cwd(), 'fontes');

  doc.registerFont(
    'normal',
    path.join(fontDir, 'Times New Roman.ttf')
  );
  doc.registerFont(
    'negrito',
    path.join(fontDir, 'Times New Roman Bold.ttf')
  );
  doc.registerFont(
    'italico',
    path.join(fontDir, 'Times New Roman Italic.ttf')
  );
  doc.registerFont(
    'negrito-italico',
    path.join(fontDir, 'Times New Roman Bold Italic.ttf')
  );
}

export function loadFontsNFCe(doc: PDFKit.PDFDocument): void {
  const fontDir = path.join(process.cwd(), 'fontes', 'roboto-condensed');

  doc.registerFont(
    'normal',
    path.join(fontDir, 'RobotoCondensed-Regular.ttf')
  );
  doc.registerFont(
    'negrito',
    path.join(fontDir, 'RobotoCondensed-Bold.ttf')
  );
  doc.registerFont(
    'italico',
    path.join(fontDir, 'RobotoCondensed-Italic.ttf')
  );
  doc.registerFont(
    'negrito-italico',
    path.join(fontDir, 'RobotoCondensed-BoldItalic.ttf')
  );
}
