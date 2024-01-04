import logistica from "../../assets/servicios/logistica.png";
import './style.css'
function Logistica() {
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
          src={logistica}
          alt=""
        />
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <span className="texto1" style={{ fontWeight: "bold" }}>
        LOGÍSTICA
        </span>
        <span  className="texto2" style={{ fontWeight: "300",  marginRight: '15%'}}>
        Le ayudamos a agilizar cruces, coordinar 
cargas directas, traslados o cualquier necesidad 
logística que tenga.

        </span>
      </div>
    </div>
  );
}

export default Logistica;