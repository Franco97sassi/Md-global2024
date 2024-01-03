import { Link , BrowserRouter , Route , Routes} from "react-router-dom"
import Home from "./componentes/Home/Home"


function App() {


  return (
    <BrowserRouter>
    
     <Routes>
      <Route path="/home" element={<Home></Home>}>  </Route>

      <Route path="/" element={<Home></Home>}>  </Route>

     </Routes>
    </BrowserRouter>
  )
}

export default App
