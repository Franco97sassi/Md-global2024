import React from 'react'
import cotizacionAsesoria from "../../assets/cotizacion/cotizacionAsesoria.png"
import cotizacionCotizar from "../../assets/cotizacion/cotizacionCotizar.png"
import { Box, Typography, useMediaQuery } from '@material-ui/core'
import Navbar from "../Navbar";
import { makeStyles } from '@material-ui/core/styles';
import Footer from "../Footer";
import { Link } from 'react-router-dom';
import HamburguesaMenu from '../Menu';
import { isMobile } from 'react-device-detect';

const useStyles = makeStyles({
  centeredText: {
    textAlign: 'center',
    color: "#8F0D3C",
  },
  centeredList: {
    paddingLeft: 0, // Elimina el relleno predeterminado
  },
  imageContainer: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%', // Asegura que el contenedor ocupe el ancho completo
  },
  imageStyle: {
    width: '90%', // Ajusta este porcentaje según tus necesidades
    height: 'auto', // Mantiene la proporción de la imagen
    margin: 'auto', // Centra la imagen horizontalmente
  },
});
const Cotizacion = () => {
  const classes = useStyles();
  const isNonMobileScreens = useMediaQuery('(min-width: 1000px)');
 
  return (
    <div>
         <header>{isMobile ? <HamburguesaMenu /> : <Navbar />}</header>
      <Typography style={{ fontSize: isNonMobileScreens?'3em':"1.5em", fontWeight: 600, paddingTop:isNonMobileScreens? "219px":"25px" }} className={classes.centeredText} >
        COTIZACIÓN DE NUESTROS SERVICIOS
      </Typography>
      <Typography style={{ fontSize: isNonMobileScreens?'1.875em':"1em" }} className={classes.centeredText}>
        Selecciona una de las siguientes opciones
      </Typography>
      <Box style={{ display: 'flex',
      flexDirection:isNonMobileScreens?"row":"column",
       justifyContent: 'center', width: '100%' ,gap:isNonMobileScreens?"103px":"0px",paddingBottom:"3.25em",
        }}>
        <Box >  
        <Link to="/asesoriaPrim">
          


            <img src={cotizacionAsesoria} alt="" width={isNonMobileScreens?'100%' : '90%'} height={isNonMobileScreens?'100%' : 'auto'} />

          
        </Link></Box>
        <Box>  <Link to="/asesoriaSeg">
          <img src={cotizacionCotizar} alt=""  width={isNonMobileScreens?'100%' : '90%'} height={isNonMobileScreens?'100%' : 'auto'} />
        </Link></Box>
         </Box>
      <div>
        <Typography style={{  fontSize: isNonMobileScreens?'1.875em':"1em", textAlign: "center", color: "rgba(123, 123, 123, 1)" }}  >
          Ten en consideración los siguientes puntos:
        </Typography>
      </div>
      <div style={{paddingRight:"35px",textAlign:"center",
        fontSize: isNonMobileScreens?'1.25em':"0.75em",  display: 'flex', justifyContent: 'center',paddingBottom:"93px"
      }} >
        <ul  >

          <li>    HONORARIOS PARA PEDIMENTO A1 MERCANCIA TRADICIONAL, NO PERECEDEROS, NO VULNERABLES, HAZMAT, NI DE DIFICIL IDENTIFICACION.</li>
          <li>  NO INCLUYE MANIOBRAS, COMERCIALIZADORA, TRANSPORTE, SEGURO U OTROS SERVICIOS NO ESPECIFICADOS.</li>
          <li>  NO INCLUYE IMPUESTOS, DERECHOS U OTROS CONCEPTOS ESTABLECIDOS POR LA AUTORIDAD.</li>
          <li>  PRECIOS DE REFERECIA, NO GARANTIZAN QUE SE LLEVE A CABO EL SERVICIO, FAVOR DE COTIZAR PARA UNA OFERTA PERSONALIZADA.</li>
          <li> MV = MANIFESTACION DE VALOR HC = HOJA DE CALCULO.</li>
        </ul>
      </div>

      <Footer/>    </div>
  );
}

export default Cotizacion;