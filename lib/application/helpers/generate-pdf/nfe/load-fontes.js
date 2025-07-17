"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadFontsNFCe = exports.loadFonts = void 0;
function loadFonts(doc) {
    doc.registerFont('normal', 'Times-Roman');
    doc.registerFont('negrito', 'Times-Bold');
    doc.registerFont('italico', 'Times-Italic');
    doc.registerFont('negrito-italico', 'Times-BoldItalic');
}
exports.loadFonts = loadFonts;
function loadFontsNFCe(doc) {
    doc.registerFont('normal', 'Helvetica');
    doc.registerFont('negrito', 'Helvetica-Bold');
    doc.registerFont('italico', 'Helvetica-Oblique');
    doc.registerFont('negrito-italico', 'Helvetica-BoldOblique');
}
exports.loadFontsNFCe = loadFontsNFCe;
