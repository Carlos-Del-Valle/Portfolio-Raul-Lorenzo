// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { BrowserRouter } from "react-router-dom";

import NavBar from "./components/NavBar";
import MainBody from "./components/MainBody";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <div className="flex">
        <NavBar />
        <MainBody />
      </div>
    </BrowserRouter>
  );
}

export default App;
