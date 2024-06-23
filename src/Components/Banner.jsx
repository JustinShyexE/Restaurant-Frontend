import React from "react";
import food from "../images/foody.jpg"


function Banner(){
     return <div className="bn center-center">
         <div style={{backgroundImage:"url('"+food+"')"}} className="bnImg bck"></div>
         <div className="banner">
                <h2 className="bnTitle font-Playfair">OUR FOOD</h2>
                <p className="bnText font-Garamod">
                Innovative food, explosive flavours and sustainable practises are the core pillars of Scully. We aim to be as net zero waste as possible,
                 utilising the whole ingredient in innovative ways. Fermentation is the main way 
                 Scully achieves this, with the duration of the ferments ranging from days to years before being presented on the menu.
                </p>
         </div>
     </div>
}

export default Banner