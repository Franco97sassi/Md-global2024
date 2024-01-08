import React from 'react';
import { Box, Typography } from '@material-ui/core';
import Navbar from '../Navbar';
import Footer from '../Footer';

const AsesoriaSep = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <Box style={{ 
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center' 
      }}> 
<<<<<<< HEAD
        <Typography style={{ fontWeight: 600, fontSize: '3em', color: 'rgba(143, 13, 60, 1)' }}>
          ¡Gracias por contactarnos!
        </Typography>
        <Typography style={{ fontWeight: 300, fontSize: '1.875em', color: 'rgba(143, 13, 60, 1)' }}>
=======
        <Typography style={{ fontWeight: 600, fontSize: '48px', color: 'rgba(143, 13, 60, 1)' }}>
          ¡Gracias por contactarnos!
        </Typography>
        <Typography style={{ fontWeight: 300, fontSize: '30px', color: 'rgba(143, 13, 60, 1)' }}>
>>>>>>> 08263c0f52f2f82bf25ac208c7a66732275caacb
          En seguida uno de nuestros operadores se pondrá en contacto contigo.
        </Typography>
      </Box>
      <Footer />
    </div>
  );
}

export default AsesoriaSep;
