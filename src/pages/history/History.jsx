import { useEffect } from "react";
import { getHistory } from "../../api/services";
import Loader from "../../components/loader/Loader";
import useFetch from "../../hooks/useFetch";
import "./history.scss";

function History() {
  const { success, error, loading, fetchService } = useFetch();
  const historyData = success.res?.slice()?.reverse() || [];

  useEffect(() => {
    fetchService(getHistory());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container-history">
      <h2 className="column-title">Product</h2>
      <h2 className="column-title">Category</h2>
      <h2 className="column-title">Date</h2>
      <h2 className="column-title">Cost</h2>
      {loading && <Loader customClass="one-row" />}
      {error.isDetected && <span className="one-row">{error.error}</span>}
      {historyData.map(
        ({
          name = "",
          category = "",
          cost = "...",
          createDate = "...",
          img = {
            url: "",
            hdUrl: "",
          },
        }) => {
          const date = new Date(createDate);
          return (
            <>
              <div>
                <img src={img.url} alt={name} className="img-name" />
                <span className="name">{name}</span>
              </div>
              <span>{category}</span>
              <span className="date">
                {!isNaN(date.getTime()) && date.toLocaleString()}
              </span>
              <span>$ {cost}</span>
            </>
          );
        }
      )}
    </div>
  );
}

export default History;
