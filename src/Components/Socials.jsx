import React from "react";
import instagram from "../images/insta.png"


function Socials(){
    var img =<img className="scImg" src={instagram} alt="social" />
    let img1={
        img:"https://images.picxy.com/cache/2021/3/26/3b5bb0917ad30902c09a4cce71f716a4.jpg",
        link:"instagram.com"
    }

    let img2={
        img:"https://healthfulblondie.com/wp-content/uploads/2022/03/Zucchini-Turkey-Meatballs-Keto-6-683x1024.jpg",
        link:"instagram.com"
    }
    let img3={
        img:"https://cdn.sanity.io/images/cctd4ker/production/9296da795070ca0b6d9147d9507ab54d9e2dba84-1440x960.jpg?w=3840&q=75&fit=clip&auto=format",
        link:"instagram.com"
    }
    let img4={
        img:"https://media.cnn.com/api/v1/images/stellar/prod/170124150418-18-fish-and-chips.jpg?q=w_3000,h_1995,x_0,y_0,c_fill",
        link:"instagram.com"
    }
    let img5={
        img:"https://createfood.co.uk/sites/default/files/styles/content_side_image_cover/public/2024-02/Classic%20-%20Gnocchi%20Textures3.jpg?itok=wfLQMEZy",
        link:"instagram.com"
    }
    let img6={
        img:"https://foodtofly.aena.es/medias/HomeFood-Sandwich-1600x700.jpg?context=bWFzdGVyfGltYWdlc3w4Nzk3NDJ8aW1hZ2UvanBlZ3xhR0kxTDJnd09DODRPVFkzTnpNeU5ESTRPRE13TDBodmJXVkdiMjlrTFZOaGJtUjNhV05vTFRFMk1EQjROekF3TG1wd1p3fGZiNzliOTQ0M2Q4NzAwNGI4ZDkyMDQ0MWJhYjk2MGE3OWY2ZDI5NTA1ZmNkMTk0MDRiNThjMTA0MDgzOGUzNGE",
        link:"instagram.com"
    }
    let img7={
        img:"https://d3lzcn6mbbadaf.cloudfront.net/media/details/ANI-20220820052951.jpg",
        link:"instagram.com"
    }
    let img8={
        img:"https://www.kikkoman.co.uk/fileadmin/_processed_/4/d/csm_UK-Blog_Guideto-JapaneseFood_Header_Desktop_b81144f3b0.webp",
        link:"instagram.com"
    }
    let img9={
        img:"https://media.cnn.com/api/v1/images/stellar/prod/190321132054-fullenglish-20692.jpg?q=w_5333,h_3000,x_0,y_0,c_fill/h_447",
        link:"instagram.com"
    }

     return(<div>
         <div className="sc center-center">
                 <div className="scDiv">
                       <div style={{backgroundImage:"url("+img1.img+")"}} className="scSmall"><a href={img1.link}>{img}</a></div>
                       <div style={{backgroundImage:"url("+img2.img+")"}} className="scSmall sc-down-l "><a href="instagram.com">{img}</a></div>
                       <div style={{backgroundImage:"url("+img3.img+")"}} className="scBig sc-down-l"> <a href="instagram.com">{img}</a></div>
                 </div>
                 <div className="scDiv">
                         <div style={{backgroundImage:"url("+img4.img+")"}} className="scSmall sc1 sc-up-r"><a href="instagram.com">{img}</a></div>
                         <div style={{backgroundImage:"url("+img5.img+")"}}  className="scSmall sc2 sc-down-r"><a href="instagram.com">{img}</a></div>
                         <div style={{backgroundImage:"url("+img6.img+")"}}  className="scBig sc3"> <a href="instagram.com">{img}</a></div>
                 </div>
                 <div className="scDiv srcDivHide">
                       <div style={{backgroundImage:"url("+img7.img+")"}} className="scSmall sc-down-l"><a href="instagram.com">{img}</a></div>
                       <div style={{backgroundImage:"url("+img8.img+")"}} className="scSmall sc-up-r"><a href="instagram.com">{img}</a></div>
                       <div style={{backgroundImage:"url("+img9.img+")"}} className="scBig sc-down-r"><a href="instagram.com"> {img}</a></div>
                 </div>
         </div>
     </div>)
} 


export default Socials