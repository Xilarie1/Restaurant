import { Dish } from "./Dish.jsx";
import styles from "../styles/Menu.module.css";

export function Menu({ dishes }) {
  return (
    <div className={styles.menu}>
      {dishes.map((dish) => (
        <Dish key={dish.id} data={dish} />
      ))}
    </div>
  );
}
