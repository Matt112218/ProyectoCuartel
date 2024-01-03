//IMPORTACIONES
import styles from "../../styles/page.module.css";
import Bombero from "./bombero";
import { Bloque, Bomberos } from "@/types/props";

//FUNCION

const bomberos: Bomberos = [
  //Se pide array a DB
  {
    nombre: "",
    movil: "m10",
    jerarquia: "",
    disponibilidad: "Disponible",
    chofer: true,
  },
  {
    nombre: "",
    movil: "m12",
    jerarquia: "",
    disponibilidad: "En Base",
    chofer: true,
  },
  {
    nombre: "",
    movil: "m44",
    jerarquia: "",
    disponibilidad: "En Servicio",
    chofer: false,
  },
  {
    nombre: "",
    movil: "m45",
    jerarquia: "",
    disponibilidad: "No Disponible",
    chofer: false,
  },
];

export default function Bloque({ nombreDisponibilidad }: Bloque) {
  return (
    <div className={styles.disponibilidad}>
      {nombreDisponibilidad}
      <div>
        {bomberos.map((bombero) => {
          if (bombero.disponibilidad === nombreDisponibilidad) {
            return <Bombero key={bombero.movil} Bombero={bombero} />;
          }
        })}
      </div>
    </div>
  );
}
