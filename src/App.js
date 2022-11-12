import "./App.css";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import PlaceToStay from "./pages/PlaceToStay";

import {Routes, Route} from "react-router-dom"

function App() {
  return (
    <div className="text-gray-800 box-border  font-redRose ">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/place-to-stay" element={<PlaceToStay/>}/>

      </Routes>
      
      
      <Footer />
    </div>
  );
}

export default App;
