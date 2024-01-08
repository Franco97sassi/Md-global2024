import { Box, Typography, useMediaQuery } from '@material-ui/core'
import React from 'react'
import asesoria1 from "../../assets/Asesoria/asesoria1.png"
import asesoria2 from "../../assets/Asesoria/asesoria2.png"
import Navbar from '../Navbar'
import Footer from '../Footer'
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'

const useStyles = makeStyles({
  centeredText: {
    textAlign: 'center',
    color: "#8F0D3C",
  },
  centeredList: {
    paddingLeft: 0, // Elimina el relleno predeterminado
  },
});
const AsesoriaPrim = () => {
  const isNonMobileScreens = useMediaQuery('(min-width: 1000px)');

  const classes = useStyles();
  return (
    <div>
      <Navbar> </Navbar>
      <Typography style={{ fontSize: '48px', fontWeight: 600, paddingTop: "219px" }} className={classes.centeredText} >
        ASESORÍA
      </Typography>
      <Typography style={{ fontSize: '30px',paddingBottom:"63px" }} className={classes.centeredText}>
        Con nuestras asesorías puedes aclarar tus ideas para tus proyectos de importación
      </Typography>
      <Box style={{ display: 'flex',
            flexDirection:isNonMobileScreens?"row":"column",

       justifyContent: 'center',gap:"103px", width: '100%' }}>

        <Box style={{
          width: '607px',
          height: '382px',
          boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.15)',
          display: 'flex', flexDirection: 'column',
          justifyContent: 'center', background: "linear-gradient(to bottom, rgba(255, 255, 255, 1), rgba(237, 237, 237, 1)",
          alignItems: 'center',borderRadius:"40px"
        }} >
          <img src={asesoria1} alt="" />

          <Typography style={{ marginTop: '7px', color: "#8F0D3C", fontSize: "30px",paddingTop:"50px"}}>
            Quiero una llamada
          </Typography>
        </Box>
        <Box style={{
          width: '607px',
          height: '382px',
          boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.15)',
          display: 'flex', flexDirection: 'column',
          justifyContent: 'center', background: "linear-gradient(to bottom, rgba(255, 255, 255, 1), rgba(237, 237, 237, 1)",
          alignItems: 'center',borderRadius:"40px"
        }} >   <img src={asesoria2} alt="" />
          <Typography style={{ marginTop: '7px', color: "#8F0D3C", fontSize: "30px" }}>
            Quiero una Reunión
          </Typography>
        </Box>
      </Box>
      <div>
        <Typography style={{paddingTop:"59px", fontSize: '30px', textAlign: "center", color: "rgba(123, 123, 123, 1)" }}  >
          Ten en consideración los siguientes puntos:
        </Typography>
      </div>
      <div style={{
        fontSize: '20px', display: 'flex', justifyContent: 'center',paddingBottom:"93px"
      }} >
        <ul  >

          <li>    HONORARIOS PARA PEDIMENTO A1 MERCANCIA TRADICIONAL, NO PERECEDEROS, NO VULNERABLES, HAZMAT, NI DE DIFICIL IDENTIFICACION.</li>
          <li>  NO INCLUYE MANIOBRAS, COMERCIALIZADORA, TRANSPORTE, SEGURO U OTROS SERVICIOS NO ESPECIFICADOS.</li>
          <li>  NO INCLUYE IMPUESTOS, DERECHOS U OTROS CONCEPTOS ESTABLECIDOS POR LA AUTORIDAD.</li>
          <li>  PRECIOS DE REFERECIA, NO GARANTIZAN QUE SE LLEVE A CABO EL SERVICIO, FAVOR DE COTIZAR PARA UNA OFERTA PERSONALIZADA.</li>
          <li> MV = MANIFESTACION DE VALOR HC = HOJA DE CALCULO.</li>
        </ul>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default AsesoriaPrim