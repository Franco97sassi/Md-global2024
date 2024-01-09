import React from 'react';
import { Box, Button, Grid, TextField, Typography, makeStyles, useMediaQuery } from '@material-ui/core';
import { Link, unstable_HistoryRouter } from 'react-router-dom';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import HamburguesaMenu from '../Menu';

const useStyles = makeStyles({
  customTextField: {
    backgroundColor: 'rgba(240, 240, 240, 1)',
    borderRadius: '40px',
    '& .MuiInputBase-input': {
      paddingTop: '15px',
      fontSize: '25px',
      color: 'rgba(143, 13, 60, 1)',
     
    },
    '& .MuiOutlinedInput-root': {
      borderRadius: '40px',
      borderColor: 'rgba(240, 240, 240, 1)',
    },
  },
  customGridItem: {
    maxWidth: '100%', // Asegúrate de que el Grid item no exceda el ancho de la pantalla
    flexBasis: 'auto', // Permite que el tamaño se ajuste automáticamente
    
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
  
  const isNonMobileScreens = useMediaQuery('(min-width: 1000px)');
  const [formValues, setFormValues] = React.useState({
    nombre: '',
    telefono: '',
    destino: '',
    volumen: '',
    email: '',
    origen: '',
    tipoMercancia: '',
    especificaciones: '',
  });
  const [submitAttempted, setSubmitAttempted] = React.useState(false);

  const handleChange = (event) => {
    setFormValues({ ...formValues, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevenir el comportamiento predeterminado del formulario

    setSubmitAttempted(true);
    if (Object.values(formValues).every(value => value !== '')) {
      // Lógica para enviar datos
    }
  };

  const showError = (fieldName) => {
    return submitAttempted && formValues[fieldName] === '';
  };
  return (
    <div>
       <header>{isNonMobileScreens ? <Navbar /> : <HamburguesaMenu />}</header>
      <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>   
        <Box
          component="form"
          // sx={{
          //   '& > :not(style)': { m: 5, width: '25ch' },
          // }}
          noValidate
          autoComplete="off"
        > 
          
           
          <Typography style={{ fontSize: '3em' ,fontWeight:600,paddingTop:"219px"}}   className={classes.centeredText} >
          PERSONALIZAR COTIZACIÓN

        </Typography>
        <Typography style={{ fontSize: '1.875em',paddingBottom:"63px"  }} className={classes.centeredText}>
        Con los siguientes datos podremos brindarte una mejor cotización de tu interés        
        </Typography>
          <Box >
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={12} md={6}  >
          <Item>  <TextField
             name="nombre"
             value={formValues.nombre}
             onChange={handleChange}
            fullWidth
            rows={1}
            placeholder="Nombre"
            variant="outlined"
            InputProps={{
              disableUnderline: true,
              className: classes.customTextField, // Aplicar la clase customTextField
            }}
          />  {showError('nombre') && <Typography color="error">Campo requerido</Typography>}
          </Item>
         <Item>   <TextField
          name="telefono"
          value={formValues.telefono}
          onChange={handleChange}
            fullWidth
            rows={1}
            placeholder="Teléfono"
            variant="outlined"
            InputProps={{
              disableUnderline: true,
              className: classes.customTextField, // Aplicar la clase customTextField
            }}
          /> {showError('telefono') && <Typography color="error">Campo requerido</Typography>}</Item>
         <Item>  <TextField
         name="destino"
         value={formValues.destino}
         onChange={handleChange}
            fullWidth
            rows={1}
            placeholder="Destino"
            variant="outlined"
            InputProps={{
              disableUnderline: true,
              className: classes.customTextField, // Aplicar la clase customTextField
            }}
          /> {showError('destino') && <Typography color="error">Campo requerido</Typography>}</Item>
         <Item>  <TextField
         name="volumen"
         value={formValues.volumen}
         onChange={handleChange}
            fullWidth
            rows={1}
            placeholder="Volumen"
            variant="outlined"
            InputProps={{
              disableUnderline: true,
              className: classes.customTextField, // Aplicar la clase customTextField
            }}
          /> {showError('volumen') && <Typography color="error">Campo requerido</Typography>}</Item>
        </Grid>
        <Grid   item xs={12} md={6}  >
        <Item>  <TextField
        name="email"
        value={formValues.email}
        onChange={handleChange}
            fullWidth
            rows={1}
            placeholder="Correo Electrónico"
            variant="outlined"
            InputProps={{
              disableUnderline: true,
              className: classes.customTextField, // Aplicar la clase customTextField
            }}
          /> {showError('email') && <Typography color="error">Campo requerido</Typography>}</Item>
          <Item>  <TextField
          name="origen"
          value={formValues.origen}
          onChange={handleChange}
            fullWidth
            rows={1}
            placeholder="Origen"
            variant="outlined"
            InputProps={{
              disableUnderline: true,
              className: classes.customTextField, // Aplicar la clase customTextField
            }}
          /> {showError('origen') && <Typography color="error">Campo requerido</Typography>}</Item>
           <Item> <TextField
           name="tipoMercancia"
           value={formValues.tipoMercancia}
           onChange={handleChange}
            fullWidth
            rows={1}
            placeholder="Tipo de mercancía"
            variant="outlined"
            InputProps={{
              disableUnderline: true,
              className: classes.customTextField, // Aplicar la clase customTextField
            }}
          /> {showError('tipoMercancia') && <Typography color="error">Campo requerido</Typography>}</Item>
        </Grid> 
        <Grid item xs={12} >
        <Item>   <TextField
         name="especificaciones"  
         value={formValues.especificaciones}
         onChange={handleChange}
            fullWidth
            rows={1}
            placeholder="Otras Especificaciones"
            variant="outlined"
            InputProps={{
              disableUnderline: true,
              className: classes.customTextField,   style: { height: '161px' }
            }}
            
          /> {showError('especificaciones') && <Typography color="error">Campo requerido</Typography>}</Item>
        </Grid>
        </Grid>  
    </Box>
          
          
          
          <br/> 
          {/* Otros campos de texto comentados */}
          <Box style={{ display:"flex",flexDirection:"row",justifyContent:"center",alignContent:"center",paddingBottom:"65px"  }}>  
          <Link to="/asesoriaSep" style={{ textDecoration: 'none' }}>
            <Button className='boton' onClick={handleSubmit} style={{fontSize:"20px",width:"240px", display:"flex",flexDirection:"row",justifyContent:"center",alignContent:"center",backgroundColor: 'rgba(143, 13, 60, 1)', borderRadius: '40px', color: 'white' }} variant="contained">
              Enviar
            </Button>
          </Link>    
        </Box>  
          </Box>
      </Box> 
      <Footer />
    </div>
  );
}

export default AsesoriaSex;
