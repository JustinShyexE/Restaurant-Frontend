import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home"
import Bookings from "./pages/Bookings"

function App(){
     return(<div>
         <BrowserRouter>
            <Routes>
                <Route index element={<Home />} />
                <Route path="/booking" element={<Bookings />} /> 
            </Routes>
         </BrowserRouter>
     </div>)
}



export default App