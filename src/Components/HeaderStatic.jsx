import React from "react";
import { useState } from "react";
import {Twirl as Hamburger} from 'hamburger-react'


function HeaderStatic(){
    const [under, setUnder] = useState(false)

    function handleClick(){
        if(under===true){
            setUnder(false)
        }else{
            setUnder(true)
        }
    }
    window.addEventListener("DOMContentLoaded", function() {
        document.getElementById('underHeader').classList.add("header-hide")
    })
     
      return(<div>
         <div  className="center-center header-on">
         <img className="headerImg pad-left-header-1" alt="" src="https://image.similarpng.com/very-thumbnail/2021/07/Chef-restaurant-logo-illustrations-template-on-transparent-background-PNG.png"/>
         <div style={{overflow: "hidden"}} className="pad-right-header-1">
            <Hamburger color="black" size={28} direction="left"  toggled={under} toggle={handleClick} />
          </div>
       </div>
       <div id="underHeader" className={under? "HeaderOn center-center" : "HeaderOff center-center" }>
        <div className="underHeaderDiv center-center">
            <a className="btn" href="/">Menu</a>
            <a className="btn" href="/">Contact</a>
            <a className="btn" href="/">About us</a>
        </div>
     </div>
      </div>)
}

export default HeaderStatic