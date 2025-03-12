export class Cancion {
  constructor(
    private _nombre: string,
    private _duracion: number,
    private _generos: string[],
    private _single: boolean,
    private _reproducciones: number,
  ) {}
  get nombre() {
    return this._nombre;
  }
  set nombre(nombre: string) {
    this._nombre = nombre;
  }

  get duracion() {
    return this._duracion;
  }
  set duracion(duracion: number) {
    this._duracion = duracion;
  }

  get generos() {
    return this._generos;
  }
  set generos(generos: string[]) {
    this._generos = generos;
  }

  get single() {
    return this._single;
  }
  set single(single: boolean) {
    this._single = single;
  }

  get reproducciones() {
    return this._reproducciones;
  }
  set reproducciones(reproducciones: number) {
    this._reproducciones = reproducciones;
  }
}
