import {
  CategoryDataInterface,
  CourseDataInterface,
  EventDataInterface,
  InstructorDataInterface,
} from "@/data/types";
import React from "react";
import CategoryCard1 from "./CategoryCard1";
import { cartegoryData } from "@/data/category";
import CategoryCard2 from "./CategoryCard2";
import HeaderComponent from "./HeaderComponent";
import InstructorCard1 from "./InstructorCard1";
import InstructorCard2 from "./InstructorCard2";
import CourseCard1 from "./CourseCard1";
import CourseCard2 from "./CourseCard2";
import EventCard1 from "./EventCard1";
import EventCard2 from "./EventCard2";
import Button from "@/Shared/Button";
import ListHeader from "./ListHeader";
import Link from "next/link";
import HeaderComponent3 from "./HeaderComponent3";

export interface GridListComponentInterface {
  listings?:
    | CourseDataInterface[]
    | CategoryDataInterface[]
    | InstructorDataInterface[]
    | EventDataInterface[];
  gridClass?: string;
  heading?: string;
  subHeading?: string;
  headingIsCenter?: boolean;
  cardType?: "card1" | "card2" | "card3";
  interfaceType: "category" | "instructor" | "course" | "event";
  headerList?: "header1" | "header2" | "header3";
  // headerList?: boolean;
  headerStyle?: boolean;
}

const GridListComponent = ({
  listings = cartegoryData,
  heading = "Top Categories",
  subHeading = "Popular skills to acquire that AFS recommends for you",
  cardType = "card1",
  interfaceType = "category",
  headerList = "header1",
  headerStyle = false,
}: GridListComponentInterface) => {
  const renderCard = (item: any) => {
    switch (interfaceType) {
      case "instructor":
        if (cardType == "card1") {
          return <InstructorCard1 data={item} />;
        }
        return <InstructorCard2 />;
      case "course":
        if (cardType == "card2") {
          return <CourseCard2 data={item} />;
        }
        return <CourseCard1 data={item} />;
      case "event":
        if (cardType == "card1") {
          return <EventCard1 data={item} />;
        }
        return <EventCard2 data={item} />;
      case "category":
        if (cardType == "card2") {
          return <CategoryCard2 data={item} />;
        }
        return <CategoryCard1 data={item} />;
      default:
        return <CategoryCard1 data={item} />;
    }
  };
  return (
    <div className="overflow-hidden bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        {/* heading */}
        {headerList == "header1" ? (
          <ListHeader tabStyle={headerStyle} />
        ) : headerList == "header2" ? (
          <HeaderComponent
            bgClass="flex flex-col items-left md:flex-row justify-between gap-4 lg:items-center"
            subHeading={subHeading}
            heading={heading}
          />
        ) : (
          <HeaderComponent3 />
        )}
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {listings.map((item, index) => (
            <div key={index} className="rounded-lg">
              {renderCard(item)}
            </div>
          ))}
        </div>
        {/* button */}
        <Link
          href={`/course-list-v1`}
          className="mt-8 lg:mt-16 flex justify-center"
        >
          <Button
            className=" px-8 border-primary-500 text-primary-500 py-3 text-sm shadow-sm border font-bold rounded"
            text="View More"
          />
        </Link>
      </div>
    </div>
  );
};

export default GridListComponent;
