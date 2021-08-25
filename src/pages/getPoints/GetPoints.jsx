// styles
import "./get-points.scss";

// components
import SquareButton from "./squareButton/SquareButton";

function GetPoints() {
  return (
    <>
      <h2 className="points-title">Agrega puntos:</h2>
      <div className="points-container">
        <SquareButton points={1000} />
        <SquareButton points={5000} />
        <SquareButton points={7500} />
      </div>
    </>
  );
}

export default GetPoints;
