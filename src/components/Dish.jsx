export function Dish({ data }) {
  return (
    <>
      <h2>{data.tittel}</h2>
      <p>Pris: {data.pris}</p>
      <p>Ingredienser: {data.ingredienser}</p>
      <p>Kategori: {data.kategori}</p>
    </>
  );
}
