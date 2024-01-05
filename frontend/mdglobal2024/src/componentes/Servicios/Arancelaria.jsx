import { isMobile } from "react-device-detect";
import arancelaria from "../../assets/servicios/arancelaria.png";

function Arancelaria() {
  return (
    <div className={`carousel fade-in`}
      style={{

        borderRadius: '3rem',
        boxShadow:
          "0px 14px 20px 5px rgba(0, 0, 0, 0.25) , 0px -6px 2px 0px rgba(0, 0, 0, 0.25) inset",

        display: "flex",
        flexDirection: isMobile ? 'column' :  "row",
        justifyContent:  isMobile ? '' : "space-between",
        alignItems: "center",
        color: 'rgba(143, 13, 60, 1)',
        gap: '1rem'
      }}
    >
      <div>
      <img className="fotito"
          src={arancelaria}
          alt=""
        />
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
      <span className="texto1" style={{ fontWeight: "bold", alignSelf: 'center' }}>
        CLASIFICACIÓN ARANCELARIA
        </span>
        <span className="texto2" style={{ fontWeight: "300", alignSelf: 'center' , textAlign: 'center' , margin: '1rem '}}>
        La clasificación arancelaria determina el correcto pago 
de impuestos, derechos y RRNA aplicables a sus 
mercancías. ¡Consúltenos!

        </span>
      </div>
    </div>
  );
}

export default Arancelaria;
