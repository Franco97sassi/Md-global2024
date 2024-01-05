import React, { useState, useEffect } from 'react';
import './LogoAnimation.css';
import logo from '../../assets/Home/logoInicio.png'


const LogoAnimation = () => {
    const [showContent, setShowContent] = useState(true);
  
    useEffect(() => {
      const timeout = setTimeout(() => {
        setShowContent(false);
      }, 3000);
  
      return () => clearTimeout(timeout);
    }, []);
  
    return (
      <div  className={`logo-animation-container ${showContent ? 'show' : 'hide'}`}>
        <img src={logo} alt="Logo de la empresa" className={`logo`} />
        <span className='textoLogo' style={{ lineHeight: '45px' , fontFamily :'Archivo',textAlign:'center', color: 'rgba(143, 13, 60, 1)' , fontWeight: 'bold' , marginTop: '2rem' , fontSize: '50px'}}>MD GLOBAL <br />
 <span style={{fontWeight: '400' , lineHeight: '15px'}}> TRADE SERVICES </span></span>
      </div>
    );
  };
  
  export default LogoAnimation;