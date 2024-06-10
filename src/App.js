import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home"
import FooterDel from "./pages/FooterDel";

function App(){
     return(<div>
         <BrowserRouter>
            <Routes>
                <Route index element={<Home />} />
                <Route path="/footer" element={<FooterDel />} /> 
            </Routes>
         </BrowserRouter>
     </div>)
}



export default App