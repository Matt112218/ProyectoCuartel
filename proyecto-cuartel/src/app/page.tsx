import styles from "../styles/page.module.css";
import Disponibilidades from "./components/disponibilidades";

export default function Home() {
  return (
    <div className={styles.all}>
      <Disponibilidades />
    </div>
  );
}
