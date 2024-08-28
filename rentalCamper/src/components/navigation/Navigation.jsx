import React from 'react'
import { NavLink } from 'react-router-dom'
import css from './Navigation.module.css';
import clsx from 'clsx';

const buildLinkClass = ({ isActive }) => {
  return clsx(css.nav, isActive && css.active);
};


const Navigation = () => {
  return (
    <header className={css.header}>
      <h3 className={css.title}>Travel<span>Trucs</span></h3>
        <nav className={css.navigation}>
          <NavLink className={buildLinkClass} to='/' >
                Home
        </NavLink>
        <NavLink className={buildLinkClass} to='/catalog'>
                Catalog
        </NavLink>
      </nav>
     </header>
  )
}

export default Navigation;

