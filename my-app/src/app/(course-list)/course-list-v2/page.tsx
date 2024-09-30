import Navbar3 from "@/app/Theme/Header/Navbar3";
import CtaComponent from "@/components/CtaComponent";
import FilterComponent from "@/components/FilterComponent";
import FooterComponent2 from "@/components/FooterComponent2";
import GridListComponent from "@/components/GridListComponent";
import { CourseData } from "@/data/courses";
import React from "react";
import SectionFilterGridComponent from "../SectionFilterGridComponent";
import ListHeader from "@/components/ListHeader";

const CourseListV2 = () => {
  return (
    <div>
      <Navbar3 />

      <SectionFilterGridComponent cardType="card2" />

      <CtaComponent />

      <FooterComponent2 />
    </div>
  );
};

export default CourseListV2;
