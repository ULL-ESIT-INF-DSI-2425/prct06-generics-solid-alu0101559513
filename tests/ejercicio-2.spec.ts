import { describe, expect, test, beforeEach } from "vitest";
import { BibliotecaMusical } from "../src/ejercicio-2/biblioteca_musical";
import { Artista } from "../src/ejercicio-2/artista";
import { Cancion } from "../src/ejercicio-2/canciones";
import { Discografia } from "../src/ejercicio-2/discografia";

describe('Pruebas de Biblioteca Musical', () => {
  let biblioteca: BibliotecaMusical<any>;
  let discografia: Discografia<any>;
  let cancion1: Cancion;
  let cancion2: Cancion;
  let artista: Artista<any>;

  beforeEach(() => {
    biblioteca = new BibliotecaMusical([]);
    discografia = new Discografia([]);

    cancion1 = new Cancion('Primera canción', 360, ['Pop'], true, 9000);
    cancion2 = new Cancion('Segunda canción', 10, ['Jazz'], false, 30);

    discografia.coleccion = [['Primer intento', 2030, [cancion1, cancion2]]];

    artista = new Artista('Manolo', 1000000, discografia);
    biblioteca.agregarArtista(artista);
  });

  test('Añadir a Pepe como artista', () => {
    artista = new Artista('Pepe', 1000000, discografia);
    biblioteca.agregarArtista(artista);
    expect(biblioteca.artistas.length).toBe(2);
    expect(biblioteca.artistas[1].nombre).toBe('Pepe');
  });

  test('Buscar artistas por nombre', () => {
    const resultado = biblioteca.buscarArtista('Manolo');
    expect(resultado.length).toBe(1);
    expect(resultado[0].nombre).toBe('Manolo');
  });

  test('Buscar discos por nombre', () => {
    const resultado = biblioteca.buscarDisco('Primer intento');
    expect(resultado.length).toBe(1);
    expect(resultado[0][0]).toBe('Primer intento');
  });

  test('Buscar canciones por nombre', () => {
    const resultado = biblioteca.buscarCancion('Primera canción');
    expect(resultado.length).toBe(1);
    expect(resultado[0].nombre).toBe('Primera canción');
  });

  test('Calcular el número de canciones incluidas en un disco concreto', () => {
    const cantidad = biblioteca.calcularCantidadCancionesDisco('Manolo', 'Primer intento');
    expect(cantidad).toBe(2);
  });

  test('Calcular la duración total de un disco', () => {
    const duracion = biblioteca.calcularDuracionTotalDisco('Manolo', 'Primer intento');
    expect(duracion).toBe(370);
  });

  test('Calcular el total de reproducciones de un disco', () => {
    const reproducciones = biblioteca.calcularReproduccionesTotalesDisco('Manolo', 'Primer intento');
    expect(reproducciones).toBe(9030);
  });
});