import "react-multi-carousel/lib/styles.css";

import Carousel from "react-multi-carousel";

import { CarouselContainerProps } from "@src/interfaces";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 580 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

export const BannerCarouselContainer: React.FC<CarouselContainerProps> = ({
  rtl = false,
  showDots = false,
  arrows = true,
  autoPlaySpeed = 5000,
  children,
}) => {
  return (
    <>
      <Carousel
        swipeable={true}
        draggable={false}
        showDots={showDots}
        arrows={arrows}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={autoPlaySpeed}
        responsive={responsive}
        containerClass="main-carousel"
        rtl={rtl}
      >
        {children}
      </Carousel>
    </>
  );
};
