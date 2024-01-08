import React from 'react';
import { Box, Button, Grid, TextField, Typography, makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const useStyles = makeStyles({
  customTextField: {
    backgroundColor: 'rgba(240, 240, 240, 1)', // Estilo para el fondo del TextField
    borderRadius: '40px', // Aplicar borderRadius al TextField
    '& .MuiInputBase-input': {
      paddingTop: '15px', // Aumentar el relleno superior para mover el placeholder hacia abajo
      fontSize: '25px', // Tamaño de la fuente del placeholder
      color: 'rgba(143, 13, 60, 1)', // Color del texto del placeholder
    },
    '& .MuiOutlinedInput-root': {
      borderRadius: '40px', // Asegurar que el borde exterior también tenga borderRadius
      borderColor: 'rgba(240, 240, 240, 1)', // Hacer que el borde sea del mismo color que el fondo
    },
  },
  customGridItem: {
    maxWidth: '640px', // Establecer el ancho máximo de cada Grid item
    flexBasis: '640px', // Establecer el ancho base de cada Grid item
  },
  centeredText: {
    textAlign: 'center',
    color: "#8F0D3C",
  },
  customLargeTextField: {
    // Tus estilos existentes para customTextField...
    height: '161px',  // Establecer la altura deseada
    '& .MuiInputBase-input': {
      height: '100%',  // Hacer que el input ocupe toda la altura del TextField
      paddingTop: '0px', // Ajustar el relleno superior si es necesario
      paddingBottom: '0px', // Ajustar el relleno inferior si es necesario
    },
  },
 
 
});
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  backgroundColor: 'transparent',
  boxShadow: 'none',  // Eliminar la sombra
  border: 'none',  // Eliminar cualquier borde
  ...theme.typography.body2,
  padding: theme.spacing(3),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const AsesoriaSex = () => {
  const classes = useStyles();

  return (
    <div>
      <Navbar />
      <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>   
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 5, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        > 
          
           
<<<<<<< HEAD
          <Typography style={{ fontSize: '3em' ,fontWeight:600,paddingTop:"219px"}}   className={classes.centeredText} >
          PERSONALIZAR COTIZACIÓN

        </Typography>
        <Typography style={{ fontSize: '1.875em',paddingBottom:"63px"  }} className={classes.centeredText}>
=======
          <Typography style={{ fontSize: '48px' ,fontWeight:600,paddingTop:"219px"}}   className={classes.centeredText} >
          PERSONALIZAR COTIZACIÓN

        </Typography>
        <Typography style={{ fontSize: '30px',paddingBottom:"63px"  }} className={classes.centeredText}>
>>>>>>> 08263c0f52f2f82bf25ac208c7a66732275caacb
        Con los siguientes datos podremos brindarte una mejor cotización de tu interés        
        </Typography>
          <Box sx={{ width: '100%' }}>
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={12} md={6} >
          <Item>  <TextField
            fullWidth
            rows={1}
            placeholder="Nombre"
            variant="outlined"
            InputProps={{
              disableUnderline: true,
              className: classes.customTextField, // Aplicar la clase customTextField
            }}
          /></Item>
         <Item>   <TextField
            fullWidth
            rows={1}
            placeholder="Teléfono"
            variant="outlined"
            InputProps={{
              disableUnderline: true,
              className: classes.customTextField, // Aplicar la clase customTextField
            }}
          /></Item>
         <Item>  <TextField
            fullWidth
            rows={1}
            placeholder="Destino"
            variant="outlined"
            InputProps={{
              disableUnderline: true,
              className: classes.customTextField, // Aplicar la clase customTextField
            }}
          /></Item>
         <Item>  <TextField
            fullWidth
            rows={1}
            placeholder="Volumen"
            variant="outlined"
            InputProps={{
              disableUnderline: true,
              className: classes.customTextField, // Aplicar la clase customTextField
            }}
          /></Item>
        </Grid>
        <Grid   item xs={12} md={6}  >
        <Item>  <TextField
            fullWidth
            rows={1}
            placeholder="Correo Electrónico"
            variant="outlined"
            InputProps={{
              disableUnderline: true,
              className: classes.customTextField, // Aplicar la clase customTextField
            }}
          /></Item>
          <Item>  <TextField
            fullWidth
            rows={1}
            placeholder="Origen"
            variant="outlined"
            InputProps={{
              disableUnderline: true,
              className: classes.customTextField, // Aplicar la clase customTextField
            }}
          /></Item>
           <Item> <TextField
            fullWidth
            rows={1}
            placeholder="Tipo de mercancía"
            variant="outlined"
            InputProps={{
              disableUnderline: true,
              className: classes.customTextField, // Aplicar la clase customTextField
            }}
          /></Item>
        </Grid> 
        <Grid item xs={12} >
        <Item>   <TextField
            fullWidth
            rows={1}
            placeholder="Otras Especificaciones"
            variant="outlined"
            InputProps={{
              disableUnderline: true,
              className: classes.customTextField,   style: { height: '161px' }
            }}
            
          /></Item>
        </Grid>
        </Grid>
    </Box>
          
          
          
          <br/> 
          {/* Otros campos de texto comentados */}
          <Box style={{ display:"flex",flexDirection:"row",justifyContent:"center",alignContent:"center",paddingBottom:"65px"  }}>  
          <Link to="/asesoriaSep" style={{ textDecoration: 'none' }}>
            <Button  style={{fontSize:"20px",width:"240px", display:"flex",flexDirection:"row",justifyContent:"center",alignContent:"center",backgroundColor: 'rgba(143, 13, 60, 1)', borderRadius: '40px', color: 'white' }} variant="contained">
              Enviar
            </Button>
          </Link>    
        </Box>    </Box>
      </Box> 
      <Footer />
    </div>
  );
}

export default AsesoriaSex;
