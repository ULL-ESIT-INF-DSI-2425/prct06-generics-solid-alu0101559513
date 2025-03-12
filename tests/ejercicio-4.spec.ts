import { describe, expect, test, beforeEach } from "vitest";
import { PrinterOnly, ScannerOnly, PrinterScanner } from "../src/ejercicio-4/ejercicio-4";

describe('Pruebas impresoras y escáneres', () => {
  let printer;
  let scanner;
  let printerScanner;

  beforeEach(() => {
    printer = new PrinterOnly();
    scanner = new ScannerOnly();
    printerScanner = new PrinterScanner();
  });

  test('Imprimir PrinterOnly', () => {
    const result = printer.print();
    expect(result).toBe('Printing...');
  });

  test('Scanear ScannerOnly', () => {
    const result = scanner.scan();
    expect(result).toBe('Scanning...');
  });

  test('Imprimir PrinterScanner', () => {
    const result = printerScanner.print();
    expect(result).toBe('Printing...');
  });

  test('Scanear PrinterScanner', () => {
    const result = printerScanner.scan();
    expect(result).toBe('Scanning...');
  });
});