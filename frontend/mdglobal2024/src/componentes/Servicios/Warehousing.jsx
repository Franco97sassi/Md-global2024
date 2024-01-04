import warehousing from "../../assets/servicios/warehousing.png";
import './style.css'

function Warehousing() {
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

          src={warehousing}
          alt=""
        />
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <span className="texto1" style={{ fontWeight: "bold",  }}>
          WAREHOUSING
        </span>
        <span className="texto2" style={{ fontWeight: "300", marginRight: '15%'}}>
          Soluciones en bodega seca o refrigerada, para almacenaje o revisión in
          & out.
        </span>
      </div>
    </div>
  );
}

export default Warehousing;
