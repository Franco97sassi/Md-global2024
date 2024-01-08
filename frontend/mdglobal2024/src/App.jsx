import { Link, BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./componentes/Home/Home";
import Servicios from "./componentes/Servicios/Servicios";
import Cotizar from "./componentes/cotizar/Cotizar";
import Cotizacion from "./componentes/Cotizacion/Cotizacion";
// import Asesoria from "./componentes/Asesoria/Asesoria"
import Aduanas from "./componentes/Aduanas/Aduanas";
import Nosotros from "./componentes/Nosotros/Nosotros";
import Navbar from "./componentes/Navbar";
import Footer from "./componentes/Footer";
import AsesoriaPrim from "./componentes/Asesoria/Asesoria1";
import AsesoriaSeg from "./componentes/Asesoria/Asesoria2";
import AsesoriaTer from "./componentes/Asesoria/Asesoria3";
import AsesoriaCuar from "./componentes/Asesoria/Asesoria4";
import AsesoriaSex from "./componentes/Asesoria/Asesoria6";
import AsesoriaSep from "./componentes/Asesoria/Asesoria7";
import AsesoriaQuin from "./componentes/Asesoria/Asesoria5";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home></Home>}>
          {" "}
        </Route>

        <Route path="/" element={<Home></Home>}>
          {" "}
        </Route>
        <Route path="/servicios" element={<Servicios></Servicios>}>
          {" "}
        </Route>

        <Route path="/cotizar" element={<Cotizacion />}>
          {" "}
        </Route>
        <Route path="/aduanas" element={<Aduanas />}>
          {" "}
        </Route>
        <Route path="/nosotros" element={<Nosotros />}>
          {" "}
        </Route>

        <Route path="/asesoriaPrim" element={<AsesoriaPrim />}>
          {" "}
        </Route>
        <Route path="/asesoriaSeg" element={<AsesoriaSeg />}>
          {" "}
        </Route>
        <Route path="/asesoriaTer" element={<AsesoriaTer />}>
          {" "}
        </Route>
        <Route path="/asesoriaCuar" element={<AsesoriaCuar />}>
          {" "}
        </Route>
        <Route path="/asesoriaQuin" element={<AsesoriaQuin />}>
          {" "}
        </Route>
        <Route path="/asesoriaSex" element={<AsesoriaSex />}>
          {" "}
        </Route>
        <Route path="/asesoriaSep" element={<AsesoriaSep />}>
          {" "}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
