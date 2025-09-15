import { Dish } from "./Dish.jsx";

export function Menu({ dishes }) {
  return (
    <>
      {dishes.map((dish) => (
        <Dish key={dish.id} data={dish} />
      ))}
    </>
  );
}
