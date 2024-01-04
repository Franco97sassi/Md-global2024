import manito from "../../assets/Home/manito.png";
import casita from "../../assets/Home/casita.png";
import martillo from "../../assets/Home/martillo.png";
import { useState } from "react";

function Home3() {
    const [isHovered1, setIsHovered1] = useState(false);
    const [isHovered2, setIsHovered2] = useState(false);
    const [isHovered3, setIsHovered3] = useState(false);
  
    const handleMouseEnter = (divNumber) => {
      if (divNumber === 1) {
        setIsHovered1(true);
        setIsHovered2(false);
        setIsHovered3(false);
      } else if (divNumber === 2) {
        setIsHovered1(false);
        setIsHovered2(true);
        setIsHovered3(false);
      } else if (divNumber === 3) {
        setIsHovered1(false);
        setIsHovered2(false);
        setIsHovered3(true);
      }
    };
  
    const handleMouseLeave = () => {
      setIsHovered1(false);
      setIsHovered2(false);
      setIsHovered3(false);
    };
  
    return (  <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          color: "white",
        }}
      >
        <span
          style={{
            fontWeight: "bold",
            fontSize: "50px",
            marginTop: "10rem",
            lineHeight: "50px",
          }}
        >
          Servicios de primera calidad <br />{" "}
        </span>
        <span style={{ fontSize: "30px", fontWeight: "300" }}>
          A través de nuestros años de experiencia hemos perfeccionado cada
          servicio.
        </span>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            gap: "17rem",
            marginTop: "10rem",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              backgroundColor: "white",
              width: isHovered1 ? "400px" : "284px",
              height: isHovered1 ? "400px" : "284px",
              borderRadius: "1rem",
              alignItems: "center",
              transition: "width 0.5s, height 0.5s",
              boxShadow: '0px 14px 20px 5px rgba(0, 0, 0, 0.25), 0px -6px 2px 0px rgba(0, 0, 0, 0.25) inset',
            }}
            onMouseEnter={() => handleMouseEnter(1)}
            onMouseLeave={handleMouseLeave}
          >
            <img src={manito} alt="" />
            {!isHovered1 ? null : (
              <div style={{            color: "#8F0D3C", textAlign: "center" }}>
                {" "}
                <span style={{ fontWeight: "500", fontSize: "28px" }}>
                  Servicio Personalizado <br />
                </span>
                <span style={{ fontWeight: "300", fontSize: "20px" }}>
                  Ahorra tiempo y dinero con nosotros, garantizamos los
                  mejores precios de fabricantes.
                </span>
              </div>
            )}
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              backgroundColor: "white",
              width: isHovered2 ? "400px" : "284px",
              height: isHovered2 ? "400px" : "284px",
              borderRadius: "1rem",
              alignItems: "center",
              transition: "width 0.5s, height 0.5s",
              boxShadow: '0px 14px 20px 5px rgba(0, 0, 0, 0.25), 0px -6px 2px 0px rgba(0, 0, 0, 0.25) inset'
            }}
            onMouseEnter={() => handleMouseEnter(2)}
            onMouseLeave={handleMouseLeave}
          >
            <img src={casita} alt="" />
            {!isHovered2 ? null : (
              <div style={{             color: "#8F0D3C", textAlign: "center" }}>
                {" "}
                <span style={{ fontWeight: "500", fontSize: "28px" }}>
                  Despachos Nacionales
                  <br />
                </span>
                <span style={{ fontWeight: "300", fontSize: "20px" }}>
                  Ahorra tiempo y dinero con nosotros, garantizamos los
                  mejores precios de fabricantes.
                </span>
              </div>
            )}
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              backgroundColor: "white",
              width: isHovered3 ? "400px" : "284px",
              height: isHovered3 ? "400px" : "284px",
              borderRadius: "1rem",
              alignItems: "center",
              transition: "width 0.5s, height 0.5s",
              boxShadow: '0px 14px 20px 5px rgba(0, 0, 0, 0.25), 0px -6px 2px 0px rgba(0, 0, 0, 0.25) inset',
            }}
            onMouseEnter={() => handleMouseEnter(3)}
            onMouseLeave={handleMouseLeave}
          >
            <img src={martillo} alt="" />
            {!isHovered3 ? null : (
              <div style={{             color: "#8F0D3C", textAlign: "center"
               }}>
                {" "}
                <span style={{ fontWeight: "500", fontSize: "28px" }}>
                  Respaldo Jurídico <br />
                </span>
                <span style={{ fontWeight: "300", fontSize: "20px" }}>
                  Ahorra tiempo y dinero con nosotros, garantizamos los
                  mejores precios de fabricantes.
                </span>
              </div>
            )}
          </div>
        </div>
      </div>);
}

export default Home3;