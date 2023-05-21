import { Link, NavLink } from "react-router-dom";
import "./Header.scss";

const Header: React.FC = () => {
  return (
    <header className="header-container">
      <div className="header-container-logo">
        <Link to="/">YAMANEKO</Link>
      </div>
      <div className="header-container-search">
        <input className="header-container-search__input" type="search" name="" id="" placeholder="Поиск..." />
      </div>
      <nav className="header-container-navigation">
        <ul className="header-container-navigation__ul">
          <li className="header-container-navigation__li">
            <NavLink to="/project">Проект</NavLink>
          </li>
          <li className="header-container-navigation__li">
            <NavLink to="/releases">Релизы</NavLink>
          </li>
          <li className="header-container-navigation__li">
            <NavLink to="/support">Поддержка</NavLink>
          </li>
          {/* реализовать выпадающее меню со ссылками
          <li className="dropdown">
            <button className="dropbtn">
              Социальные сети
              <img className="dropbtn" src="../../data/assets/icons/select_button.svg" alt="" />
            </button>
            <div id="myDropdown" className="dropdown-content">
              <a href="#">Instagram</a>
              <a href="#">Discord</a>
              <a href="#">Telegram</a>
              <a href="#">Youtube</a>
            </div>
          </li> */}
        </ul>
      </nav>
      <div className="header-container-sign-in">
        <Link to="/sign-in">войти</Link>
      </div>
    </header>
  );
};

export default Header;
