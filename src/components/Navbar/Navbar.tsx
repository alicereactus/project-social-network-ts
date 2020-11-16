import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';

// let s = {
//     'nav': 'Navbar_nav__3q1qL'
//     'item': 'Navbar_item__1Jl7m'
//     'active': 'Navbar_active_mjlnm'
// }

// let c1 = "item"
// let c2 = "active"
// "item active"
// let classes = c1 + " " + c2
// let classesNew = `${s.item} ${s.active}`

const Navbar = () => {
  return <nav className={s.nav}>
    <div className={s.item}>
      <NavLink to='/prafajl' activeClassName={s.activeLink}>Prafajl</NavLink>
    </div>
    <div className={s.item}>
      <NavLink to='/paviedamliennia' activeClassName={s.activeLink}>Paviedamliennia</NavLink>
    </div>
    <div className={s.item}>
      <NavLink to='/siabry' activeClassName={s.activeLink}>Siabry</NavLink>
    </div>
    <div className={s.item}>
      <NavLink to='/muzyka' activeClassName={s.activeLink}>Muzyka</NavLink>
    </div>
    <div className={s.item}>
      <NavLink to='/naviny' activeClassName={s.activeLink}>Naviny</NavLink>
    </div>
    <div className={s.item}>
      <NavLink to='/nalady' activeClassName={s.activeLink}>Nalady</NavLink>
    </div>
  </nav>
}

export default Navbar;