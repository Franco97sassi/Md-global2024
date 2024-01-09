import Navbar from "../Navbar";
import { isMobile } from "react-device-detect";
import Home2 from "./Home2";
import construccion from "../../assets/Home/homeConstruccion.png";
import Home3 from "./Home3";
import rectangulo from "../../assets/Home/rectangulo.png";
import Footer from "../Footer";
import "./styles.css";
import HamburguesaMenu from "../Menu";
import LogoAnimation from "./LogoAnimation";
import { useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <header>{isMobile ? <HamburguesaMenu /> : <Navbar />}</header>

      <main>
        <LogoAnimation></LogoAnimation>
        <section>
          <div
            style={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              gap: "1rem",
              marginBottom: "2rem",
              alignItems: isMobile ? "center" : "center",
            }}
          >
            <div
              className="texto"
              style={{
                textAlign: "Left",
                display: "flex",
                flexDirection: "column",
                marginTop: isMobile ? "1rem" : "18rem",
                marginLeft: "5%",
                color: "#8F0D3C",
              }}
            >
              <span
                className="textoo1"
                style={{
                  fontWeight: "bold",

                  marginBottom: "1rem",
                }}
              >
                ALIADOS DE TUS <br />
                OPERACIONES DE COMERCIO <br />
                EXTERIOR.
              </span>
              <span
                className="textoo2"
                style={{
                  lineHeight: "25px",
                  maxWidth: isMobile ? "300px" : null,
                }}
              >
                En MD Global Trade Services somos un equipo de trabajo que{" "}
                <br />
                encuentra soluciones aduaneras para su cadena logística.
              </span>
              <div
                style={{
                  display: "flex",
                  flexDirection: isMobile ? "column" : "row",
                  alignItems: isMobile ? "left" : "center",
                  alignSelf: "center",
                  marginTop: "1rem",
                  justifyContent: "left",
                  gap: "1rem",
                }}
              >
                <button
                  className="botonHome1"
                  style={{
                    color: "white",
                    paddingLeft: "2.5rem",
                    paddingRight: "2.5rem",
                    borderRadius: "1.5rem",
                    marginRight: "1rem",
                    width: "240px",
                    height: "43px",
                    fontSize: "20px",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
                  }}
                >
                  Cotizar ahora
                </button>
                <Link to={('/servicios')}>
                  {" "}
                  <button
                    className="botonHome2"
                    style={{
                      paddingLeft: "2.5rem",
                      paddingRight: "2.5rem",
                      borderRadius: "1.5rem",
                      border: "2px solid #8F0D3C",
                      width: "240px",
                      height: "43px",
                      fontSize: "20px",
                    }}
                  >
                    Más servicios
                  </button>
                </Link>
              </div>
            </div>
            <div
              style={{
                marginTop: isMobile ? "0.5rem" : "5rem",
                marginRight: "5%",
              }}
            >
              <img
                className="fotohome1"
                src={construccion}
                alt=""
                style={{
                  height: isMobile ? "300px" : null,
                  width: isMobile ? "350px" : null,
                }}
              />
            </div>
          </div>
        </section>
        <section
          style={{
            backgroundImage: `url(${rectangulo})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: isMobile ? "1500px" : "835px",
            width: "100vw",
          }}
        >
          <Home3></Home3>
        </section>
        <section>
          <Home2></Home2>
        </section>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </>
  );
}

export default Home;
