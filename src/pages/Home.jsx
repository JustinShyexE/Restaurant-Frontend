import React from "react";
import { useState } from "react";
import Header from "../Components/Header";
import Button from "../Components/Button";
import Footer from "../Components/Footer";
//import useDetectScroll from '@smakss/react-scroll-direction';

function Home(){
  //const { scrollDir, scrollPosition } = useDetectScroll();
  const [hover, setHover] = useState(false)
  function setTrue(){
      setHover(true)
      console.log(hover)
  }
  function setFalse(){
    setHover(false)
    console.log(hover)
  }
    return(<div className="mainBody">
        <div className="body">
        <Header />
         <div className="background1">
            <div className={hover? "btnBackground":null}>
            </div>
         </div>
         <img id="logo" className="logo" alt="" src="https://image.similarpng.com/very-thumbnail/2021/07/Chef-restaurant-logo-illustrations-template-on-transparent-background-PNG.png" />
         <div className="content">
          <div>
             <div  className="buttons center-center gap-buttons-1">
               <Button over={setTrue} out={setFalse} />
             </div>
           </div>
          <div id="triggerDiv" className="mainDiv">

            
          </div>
         </div>
         <Footer />
        </div>
    </div>)
}

export default Home