import React from "react";
import telephone from "../images/telephone.png"
import email from "../images/email.png"
import instagram from "../images/instagram.png"
import facebook from "../images/facebook.png"
import x from "../images/x.png"

function Footer(){
    return(<div className="ft">
        <div className="ftWrapper center-center">
           <div className="ftOpening">
                <h2 className="ftTitles font-Playfair">Opening Hours</h2>
                <div className="ftDaysDiv center-center">
                  <div className="ftDays"> <p className="font-Garamod">Monday</p><p className="center ftHours font-Garamod">   10:00 - 13:00    </p></div>
                  <div className="ftDays"> <p className="font-Garamod">Tuesday</p><p className="center ftHours font-Garamod">   10:00 - 13:00   </p></div>
                  <div className="ftDays"> <p className="font-Garamod">Wednesday</p><p className="center ftHours font-Garamod">  10:00 - 13:00  </p></div>
                  <div className="ftDays"> <p className="font-Garamod">Thursday</p><p className="center ftHours font-Garamod">   10:00 - 13:00  </p></div>
                  <div className="ftDays"> <p className="font-Garamod">Friday</p><p className="center ftHours font-Garamod" >    10:00 - 13:00  </p></div>
                  <div className="ftDays"> <p className="font-Garamod">Saturday</p><p className="center ftHours font-Garamod">    10:00 - 13:00  </p></div>
                  <div className="ftDays"> <p className="font-Garamod">Sunday</p><p className="center ftHours font-Garamod">      Closed         </p></div>
                </div>
            </div>
          <div className="ftAC">
            <div className="ftAddress text-center">
                <h2 className="ftTitles font-Playfair">Address</h2>
                <div className="font-Garamod">
                  Victoria Station, Victoria St, Pimlico, London SW1E 5ND
                </div>
            </div>
            <div className="ftContactUs">
               <h2 className="ftTitles font-Playfair">Contact us</h2>
               <div className="ftContact center-center">
                   <a href="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRlQqSzXfKsHhHCcDqXttwKwFPtGmCSFwMFqvSzlPPwqWzWpjNHzjGmzHsQvRHXjSnfKbPq">
                     <img src={email} alt="" height={25} width={25} />
                   </a>
                   <a href="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRlQqSzXfKsHhHCcDqXttwKwFPtGmCSFwMFqvSzlPPwqWzWpjNHzjGmzHsQvRHXjSnfKbPq">
                     <div className="font-Garamod">stoneandgrillvictoria@gmail.com</div>
                  </a>
               </div>
               <div className="ftContact center-center">
                  <a href="tel:07442569505"><img src={telephone} alt="" height={25} width={25} /></a>
                   <a href="tel:07442569505"><div className="font-Garamod"> 0203 829 5446</div></a>
               </div>
            </div>
         </div>
         <div className="ftGoogleMaps">
           <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8353.141428634612!2d-0.13153142757510586!3d51.50580734064945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604cf07e6e12f%3A0xb42c04ff23b07f7c!2sEkstedt%20at%20The%20Yard!5e0!3m2!1sen!2suk!4v1718043458375!5m2!1sen!2suk" 
                width="100%" height="100%"
            allowFullScreen loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="GoogleMaps"
             >
            </iframe>
           </div>

           <div className="center-center ftFollowus">
            <div className="ftContactUs ">
                  <h2 className="ftTitles font-Playfair">Follow us</h2>
                  <div className="center-center ftIcons">
                      <a href="/"><img src={instagram} alt="instagram" height={40} width={40} /></a>
                      <a href="/"><img src={x} alt="twitter" height={40} width={40} /></a>
                      <a href="/"><img src={facebook} alt="facebook" height={40} width={40} /></a>
                  </div>
             </div>
            </div>
      
      
        </div>

  

        <div className="ftCopyRight">@Copright Reserved 2024</div>
    </div>)
}
export default Footer