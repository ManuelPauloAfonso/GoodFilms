import React from "react";

import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Home from '../pages/Home'
import Favoritos from '../pages/Favoritos'

export default function Rotas(){

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/"  element={<Home />} />
                <Route path="/Favoritos" element={<Favoritos />} />


  
         
            </Routes>
      </BrowserRouter>
    )
}