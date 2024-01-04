import logo from "../assets/Home/logo.png";
import { Link } from "react-router-dom";
import '../componentes/Home/styles.css'
function Navbar() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        fontSize: "22px",
        lineHeight: "23.94px",
        alignItems: "center",

        marginTop: "35px",
        top: 0,
        position: "absolute",
        marginLeft: '3%',
        width: 'auto',
        gap: '3rem'
      }}
    >
      <div
        className="Logo"
        style={{
          textAlign: "center",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          marginLeft: "1%",
        }}
      >
        <img src={logo} alt="" style={{ width: "69.25px", height: "65px" }} />
        <span
          style={{
            color: "#8F0D3C",
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
      <Link
        to={"/home"}
        className="comun"
        style={{
        }}
      >
        Home
      </Link>

      <Link to={"/servicios"} className="comun" style={{  }}>
        Servicios
      </Link>
      <Link   to={'/cotizar'}className="comun" style={{  }}>
        Cotizar
      </Link>
      <Link   to={'/aduanas'}className="comun" style={{  }}>
        Aduanas
      </Link>
      <Link  to={'/nosotros'}className="comun" style={{  }}>
        Nosotros
      </Link>
    </div>
  );
}

export default Navbar;
