import "./pagination.scss";

function Pagination({ from, to, setPage, totalLength }) {
  return (
    <div>
      {from > 0 && (
        <button
          onClick={() => setPage((page) => page - 1)}
          className="sort-button pagination-button"
        >
          {"<"}
        </button>
      )}
      {to < totalLength - 1 && (
        <button
          onClick={() => setPage((page) => page + 1)}
          className="sort-button pagination-button"
        >
          {">"}
        </button>
      )}
    </div>
  );
}

export default Pagination;
