import { Discografia, Disco, Single } from "./discografia.js";
export class Artista<T extends Disco | Single>  {
  private _nombre: string;
  private _oyentes: number;
  private _discografia: Discografia<T>;
  constructor(nombre: string, oyentes: number, discografia: Discografia<T>) {
    this._nombre = nombre;
    this._oyentes = oyentes;
    this._discografia = discografia;
  }
  get nombre() {
    return this._nombre;
  }
  set nombre(nombre) {
    this._nombre = nombre;
  }
  get oyentes() {
    return this._oyentes;
  }
  set oyentes(oyentes) {
    this._oyentes = oyentes;
  }
  get discografia() {
    return this._discografia;
  }
  set discografia(discografia) {
    this._discografia = discografia;
  }
  calcularNumeroDiscos(): number {
    return this._discografia.coleccion.length;
  }
}
