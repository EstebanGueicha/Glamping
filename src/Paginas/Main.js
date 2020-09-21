import React, { useEffect } from 'react';
import Home from '../Componentes/Home'
import Glamping from '../Componentes/Glamping';
import Footer from '../Componentes/Footer';
import Domos from '../Componentes/Domos';
import Contacto from '../Componentes/Contacto';
import { firebaseAnalytics } from '../firebaseConfig';
import Servicios from '../Componentes/Servicios';



function Main() {

  useEffect(() => {
    firebaseAnalytics.logEvent("homepage_visitado")
  })

  return (
    <div>
      <Home />
      <Glamping />
      <Servicios />
      <Domos />
      <Contacto />
      <Footer />
    </div>
  );
}

export default Main;
