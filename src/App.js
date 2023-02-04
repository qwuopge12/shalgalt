import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./container/home/home";
import Red from "./container/medeelel/red";
import Green from "./container/medeelel/green";
import Blue from "./container/medeelel/blue";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="Red" element={<Red/>} />
        <Route path="Green" element={<Green/>} />
        <Route path="Blue" element={<Blue/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
