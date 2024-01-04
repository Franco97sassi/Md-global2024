import construccion2 from "../../assets/Home/home2.png";

function Home2() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap: "1rem",
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
          className="texto1"
          style={{
            fontWeight: "bold",

            marginBottom: "1rem",
          }}
        >
          ACERCA DE MD GLOBAL
        </span>
        <span
          className="texto2"
          style={{

            fontWeight: "200",
            lineHeight: "25px",
            marginBottom: "1rem",
          }}
        >
          Fue establecido con el objetivo de complementar las operaciones de
          comercio exterior de nuestros clientes a través de un servicio
          integral, eficiente y personalizado. Llevamos más de 20 años
          despachando y clasificando mercancías evolucionando para resolver
          cualquier necesidad logística.
        </span>

        <span
          className="texto1"
          style={{
            fontWeight: "bold",

            whiteSpace: "nowrap",
          }}
        >
          Conoce nuestra nueva herramienta de cotización
        </span>
        <span className="texto2"> Cotiza con inteligencia</span>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",

            marginTop: "1rem",
            justifyContent: "center",
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
      <div style={{ marginTop: "5rem", marginRight: "5%" }}>
        <img className="fotohome1" src={construccion2} alt="" />
      </div>
    </div>
  );
}

export default Home2;
