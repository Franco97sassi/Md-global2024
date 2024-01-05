import logo from "../assets/Footer/logo.png";
import facebook from  "../assets/Footer/facebook.png";
import instagram from  "../assets/Footer/instagram.png";
import inLogo from  "../assets/Footer/inLogo.png";
import './style.css'
import { isMobile } from "react-device-detect";

function Footer() {
  return (
    <div className="footerAltura"
      style={{
        background: "linear-gradient(180deg, #8F96A4 0%, #323740 100%)",
  
        width:  '100vw',
        display: "flex",
        flexDirection: "row",
        alignItems: 'center',

        justifyContent: "space-between",
      }}
    >
        <div style={{ display: 'flex', alignItems: 'center' , marginLeft: '5%'  }}>
        <img style={{height: isMobile ? '50px' : null , width: isMobile ? '50px' : ''}} src={logo} alt="" />
        <span className="tituloo"
          style={{
            color: "white",
            marginLeft: "1rem",
            fontSize: isMobile ? '15px' : "25px",
            fontWeight: "600",
            whiteSpace: "nowrap",
            lineHeight: "15.2px",
          }}
        >
          MD GLOBAL <br />{" "}
          <span style={{ fontWeight: "600",       fontSize: isMobile ? '10px' : "15px", }}>
            TRADE SERVICES
          </span>{" "}
        </span>
      </div>
        <div style={{marginRight: '5%'}}>
            <div style={{display: 'flex' , marginBottom: '1rem',flexDirection: 'row', justifyContent: 'flex-end' , gap: '2px'}}>
              <img style={{height: isMobile ? '20px' : null }} src={instagram} alt="" />
              <img style={{height: isMobile ? '20px' : null }}  src={inLogo} alt="" />
              <img  style={{height: isMobile ? '20px' : null }} src={facebook} alt="" />
            </div>
            <span style={{justifyContent: 'flex-end' , whiteSpace: "nowrap", color: 'white'}}> {isMobile ? ('© MD GLOBAL 2023') : ('© MD GLOBAL TRADE SERVICES 2023, Todos los derechos reservados')  }</span></div>
    </div>
  );
}

export default Footer;
