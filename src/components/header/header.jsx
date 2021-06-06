import React from 'react';
import styles from './header.module.css';
import logo from '../../images/logo.png';

const Header = (props) =>{

    const handleLogout =()=>{
        props.onLogout();
    }
    return(
        <div className={styles.header}>
            <img className={styles.logo} src={logo} alt="logo" />
            <h3 className={styles.title}>Business CardMaker</h3>
            <button
                onClick={handleLogout} 
                className={styles.button_logout}
            >
                logout
            </button>
        </div>
    );
};

export default Header;