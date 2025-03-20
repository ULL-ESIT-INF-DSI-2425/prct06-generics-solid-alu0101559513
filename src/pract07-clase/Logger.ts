export type Usuario = string;
export type ActionType = "closeWindow" | "write" | "read";
export type FechaHora = Date;
export type Action = [Usuario, ActionType,FechaHora];
/**
 * Clase Logger
 */
export class Logger {
  /**
   * Atributo array de acciones
   */
  
  private _actions: Action[]; 
  /**
   * Instancia logger
   */
  private static loggerInstance: Logger;
  /**
   * Constructor privado
   */
  private constructor() {
    this._actions = [];
  }
  /**
   * Método para devolver la instnacia
   * @returns instancia
   */
  public static getLoggerInstance(): Logger {
    if(!Logger.loggerInstance) {
      Logger.loggerInstance = new Logger();
    }
    return Logger.loggerInstance;
  }
  /**
   * añadir tupla
   * @param item accion
   */
  addItem(item: Action) {
    Logger.loggerInstance._actions.push(item);
  }
  /**
   * Numero de elementos
   * @returns elementos
   */
  getNumberOfItems() {
    return Logger.loggerInstance._actions.length;
  }
  /**
   * Buscar por usuario
   * @param usuarioNuevo - nuevo usuario
   * @returns array con las acciones
   */
  buscarUsuario(usuarioNuevo: string): Action[] {
    return this._actions.filter((action) => action[0] === usuarioNuevo);
  }
  /**
   * Buscar por accion
   * @param newaction - accion
   * @returns array con las acciones
   */
  buscarAcciones(newaction: ActionType): Action[] {
    return this._actions.filter((action) => action[1] === newaction);
  }
  /**
   * Buscar por fecha
   * @param nuevafecha - fecha
   * @returns array con las acciones
   */
  buscarDate(nuevafecha: Date): Action[] {
    return this._actions.filter((action) => action[2] === nuevafecha);
  }

}