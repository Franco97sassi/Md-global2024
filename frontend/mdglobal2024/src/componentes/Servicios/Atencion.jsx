import atencion from "../../assets/servicios/atencion.png";
import './style.css'
function Atencion() {
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
          src={atencion}
          alt=""
        />
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <span className="texto1" style={{ fontWeight: "bold"}}>
        ATENCIÓN PERSONALIZADA
        </span>
        <span className="texto2" style={{ fontWeight: "300",  marginRight: '15%'}}>
        Las necesidades cambian de sector en sector y 
cada cliente tiene las suyas; atendemos desde el 
ganado y las hortalizas, hasta maquinaria y equipo 
tecnológico. Nuestro enfoque es brindarle un servicio 
personalizado y atender sus operaciones de la mejor 
manera posible por cualquier aduana que requiera.
        </span>
      </div>
    </div>
  );
}

export default Atencion;
