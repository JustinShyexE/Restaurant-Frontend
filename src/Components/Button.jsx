import React from "react";


function Button(props){
    function execute(){
        props.out()
    }

 return( <div className="btnDiv" onMouseEnter={()=>(props.over())} onMouseLeave={execute}> <a href={props.link} className="button type--B">
    <div className="button__line"></div>
    <div className="button__line"></div>
    <span className="button__text">Book Now</span>
    <div className="button__drow1"></div>
    <div className="button__drow2"></div>
    </a>
    </div>
    )
}

export default Button