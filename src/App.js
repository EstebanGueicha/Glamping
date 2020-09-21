import React from 'react';
import './App.css';
import {Switch,Route} from 'react-router-dom';
import Main from './Paginas/Main'



function App() {
  return (
    <Switch>
      <Route exact  path='/' component={Main} />
    
    </Switch>
  );
}

export default App;
