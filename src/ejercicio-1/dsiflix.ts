interface busquedaYear<T> {
  busquedaYear(year:string): T[];
}
interface busquedaNombre<T> {
  busquedaNombre(nombre:string): T[];
}
interface Documental {
  nombre: string;
  year: string;
}

interface Serie {
  nombre: string;
  year: string;
}

interface Pelicula {
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
export class Documentales extends basicStremeableCollection<Documental> {
  constructor(public collection: Documental[]) {
    super(collection);
  }
  busquedaNombre(nombre: string): Documental[] {
    return this.collection.filter(item => item.nombre.toLowerCase().includes(nombre.trim().toLowerCase()));
  }

  busquedaYear(year: string): Documental[] {
    return this.collection.filter(item => item.year === year);
  }
}
export class Series extends basicStremeableCollection<Serie> {
  constructor(public collection: Serie[]) {
    super(collection);
  }
  busquedaNombre(nombre: string): Serie[] {
    return this.collection.filter(item => item.nombre.toLowerCase().includes(nombre.trim().toLowerCase()));
  }

  busquedaYear(year: string): Serie[] {
    return this.collection.filter(item => item.year === year);
  }
}
export class Peliculas extends basicStremeableCollection<Pelicula> {
  constructor(public collection: Pelicula[]) {
    super(collection);
  }
  busquedaNombre(nombre: string): Pelicula[] {
    return this.collection.filter(item => item.nombre.toLowerCase().includes(nombre.trim().toLowerCase()));
  }

  busquedaYear(year: string): Pelicula[] {
    return this.collection.filter(item => item.year === year);
  }
}