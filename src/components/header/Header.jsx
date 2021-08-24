// libraries
import { useContext, useEffect } from "react";
import { AppContext } from "../../context/AppContext";
import { Link } from "react-router-dom";

// styles
import "./header.scss";
import logo from "../../assets/icons/aerolab-logo.svg";
import coin from "../../assets/icons/coin.svg";

// hooks
import useFetch from "../../hooks/useFetch";

// services
import { getProfile } from "../../api/services";

// components
import Loader from "../loader/Loader";

function Header() {
  const { success, error, loading, fetchService } = useFetch();
  const {
    state: { availableCoins },
    setAvailableCoins,
  } = useContext(AppContext);

  useEffect(() => {
    fetchService(getProfile(), (data) => {
      setAvailableCoins(data.points || 0);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <header className="header">
      <Link to="/" className="link-logo">
        <img src={logo} alt="company logo" />
      </Link>
      <div className="right-section">
        {success.ok && (
          <>
            <Link to="/history" className="name">
              {success.res.name || "..."}
            </Link>
            <Link to="/getPoints" className="score">
              <span>{availableCoins}</span>
              <img src={coin} alt="coin" />
            </Link>
          </>
        )}
        {loading && <Loader />}
        {error.isDetected && <i>Not found data.</i>}
      </div>
    </header>
  );
}

export default Header;
