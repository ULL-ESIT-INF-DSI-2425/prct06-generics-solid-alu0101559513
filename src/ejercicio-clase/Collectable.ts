/**
 * interfaz colleción
 */
export interface Collectable<T> {
  /**
   * añadir item
   * @param item - elemento a añadir
   */
  addItem(item:T): void;
  /**
   * obtener un item
   * @param index - indice del item a obtener
   * @returns elemento
   */
  getItem(index: number): T;
  /**
   * eleminar elemento de la colección
   * @param item - elemento a eliminar
   */
  removeItem(index:number): void;
  /**
   * obtener numero de elementos de la colección
   * @returns - número de elementos
   */
  getNumberOfItems(): number;
}

