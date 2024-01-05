import { Link , BrowserRouter , Route , Routes} from "react-router-dom"
import Home from "./componentes/Home/Home"
import Servicios from "./componentes/Servicios/Servicios"
import Cotizar from "./componentes/cotizar/Cotizar"


function App() {


  return (
    <BrowserRouter>
    
     <Routes>
      <Route path="/home" element={<Home></Home>}>  </Route>

      <Route path="/" element={<Home></Home>}>  </Route>
      <Route path="/servicios" element={<Servicios></Servicios>} >  </Route>
      <Route path='/cotizar'element={<Cotizar></Cotizar>} ></Route>

     </Routes>
    </BrowserRouter>
  )
}

export default App
