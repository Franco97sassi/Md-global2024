import permisos from "../../assets/servicios/permisos.png";
import './style.css'
function Permisos() {
  return (
    <div className="carousel"
      style={{

        borderRadius: '3rem',
        boxShadow:
          "0px 14px 20px 5px rgba(0, 0, 0, 0.25) , 0px -6px 2px 0px rgba(0, 0, 0, 0.25) inset",

        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        color: 'rgba(143, 13, 60, 1)',
        gap: '1rem'
      }}
    >
      <div>
      <img className="fotito"
          src={permisos}
          alt=""
        />
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <span className="texto1" style={{ fontWeight: "bold"}}>
        PERMISOS NOMS/RRNA
        </span>
        <span  className="texto2"style={{ fontWeight: "300", marginRight: '15%'}}>
        Asesoría y gestión de permisos previos, NOMS, y
otras RRNA (restricciones y regulaciones
 no arancelarias).

        </span>
      </div>
    </div>
  );
}

export default Permisos;