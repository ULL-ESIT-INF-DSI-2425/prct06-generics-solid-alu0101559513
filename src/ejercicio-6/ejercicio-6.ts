/**
 * Mejora del principio SOLID Liskov substitution principle
 */
interface Fly {
  fly(): string;
}
export class Bird {
  feedChicks(): string {
    return "Feeding chicks...";
  }
}

export class Sparrow extends Bird implements Fly {
  fly(): string {
    return "Flying...";
  }
}

export class Penguin extends Bird  {
  swim(): string {
    return "Swimming...";
  }
}