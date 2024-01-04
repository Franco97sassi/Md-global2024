import logo from "../assets/Footer/logo.png";
import facebook from  "../assets/Footer/facebook.png";
import instagram from  "../assets/Footer/instagram.png";
import inLogo from  "../assets/Footer/inLogo.png";
function Footer() {
  return (
    <div
      style={{
        background: "linear-gradient(180deg, #8F96A4 0%, #323740 100%)",
        height: "211px",
        width: '100vw',
        display: "flex",
        flexDirection: "row",
        alignItems: 'center',

        justifyContent: "space-between",
      }}
    >
        <div style={{ display: 'flex', alignItems: 'center' , marginLeft: '5%'  }}>
        <img src={logo} alt="" />
        <span className="tituloo"
          style={{
            color: "white",
            marginLeft: "1rem",
            fontSize: "25px",
            fontWeight: "600",
            whiteSpace: "nowrap",
            lineHeight: "15.2px",
          }}
        >
          MD GLOBAL <br />{" "}
          <span style={{ fontWeight: "600", fontSize: "15px" }}>
            TRADE SERVICES
          </span>{" "}
        </span>
      </div>
        <div style={{marginRight: '5%'}}>
            <div style={{display: 'flex' , marginBottom: '1rem',flexDirection: 'row', justifyContent: 'flex-end' , gap: '15px'}}>
              <img src={instagram} alt="" />
              <img src={inLogo} alt="" />
              <img src={facebook} alt="" />
            </div>
            <span style={{justifyContent: 'flex-end' , whiteSpace: "nowrap", color: 'white'}}>© MD GLOBAL TRADE SERVICES 2023, Todos los derechos reservados</span></div>
    </div>
  );
}

export default Footer;
