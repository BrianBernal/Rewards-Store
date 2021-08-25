// libraries
import { useContext, useEffect, useState } from "react";
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
  const [fallen, setFallen] = useState(0);

  useEffect(() => {
    fetchService(getProfile(), (data) => {
      setAvailableCoins(data.points || 0);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // animation: https://dev.to/samwatts98/how-to-easily-animate-your-react-components-on-click-with-css-keyframes-26mg
  useEffect(() => {
    setFallen(1);
  }, [availableCoins]);

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
              <span
                className="coins-number"
                onAnimationEnd={() => setFallen(0)}
                fallen={fallen}
              >
                {availableCoins}
              </span>
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
