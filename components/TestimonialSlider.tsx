import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { ClientReview } from "./ClientReview";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const TestimonialSlider = () => {
  return (
    <Carousel
      additionalTransfrom={0}
      arrows={true}
      autoPlay
      autoPlaySpeed={5000}
      centerMode={false}
      infinite
      responsive={responsive}
      itemClass="item"
    >
      {/* ClientReview */}
      <ClientReview
        image="/images/c1.jpg"
        name="spring1"
        role="Web Developer"
      />
      <ClientReview
        image="/images/c1.jpg"
        name="spring2"
        role="Web Developer"
      />
      <ClientReview
        image="/images/c1.jpg"
        name="spring3"
        role="Web Developer"
      />
      <ClientReview
        image="/images/c1.jpg"
        name="spring4"
        role="Web Developer"
      />
      <ClientReview
        image="/images/c1.jpg"
        name="spring5"
        role="Web Developer"
      />
      <ClientReview
        image="/images/c1.jpg"
        name="spring6"
        role="Web Developer"
      />
    </Carousel>
  );
};

export default TestimonialSlider;
