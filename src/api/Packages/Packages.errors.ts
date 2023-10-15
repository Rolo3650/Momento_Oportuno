export class PackagesError extends Error {
  constructor(errMessage = 'Hubo un error al obtener los paquetes') {
    super();
    this.name = 'PackagesError';
    this.message = errMessage;
  }
}
