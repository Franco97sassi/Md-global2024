import seguridad from "../../assets/servicios/seguridad.png";

function Seguridad() {
  return (
    <div
      style={{

        borderRadius: '3rem',
        boxShadow:
          "0px 14px 20px 5px rgba(0, 0, 0, 0.25) , 0px -6px 2px 0px rgba(0, 0, 0, 0.25) inset",
        width: "1803px",
        height: "847px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        color: 'rgba(143, 13, 60, 1)',
        gap: '1rem'
      }}
    >
      <div>
        <img
          style={{ width: "757px", height: "654px" }}
          src={seguridad}
          alt=""
        />
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <span style={{ fontWeight: "bold", fontSize: "48px" }}>
        SEGURIDAD JURÍDICA
        </span>
        <span style={{ fontWeight: "300", fontSize: "30px" , marginRight: '15%'}}>
        Al invertir en nuestros servicios usted puede estar 
tranquilo; aparte de estar capacitados y contar con
amplia experiencia, le brindamos respaldo legal y 
fiscal a sus operaciones a través de nuestros
abogados consultores, en caso de requerirse.

        </span>
      </div>
    </div>
  );
}

export default Seguridad;