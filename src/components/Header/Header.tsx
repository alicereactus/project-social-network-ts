import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Header.module.css';

export type HeaderPropsType = {
    isAuth: boolean
    login: string | null
}

const Header = (props: HeaderPropsType) => {
    return <header className={styles.header}>
        <div className={styles.logo} >
            <img src='data:image/png;base64,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' alt='logo' />
            <div>DOSVIED</div>
        </div>
        <div className={styles.loginBlock}>
            {props.isAuth ? props.login :
                <NavLink to={'/login'}>Login</NavLink>
            }
        </div>
    </header>
}

export default Header;