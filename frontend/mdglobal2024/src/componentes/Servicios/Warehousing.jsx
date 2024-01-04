import warehousing from "../../assets/servicios/warehousing.png";

function Warehousing() {
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
          src={warehousing}
          alt=""
        />
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <span style={{ fontWeight: "bold", fontSize: "48px" }}>
          WAREHOUSING
        </span>
        <span style={{ fontWeight: "300", fontSize: "30px" , marginRight: '15%'}}>
          Soluciones en bodega seca o refrigerada, para almacenaje o revisión in
          & out.
        </span>
      </div>
    </div>
  );
}

export default Warehousing;
