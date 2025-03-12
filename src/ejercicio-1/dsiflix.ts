interface busquedaYear<T> {
  busquedaYear(year:string): T[];
}
interface busquedaNombre<T> {
  busquedaNombre(nombre:string): T[];
}
interface ElementoBase {
  nombre: string;
  year: string;
}
export interface Stremeable<T> extends busquedaNombre<T>, busquedaYear<T> {
  collection: T[];
}

abstract class basicStremeableCollection<T> implements Stremeable<T> {
  constructor(public collection: T[]) {}
  abstract busquedaNombre(nombre:string): T[];
  abstract  busquedaYear(year:string): T[];
}
export class Documentales<T extends ElementoBase> extends basicStremeableCollection<T> {
  constructor(public collection: T[]) {
    super(collection);
  }
  busquedaNombre(nombreBuscar: string): T[] {
    return this.collection.filter(item => item.nombre.toLowerCase().includes(nombreBuscar.trim().toLowerCase()));
  }

  busquedaYear(year: string): T[] {
    return this.collection.filter(item => item.year === year);
  }
}
export class Series<T extends ElementoBase> extends basicStremeableCollection<T> {
  constructor(public collection: T[]) {
    super(collection);
  }
  busquedaNombre(nombre: string): T[] {
    return this.collection.filter(item => item.nombre.toLowerCase().includes(nombre.trim().toLowerCase()));
  }

  busquedaYear(year: string): T[] {
    return this.collection.filter(item => item.year === year);
  }
}
export class Peliculas<T extends ElementoBase> extends basicStremeableCollection<T> {
  constructor(public collection: T[]) {
    super(collection);
  }
  busquedaNombre(nombre: string): T[] {
    return this.collection.filter(item => item.nombre.toLowerCase().includes(nombre.trim().toLowerCase()));
  }

  busquedaYear(year: string): T[] {
    return this.collection.filter(item => item.year === year);
  }
}