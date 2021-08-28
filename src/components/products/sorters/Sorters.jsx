// styles
import { useEffect, useState } from "react";
import "./sorters.scss";

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

function Sorters({ setProducts = () => {}, originProducts = [] }) {
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
    <>
      <span className="subtitle">Sort by:</span>
      <button
        id="byCategory"
        onClick={handlerPriceSorting}
        disabled={originProducts.length < 1}
        className={`sort-button${
          activeSorts.byCategory ? " selected-button" : ""
        }`}
      >
        Category
      </button>
      <button
        id="lowest"
        onClick={handlerPriceSorting}
        disabled={originProducts.length < 1}
        className={`sort-button${activeSorts.lowest ? " selected-button" : ""}`}
      >
        Lowest price
      </button>
      <button
        id="highest"
        onClick={handlerPriceSorting}
        disabled={originProducts.length < 1}
        className={`sort-button${
          activeSorts.highest ? " selected-button" : ""
        }`}
      >
        Highest price
      </button>
    </>
  );
}

export default Sorters;
