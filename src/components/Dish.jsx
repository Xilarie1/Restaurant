export function Dish({ data }) {
  const { tittel, pris, ingredienser, kategori } = data;

  return (
    <>
      <h2>{tittel}</h2>
      <p>Pris: {pris}</p>
      <p>Ingredienser: {ingredienser}</p>
      <p>Kategori: {kategori}</p>
    </>
  );
}
