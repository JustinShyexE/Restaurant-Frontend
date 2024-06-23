import React from "react";
import fries from "../images/fries.jpg"

function Food3(){
   return (<div className="food2 ">
    <div className="fdRight">
     <div className="fd2 fd3">
           <h2 className="fdTitle font-Playfair">OUR CHIPS</h2>
           <p className="fdText font-Garamod">
           Indulge in our hand-cut, perfectly seasoned chips, cooked to a golden crisp. Made from the finest potatoes,
            our chips are the perfect side dish or snack to satisfy your cravings.
           </p>
    </div>
    </div>
    <div style={{backgroundImage:"url('"+fries+"')"}} className="foodImage bck">
    </div>
</div>)
}

export default Food3;