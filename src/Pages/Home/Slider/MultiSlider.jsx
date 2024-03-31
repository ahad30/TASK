import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "../../../assets/Slider1.jpg"

const MultiSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    // arrows: true,
    autoplay: true,
    autoplaySpeed: 100,
    // prevArrow: <button className="slick-prev">Previous</button>,
    // nextArrow: <button className="slick-next">Next</button>,
  };

  // Sample blog data
  const blogData = [
    {
      id: 1,
      image: Image,
    },
    {
      id: 2,
      image: Image,
    },
    {
      id: 3,
 
      image: Image,
    },
    {
      id: 4,
      image: Image,
    },
    {
      id: 5,
      image: Image,
    },
    {
      id: 6,
      image: Image,
    },
  
  ];

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {blogData.map((blog) => (
          <div key={blog.id} className="px-2">
            <div className="">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-60 object-cover object-center rounded-xl"
              />
  
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MultiSlider;
