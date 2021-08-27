// styles
import { useEffect, useState } from "react";
import "./filters.scss";

const sortTask = {
  lowest: (list) =>
    list.slice().sort((a, b) => {
      if (a.cost === b.cost) return 0;
      if (a.cost > b.cost) {
        return 1;
      }
      return -1;
    }),
  highest: (list) =>
    list.slice().sort((a, b) => {
      if (a.cost === b.cost) return 0;
      if (a.cost < b.cost) {
        return 1;
      }
      return -1;
    }),
  byCategory: (list) =>
    list.slice().sort((a, b) => a.category.localeCompare(b.category)),
};

const INITIAL_SORTS = {
  lowest: false,
  highest: false,
  byCategory: false,
};

function Filters({
  products = [],
  setProducts = () => {},
  originProducts = [],
}) {
  const [activeSorts, setActiveSorts] = useState(INITIAL_SORTS);

  const handlerPriceSorting = ({ target }) => {
    setActiveSorts((prev) => ({
      ...INITIAL_SORTS,
      [target.id]: !prev[target.id],
    }));
  };

  useEffect(() => {
    let selectedSort = Object.keys(activeSorts).find(
      (s) => activeSorts[s] === true
    );
    if (!selectedSort) {
      setProducts(originProducts);
    } else {
      setProducts(sortTask[selectedSort]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeSorts]);

  return (
    <div className="filters-container">
      <span className="page">16 of {products.length}</span>
      <span className="subtitle">Sort by:</span>
      <button
        id="byCategory"
        onClick={handlerPriceSorting}
        disabled={originProducts.length < 1}
        className={`filter-button${
          activeSorts.byCategory ? " selected-button" : ""
        }`}
      >
        Category
      </button>
      <button
        id="lowest"
        onClick={handlerPriceSorting}
        disabled={originProducts.length < 1}
        className={`filter-button${
          activeSorts.lowest ? " selected-button" : ""
        }`}
      >
        Lowest price
      </button>
      <button
        id="highest"
        onClick={handlerPriceSorting}
        disabled={originProducts.length < 1}
        className={`filter-button${
          activeSorts.highest ? " selected-button" : ""
        }`}
      >
        Highest price
      </button>
      <div>
        <button className="filter-button pagination-button">{"<"}</button>
        <button className="filter-button pagination-button">{">"}</button>
      </div>
    </div>
  );
}

export default Filters;
