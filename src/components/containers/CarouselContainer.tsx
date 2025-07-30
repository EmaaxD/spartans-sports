import { PropsWithChildren } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 2,
  swipeToSlide: true,
  autoplay: true,
  autoplaySpeed: 5000,
  cssEase: "linear",
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 1440, // Pantallas grandes (laptops/desktop grandes)
      settings: {
        slidesToShow: 6,
        slidesToScroll: 3,
        infinite: true,
      },
    },
    {
      breakpoint: 1200, // Desktop mediano
      settings: {
        slidesToShow: 4,
        slidesToScroll: 2,
        infinite: true,
      },
    },
    {
      breakpoint: 1024, // Tablet horizontal/laptop pequeño
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
        infinite: true,
      },
    },
    {
      breakpoint: 768, // Tablet vertical
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 600, // Móvil grande horizontal
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 480, // Móvil mediano
      settings: {
        slidesToShow: 1.5,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 360, // Móvil pequeño
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      },
    },
  ],
};

export const CarouselContainer: React.FC<PropsWithChildren> = ({
  children,
}) => {
  return (
    <div className="slider-container">
      <Slider {...settings}>{children}</Slider>
    </div>
  );
};
