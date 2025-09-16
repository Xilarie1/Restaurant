import styles from "../styles/Dish.module.css";

export function Dish({ data }) {
  const { tittel, pris, ingredienser, kategori } = data;

  return (
    <div className={styles.card}>
      <h2 className={styles.title}>{tittel}</h2>
      <p className={styles.price}>Pris: {pris}</p>
      <p className={styles.ingredients}>Ingredienser: {ingredienser}</p>
      <p className={styles.category}>Kategori: {kategori}</p>
    </div>
  );
}
