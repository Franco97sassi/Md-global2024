import React from 'react';
import { Box, Typography, useMediaQuery } from '@material-ui/core';
import Navbar from '../Navbar';
import Footer from '../Footer';
import HamburguesaMenu from '../Menu';

const AsesoriaSep = () => {
  const isNonMobileScreens = useMediaQuery('(min-width: 1000px)');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
       <header>{isNonMobileScreens ? <Navbar /> : <HamburguesaMenu />}</header>
      <Box style={{
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent:"center"
      }}>
        <Typography style={{ textAlign:"center",fontWeight: 600, fontSize: isNonMobileScreens?'3em':"1.875em", color: 'rgba(143, 13, 60, 1)' }}>
          ¡Gracias por contactarnos!
        </Typography>
        <Typography style={{padding:isNonMobileScreens?"0px":"10px", textAlign:"center",fontWeight: 300, fontSize: isNonMobileScreens?'1.875em':"1em", color: 'rgba(143, 13, 60, 1)' }}>
          En seguida uno de nuestros operadores se pondrá en contacto contigo.
        </Typography>
      </Box>
      <Footer />
    </div>
  );
}

export default AsesoriaSep;
