import { isMobile } from "react-device-detect";
import seguridad from "../../assets/servicios/seguridad.png";

import "./servicios.css";


function Seguridad() {
  return (
    <div
className={`carousel fade-in`}
      style={{
        borderRadius: "3rem",
        boxShadow:
          "0px 14px 20px 5px rgba(0, 0, 0, 0.25) , 0px -6px 2px 0px rgba(0, 0, 0, 0.25) inset",

        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        justifyContent: isMobile ? "" : "space-between",
        alignItems: "center",
        color: "rgba(143, 13, 60, 1)",
        gap: "1rem",
      }}
    >
      <div>
        <img className="fotito" src={seguridad} alt="" />
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <span
          className="texto1"
          style={{ fontWeight: "bold", alignSelf: "center" }}
        >
          SEGURIDAD JURÍDICA
        </span>
        <span
          className="texto2"
          style={{
            fontWeight: "300",
            alignSelf: "center",
            textAlign: "center",
            margin: "1rem ",
          }}
        >
          Al invertir en nuestros servicios usted puede estar tranquilo; aparte
          de estar capacitados y contar con amplia experiencia, le brindamos
          respaldo legal y fiscal a sus operaciones a través de nuestros
          abogados consultores, en caso de requerirse.
        </span>
      </div>
    </div>
  );
}

export default Seguridad;
