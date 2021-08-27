import "./filters.scss";

function Filters({ products = [], setProducts = () => {} }) {
  return (
    <div className="filters-container">
      <span className="page">16 of {products.length}</span>
      <span className="subtitle">Sort by:</span>
      <button className="filter-button">Most recent</button>
      <button className="filter-button">Lowest price</button>
      <button className="filter-button">Highest price</button>
      <div>
        <button className="filter-button pagination-button">{"<"}</button>
        <button className="filter-button pagination-button">{">"}</button>
      </div>
    </div>
  );
}

export default Filters;
