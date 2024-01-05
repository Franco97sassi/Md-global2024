import despacho from "../../assets/servicios/despacho.png";
import './style.css'
import { isMobile } from "react-device-detect";
function Despacho() {
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
          src={despacho}
          alt=""
        />
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
      <span className="texto1" style={{ fontWeight: "bold", alignSelf: 'center' }}>
        DESPACHO ADUANAL MX/USA
        </span>
        <span className="texto2" style={{ fontWeight: "300", alignSelf: 'center' , textAlign: 'center' , margin: '1rem '}}>
        Le ofrecemos una experiencia más amena al ofrecer 
una cuenta global de desaduanamiento entre México
y Estados Unidos. 
        </span>
      </div>
    </div>
  );
}

export default Despacho;