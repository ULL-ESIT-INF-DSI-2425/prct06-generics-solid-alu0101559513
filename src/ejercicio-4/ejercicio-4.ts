/**
 * Principio SOLID mejorado Interface segrgation principle
 */
interface Printer {
  print(): string;
}
interface Scanner {
  scan(): string;
}
export class PrinterOnly implements Printer {
  print(): string {
    return 'Printing...';
  }
}

export class ScannerOnly implements Scanner {
  scan(): string {
    return 'Scanning...';
  }
}

export class PrinterScanner implements Printer, Scanner {
  print(): string {
    return 'Printing...';
  }

  scan(): string {
    return 'Scanning...';
  }
}
