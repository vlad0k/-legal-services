import React from 'react';
import cl from './Header.module.css';

import {NavLink} from 'react-router-dom';

function Header() {
  return (
    <div className={cl.Header}>
      <div>
        <NavLink to="/">
          <img src='https://png.pngtree.com/element_pic/00/16/07/115783931601b5c.jpg' />
        </NavLink>
      </div>
      <div>
        <NavLink to="/" >Главная</NavLink>
        <NavLink to="/about-us" activeClassName={cl.active}>О нас</NavLink>
        <NavLink to="/uslugi" activeClassName={cl.active}>Услуги</NavLink>
        <NavLink to="/contacts" activeClassName={cl.active}>Контакты</NavLink>
        <NavLink to="/info" activeClassName={cl.active}>Полезная информация</NavLink>
      </div>
      <div className={cl.lang}>
        <ul>
          <li>eng</li>/
          <li>ua</li>/
          <li>ru</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
