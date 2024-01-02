import styles from "../../styles/page.module.css";
import Bloque from "./bloque";
export default function Disponibilidades() {
  return (
    <div className={styles.all}>
      <main className={styles.main}>
        <div className={styles.conjunto}>
          <Bloque nombreDisponibilidad="Disponible" />
          <Bloque nombreDisponibilidad="En Reserva" />
          <Bloque nombreDisponibilidad="No Disponible" />
        </div>
        <div className={styles.extras}>
          <Bloque nombreDisponibilidad="En Base" />
          <Bloque nombreDisponibilidad="En Servicio" />
        </div>
      </main>
    </div>
  );
}
