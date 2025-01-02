import styles from "./page.module.css";
import MainScreen from "@/components/screens/MainScreen";

export default function Home() {
  return (
    <div className={styles.page}>
      <MainScreen />
    </div>
  );
}
