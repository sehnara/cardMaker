import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import styles from './app.module.css';
import Login from './components/login/login';
import Maker from './components/maker/maker';

function App({authService, FileInput, cardRepository}) {  
  return (    
    <div className={styles.app}>
      <BrowserRouter>
      
        <Switch>         
          <Route exact path="/">
            <Login authService = {authService}/>
          </Route>

          <Route path="/maker">
            <Maker 
              cardRepository = {cardRepository}
              authService = {authService}
              FileInput ={FileInput}
            />  
          </Route>
        </Switch>
      </BrowserRouter>     
    </div>
  );
}

export default App;
