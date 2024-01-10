import React from "react";
import {
  Box,
  Button,
  Grid,
  TextField,
  Typography,
  makeStyles,
  useMediaQuery,
} from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import HamburguesaMenu from "../Menu";
import "../Home/styles.css";
const useStyles = makeStyles({
  customTextField: {
    backgroundColor: "rgba(240, 240, 240, 1)",
    borderRadius: "40px",
    "& .MuiInputBase-root": {
      borderRadius: "40px",
    },
    "& .MuiInputBase-input": {
      paddingTop: "15px",
      fontSize: "1.5625em",
      color: "rgba(143, 13, 60, 1)",
      borderRadius: "40px",
    },
    "& .MuiOutlinedInput-root": {
      borderRadius: "40px",
      borderColor: "rgba(240, 240, 240, 1)",
    },
    "& .MuiInputBase-input::placeholder": {
      color: "rgba(143, 13, 60, 1)",
      opacity: 1,
    },
  },
  customGridItem: {
    maxWidth: "100%",
    flexBasis: "auto",
  },
  centeredText: {
    textAlign: "center",
    color: "#8F0D3C",
  },
  customLargeTextField: {
    height: "161px",
    "& .MuiInputBase-input": {
      height: "100%",
      paddingTop: "0px",
      paddingBottom: "0px",
    },
  },
});

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "transparent",
  boxShadow: "none",
  border: "none",
  ...theme.typography.body2,
  padding: theme.spacing(3),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const AsesoriaSex = () => {
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");

  const classes = useStyles();
  const navigate = useNavigate();
  const [formValues, setFormValues] = React.useState({
    nombre: "",
    telefono: "",
    destino: "",
    volumen: "",
    email: "",
    origen: "",
    tipoMercancia: "",
    especificaciones: "",
  });
  const [submitAttempted, setSubmitAttempted] = React.useState(false);

  const handleChange = (event) => {
    setFormValues({ ...formValues, [event.target.name]: event.target.value });
  };

  const showError = (fieldName) => {
    return submitAttempted && formValues[fieldName] === "";
  };

  const areAllFieldsCompleted = Object.values(formValues).every(
    (value) => value.trim() !== ""
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitAttempted(true);

    if (areAllFieldsCompleted) {
      navigate("/asesoriaSep");
    }
  };

  return (
    <div>
      <header>{isNonMobileScreens ? <Navbar /> : <HamburguesaMenu />}</header>
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
        }}
      >
        <Box component="form" noValidate autoComplete="off">
          <Typography
            style={{
              fontFamily: 'Archivo' ,
              fontSize: isNonMobileScreens ? "3em" : "1.875em",
              fontWeight: 'bold',
              paddingTop: isNonMobileScreens ? "219px" : "1.5em",
            }}
            className={classes.centeredText}
          >
            PERSONALIZAR COTIZACIÓN
          </Typography>
          <Typography
            style={{
              fontSize: isNonMobileScreens ? "1.875em" : "1em",
              paddingBottom: "63px",
            }}
            className={classes.centeredText}
          >
            Con los siguientes datos podremos brindarte una mejor cotización de
            tu interés
          </Typography>
          <Box>
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid item xs={12} md={6}>
                <Item>
                  <TextField
                    error={showError("nombre")}
                    name="nombre"
                    value={formValues.nombre}
                    onChange={handleChange}
                    fullWidth
                    rows={1}
                    placeholder="Nombre"
                    variant="outlined"
                    InputProps={{
                      disableUnderline: true,
                      className: classes.customTextField,
                    }}
                  />
                  {showError("nombre") && (
                    <Typography color="error">Campo requerido</Typography>
                  )}
                </Item>

                <Item>
                  <TextField
                    name="telefono"
                    value={formValues.telefono}
                    onChange={handleChange}
                    fullWidth
                    rows={1}
                    placeholder="Teléfono"
                    variant="outlined"
                    InputProps={{
                      disableUnderline: true,
                      className: classes.customTextField,
                    }}
                  />
                  {showError("telefono") && (
                    <Typography color="error">Campo requerido</Typography>
                  )}
                </Item>
                <Item>
                  <TextField
                    name="destino"
                    value={formValues.destino}
                    onChange={handleChange}
                    fullWidth
                    rows={1}
                    placeholder="Destino"
                    variant="outlined"
                    InputProps={{
                      disableUnderline: true,
                      className: classes.customTextField,
                    }}
                  />
                  {showError("destino") && (
                    <Typography color="error">Campo requerido</Typography>
                  )}
                </Item>
                <Item>
                  <TextField
                    name="volumen"
                    value={formValues.volumen}
                    onChange={handleChange}
                    fullWidth
                    rows={1}
                    placeholder="Volumen"
                    variant="outlined"
                    InputProps={{
                      disableUnderline: true,
                      className: classes.customTextField,
                    }}
                  />
                  {showError("volumen") && (
                    <Typography color="error">Campo requerido</Typography>
                  )}
                </Item>
              </Grid>
              <Grid item xs={12} md={6}>
                <Item>
                  <TextField
                    name="email"
                    value={formValues.email}
                    onChange={handleChange}
                    fullWidth
                    rows={1}
                    placeholder="Correo Electrónico"
                    variant="outlined"
                    InputProps={{
                      disableUnderline: true,
                      className: classes.customTextField,
                    }}
                  />
                  {showError("email") && (
                    <Typography color="error">Campo requerido</Typography>
                  )}
                </Item>
                <Item>
                  <TextField
                    name="origen"
                    value={formValues.origen}
                    onChange={handleChange}
                    fullWidth
                    rows={1}
                    placeholder="Origen"
                    variant="outlined"
                    InputProps={{
                      disableUnderline: true,
                      className: classes.customTextField,
                    }}
                  />
                  {showError("origen") && (
                    <Typography color="error">Campo requerido</Typography>
                  )}
                </Item>
                <Item>
                  <TextField
                    name="tipoMercancia"
                    value={formValues.tipoMercancia}
                    onChange={handleChange}
                    fullWidth
                    rows={1}
                    placeholder="Tipo de mercancía"
                    variant="outlined"
                    InputProps={{
                      disableUnderline: true,
                      className: classes.customTextField,
                    }}
                  />
                  {showError("tipoMercancia") && (
                    <Typography color="error">Campo requerido</Typography>
                  )}
                </Item>
              </Grid>
              <Grid item xs={12}>
                <Item>
                  <TextField
                    name="especificaciones"
                    value={formValues.especificaciones}
                    onChange={handleChange}
                    fullWidth
                    rows={1}
                    placeholder="Otras Especificaciones"
                    variant="outlined"
                    InputProps={{
                      disableUnderline: true,
                      className: classes.customTextField,
                      style: { height: "161px" },
                    }}
                  />
                  {showError("especificaciones") && (
                    <Typography color="error">Campo requerido</Typography>
                  )}
                </Item>
              </Grid>
            </Grid>
          </Box>
          <Box
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignContent: "center",
              paddingBottom: "65px",
            }}
          >
            <button
              className="botonHome1"
              onClick={handleSubmit}
              disabled={!areAllFieldsCompleted}
              style={{
                color: "white",
                paddingLeft: "2.5rem",
                paddingRight: "2.5rem",
                borderRadius: "1.5rem",
                marginRight: "1rem",
                width: "240px",
                height: "43px",
                fontSize: "20px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
                cursor: "pointer",
              }}
              variant="contained"
            >
              Enviar
            </button>
          </Box>
        </Box>
      </Box>
      <Footer />
    </div>
  );
};

export default AsesoriaSex;
