import React, { Component } from 'react';
import './App.css';
//import Domovirtual from './Componentes/Domovirtual';
import Home from './Componentes/Home'
import Glamping from './Componentes/Glamping';
import Footer from './Componentes/Footer';
import Domos from './Componentes/Domos';
import Contacto from './Componentes/Contacto';




class App extends Component {
  render(){
    return(
      <div>
      { <Home/>}
        {<Glamping/>}
        {<Domos/>}
       {<Contacto/>}
        {<Footer/>}
      </div>

    )
  }
}

export default App;
