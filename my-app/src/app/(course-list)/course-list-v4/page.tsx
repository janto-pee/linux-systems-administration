import Navbar3 from "@/app/Theme/Header/Navbar3";
import CtaComponent from "@/components/CtaComponent";
import FilterComponent from "@/components/FilterComponent";
import FooterComponent2 from "@/components/FooterComponent2";
import GridListComponent from "@/components/GridListComponent";
import HeaderComponent2 from "@/components/HeaderComponent2";
import { CourseData } from "@/data/courses";
import React from "react";
import SectionFilterGridComponent from "../SectionFilterGridComponent";

const CourseListV4 = () => {
  return (
    <div>
      <Navbar3 />

      <HeaderComponent2 background="bg-primary-50/50" searchForm />

      <SectionFilterGridComponent tabStyle cardType="card2" />

      <CtaComponent />

      <FooterComponent2 />
    </div>
  );
};

export default CourseListV4;
