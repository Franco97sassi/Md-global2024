import construccion2 from "../../assets/Home/home2.png";

function Home2() {
    return (           <div style={{ display: "flex", flexDirection: "row" ,  justifyContent: 'space-between' }}>
    <div
      style={{
        textAlign: "Left",
        display: "flex",
        flexDirection: "column",
        marginTop: "18rem",
        marginLeft: "5%",
        color: "#8F0D3C",
      }}
    >
      <span
        style={{
          fontSize: "50px",
          fontWeight: "bold",
          lineHeight: "45px",
          marginBottom: "1rem",
        }}
      >
        ACERCA DE MD GLOBAL
      </span>
      <span
        style={{
          fontSize: "28px",
          fontWeight: "200",
          lineHeight: "25px",
          marginBottom: "1rem",
        }}
      >
        Fue establecido con el objetivo de complementar las operaciones
        de comercio exterior de nuestros clientes a través de un
        servicio integral, eficiente y personalizado. Llevamos más de 20
        años despachando y clasificando mercancías evolucionando para
        resolver cualquier necesidad logística.
      </span>

      <span
        style={{
          fontSize: "36px",
          fontWeight: "bold",
          lineHeight: "45px",
          whiteSpace: "nowrap",
        }}
      >
        Conoce nuestra nueva herramienta de cotización
      </span>
      <span style={{ fontSize: "32px", fontWeight: "200" }}>
        {" "}
        Cotiza con inteligencia
      </span>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",

          marginTop: "1rem",
          justifyContent: 'center'
        }}
      >
        <button className="botonHome1"
          style={{

            color: 'white',
            paddingLeft: "2.5rem",
            paddingRight: "2.5rem",
            borderRadius: "1.5rem",
            marginRight: "1rem",
            width: '240px',
            height: '43px',
            fontSize: '20px'
          }}
        >
          Cotizar ahora
        </button>
      </div>
    </div>
    <div style={{ marginTop: "5rem" , marginRight: '5%'}}>
      <img
        src={construccion2}
        alt=""
        style={{ height: "753px", width: "886px" }}
      />
    </div>
  </div> );
}

export default Home2;