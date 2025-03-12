import { describe, expect, test, beforeEach } from "vitest";
import { Peliculas, Documentales, Series } from "../src/ejercicio-1/dsiflix";
describe('DSIflix', () => {
  let documentales;
  let series;
  let peliculas;

  beforeEach(() => {
    documentales = new Documentales([
      { nombre: 'Maravillas de la Naturaleza', year: '2021' },
      { nombre: 'Vida en el Océano', year: '2020' }
    ]);

    series = new Series([
      { nombre: 'Fisica o Química', year: '2008' },
      { nombre: 'Stranger Things', year: '2016' }
    ]);

    peliculas = new Peliculas([
      { nombre: 'La infiltrada', year: '2025' },
      { nombre: 'Interestelar', year: '2014' }
    ]);
  });

  test('Encuentra el documental', () => {
    const resultado = documentales.busquedaNombre('Naturaleza');
    expect(resultado[0].nombre).toBe('Maravillas de la Naturaleza');
  });

  test('Encuentra el año del documental', () => {
    const resultado = documentales.busquedaYear('2020');
    expect(resultado[0].year).toBe('2020');
  });

  test('Encuentra la serie', () => {
    const resultado = series.busquedaNombre('Fisica o Química');
    expect(resultado[0].nombre).toBe('Fisica o Química');
  });

  test('Encuentra el año de la serie', () => {
    const resultado = series.busquedaYear('2016');
    expect(resultado[0].year).toBe('2016');
  });

  test('Encuentra la película', () => {
    const resultado = peliculas.busquedaNombre('Interestelar');
    expect(resultado[0].nombre).toBe('Interestelar');
  });

  test('Encuentra el año de la película', () => {
    const resultado = peliculas.busquedaYear('2025');
    expect(resultado[0].year).toBe('2025');
  });

  test('No existe esa películla', () => {
    const resultado = peliculas.busquedaNombre('Inexistente');
    expect(resultado).toHaveLength(0);
  });

  test('No existe película de ese año', () => {
    const resultado = peliculas.busquedaYear('1999');
    expect(resultado).toHaveLength(0);
  });
});
