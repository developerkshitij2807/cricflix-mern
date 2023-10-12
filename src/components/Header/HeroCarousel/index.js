import React from "react";
import GenericCarousel from "@/components/GenericCarousel";
import HeroCarouselItem from "@/components/Header/HeroCarousel/HeroCarouselItem";

const HeroCarousel = () => {
  return (
    <GenericCarousel>
      <HeroCarouselItem />
      <HeroCarouselItem />
      <HeroCarouselItem />
      <HeroCarouselItem />
      <HeroCarouselItem />
    </GenericCarousel>
  );
};

export default HeroCarousel;