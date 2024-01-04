import despacho from "../../assets/servicios/despacho.png";

function Despacho() {
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
          src={despacho}
          alt=""
        />
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <span style={{ fontWeight: "bold", fontSize: "48px" }}>
        DESPACHO ADUANAL MX/USA
        </span>
        <span style={{ fontWeight: "300", fontSize: "30px" , marginRight: '15%'}}>
        Le ofrecemos una experiencia más amena al ofrecer 
una cuenta global de desaduanamiento entre México
y Estados Unidos. 
        </span>
      </div>
    </div>
  );
}

export default Despacho;