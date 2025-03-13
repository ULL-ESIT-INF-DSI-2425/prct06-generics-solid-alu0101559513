import { PrintableCollection } from "./PrintableCollection";
export class StringCollection extends PrintableCollection<string> {
 constructor(private stringcollection: string[]) {
  super(stringcollection);
 }
 print(): string {
  let result :string = "";
   this.stringcollection.forEach((item: string) => {
    result = result.concat(item,",");
   });
   result = result.slice(0, this.stringcollection.length + 1);
   return result;
 }
}