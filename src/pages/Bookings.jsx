import React from "react";
import { useState } from "react";
import Button from "../Components/Button";
import ButtonMobile from "../Components/ButtonMobile";

function Bookings(){
   let [date, setDate]=useState(new Date().toISOString().split("T")[0])

   function handleDate(event){
    const value= event.target.value;
    setDate(value)
   }


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
         <div className="body center-center bodyBooking bck">
            <div className={hover? "bookingBlurDiv":null}></div>
             <div className="bookingDiv center-center">
             <input className="font-Garamod" name="date" defaultValue={new Date().toISOString().split("T")[0]} onChange={handleDate} min={date} aria-label="Date" type="date" />  
             <input defaultValue="12:00" step="900" id="time" name="time" type="time" className="font-Garamod" />
             <input placeholder="Your Name" className="input font-Garamod" type="text" />
             <input placeholder="E-mail / Phone number" className="input email font-Garamod" type="text"/>
             <input placeholder="Additional details" className="input bookingText font-Garamod" type="text" />
             <div className="bookingButton">
                <Button link="/booking" over={setTrue} out={setFalse} />
                <ButtonMobile />
             </div>
             </div>
         </div>
    </div>)
}


export default Bookings