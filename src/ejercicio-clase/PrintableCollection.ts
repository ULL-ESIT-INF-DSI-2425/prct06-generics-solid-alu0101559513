import { Printable } from "./Printable";
import { Collectable } from "./Collectable";
/**
 * Clase abstracta PrintableCollection
 */
export abstract class PrintableCollection<T> implements Printable, Collectable<T> {
  /**
   * constructor
   * @param collection - array de la colección
   */
  constructor(protected collection: T[]) {
  }
  /**
   * añadir item
   * @param item - elemento a añadir
   */
  addItem(item:T): void {
    this.collection.push(item);
  }
  /**
   * obtener un item
   * @param index - indice del item a obtener
   * @returns 
   */
  getItem(index: number): T {
    return this.collection[index];
  };
  /**
   * eleminar elemento de la colección
   * @param item - elemento a eliminar
   */
  removeItem(index: number): void {
    this.collection = this.collection.slice(index);
  };
  /**
   * obtener numero de elementos de la colección
   * @returns - número de elementos
   */
  getNumberOfItems(): number {
    return this.collection.length;
  };
  /**
   * método abstracto de imprimir
   */
  abstract print(): string;
}