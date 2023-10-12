import React from 'react';

import Image from "next/image";
import abDeVilliersImage from "@/images/ab-de-villiers-hd-img.jpg";

const HeroCarouselItem = () => {
  return (
    <Image
      src={abDeVilliersImage}
      width={0}
      height={0}
      sizes="100vw"
      style={{ width: "100%", height: "100vh" }}
    />
  );
};

export default HeroCarouselItem;
