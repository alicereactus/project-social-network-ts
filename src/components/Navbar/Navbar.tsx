import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

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
  return <nav className={styles.nav}>
    <div className={styles.item}>
      <NavLink to='/prafajl' activeClassName={styles.activeLink}>Prafajl</NavLink>
    </div>
    <div className={styles.item}>
      <NavLink to='/paviedamliennia' activeClassName={styles.activeLink}>Paviedamliennia</NavLink>
    </div>
    <div className={styles.item}>
      <NavLink to='/siabry' activeClassName={styles.activeLink}>Siabry</NavLink>
    </div>
    <div className={styles.item}>
      <NavLink to='/muzyka' activeClassName={styles.activeLink}>Muzyka</NavLink>
    </div>
    <div className={styles.item}>
      <NavLink to='/naviny' activeClassName={styles.activeLink}>Naviny</NavLink>
    </div>
    <div className={styles.item}>
      <NavLink to='/nalady' activeClassName={styles.activeLink}>Nalady</NavLink>
    </div>
  </nav>
}

export default Navbar;