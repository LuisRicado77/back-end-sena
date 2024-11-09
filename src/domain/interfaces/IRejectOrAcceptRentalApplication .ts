export interface IRejectOrAcceptRentalApplication {
    ejecutar(idSolicitud: string, accion: 'accept' | 'reject'): Promise<void>;
  }
  