import auditoria from "../../assets/servicios/auditoria.png";

function Auditoria() {
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
      <div style={{marginLeft: '10%'}}>
        <img
          style={{ width: "254px", height: "654px" }}
          src={auditoria}
          alt=""
        />
      </div>
      <div style={{ display: "flex", flexDirection: "column" ,marginLeft: '15%' }}>
        <span style={{ fontWeight: "bold", fontSize: "48px" }}>
        AUDITORÍA PREVENTIVA
        </span>
        <span style={{ fontWeight: "300", fontSize: "30px" , marginRight: '15%'}}>
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