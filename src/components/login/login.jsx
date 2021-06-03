import React from 'react';
import styles from './login.module.css';
import logo from '../../images/logo.png';

const Login = (props) =>{


    return(
        <div className={styles.box}>
            <div className={styles.container}>
                <header className={styles.header}>
                    <img className={styles.logo} src={logo} alt="logo" />             
                    <h1 className = {styles.title}>Business Card Maker</h1>
                </header>

                <main className = {styles.main}>
                    <h1 className = {styles.semiTitle}>Login</h1>
                    <button className = {styles.loginGoogle}>Google</button>
                    <button className = {styles.loginGitbub}>Github</button>
                </main>

                <footer className = {styles.footer}>
                    <p className = {styles.footerPara}>Code your Dream</p>
                </footer>
            </div>
        </div>
    );
};

export default Login;