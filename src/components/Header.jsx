import "../styles/Header.css";
import logo from "../assets/logo.jpg";
function Header() {
  return (
    <>
      <div className="header">
        <div className="logo-name">
          <img className="logo-img" src={logo} alt="Star Wars Logo" />
          <div className="logo-text">
            <p>Character Collection</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
