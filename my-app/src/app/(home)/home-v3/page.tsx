import AppDownloadComponent from "@/components/AppDownloadComponent";
import BlogComponent1 from "@/components/BlogComponent1";
import BrandComponent from "@/components/BrandComponent";
import CtaComponent from "@/components/CtaComponent";
import FeaturedSection1 from "@/components/FeaturedSection1";
import FooterComponent1 from "@/components/FooterComponent1";
import GridListComponent from "@/components/GridListComponent";
import HeroComponent3 from "@/components/HeroComponent3";
import IconBoxComponent1 from "@/components/IconBoxComponent1";
import SliderCardComponent from "@/components/SliderCardComponent";
import TestimonialComponent from "@/components/TestimonialComponent";
import React from "react";

const HomeV3 = () => {
  return (
    <div className="relative overflow-hidden">
      <div>
        <HeroComponent3 />

        <BrandComponent />

        <SliderCardComponent interfaceType="category" />

        <GridListComponent interfaceType="course" />

        <TestimonialComponent />

        <FeaturedSection1 />

        <IconBoxComponent1 />

        <SliderCardComponent
          interfaceType="instructor"
          // instructor
        />

        <AppDownloadComponent />

        <BlogComponent1 />

        <CtaComponent />

        <FooterComponent1 />
      </div>
    </div>
  );
};

export default HomeV3;
