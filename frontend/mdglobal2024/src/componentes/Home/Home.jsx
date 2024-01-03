import Navbar from "../Navbar";
import construccion from "../../assets/Home/homeConstruccion.png";
import construccion2 from "../../assets/Home/home2.png";
import rectangulo from "../../assets/Home/rectangulo.png";
import manito from "../../assets/Home/manito.png";
import casita from "../../assets/Home/casita.png";
import martillo from "../../assets/Home/martillo.png";
import "./style.css";
import { useState } from "react";
function Home() {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <>
      <header>
        <Navbar></Navbar>
      </header>
      <main>
        <section>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginTop: "18rem",
                marginLeft: "15rem",
                color: "#8F0D3C",
              }}
            >
              <span
                style={{
                  fontSize: "50px",
                  fontWeight: "bold",
                  lineHeight: "45px",
                  marginBottom: "1rem",
                }}
              >
                ALIADOS DE TUS <br />
                OPERACIONES DE COMERCIO <br />
                EXTERIOR.
              </span>
              <span style={{ fontSize: "25px", lineHeight: "25px" }}>
                En MD Global Trade Services somos un equipo de trabajo que{" "}
                <br />
                encuentra soluciones aduaneras para su cadena logística.
              </span>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  marginLeft: "25%",
                  marginTop: "1rem",
                }}
              >
                <button
                  style={{
                    backgroundColor: "#8F0D3C",
                    color: "white",
                    paddingLeft: "2.5rem",
                    paddingRight: "2.5rem",
                    borderRadius: "1.5rem",
                    marginRight: "1rem",
                  }}
                >
                  Cotizar ahora
                </button>
                <button
                  style={{
                    color: "#8F0D3C",
                    paddingLeft: "2.5rem",
                    paddingRight: "2.5rem",
                    borderRadius: "1.5rem",
                    border: "2px solid #8F0D3C",
                  }}
                >
                  Más servicios
                </button>
              </div>
            </div>
            <div style={{ marginTop: "5rem" }}>
              <img
                src={construccion}
                alt=""
                style={{ height: "753px", width: "886px" }}
              />
            </div>
          </div>
        </section>
        <section
          style={{
            backgroundImage: `url(${rectangulo})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "992px",
            width: "1920px",
          }}
        >
          <div
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
                  width: isHovered ? "400px" : "284px",
                  height: isHovered ? "400px" : "284px",
                  borderRadius: "1rem",
                  alignItems: "center",
                  transition: "width 0.3s, height 0.3s",
                }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <img src={manito} alt="" />
                {!isHovered ? null : (
                  <div style={{ color: "black", textAlign: "center" }}>
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
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-around",
                  backgroundColor: "white",
                  width: isHovered ? "400px" : "284px",
                  height: isHovered ? "400px" : "284px",
                  borderRadius: "1rem",
                  alignItems: "center",
                  transition: "width 0.3s, height 0.3s",
                }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <img src={casita} alt="" />
                {!isHovered ? null : (
                  <div style={{ color: "black", textAlign: "center" }}>
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
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-around",
                  backgroundColor: "white",
                  width: isHovered ? "400px" : "284px",
                  height: isHovered ? "400px" : "284px",
                  borderRadius: "1rem",
                  alignItems: "center",
                  transition: "width 0.3s, height 0.3s",
                }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <img src={martillo} alt="" />
                {!isHovered ? null : (
                  <div style={{ color: "black", textAlign: "center" }}>
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
          </div>
        </section>
        <section>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div
              style={{
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                marginTop: "18rem",
                marginLeft: "15rem",
                color: "#8F0D3C",
              }}
            >
              <span
                style={{
                  fontSize: "50px",
                  fontWeight: "bold",
                  lineHeight: "45px",
                  marginBottom: "1rem",
                }}
              >
                ACERCA DE MD GLOBAL
              </span>
              <span
                style={{
                  fontSize: "28px",
                  fontWeight: "200",
                  lineHeight: "25px",
                  marginBottom: "1rem",
                }}
              >
                Fue establecido con el objetivo de complementar las operaciones
                de comercio exterior de nuestros clientes a través de un
                servicio integral, eficiente y personalizado. Llevamos más de 20
                años despachando y clasificando mercancías evolucionando para
                resolver cualquier necesidad logística.
              </span>

              <span
                style={{
                  fontSize: "36px",
                  fontWeight: "bold",
                  lineHeight: "45px",
                  whiteSpace: "nowrap",
                }}
              >
                Conoce nuestra nueva herramienta de cotización
              </span>
              <span style={{ fontSize: "32px", fontWeight: "200" }}>
                {" "}
                Cotiza con inteligencia
              </span>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  marginLeft: "25%",
                  marginTop: "1rem",
                }}
              >
                <button
                  style={{
                    backgroundColor: "#8F0D3C",
                    color: "white",
                    paddingLeft: "2.5rem",
                    paddingRight: "2.5rem",
                    borderRadius: "1.5rem",
                    marginRight: "1rem",
                  }}
                >
                  Cotizar ahora
                </button>
              </div>
            </div>
            <div style={{ marginTop: "5rem" }}>
              <img
                src={construccion2}
                alt=""
                style={{ height: "753px", width: "886px" }}
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;
