import { Artista } from "./artista";
import { Cancion } from "./canciones";
import { Disco, Single} from "./discografia";
export class BibliotecaMusical<T extends Disco | Single> {
  private _artistas: Artista<T>[];
  constructor(artistas: Artista<T>[]) {
    this._artistas = artistas;
  }
  get artistas(): Artista<T>[] {
    return this._artistas;
  }

  set artistas(artistas: Artista<T>[]) {
    this._artistas = artistas;
  }
  agregarArtista(artista: Artista<T>): void {
    this._artistas.push(artista);
  }
  print(): void {
    console.table(
      this._artistas.map((artista) => ({
        Nombre: artista.nombre,
        "Número de oyentes Mensuales": artista.oyentes,
        "Cantidad de Discos": artista.calcularNumeroDiscos(),
      })),
    );
  }
  buscarArtista(nombreArtista: string): Artista<T>[] {
    return this._artistas.filter((artista) =>
      artista.nombre.toLowerCase().includes(nombreArtista.toLowerCase()),
    );
  }
  buscarDisco(nombre: string): [string, number, Cancion[]][] {
    let discosEncontrados: [string, number, Cancion[]][] = [];
    this._artistas.forEach((artista) => {
      const discos = artista.discografia.coleccion.filter((disco) =>
        disco[0].toLowerCase().includes(nombre.toLowerCase()),
      );
      discosEncontrados = discosEncontrados.concat(discos);
    });
    return discosEncontrados;
  }

  buscarCancion(nombreCancion: string): Cancion[] {
    let cancionesEncontradas: Cancion[] = [];
    this._artistas.forEach((artista) => {
      artista.discografia.coleccion.forEach((disco) => {
        const canciones = disco[2].filter((cancion) =>
          cancion.nombre.toLowerCase().includes(nombreCancion.toLowerCase()),
        );
        cancionesEncontradas = cancionesEncontradas.concat(canciones);
      });
    });
    return cancionesEncontradas;
  }

  calcularCantidadCancionesDisco(
    artistaNombre: string,
    discoNombre: string,
  ): number | undefined {
    const artista = this._artistas.find(
      (a) => a.nombre.toLowerCase() === artistaNombre.toLowerCase(),
    );
    return artista
      ? artista.discografia.calcularNumeroCanciones(discoNombre)
      : undefined;
  }

  calcularDuracionTotalDisco(
    artistaNombre: string,
    discoNombre: string,
  ): number | undefined {
    const artista = this._artistas.find(
      (a) => a.nombre.toLowerCase() === artistaNombre.toLowerCase(),
    );
    return artista
      ? artista.discografia.calcularDuracionTotal(discoNombre)
      : undefined;
  }

  calcularReproduccionesTotalesDisco(
    artistaNombre: string,
    discoNombre: string,
  ): number | undefined {
    const artista = this._artistas.find(
      (a) => a.nombre.toLowerCase() === artistaNombre.toLowerCase(),
    );
    return artista
      ? artista.discografia.calcularReproduccionesTotales(discoNombre)
      : undefined;
  }
}
