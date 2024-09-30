import AppDownloadComponent from "@/components/AppDownloadComponent";
import BlogComponent1 from "@/components/BlogComponent1";
import CtaComponent from "@/components/CtaComponent";
import FooterComponent2 from "@/components/FooterComponent2";
import GridListComponent from "@/components/GridListComponent";
import HeroComponent4 from "@/components/HeroComponent4";
import IconBoxComponent1 from "@/components/IconBoxComponent1";
import NewsletterComponent from "@/components/NewsletterComponent";
import SliderCardComponent from "@/components/SliderCardComponent";
import TestimonialComponent from "@/components/TestimonialComponent";
import React from "react";

const HomeV4 = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="p-4">
        <HeroComponent4 />

        <IconBoxComponent1 />

        <SliderCardComponent
          interfaceType="category"
          // category
        />

        <GridListComponent
          interfaceType="course"
          // courses
        />

        <TestimonialComponent />

        <BlogComponent1 />

        <NewsletterComponent />

        <AppDownloadComponent />

        <CtaComponent />

        <FooterComponent2 />
      </div>
    </div>
  );
};

export default HomeV4;
