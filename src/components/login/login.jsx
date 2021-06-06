import React, { useEffect } from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import styles from './login.module.css';
import { useHistory } from 'react-router';

const Login = ({authService}) =>{
  const history = useHistory();
  const goToMaker = userId =>{
    history.push({
      pathname : '/maker',
      state : {id:userId}
    });
  };

  const onLogin = (event) =>{
    authService 
      .login(event.currentTarget.textContent)
      .then(data=>goToMaker(data.user.uid));
  };

  useEffect(()=>{
    authService
      .onAuthChange(user=>{
      user && goToMaker(user.uid);
    })
  });



  return(
    <section className={styles.container}>
      <Header/>
      <section className={styles.main}>
        <h3 className={styles.semiTitle}>Login</h3>
        <ul className={styles.lists}>
          <li><button onClick={onLogin}>Google</button></li>
          <li><button onClick={onLogin}>Github</button></li>
        </ul>
      </section>
      <Footer/>
    </section>
  );
};

export default Login;