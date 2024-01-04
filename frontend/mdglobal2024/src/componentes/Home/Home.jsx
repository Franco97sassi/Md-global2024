import Navbar from "../Navbar";
import Home2 from "./Home2";
import construccion from "../../assets/Home/homeConstruccion.png";
import Home3 from "./Home3";
import rectangulo from "../../assets/Home/rectangulo.png";
import Footer from "../Footer";
import "./style.css";

function Home() {
  return (
    <>
      <header>
        <Navbar></Navbar>
      </header>
      <main>
        <section>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: '1rem',
              marginBottom: '2rem'
            }}
          >
            <div className="texto"
              style={{
                textAlign: "Left",
                display: "flex",
                flexDirection: "column",
                marginTop: "18rem",
                marginLeft: "5%",
                color: "#8F0D3C",
              }}
            >
              <span className="texto2"
                style={{

                  fontWeight: "bold",
                  
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

                  marginTop: "1rem",
                  justifyContent: "left",
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
              </div>
            </div>
            <div style={{ marginTop: "5rem", marginRight: "5%" }}>
              <img className="fotohome1" src={construccion} alt="" />
            </div>
          </div>
        </section>
        <section
          style={{
            backgroundImage: `url(${rectangulo})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "992px",
            width: "auto",
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
