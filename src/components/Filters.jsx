import { useId } from "react";
import { useFilters } from "../hooks/useFilters";
import "./Filter.css";

export function Filters() {
  const { filters, setFilters } = useFilters();

  // const [minPrice, setMinPrice] = useState(0);
  const minPriceFilterId = useId();
  const categoryFilterId = useId();

  console.log({
    minPriceFilterId,
    categoryFilterId,
  });

  // Filtrar por Precio
  const handleChangeMinPrice = (event) => {
    // Aqui algo huele mal
    // dos fuentes de la verdad
    // setMinPrice(event.target.value);
    setFilters((prevState) => ({
      ...prevState,
      minPrice: event.target.value,
    }));
  };
  // Filtrar por categoria
  const handleChangeCategory = (event) => {
    setFilters((prevState) => ({
      ...prevState,
      category: event.target.value,
    }));
  };

  return (
    <section className="filters">
      <div>
        <label htmlFor={minPriceFilterId}>Price</label>
        <input
          type="range"
          id={minPriceFilterId}
          min="0"
          max="1000"
          onChange={handleChangeMinPrice}
          value={filters.minPrice}
        />
        <span>${filters.minPrice}</span>
      </div>
      <div>
        <label htmlFor={categoryFilterId}>Category</label>
        <select name="" id={categoryFilterId} onChange={handleChangeCategory}>
          <option value="all">Todas</option>
          <option value="laptops">Laptops</option>
          <option value="celulares">Celulares</option>
        </select>
      </div>
    </section>
  );
}
