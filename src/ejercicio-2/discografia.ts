import { Cancion } from "./canciones.js";
export type Disco = [string, number, Cancion[]];
export type Single = [string, number, Cancion[]];
export class Discografia<T extends Disco | Single> {
  private _coleccion: T[];
  constructor(coleccion: T[]) {
    this._coleccion = coleccion;
  }
  get coleccion() {
    return this._coleccion;
  }
  set coleccion(coleccion: T[]) {
    this._coleccion = coleccion;
  }
  calcularNumeroCanciones(nombre: string): number | undefined {
    const disco = this._coleccion.find((d) => d[0] === nombre);
    return disco ? disco[2].length : undefined;
  }
  calcularDuracionTotal(nombre: string): number | undefined {
    const disco = this._coleccion.find((d) => d[0] === nombre);
    if (!disco) {
      return undefined;
    }
    let duracionTotal = 0;
    disco[2].forEach((cancion) => {
      duracionTotal += cancion.duracion;
    });

    return duracionTotal;
  }
  calcularReproduccionesTotales(nombre: string): number | undefined {
    const disco = this._coleccion.find((d) => d[0] === nombre);
    if (!disco) {
      return undefined;
    }
    let reproduccionesTotales = 0;
    disco[2].forEach((cancion) => {
      reproduccionesTotales += cancion.reproducciones;
    });
    return reproduccionesTotales;
  }
}
