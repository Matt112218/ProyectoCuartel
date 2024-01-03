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
  chofer: boolean;
}

export type UniqueBombero = { Bombero: Bombero };

export type Bomberos = Bombero[];
