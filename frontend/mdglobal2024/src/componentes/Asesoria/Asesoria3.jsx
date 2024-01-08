import { Box, Typography, useMediaQuery } from '@material-ui/core'
import React from 'react'
import asesoria1 from "../../assets/Asesoria/asesoria5.png"
import asesoria2 from "../../assets/Asesoria/asesoria6.png"
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
const AsesoriaTer = () => {
  
  const classes = useStyles();
  const isNonMobileScreens = useMediaQuery('(min-width: 1000px)');

  return (
    <div> 
      <Navbar> </Navbar>
<<<<<<< HEAD
        <Typography style={{ fontSize: '3em' ,fontWeight:600,paddingTop:"219px"}}   className={classes.centeredText} >
        COTIZAR
        </Typography>
        <Typography style={{ fontSize: '1.875em',paddingBottom:"63px"  }} className={classes.centeredText}>
=======
        <Typography style={{ fontSize: '48px' ,fontWeight:600,paddingTop:"219px"}}   className={classes.centeredText} >
        COTIZAR
        </Typography>
        <Typography style={{ fontSize: '30px',paddingBottom:"63px"  }} className={classes.centeredText}>
>>>>>>> 08263c0f52f2f82bf25ac208c7a66732275caacb
        Con nuestras asesorías puedes aclarar tus ideas para tus proyectos de importación
        </Typography>
        <Box style={{ display: 'flex',
                            flexDirection:isNonMobileScreens?"row":"column",

        justifyContent: 'center',gap:"65px", width: '100%' }}>
        <Link to="/asesoriaCuar">  
<<<<<<< HEAD
  <Box style={{ width: '27.635em',
    height: '23.875em',borderRadius:"40px",
=======
  <Box style={{width: '442px',
    height: '382px',borderRadius:"40px",
>>>>>>> 08263c0f52f2f82bf25ac208c7a66732275caacb
    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.15)',
    display: 'flex',flexDirection: 'column',
    justifyContent: 'center', background: "linear-gradient(to bottom, rgba(255, 255, 255, 1), rgba(237, 237, 237, 1)",
    alignItems: 'center'}} >   <img src={asesoria1} alt="" />
    <Typography style={{ marginTop: '7px', color: "#8F0D3C",fontSize:"30px"  }}>
    Exportar
    </Typography>
    </Box></Link>
          <Link to="/asesoriaCuar">  
<<<<<<< HEAD
  <Box style={{width: '27.635em',
    height: '23.875em',borderRadius:"40px",
=======
  <Box style={{width: '442px',
    height: '382px',borderRadius:"40px",
>>>>>>> 08263c0f52f2f82bf25ac208c7a66732275caacb
    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.15)',
    display: 'flex',flexDirection: 'column',
    justifyContent: 'center', background: "linear-gradient(to bottom, rgba(255, 255, 255, 1), rgba(237, 237, 237, 1)",
    alignItems: 'center'}} >   <img src={asesoria1} alt="" />
    <Typography style={{ marginTop: '7px', color: "#8F0D3C",fontSize:"30px"  }}>
    Importar
    </Typography>
    </Box></Link>
<<<<<<< HEAD
    <Link to="/asesoriaSex">  <Box style={{width: '27.635em',
    height: '23.875em',borderRadius:"40px",
=======
    <Link to="/asesoriaSex">  <Box style={{width: '442px',
    height: '382px',borderRadius:"40px",
>>>>>>> 08263c0f52f2f82bf25ac208c7a66732275caacb
    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.15)',
    display: 'flex',flexDirection: 'column',
    justifyContent: 'center', background: "linear-gradient(to bottom, rgba(255, 255, 255, 1), rgba(237, 237, 237, 1)",
    alignItems: 'center'}} >   <img src={asesoria2} alt="" />
     <Typography style={{ marginTop: '7px', color: "#8F0D3C",fontSize:"30px"  }}>
    Otro Régimen 
    </Typography> 
    </Box></Link>
    </Box>
<div>
<<<<<<< HEAD
      <Typography  style={{ paddingTop:"59px",fontSize: '1.875em',textAlign:"center",color:"rgba(123, 123, 123, 1)" }}  >
      Ten en consideración los siguientes puntos:
      </Typography>
       </div>
      <div style={{ fontSize: '1.25em',display: 'flex', justifyContent: 'center',paddingBottom:"93px"
=======
      <Typography  style={{ paddingTop:"59px",fontSize: '30px',textAlign:"center",color:"rgba(123, 123, 123, 1)" }}  >
      Ten en consideración los siguientes puntos:
      </Typography>
       </div>
      <div style={{ fontSize: '20px',display: 'flex', justifyContent: 'center',paddingBottom:"93px"
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
<Footer></Footer>
    </div>
  )
}

export default AsesoriaTer