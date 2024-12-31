
// import one from "../images/bannerimg/pexels-pavel-danilyuk-8815290.jpg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import oneban from "../images/bannerimg/pexels-pavel-danilyuk-8815290.jpg";
import twoban from "../images/bannerimg/pexels-spora-weddings-278507062-15698143.jpg";
import threeban from "../images/bannerimg/pexels-trungnguyenphotog-2959192.jpg";
import fourban from "../images/bannerimg/pexels-kawerodriguess-17529844.jpg";

function Banner() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
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

  return (
    <div>
      
      <Carousel responsive={responsive}>
        <div>
          <img src={oneban} alt="Slide 1" style={{ width: "100%",height:"500px" }} />
        </div>
        <div>
          <img src={twoban} alt="Slide 2" style={{ width: "100%",height:"500px" }} />
        </div>
        <div>
          <img src={threeban} alt="Slide 3" style={{ width: "100%",height:"500px" }} />
        </div>
        <div>
          <img src={fourban} alt="Slide 4" style={{ width: "100%",height:"500px" }} />
        </div>
      </Carousel>
    </div>
  );
}

export default Banner;