// styles
import "./header.scss";
import logo from "../../assets/icons/aerolab-logo.svg";
import coin from "../../assets/icons/coin.svg";

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="company logo" />
      <div className="right-section">
        <span>Julia Coi</span>
        <div className="score">
          <span>6000</span>
          <img src={coin} alt="coin" />
        </div>
      </div>
    </header>
  );
}

export default Header;
