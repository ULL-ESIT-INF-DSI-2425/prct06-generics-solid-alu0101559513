import { describe, expect, test, beforeEach } from "vitest";
import { Sparrow, Penguin  } from "../src/ejercicio-6/ejercicio-6";
describe('No todos los pájaros vuelan', () => {
  let penguin, sparrow;
  beforeEach(() => {
    penguin = new Penguin();
    sparrow = new Sparrow();
  });

  test('El pingüino nada', () => {
    const result = penguin.swim();
    expect(result).toBe('Swimming...');
  });

  test('El pingüino alimenta a las crías', () => {
    const result = penguin.feedChicks();
    expect(result).toBe('Feeding chicks...');
  });

  test('El gorrión alimenta a las crías', () => {
    const result = sparrow.feedChicks();
    expect(result).toBe('Feeding chicks...');
  });
  test('El gorrión vuela', () => {
    const result = sparrow.fly();
    expect(result).toBe('Flying...');
  });
});