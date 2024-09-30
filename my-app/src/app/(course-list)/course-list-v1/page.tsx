import Navbar3 from "@/app/Theme/Header/Navbar3";
import CtaComponent from "@/components/CtaComponent";
import FooterComponent2 from "@/components/FooterComponent2";
import GridListComponent from "@/components/GridListComponent";
import HeaderComponent2 from "@/components/HeaderComponent2";
import NewsletterComponent from "@/components/NewsletterComponent";
import { CourseData } from "@/data/courses";
import React from "react";
import SectionFilterGridComponent from "../SectionFilterGridComponent";
import ListHeader from "@/components/ListHeader";

const CourseListV1 = () => {
  return (
    <div>
      <Navbar3 />

      <HeaderComponent2 searchForm />

      <SectionFilterGridComponent />

      {/* <GridListComponent
        listings={CourseData}
        interfaceType="course"
        headerList
        headerStyle
      /> */}

      <CtaComponent />

      <FooterComponent2 />
    </div>
  );
};

export default CourseListV1;
