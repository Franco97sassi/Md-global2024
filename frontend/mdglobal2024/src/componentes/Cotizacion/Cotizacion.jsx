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
});
const Cotizacion = () => {
  const classes = useStyles();
  const isNonMobileScreens = useMediaQuery('(min-width: 1000px)');
 
  return (
    <div>
         <header>{isMobile ? <HamburguesaMenu /> : <Navbar />}</header>
<<<<<<< HEAD
      <Typography style={{ fontSize: '3em', fontWeight: 600, paddingTop: "219px" }} className={classes.centeredText} >
        COTIZACIÓN DE NUESTROS SERVICIOS
      </Typography>
      <Typography style={{ fontSize: '1,875em' }} className={classes.centeredText}>
=======
      <Typography style={{ fontSize: '48px', fontWeight: 600, paddingTop: "219px" }} className={classes.centeredText} >
        COTIZACIÓN DE NUESTROS SERVICIOS
      </Typography>
      <Typography style={{ fontSize: '30px' }} className={classes.centeredText}>
>>>>>>> 08263c0f52f2f82bf25ac208c7a66732275caacb
        Selecciona una de las siguientes opciones
      </Typography>
      <Box style={{ display: 'flex',
      flexDirection:isNonMobileScreens?"row":"column",
       justifyContent: 'center', width: '100%' ,gap:"103px" }}>
        <Box>  
        <Link to="/asesoriaPrim">
          


            <img src={cotizacionAsesoria} alt="" width="640px" height="415px" />

          
        </Link></Box>
        <Box>  <Link to="/asesoriaSeg">
          <img src={cotizacionCotizar} alt="" />
        </Link></Box>
         </Box>
      <div>
<<<<<<< HEAD
        <Typography style={{ fontSize: '1.875em', textAlign: "center", color: "rgba(123, 123, 123, 1)" }}  >
=======
        <Typography style={{ fontSize: '30px', textAlign: "center", color: "rgba(123, 123, 123, 1)" }}  >
>>>>>>> 08263c0f52f2f82bf25ac208c7a66732275caacb
          Ten en consideración los siguientes puntos:
        </Typography>
      </div>
      <div style={{
<<<<<<< HEAD
        fontSize: '1.25em', display: 'flex', justifyContent: 'center',paddingBottom:"93px"
=======
        fontSize: '20px', display: 'flex', justifyContent: 'center',paddingBottom:"93px"
>>>>>>> 08263c0f52f2f82bf25ac208c7a66732275caacb
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