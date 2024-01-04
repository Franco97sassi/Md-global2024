import construccion2 from "../../assets/Home/home2.png";
import { isMobile } from "react-device-detect";
import './styles.css'
function Home2() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: isMobile ? 'column' : "row",
        gap: "1rem",
        alignItems: isMobile ? 'center' : 'center'
      }}
    >
      <div
        className="texto"
        style={{
          textAlign: "Left",
          display: "flex",
          flexDirection: "column",
          marginTop: "10%",
          marginBottom: '1rem',
          marginLeft: "5%",
          color: "#8F0D3C",
        }}
      >
        <span
          className="textoo1"
          style={{
            fontWeight: "bold",

            marginBottom: "1rem",
          }}
        >
          ACERCA DE MD GLOBAL
        </span>
        <span
          className="textoo2"
          style={{

            fontWeight: "200",
            lineHeight: "25px",
            marginBottom: "1rem",
            maxWidth: isMobile ? '300px' : '50rem'

          }}
        >
          Fue establecido con el objetivo de complementar las operaciones de
          comercio exterior de nuestros clientes a través de un servicio
          integral, eficiente y personalizado. Llevamos más de 20 años
          despachando y clasificando mercancías evolucionando para resolver
          cualquier necesidad logística.
        </span>

        <span
          className="textoo1"
          style={{
            fontWeight: "500",

            fontWeight: '600',
            maxWidth: isMobile ? '320px' : null,
            marginBottom: '10px'

        
          }}
        >
          Conoce nuestra nueva herramienta de cotización <br />
        </span>
        <span className="textoo2"> Cotiza con inteligencia</span>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",

            marginTop: "1rem",
            justifyContent: "left",
          }}
        >
          <button
            className="botonHome1"
            style={{
              color: "white",
              paddingLeft: "2.5rem",
              paddingRight: "2.5rem",
              borderRadius: "1.5rem",
              marginRight: "1rem",
              width: "240px",
              height: "43px",
              fontSize: "20px",
            }}
          >
            Cotizar ahora
          </button>
        </div>
      </div>
      <div style={{ marginTop: isMobile ? '0.5rem' : "5rem", marginRight: "5%" }}>
        <img  style={{height: isMobile ? '300px' : null ,
      width: isMobile ? '350px' : null}} className="fotohome1" src={construccion2} alt="" />
      </div>
    </div>
  );
}

export default Home2;
