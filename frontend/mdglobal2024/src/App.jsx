import { Link , BrowserRouter , Route , Routes} from "react-router-dom"
import Home from "./componentes/Home/Home"
import Servicios from "./componentes/Servicios/Servicios"


function App() {


  return (
    <BrowserRouter>
    
     <Routes>
      <Route path="/home" element={<Home></Home>}>  </Route>

      <Route path="/" element={<Home></Home>}>  </Route>
      <Route path="/servicios" element={<Servicios></Servicios>} >  </Route>

     </Routes>
    </BrowserRouter>
  )
}

export default App
