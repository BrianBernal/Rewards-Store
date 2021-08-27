// styles
import "./loader.css";

function Loader({ customClass = "" }) {
  return <div className={`lds-dual-ring ${customClass}`}></div>;
}

export default Loader;
