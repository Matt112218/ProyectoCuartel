export interface Bloque {
  nombreDisponibilidad:
    | "Disponible"
    | "En Reserva"
    | "No Disponible"
    | "En Base"
    | "En Servicio";
}

export interface Bombero {
  nombre: string;
  movil: string;
  jerarquia: string;
  disponibilidad:
    | "Disponible"
    | "En Reserva"
    | "No Disponible"
    | "En Base"
    | "En Servicio";
}

export type Bomberos = Bombero[];
