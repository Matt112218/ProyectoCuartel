//IMPORTACIONES
import styles from "../../styles/page.module.css";
import { Bloque, Bomberos } from "@/types/props";

//FUNCION

const bomberos: Bomberos = [
  { nombre: "", movil: "m10", jerarquia: "", disponibilidad: "Disponible" },
  { nombre: "", movil: "m12", jerarquia: "", disponibilidad: "En Base" },
  { nombre: "", movil: "m44", jerarquia: "", disponibilidad: "En Servicio" },
];
export default function Bloque({ nombreDisponibilidad }: Bloque) {
  return (
    <div className={styles.disponibilidad}>
      {nombreDisponibilidad}
      <div>
        {bomberos.map((bombero) => {
          if (bombero.disponibilidad === nombreDisponibilidad)
            return <div key={bombero.movil}>{bombero.movil}</div>;
        })}
      </div>
    </div>
  );
}
