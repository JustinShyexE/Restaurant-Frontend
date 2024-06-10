import React from "react";
import telephone from "../images/telephone.png"
import email from "../images/email.png"

function Footer(){
    return(<div className="ft">
           <div className="ftGoogleMaps">
           <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8353.141428634612!2d-0.13153142757510586!3d51.50580734064945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604cf07e6e12f%3A0xb42c04ff23b07f7c!2sEkstedt%20at%20The%20Yard!5e0!3m2!1sen!2suk!4v1718043458375!5m2!1sen!2suk" 
                width="100%" height="100%"
            allowFullScreen loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="GoogleMaps"
             >
            </iframe>
           </div>
           <div className="ftOpening">
                <h2 className="ftTitles">Opening Hours</h2>
                <div className="ftDaysDiv center-center">
                  <div className="ftDays"> <p>Monday</p><p className="center ftHours">   10:00 - 13:00    </p></div>
                  <div className="ftDays"> <p>Tuesday</p><p className="center ftHours">   10:00 - 13:00   </p></div>
                  <div className="ftDays"> <p>Wednesday</p><p className="center ftHours">  10:00 - 13:00  </p></div>
                  <div className="ftDays"> <p>Thursday</p><p className="center ftHours">   10:00 - 13:00  </p></div>
                  <div className="ftDays"> <p>Friday</p><p className="center ftHours" >    10:00 - 13:00  </p></div>
                  <div className="ftDays"> <p>Saturday</p><p className="center ftHours">    10:00 - 13:00  </p></div>
                  <div className="ftDays"> <p>Sunday</p><p className="center ftHours">      Closed         </p></div>
                </div>
            </div>
            <div className="ftAddress text-center">
                <h2 className="ftTitles">Address</h2>
                <div>
                  Victoria Station, Victoria St, Pimlico, London SW1E 5ND
                </div>
            </div>
            <div className="ftCopyRight">@Copright Reserved 2024</div>
            <div className="ftContactUs">
               <h2 className="ftTitles">Contact us</h2>
               <div className="ftContact center-center">
                   <a href="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRlQqSzXfKsHhHCcDqXttwKwFPtGmCSFwMFqvSzlPPwqWzWpjNHzjGmzHsQvRHXjSnfKbPq">
                     <img src={email} alt="" height={25} width={25} />
                   </a>
                   <a href="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRlQqSzXfKsHhHCcDqXttwKwFPtGmCSFwMFqvSzlPPwqWzWpjNHzjGmzHsQvRHXjSnfKbPq">
                     <div >stoneandgrillvictoria@gmail.com</div>
                  </a>
               </div>
               <div className="ftContact center-center">
                  <a href="tel:07442569505"><img src={telephone} alt="" height={25} width={25} /></a>
                   <a href="tel:07442569505"><div>0203 829 5446</div></a>
               </div>
            </div>
            <div className="ftContactUs">
                  <h2 className="ftTitles">Follow us</h2>
                  <div className="center-center ftIcons">
                      <a href="/"><img alt="" height={50} width={50} /></a>
                      <a href="/"><img alt="" height={50} width={50} /></a>
                      <a href="/"><img alt="" height={50} width={50} /></a>
                  </div>
            </div>
    </div>)
}
export default Footer