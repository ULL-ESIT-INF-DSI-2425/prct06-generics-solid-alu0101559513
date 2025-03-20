import { describe, expect, test, beforeEach } from "vitest";
import { Logger, ActionType, FechaHora, Action} from "../src/pract07-clase/Logger"

describe('Ejercicio Singleton', () => {
  let mycollection = Logger.getLoggerInstance();
  let mycollection2 = Logger.getLoggerInstance();
  test('Coleccion', () => {
    expect(mycollection).toEqual(mycollection2);
  });
  test('AddItem', () => {
    const newdate: Date = new Date(1,1,2000,3,0,0);
    const newaction: Action = ["pepe","write",newdate];
    mycollection.addItem(newaction);
    expect(mycollection.getNumberOfItems()).toEqual(1);
  });
  test('Usuario nuevo', () => {
    const date = new Date(1,1,2000,3,0,0);
    mycollection.addItem(["mario","write",date]);
    mycollection.addItem(["mario","read",date]);
    expect(mycollection.buscarUsuario("mario")).toEqual([]);
  });
  test('Acciones', () => {
    expect(mycollection.buscarAcciones("read")).toEqual([["mario","read","1906-07-24"]]);
  });
});