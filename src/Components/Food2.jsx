import React from "react";
import grill from "../images/grill.jpg"



function Food2(){
    return(<div className="food2">
        <div style={{backgroundImage:"url('"+grill+"')"}} className="foodImage bck">
        </div>
        <div className="fd2">
            <h2 className="fdTitle font-Playfair">OUR STAKE</h2>
            <p className="fdText font-Garamod">
            Better morning coffee and weekend delights. Better lunches, treats and celebrations. How? By refining simple recipes, experimenting and serving the result in beautiful surroundings.
            </p>
        </div>
    </div>)
}


export default Food2