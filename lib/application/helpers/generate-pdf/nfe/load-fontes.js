"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadFontsNFCe = exports.loadFonts = void 0;
const path_1 = __importDefault(require("path"));
function loadFonts(doc) {
    const fontDir = path_1.default.join(process.cwd(), 'fontes');
    doc.registerFont('normal', path_1.default.join(fontDir, 'Times New Roman.ttf'));
    doc.registerFont('negrito', path_1.default.join(fontDir, 'Times New Roman Bold.ttf'));
    doc.registerFont('italico', path_1.default.join(fontDir, 'Times New Roman Italic.ttf'));
    doc.registerFont('negrito-italico', path_1.default.join(fontDir, 'Times New Roman Bold Italic.ttf'));
}
exports.loadFonts = loadFonts;
function loadFontsNFCe(doc) {
    const fontDir = path_1.default.join(process.cwd(), 'fontes', 'roboto-condensed');
    doc.registerFont('normal', path_1.default.join(fontDir, 'RobotoCondensed-Regular.ttf'));
    doc.registerFont('negrito', path_1.default.join(fontDir, 'RobotoCondensed-Bold.ttf'));
    doc.registerFont('italico', path_1.default.join(fontDir, 'RobotoCondensed-Italic.ttf'));
    doc.registerFont('negrito-italico', path_1.default.join(fontDir, 'RobotoCondensed-BoldItalic.ttf'));
}
exports.loadFontsNFCe = loadFontsNFCe;
