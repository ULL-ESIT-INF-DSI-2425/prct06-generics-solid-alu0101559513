import { PrintableCollection } from "./PrintableCollection.js";
export class NumericCollection extends PrintableCollection<number> {
  /**
   * constructor
   * @param numericollection 
   */
 constructor(private numericollection: number[]) {
  super(numericollection);
 }
 /**
  * metodo print
  * @returns - collecion
  */
 print(): string {
  let result :string = "";
   this.numericollection.forEach((item: number) => {
    result = result + item.toString() + ",";
   });
   result = result.slice(0, this.numericollection.length + 1);
   return result;
 }
}