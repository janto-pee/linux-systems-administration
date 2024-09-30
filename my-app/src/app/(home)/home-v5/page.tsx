import BannerComponent from "@/components/BannerComponent";
import BlogComponent1 from "@/components/BlogComponent1";
import BlogComponent2 from "@/components/BlogComponent2";
import FooterComponent1 from "@/components/FooterComponent1";
import GridListComponent from "@/components/GridListComponent";
import HeroComponent5 from "@/components/HeroComponent5";
import IconBoxComponent1 from "@/components/IconBoxComponent1";
import NewsletterComponent from "@/components/NewsletterComponent";
import SliderCardComponent from "@/components/SliderCardComponent";
import StatComponent from "@/components/StatComponent";
import TestimonialComponent from "@/components/TestimonialComponent";
import React from "react";

const HomeV5 = () => {
  return (
    <div className="relative overflow-hidden">
      <div>
        <HeroComponent5 />

        <SliderCardComponent
          interfaceType="category"
          // category
        />

        <GridListComponent interfaceType="course" />

        <BannerComponent />

        <StatComponent />

        <IconBoxComponent1 />

        <SliderCardComponent interfaceType="course" />

        <TestimonialComponent />

        <BlogComponent2 />

        <NewsletterComponent />

        <FooterComponent1 />
      </div>
    </div>
  );
};

export default HomeV5;
