import React from 'react'
import { Box, Button, Grid, Typography } from '@material-ui/core'
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
  textAlign: 'left',
  color: theme.palette.text.secondary,
  display: 'flex', // Activa flexbox
  flexDirection: 'column', // Organiza los elementos en una columna
  justifyContent: 'center', // Centra verticalmente
}));
const Nosotros = () => {
  return (
    <div>
  <header>{isMobile ? <HamburguesaMenu /> : <Navbar />}</header>


{/* 
      <Stack direction="row" spacing={2}>

        <Item sx={{ paddingTop: "119px" }}> 
        
        </Item>
        <Item>
          <Typography sx={{ paddingTop: "337px" }}  style={{color:"#8F0D3C",fontSize:"48px"} } >
            Nosotros
          </Typography>
          <Typography  style={{color:"#8F0D3C",fontSize:"20px"}}>
            La Agencia Aduanal MD Global Trade Services SC surge con el objetivo de proporcionar un servicio de primer nivel, que garantice la certidumbre de nuestros clientes, en sus operaciones de comercio exterior, contando con tecnología de punta y personal capacitado, que ayuden al cumplimiento de las exigencias delcliente. Empresa Joven, pero con personal competitivo, con ideas nuevas y en busca de la mejora continua. Empresa formada en el 2002, por el agente aduanal Ing. Maria Elena Moreno Durazo. Patente nacional 3849, con aduana de adscripción en Nogales Sonora y con operaciones en la Cd. De Hermosillo, por la aduana de Guaymas Sonora.

          </Typography></Item>
      </Stack> */}
<<<<<<< HEAD
      <Box sx={{ Width: '100%',paddingTop: "119px" }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12} md={6}  style={{paddingTop:"119px"}}>
        <img src={nosotros} alt="Nosotros" style={{ maxWidth: '100%', width: '100%', height: 'auto' }} />
        </Grid>
        <Grid item xs={12} md={6}  style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}> {/* Se agregó estilo Flexbox para centrar el contenido verticalmente */}
        <Typography sx={{ paddingTop: "337px" }}  style={{ fontWeight:600,color:"#8F0D3C",fontSize:"3em"} } >
            Nosotros
          </Typography>
          <Typography  style={{fontWeight:500,color:"#8F0D3C",fontSize:"1.25em"}}>
=======
      <Box sx={{ width: '100%',paddingTop: "119px" }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12} md={6}  style={{paddingTop:"119px"}}>
        <img src={nosotros} alt="" />
        </Grid>
        <Grid item xs={12} md={6}  style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}> {/* Se agregó estilo Flexbox para centrar el contenido verticalmente */}
        <Typography sx={{ paddingTop: "337px" }}  style={{ fontWeight:600,color:"#8F0D3C",fontSize:"48px"} } >
            Nosotros
          </Typography>
          <Typography  style={{fontWeight:500,color:"#8F0D3C",fontSize:"20px"}}>
>>>>>>> 08263c0f52f2f82bf25ac208c7a66732275caacb
            La Agencia Aduanal <span  style={{fontWeight:800,color:"#8F0D3C",fontSize:"20px"}}>
     MD Global Trade Services SC </span>
             surge con el objetivo de proporcionar un servicio de primer nivel, que garantice la certidumbre de nuestros clientes, en sus operaciones de comercio exterior, contando con tecnología de punta y personal capacitado, que ayuden al cumplimiento de las exigencias del cliente. <br/>  <br/> 
             Empresa Joven, pero con personal competitivo, con ideas nuevas y en busca de la mejora continua. Empresa formada en el 2002, por el agente aduanal <span  style={{fontWeight:800,color:"#8F0D3C",fontSize:"20px"}}>
             Ing. Maria Elena Moreno Durazo. </span>   <br/>  <br/> 
              Patente nacional 3849, con aduana de adscripción en Nogales Sonora y con operaciones en la Cd. De Hermosillo, por la aduana de Guaymas Sonora.

          </Typography>
          <Link to="/aduanas">  
          <Button
        variant="contained"
        style={{marginTop:"9px",width:"240px",fontSize:"20px",  backgroundColor: 'rgba(143, 13, 60, 1)',borderRadius:"40px", color: 'white' }} // Color de fondo rojo y texto blanco
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