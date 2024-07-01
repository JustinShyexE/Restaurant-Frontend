import React from "react";
import { useState } from "react";
import Header from "../Components/Header";
import Button from "../Components/Button";
import Footer from "../Components/Footer";
import Socials from "../Components/Socials";
import Banner from "../Components/Banner";
import Food from "../Components/Food";
import Food2 from "../Components/Food2";
import Food3 from "../Components/Food3.jsx"
import Introduction from "../Components/Introduction.jsx";
import logo from "../images/vintage.png"
import CarouselFood from "../Components/CarouselFood.jsx"
import ButtonMobile from "../Components/ButtonMobile.jsx"
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
         <img id="logo" className="logo" alt="" src={logo} />
         <div className="content">
          <div>
             <div  className="buttons center-center gap-buttons-1">
               <Button link="/booking" over={setTrue} out={setFalse} />
               <ButtonMobile />
             </div>
           </div>
          <div id="triggerDiv" className="mainDiv">
              <div className="mainContent">
                 <Introduction />
                 <Food />
                 <Food2 />
                 <Banner />
                 <Food3 />
                 <Socials />
                 <CarouselFood />
              </div>
              <Footer />
          </div>
         </div>
        </div>
    </div>)
}

export default Home