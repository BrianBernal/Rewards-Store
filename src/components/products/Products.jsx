// react
import { useEffect, useState } from "react";

// services
import { getProducts } from "../../api/services";
import useFetch from "../../hooks/useFetch";

// styles
import "./products.scss";
import buyBlue from "../../assets/icons/buy-blue.svg";

// components
import Loader from "../loader/Loader";
import Sorters from "./sorters/Sorters";
import PageIndicator from "./pageIndicator/PageIndicator";
import Pagination from "./pagination/Pagination";

const UNDEFINED = "...";

function Products() {
  const { success, error, loading, fetchService } = useFetch();
  const [dataProducts, setDataProducts] = useState([]);
  const [page, setPage] = useState(0);
  const res = success.res || [];

  // prettier-ignore
  const range = {
    from: page <= 0 ? 0 : 16 * page,
    to: 16 * (page + 1),
  }

  useEffect(() => {
    fetchService(getProducts(), (res) => {
      setDataProducts(res);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="sorters-container">
        <PageIndicator current={range.to} total={res.length} />
        <Sorters setProducts={setDataProducts} originProducts={res} />
        <Pagination
          from={range.from}
          to={range.to}
          setPage={setPage}
          totalLength={res.length}
        />
      </div>
      {loading && <Loader customClass="loader-margin" />}
      <div className="products-container">
        {dataProducts
          .slice(range.from, range.to)
          .map(
            ({
              name = UNDEFINED,
              category = UNDEFINED,
              cost = UNDEFINED,
              img = {},
              _id,
            }) => {
              const { url = null, hdUrl = null } = img;
              return (
                <div className="card" key={_id + name}>
                  <img
                    src={buyBlue}
                    alt="enough points"
                    className="img-availability"
                  />
                  <img src={hdUrl || url} alt={name} className="img-product" />
                  <span className="text category">{category}</span>
                  <span className="text">{name}</span>
                  {/* <span>{cost}</span> */}
                </div>
              );
            }
          )}
        {error.isDetected && <p>{error.error}</p>}
      </div>
      {res.length > 0 && (
        <div className="sorters-container">
          <PageIndicator current={range.to} total={res.length} />
          <Pagination
            from={range.from}
            to={range.to}
            setPage={setPage}
            totalLength={res.length}
          />
        </div>
      )}
    </>
  );
}

export default Products;
