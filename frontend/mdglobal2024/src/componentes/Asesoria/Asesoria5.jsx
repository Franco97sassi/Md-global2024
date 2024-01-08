import React from 'react';
import { Box, Button, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';
import Footer from '../Footer';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  centeredText: {
    textAlign: 'center',
    color: "#8F0D3C",
  },
  tabRoot: {
    backgroundColor: '#FFFFFF', // Color de fondo para las pestañas no seleccionadas
    borderRadius: '20px', // Radio de borde para las pestañas
    margin: theme.spacing(1), // Espacio entre las pestañas
    boxShadow: '0px 13px 10px -7px rgba(0,0,0,0.15)', // Sombra de las pestañas
    textTransform: 'none', // Evita la transformación de texto en mayúsculas
   },
  tabSelected: {
    backgroundColor: '#D32F2F', // Color de fondo para la pestaña seleccionada
    color: '#FFFFFF', // Color de texto para la pestaña seleccionada
  },
  tabIndicator: {
    display: 'none', // Oculta el indicador predeterminado de Material-UI
    backgroundColor: '#D32F2F', // Color de fondo para la pestaña seleccionada
    color: '#FFFFFF', // Color de texto para la pestaña seleccionada
   },
  itemBox: {
    margin: '5px 0', // Añade un margen vertical de 10px y horizontal de 0
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: "rgba(240, 240, 240, 1)",
    width: "640px",
    height: "58px",
    borderRadius: "40px",
    padding: '0 20px',
  },
  mainContainer: {
    background: 'linear-gradient(to bottom, #FFFFFF, #D3D3D3)', // Gradiente de blanco a gris
    width: '1217px', // Ancho de 1217px
    height: '664px', // Alto de 664px
    padding: theme.spacing(2), // Espaciado interno
    margin: 'auto', // Centra la caja
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    // Añade aquí otros estilos que necesites
  },
}));
const AsesoriaQuin = () => {
  const [value, setValue] = React.useState('1');
  const classes = useStyles();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const items = ["Honorarios", "Validación", "Cove", "Revalidación", "Gastos Terminal", "MVyHC", "Contrapestación", "Sellos"];
  const prices = ["$5.000,00", "$3.000,00", "$200,00", "$500,00", "$2.000,00", "$500,00", "$50,00", "$200,00"];
  const getTabPanelStyle = (tabValue) => {
    return {
      backgroundColor: value === tabValue ? 'white' : '', // Aplica blanco solo a la pestaña seleccionada
      borderRadius: "40px",
      color: "black",
 
    };};
  
  return (
    <div>
      <Navbar />
      <Box  style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>   
      <Typography  style={{fontSize: '48px' ,fontWeight:600,paddingTop:"219px"}}className={classes.centeredText}  >
          Costos
        </Typography>
        <Typography style={{ fontSize: '30px',paddingBottom:"27px",color:"rgba(143, 150, 164, 1)" }}  >
          En este apartado se desglosarán los costos de importación por las diferentes vías
        </Typography>
         <TabContext value={value}  >
         <Box sx={{ borderBottom: 1, borderColor: 'divider'  }} style={{borderRadius:"50px",backgroundColor:"rgba(143, 13, 60, 1)",display:"flex",flexDirection:"row",justifyContent:"center",marginBottom:"25px"}}>
        <TabList onChange={handleChange} aria-label="lab API tabs example">
  <Tab label="Fronteriza" value="1" style={{ ...getTabPanelStyle('1')  }} />
  <Tab label="Marítima" value="2" style={{ ...getTabPanelStyle('2')}} />
  <Tab label="Aérea" value="3" style={{ ...getTabPanelStyle('3') }} />
</TabList>
        </Box>
          <TabPanel value="1"> {/* Contenido del TabPanel 1 */}</TabPanel>
          <TabPanel value="2"> {/* Contenido del TabPanel 2 */}</TabPanel>
          <TabPanel value="3"> {/* Contenido del TabPanel 3 */}</TabPanel>
        </TabContext>
        <Box  className={classes.mainContainer} style={{marginBottom:"80px"}}> 
        <Box style={{  
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',color:"rgba(143, 13, 60, 1)",
            fontWeight:700,
              width: "1124px", height: "47px", borderRadius: "40px", padding: '0 20px'
          }}>
           <Typography style={{fontWeight:700}}>Concepto</Typography>
           <Typography style={{fontWeight:700}}>Importación</Typography>
          </Box> 
        {items.map((item, index) => (
 
           <Box className={classes.itemBox} style={{  
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            backgroundColor: "rgba(240, 240, 240, 1)",color:"rgba(143, 13, 60, 1)"
            , width: "1124px", height: "47px", borderRadius: "40px", padding: '0 20px'
          }}>
            <Typography>{item}</Typography>
            <Typography>{prices[index]}</Typography>
          </Box> 
        )) }
        <Box style={{  
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',color:"rgba(143, 13, 60, 1)",
            fontWeight:700,
             width: "1124px", height: "47px", borderRadius: "40px", padding: '0 20px'
          }}>
            <Typography style={{fontWeight:700}}>Total</Typography>
            <Typography  style={{fontWeight:700}}>$11.450,00</Typography>
          </Box> 

        <Link to="/asesoriaSex" style={{ textDecoration: 'none' }}>
          <Button style={{ backgroundColor: 'rgba(143, 13, 60, 1)', borderRadius: "40px", color: 'white' }} variant="contained">
            Personalizar Cotización
          </Button>
        </Link>  </Box> 
          
      </Box>   
      <Footer />
    </div>
  );
}

export default AsesoriaQuin;
