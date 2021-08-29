// react
import { useEffect, useState, useContext } from "react";
import { AppContext } from "../../context/AppContext";

// services
import { getProducts, setRedeem } from "../../api/services";
import useFetch from "../../hooks/useFetch";

// styles
import "./products.scss";
import buyBlue from "../../assets/icons/buy-blue.svg";
import buyWhite from "../../assets/icons/buy-white.svg";
import coin from "../../assets/icons/coin.svg";

// components
import Loader from "../loader/Loader";
import Sorters from "./sorters/Sorters";
import PageIndicator from "./pageIndicator/PageIndicator";
import Pagination from "./pagination/Pagination";
import Modal from "../modal/Modal";

const UNDEFINED = "...";
const INITIAL_MODAL = { show: false, type: "success", message: "" };

function Products() {
  const { success, error, loading, fetchService } = useFetch();
  const { loading: lRedeem, fetchService: fetchRedeem } = useFetch();
  const {
    setAvailableCoins,
    state: { availableCoins },
  } = useContext(AppContext);
  const [dataProducts, setDataProducts] = useState([]);
  const [page, setPage] = useState(0);
  const [modal, setModal] = useState(INITIAL_MODAL);
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

  const handlerRedeem = (id, cost) => () => {
    fetchRedeem(
      setRedeem(id),
      (res) => {
        setModal({
          show: true,
          type: "success",
          message: res.message || "Success redeeming!",
        });
        setAvailableCoins(availableCoins - cost);
      },
      (err) => {
        setModal({
          show: true,
          type: "error",
          message: err.message || "Not redeemed!",
        });
      }
    );
  };

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
                <div className="cell">
                  <div className="card" key={_id + name}>
                    <img
                      src={buyBlue}
                      alt="enough points"
                      className="img-availability"
                    />
                    <img
                      src={hdUrl || url}
                      alt={name}
                      className="img-product"
                    />
                    <span className="text category">{category}</span>
                    <span className="text">{name}</span>
                  </div>
                  <div className="card upon">
                    <img
                      src={buyWhite}
                      alt="enough points"
                      className="img-availability upon-image"
                    />
                    <div className="cost-container">
                      <span className="coins-number">{cost}</span>
                      <img src={coin} alt="coin" className="coin" />
                    </div>
                    <button
                      className="redeem-button"
                      onClick={handlerRedeem(_id, cost)}
                      disabled={lRedeem}
                    >
                      Redeem now
                      {lRedeem && <Loader />}
                    </button>
                  </div>
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
      <Modal {...modal} okCallback={() => setModal(INITIAL_MODAL)} />
    </>
  );
}

export default Products;
