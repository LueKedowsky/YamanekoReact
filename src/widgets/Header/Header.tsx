import { Link, NavLink } from 'react-router-dom';
import './Header.scss';

const Header: React.FC = () => {
  return (
    <header className="header-container">
      <div className="header-container-logo">
        <Link to="/">YAMANEKO</Link>
      </div>
      <div className="header-container-search">
        <input
          className="header-container-search__input"
          type="search"
          name=""
          id=""
          placeholder="Поиск..."
        />
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
        </ul>
      </nav>
      <Link to="/sign-in" className="header-container-sign-in">
        войти
      </Link>
    </header>
  );
};

export default Header;