import React from 'react';
import styles from './footer.module.css';

const Footer = (props) =>{
    return(
        <div className={styles.footer}>
            <p className={styles.footerPara}>Code your Dream</p>
        </div>        
    );
};

export default Footer;