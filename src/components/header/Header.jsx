// react
import { useContext, useEffect } from "react";
import { AppContext } from "../../context/AppContext";

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
      <img src={logo} alt="company logo" />
      <div className="right-section">
        {success.ok && (
          <>
            <span>{success.res.name || "..."}</span>
            <div className="score">
              <span>{availableCoins}</span>
              <img src={coin} alt="coin" />
            </div>
          </>
        )}
        {loading && <Loader />}
        {error.isDetected && <i>Not found data.</i>}
      </div>
    </header>
  );
}

export default Header;
