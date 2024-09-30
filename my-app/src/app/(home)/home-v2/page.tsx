import Navbar1 from "@/app/Theme/Header/Navbar1";
import Navbar2 from "@/app/Theme/Header/Navbar2";
import BlogComponent1 from "@/components/BlogComponent1";
import CategoryCard1 from "@/components/CategoryCard1";
import FooterComponent1 from "@/components/FooterComponent1";
import GridListComponent from "@/components/GridListComponent";
import HeroComponent2 from "@/components/HeroComponent2";
import IconBoxComponent1 from "@/components/IconBoxComponent1";
import NewsletterComponent from "@/components/NewsletterComponent";
import SliderCardComponent from "@/components/SliderCardComponent";
import StatComponent from "@/components/StatComponent";
import TestimonialComponent from "@/components/TestimonialComponent";
import { CourseData } from "@/data/courses";
import { InstructorData } from "@/data/instructor";
import React from "react";

const HomeV2 = () => {
  const instructorData = InstructorData.filter((item, index) => index < 4);
  return (
    <div className="relative overflow-hidden">
      <div>
        <Navbar2 />

        <HeroComponent2 />

        <GridListComponent interfaceType="category" />

        <div className="bg-primary-50/60 py-8">
          <SliderCardComponent
            interfaceType="course"
            sliderData={CourseData}
            heading="Top Courses Today"
            cardType="card2"
          />
        </div>

        <IconBoxComponent1 />

        <GridListComponent
          interfaceType="instructor"
          listings={instructorData}
        />

        <div className="bg-[#F7F8FB]">
          <TestimonialComponent />
        </div>

        <GridListComponent
          interfaceType="course"
          listings={CourseData}
          cardType="card2"
        />

        <div className="bg-[#F7F8FB]">
          <StatComponent />
        </div>

        <SliderCardComponent interfaceType="category" />

        <BlogComponent1 />

        <NewsletterComponent />

        <FooterComponent1 />
      </div>
    </div>
  );
};

export default HomeV2;
