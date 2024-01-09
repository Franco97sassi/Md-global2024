import React from 'react'
import { Box, Button, Grid, Typography, useMediaQuery } from '@material-ui/core'
import nosotros from "../../assets/Nosotros/nosotros.png";
import Navbar from '../Navbar';
import Footer from '../Footer';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import  Paper  from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import HamburguesaMenu from '../Menu';
import { isMobile } from 'react-device-detect';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: isNonMobileScreens?'left':"center",
  color: theme.palette.text.secondary,
  display: 'flex', // Activa flexbox
  flexDirection: 'column', // Organiza los elementos en una columna
  justifyContent: 'center', // Centra verticalmente
}));
 
const Nosotros = () => {
  const isNonMobileScreens = useMediaQuery('(min-width: 1000px)');

  return (
    <div>
  <header>{isMobile ? <HamburguesaMenu /> : <Navbar />}</header>


 
     
      <Box sx={{ Width: '100%',paddingTop:isNonMobileScreens? "119px" :"25px"}}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <Grid item xs={12} md={6} style={{marginLeft:"0px", padding:isNonMobileScreens ?"10px":"0px",paddingTop: isNonMobileScreens?"119px":"25px", textAlign: isNonMobileScreens ? "left" : "center" }}>
            <img src={nosotros} alt="Nosotros" style={{ paddingLeft:"10px",maxWidth: '100%', width: isNonMobileScreens?'100%':"75%", height: '100%' }} />
          </Grid>
        <Grid item xs={12} md={6}  style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' ,
        textAlign:isNonMobileScreens?"left":"center"
      
      }}> {/* Se agregó estilo Flexbox para centrar el contenido verticalmente */}
        <Typography sx={{ paddingTop: "337px" }}  style={{ fontWeight:600,color:"#8F0D3C",fontSize:isNonMobileScreens?"3em":"1.875em"} } >
            Nosotros
          </Typography>
          <Typography  style={{padding:isNonMobileScreens?"0px":"25px", fontWeight:500,color:"#8F0D3C",fontSize:isNonMobileScreens?"1.25em":"0.9em"}}>
            La Agencia Aduanal <span  style={{fontWeight:800,color:"#8F0D3C",ontSize:isNonMobileScreens?"1.25em":"0.9em"}}>
     MD Global Trade Services SC </span>
             surge con el objetivo de proporcionar un servicio de primer nivel, que garantice la certidumbre de nuestros clientes, en sus operaciones de comercio exterior, contando con tecnología de punta y personal capacitado, que ayuden al cumplimiento de las exigencias del cliente. <br/>  <br/> 
             Empresa Joven, pero con personal competitivo, con ideas nuevas y en busca de la mejora continua. Empresa formada en el 2002, por el agente aduanal <span  style={{fontWeight:800,color:"#8F0D3C",ontSize:isNonMobileScreens?"1.25em":"0.9em"}}>
             Ing. Maria Elena Moreno Durazo. </span>   <br/>  <br/> 
              Patente nacional 3849, con aduana de adscripción en Nogales Sonora y con operaciones en la Cd. De Hermosillo, por la aduana de Guaymas Sonora.

          </Typography>
          <Link to="/aduanas">  
          <Button
        variant="contained"
        style={{marginTop:"9px",marginBottom:"25px",width:"240px",fontSize:isNonMobileScreens?"20px":"1em",  backgroundColor: 'rgba(143, 13, 60, 1)',borderRadius:"40px", color: 'white' }} // Color de fondo rojo y texto blanco
      >
        Aduanas
      </Button></Link>
        </Grid>
        
      </Grid>
    </Box>
      <Footer/>
    </div>
  )
}

export default Nosotros