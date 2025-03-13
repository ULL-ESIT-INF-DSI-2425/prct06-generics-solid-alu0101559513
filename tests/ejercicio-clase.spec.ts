import { describe, expect, test, beforeEach } from "vitest";
import { NumericCollection } from "../src/ejercicio-clase/NumericPrintableCollection"
import { StringCollection } from "../src/ejercicio-clase/StringCollection"
import { prototype } from "node:events";
describe('Ejercicio Collection', () => {
  let mycollectionNumeric;
  let mycollectionString;
  beforeEach(() => {
    mycollectionNumeric = new NumericCollection([4]);
    mycollectionString= new StringCollection(["4"]);
  });
  test('Obtener tamaño de la colleción', () => {
    expect(mycollectionNumeric.getNumberOfItems()).toBe(1);
  });
  test('Añadir elemento numerico', () => {
    mycollectionNumeric.addItem(2);
    expect(mycollectionNumeric.print()).toBe("4,2");
    expect(mycollectionNumeric.getNumberOfItems()).toBe(2);
  });
  test('Obtener elemento numerico', () => {
    expect(mycollectionNumeric.getItem(0)).toEqual(4);
  });
  /*test('Eliminar elemento numerico', () => {
    mycollectionNumeric.addItem(5);
    mycollectionNumeric.removeItem(1);
    expect(mycollectionNumeric.print()).toBe("5");
  });*/
  test('Imprime la colleción', () => {
    mycollectionNumeric.addItem(3);
    expect(mycollectionNumeric.print()).toBe("4,3");
  });
  test('Añadir elemento string', () => {
    mycollectionString.addItem('2');
    expect(mycollectionString.print()).toBe("4,2");
  });
  test('Obtener elemento string', () => {
    expect(mycollectionString.getItem(0)).toEqual("4");
  });
  /*test('Eliminar elemento string', () => {
    mycollectionString.addItem(5);
    mycollectionString.removeItem(1);
    expect(mycollectionString.print()).toBe("5");
  });*/
  test('Obtener tamaño de la colleción', () => {
    expect(mycollectionString.getNumberOfItems()).toBe(1);
  });
  test('Imprime la colleción', () => {
    mycollectionString.addItem("3");
    expect(mycollectionString.print()).toBe("4,3");
  });
});
