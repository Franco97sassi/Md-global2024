import auditoria from "../../assets/servicios/auditoria.png";
import './style.css'
import { isMobile } from "react-device-detect";
function Auditoria() {
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
      <div  style={{marginLeft: isMobile ? ''  :'10%' }}>
        <img className="auditoria"

          src={auditoria}
          alt=""
        />
      </div>
      <div style={{ display: "flex", flexDirection: "column" ,marginLeft: isMobile ? '' :  '15%' }}>
      <span className="texto1" style={{ fontWeight: "bold", alignSelf: 'center' }}>
        AUDITORÍA PREVENTIVA
        </span>
        <span className="texto2" style={{ fontWeight: "300", alignSelf: 'center' , textAlign: 'center' , margin: '1rem '}}>
        Contrátenos para glosar y revisar sus pedimentos,
cumplimiento a programas IMMEX, diferimiento de IVA,
o cualquier otro programa de beneficio relativo al 
comercio exterior. 
        </span>
      </div>
    </div>
  );
}

export default Auditoria;