import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home"
import Bookings from "./pages/Bookings"
import Docs from "./pages/Docs";

function App(){
     return(<div>
         <BrowserRouter>
            <Routes>
                <Route index element={<Home />} />
                <Route path="/booking" element={<Bookings />} /> 
                <Route path="/docs" element={<Docs/>} /> 
            </Routes>
         </BrowserRouter>
     </div>)
}



export default App