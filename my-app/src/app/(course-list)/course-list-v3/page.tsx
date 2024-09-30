import Navbar3 from "@/app/Theme/Header/Navbar3";
import FilterComponent from "@/components/FilterComponent";
import FooterComponent1 from "@/components/FooterComponent1";
import FooterComponent2 from "@/components/FooterComponent2";
import GridListComponent from "@/components/GridListComponent";
import HeaderComponent2 from "@/components/HeaderComponent2";
import NewsletterComponent from "@/components/NewsletterComponent";
import { CourseData } from "@/data/courses";
import React from "react";
import SectionFilterGridComponent from "../SectionFilterGridComponent";

const CourseListV3 = () => {
  return (
    <div>
      <Navbar3 />

      <HeaderComponent2 background="bg-primary-50/50" searchForm />

      {/* <GridListComponent
        listings={CourseData}
        interfaceType="course"
        headerList
        headerStyle
      /> */}
      <SectionFilterGridComponent />

      <NewsletterComponent />

      <FooterComponent2 />
    </div>
  );
};

export default CourseListV3;
