// react
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

// hooks
import useFetch from "../../hooks/useFetch";

// styles
import "./square-button.scss";

// components
import Loader from "../loader/Loader";
import { setPoints } from "../../api/services";

function SquareButton({ points }) {
  const { error, loading, fetchService } = useFetch();
  const { setAvailableCoins } = useContext(AppContext);

  const handlerButton = () => {
    fetchService(setPoints(points), (res) => {
      const newPoints = Number(res["New Points"]);
      if (!Number.isNaN(newPoints)) {
        setAvailableCoins(newPoints);
      }
    });
  };

  return (
    <button className="add-button" onClick={handlerButton} disabled={loading}>
      <b className="point-text">{points}</b>
      <span>puntos</span>
      {loading && <Loader />}
      {error.isDetected && <i>¡Asignación fallida!</i>}
    </button>
  );
}

export default SquareButton;
