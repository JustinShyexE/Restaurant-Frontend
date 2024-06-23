import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function CarouselFood() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  let img1="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg"
  let img2="https://www.eatthis.com/wp-content/uploads/sites/4/2022/08/steak-baked-potato-steakhouse.jpg?quality=82&strip=1"
  let img3="https://qul.imgix.net/8780dacf-e505-4602-9bf4-85673d2714f8/697533_sld.jpg"
  let img4="https://www.tasteofhome.com/wp-content/uploads/2023/06/best-steakhouse-GettyImages-1206244347.jpg"
  let img5="https://cdn.squaremeal.co.uk/restaurants/20895/images/angus-oxford-c--main-shot-crop-_06052024114404.jpg?w=928&h=522&fit=crop&auto=format%2Ccompress"
  let img6="https://img.grouponcdn.com/seocms/v4qXaTf2xAj6KwR3Zv2KPMMAsLW/brazillian-food_jpeg-1080x648"
  

  return (
    <div className="cr center-center">
      <div className="crDiv">
        <Carousel
          swipeable={false}
          draggable={true}
          showDots={true}
          responsive={responsive}
          ssr={true}
          infinite={true}
          autoPlay={true}
          centerMode={true}
          autoPlaySpeed={30000}
          keyBoardControl={true}
          itemClass="carousel-item-padding-0-px helloThere"
        >
          <div className="center-center crContent">
           <div className="crImage" style={{backgroundImage:"url("+img1+")"}}> </div>
          </div>
          <div className="center-center crContent">
            <div className="crImage" style={{backgroundImage:"url("+img2+")"}}> </div>
          </div>
          <div className="center-center crContent">
            <div className="crImage" style={{backgroundImage:"url("+img3+")"}}> </div>
          </div>
          <div className="center-center crContent">
            <div className="crImage" style={{backgroundImage:"url("+img4+")"}}> </div>
          </div>
          <div className="center-center crContent">
            <div className="crImage" style={{backgroundImage:"url("+img5+")"}}> </div>
          </div>
          <div className="center-center crContent">
            <div className="crImage" style={{backgroundImage:"url("+img6+")"}}> </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
}

//<div className="crImage"></div>     className="center-center"

export default CarouselFood;
