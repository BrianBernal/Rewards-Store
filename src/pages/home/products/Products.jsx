// react
import { useEffect } from "react";

// services
import { getProducts } from "../../../api/services";
import Loader from "../../../components/loader/Loader";
import useFetch from "../../../hooks/useFetch";

// styles
import "./products.scss";
import buyBlue from "../../../assets/icons/buy-blue.svg";
import Filters from "./filters/Filters";

const UNDEFINED = "...";

function Products() {
  const { success, error, loading, fetchService } = useFetch();
  const dataProducts = success.res || [];

  useEffect(() => {
    fetchService(getProducts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Filters />
      {loading && <Loader customClass="loader-margin" />}
      <div className="products-container">
        {dataProducts.map(
          ({
            name = UNDEFINED,
            category = UNDEFINED,
            cost = UNDEFINED,
            img = {},
          }) => {
            const { url = null, hdUrl = null } = img;
            return (
              <div className="card">
                <img src={hdUrl || url} alt={name} className="img-product" />
                <span className="text">{name}</span>
                <span className="text category">{category}</span>
                <img
                  src={buyBlue}
                  alt="puntos suficientes"
                  className="img-availability"
                />
                {/* <span>{cost}</span> */}
              </div>
            );
          }
        )}
        {error.isDetected && <p>{error.error}</p>}
      </div>
    </>
  );
}

export default Products;
