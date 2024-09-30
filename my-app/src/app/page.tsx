import BannerComponent from "@/components/BannerComponent";
import BrandComponent from "@/components/BrandComponent";
import FeaturedSection1 from "@/components/FeaturedSection1";
import FeaturedSection2 from "@/components/FeaturedSection2";
import FooterComponent1 from "@/components/FooterComponent1";
import GridListComponent from "@/components/GridListComponent";
import HeroComponent1 from "@/components/HeroComponent1";
import SliderCardComponent from "@/components/SliderCardComponent";
import React from "react";
import { CourseData } from "@/data/courses";
import { eventData } from "@/data/Event";
import { InstructorData } from "@/data/instructor";

const Home = () => {
  return (
    <div className="relative overflow-hidden">
      <div>
        <HeroComponent1 />

        <GridListComponent
          interfaceType="course"
          cardType="card1"
          listings={CourseData}
          heading="Top Courses to Learn"
          subHeading="popular courses to recommend to you"
        />

        <BannerComponent />

        <FeaturedSection1 />

        <div className="bg-[rgb(238,242,246)] py-8">
          <SliderCardComponent
            interfaceType="event"
            sliderData={eventData}
            heading="Top Event"
            cardType="card1"
            buttonLinkShow
            buttonLink="event-list-v1"
          />
        </div>

        <GridListComponent
          interfaceType="category"
          headerList="header3"
          // category drk bg
        />

        <div className="bg-[#EEF2F6] py-8">
          <SliderCardComponent
            heading="Top Instructors"
            interfaceType="instructor"
            sliderData={InstructorData}
            buttonLinkShow
            buttonLink="courses-list-v1"
          />
        </div>

        <FeaturedSection2 order="order-first" img="/hero/2.jpg" />
        <FeaturedSection2 />

        <BrandComponent />

        <FooterComponent1 />
      </div>
    </div>
  );
};

export default Home;
