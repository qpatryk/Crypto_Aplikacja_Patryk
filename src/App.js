import { Routes, Route } from "react-router-dom";
import Home from "./pages/home"
import Crypto from "./pages/crypto"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home></Home>} />
        <Route path="/crypto" element={<Crypto></Crypto>} />
      </Routes>
    </div>
  );
}

export default App;
