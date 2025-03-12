/**
 * Principio SOLID mejorado Single responsibility principle
 */
import * as fs from "fs";
export class FileManager {
  private reader: ReadFile;
  private writer: WriteFile;

  constructor(private filePath: string) {
    this.reader = new ReadFile(filePath);
    this.writer = new WriteFile(filePath);
  }

  public readFile(): string {
    return this.reader.readFile();
  }

  public writeFile(data: string): void {
    this.writer.writeFile(data);
  }
}
export class ReadFile {
  constructor(private filePath: string) {}
  public readFile(): string {
    try {
      const content: string = fs.readFileSync(this.filePath, "utf-8");
      return content;
    } catch (error) {
      console.error("Error al leer el archivo");
      return "";
    }
  }
}
export class WriteFile {
  constructor(private filePath: string) {}
  public writeFile(data: string): void {
    try {
      fs.writeFileSync(this.filePath, data, "utf-8");
      console.log("Archivo escrito exitosamente.");
    } catch (error) {
      console.error("Error al escribir en el archivo");
    }
  }
}
