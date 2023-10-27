import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Exhibitions from "./components/Exhibitions";
import Writings from "./components/Writings";
import CV from "./components/CV";


function App() {
  // const [count, setCount] = useState(0)

  return (
    
    
    
    
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/exhibitions" element={<Exhibitions/>}/>
        <Route path="/writings" element={<Writings/>}/>
        <Route path="/cv" element={<CV/>}/>     
        <Route path="/" element={<Exhibitions/>}/>
      </Routes>
    </Router>
    
  );
}

export default App;
