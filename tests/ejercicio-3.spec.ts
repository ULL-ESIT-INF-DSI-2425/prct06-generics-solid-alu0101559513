import { describe, expect, test, beforeEach } from "vitest";
import { FileManager } from "../src/ejercicio-3/ejercicio-3";

describe('Pruebas Gestor de ficheros', () => {
  let fileManager;
  beforeEach(() => {
    fileManager = new FileManager("example.txt");
  });

  test('Lee el contenido', () => {
    const newData = "Hola Mundo";
    fileManager.writeFile(newData);
    const updatedContent = fileManager.readFile();
    expect(updatedContent).toBe(newData);
  });
  test('Escribe el contenido', () => {
    const newData = "Hola Mundo";
    fileManager.writeFile(newData);
    const updatedContent = fileManager.readFile();
    expect(updatedContent).toBe(newData);
  });
});