import React, { useState } from 'react';
import Footer from "../Footer";
import Navbar from "../Navbar";
import Warehousing from './Warehousing';
import Logistica from './Logistica';
import Arancelaria from './Arancelaria';
import Seguridad from './Seguridad';
import Permisos from './Permisos';
import Atencion from './Atencion';
import Despacho from './Despacho';
import Auditoria from './Auditoria';

 // Asegúrate de tener un archivo de estilo CSS para estilar tu carrusel.

function Servicios() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    <Warehousing key={1} />,
    <Logistica key={2} />,
    <Arancelaria key={3}/>,
    <Seguridad key={4}></Seguridad>,
    <Permisos key={5}></Permisos>,
    <Atencion key={6}></Atencion>,
    <Despacho key={7}></Despacho>,
    <Auditoria key={8}></Auditoria>

  ];

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  return (
    <>
      <header>
        <Navbar></Navbar>
      </header>
      <main>
        <div className="carousel-container" style={{marginTop: '10%' , marginBottom: '5%' , marginLeft: '5%'}}>
          <div className="carousel">
            <div  className="slide-container">
            <button onClick={prevSlide}>Previous</button>
      
            {slides[currentSlide]}
            <button onClick={nextSlide}>Next</button>
            </div>
          </div>

          <div className="controls">

          </div>
        </div>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </>
  );
}

export default Servicios;
