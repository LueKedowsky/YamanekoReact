import { Link, NavLink } from 'react-router-dom';
import './Header.scss';
import { useState } from 'react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const clickHandler = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header className="header-container">
      <div className="header-container-logo logo__large">
        <Link to="/">YAMANEKO</Link>
      </div>
      <div className="header-container-logo logo__small">
        <Link to="/">Y</Link>
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
      <div
        className={`header-container-hamburger${isMenuOpen ? ' active' : ''}`}
        role="menu"
        tabIndex={0}
        onClick={clickHandler}
      >
        <div className="header-container-hamburger_icon" />
      </div>
      <div
        className={`header-container-modal${isMenuOpen ? ' opened' : ''}`}
        onClick={clickHandler}
        role="button"
        tabIndex={0}
      >
        <div className="header-container-modal__item">
          <Link to="/sign-in" className="header-container-modal__sign-in">
            Войти
          </Link>
        </div>
        <div className="header-container-modal__item">
          <ul className="header-container-modal-navigation__ul">
            <li className="header-container-modal-navigation__li">
              <NavLink to="/project">Проект</NavLink>
            </li>
            <li className="header-container-modal-navigation__li">
              <NavLink to="/releases">Релизы</NavLink>
            </li>
            <li className="header-container-modal-navigation__li">
              <NavLink to="/support">Поддержка</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
