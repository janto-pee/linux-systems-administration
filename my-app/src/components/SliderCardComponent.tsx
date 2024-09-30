"use client";

import React, { useEffect, useState } from "react";
import { useWindowSize } from "react-use";
import { useSwipeable } from "react-swipeable";
import {
  CategoryDataInterface,
  CourseDataInterface,
  EventDataInterface,
  InstructorDataInterface,
} from "@/data/types";
import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import CategoryCard1 from "./CategoryCard1";
import CategoryCard2 from "./CategoryCard2";
import Button from "@/Shared/Button";
import { cartegoryData } from "@/data/category";
import InstructorCard2 from "./InstructorCard2";
import InstructorCard1 from "./InstructorCard1";
import CourseCard2 from "./CourseCard2";
import CourseCard1 from "./CourseCard1";
import EventCard1 from "./EventCard1";
import EventCard2 from "./EventCard2";
import Link from "next/link";

export interface SliderCardComponentInterface {
  className?: string;
  cardType?: "card1" | "card2" | "card3" | "card4" | "card5";
  interfaceType: "category" | "instructor" | "course" | "event";
  itemClassName?: string;
  itemPerRow?: number;
  heading?: string;
  subHeading?: string;
  sliderStyle?: string;
  sliderData?:
    | CourseDataInterface[]
    | CategoryDataInterface[]
    | InstructorDataInterface[]
    | EventDataInterface[];
  buttonLink?: string;
  buttonLinkShow?: boolean;
}

const SliderCardComponent = ({
  heading = "Suggestions for discovery",
  subHeading = "popular courses to recommend to you",
  buttonLink = "course-list-v1",
  buttonLinkShow = false,
  sliderData = cartegoryData,
  itemPerRow = 5,
  cardType = "card1",
  sliderStyle = "style1",
  interfaceType = "category",
}: SliderCardComponentInterface) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [numberOfItems, setNumberOfitem] = useState(0);
  const [direction, setDirection] = useState(0);

  const windowWidth = useWindowSize().width;

  useEffect(() => {
    if (windowWidth < 320) {
      return setNumberOfitem(1);
    }
    if (windowWidth < 500) {
      return setNumberOfitem(itemPerRow - 3);
    }
    if (windowWidth < 1024) {
      return setNumberOfitem(itemPerRow - 2);
    }
    if (windowWidth < 1280) {
      return setNumberOfitem(itemPerRow - 1);
    }

    setNumberOfitem(itemPerRow);
  }, [itemPerRow, windowWidth]);

  function changeItemId(newVal: number) {
    if (newVal > currentIndex) {
      setDirection(1);
    } else {
      setDirection(-1);
    }
    setCurrentIndex(newVal);
  }

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      if (currentIndex < sliderData?.length - 1) {
        let val1 = currentIndex + 1;
        if (val1 > currentIndex) {
          setDirection(1);
        } else {
          setDirection(-1);
        }
        setCurrentIndex(val1);
      }
    },
    onSwipedRight: () => {
      if (currentIndex > 0) {
        let val1 = currentIndex - 1;
        if (val1 > currentIndex) {
          setDirection(1);
        } else {
          setDirection(-1);
        }
        setCurrentIndex(val1);
      }
    },
    trackMouse: true,
  });

  const variants = (x = 1000, opacity = 0) => ({
    enter: (direction: number) => {
      return {
        x: direction > 0 ? x : -x,
        opacity,
      };
    },
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => {
      return {
        x: direction < 0 ? x : -x,
        opacity,
      };
    },
  });

  // card switch
  const renderCard = (item: any) => {
    switch (interfaceType) {
      case "instructor":
        if (cardType == "card2") {
          return <InstructorCard2 />;
        }
        return <InstructorCard1 data={item} />;
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
    <div className="">
      <div className="relative z-10 mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-20 lg:max-w-7xl lg:px-8">
        <div className="flex items-center justify-between gap-2">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-gray-900">
              {heading}
            </h2>
            <p className="text-neutral-500">{subHeading}</p>
          </div>
          {buttonLinkShow && (
            <Link href={buttonLink}>
              <Button
                className=" px-8 border-primary-500 text-primary-500 py-3 text-sm shadow-sm border font-bold rounded"
                text="View More"
              />
            </Link>
          )}
        </div>
        <MotionConfig
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
        >
          <div className="relative" {...handlers}>
            <div className="overflow-hidden flow-root">
              <ul className="relative whitespace-nowrap -mx-2 xl:-mx-4">
                <AnimatePresence initial={false} custom={direction}>
                  {sliderData.map((data: any, index: number) => (
                    <motion.li
                      custom={direction}
                      initial={{
                        x: `${(currentIndex - 1) * -100}%`,
                      }}
                      animate={{
                        x: `${currentIndex * -100}%`,
                      }}
                      variants={variants(200, 1)}
                      key={index}
                      className="mt-12 relative inline-block px-2 xl:px-4"
                    >
                      {renderCard(data)}
                    </motion.li>
                  ))}
                </AnimatePresence>
              </ul>
            </div>

            {currentIndex ? (
              <Button
                onClick={() => changeItemId(currentIndex - 1)}
                className="justify-center w-8 h-8 xl:w-10 xl:h-10 text-lg absolute -left-3 xl:-left-6 top-1/3 -translate-y-1/2 z-[1] bg-white border shadow-md rounded-full flex item-center"
              >
                <ChevronLeftIcon className="w-4 h-4 " />
              </Button>
            ) : null}

            {sliderData.length > currentIndex + numberOfItems ? (
              <Button
                onClick={() => changeItemId(currentIndex + 1)}
                className="justify-center w-8 h-8 xl:w-10 xl:h-10 text-lg absolute -right-3 xl:-right-6 top-1/3 -translate-y-1/2 z-[1] bg-white border shadow-md rounded-full flex item-center"
              >
                <ChevronRightIcon className="w-4 h-4" />
              </Button>
            ) : null}
          </div>
        </MotionConfig>
      </div>
    </div>
  );
};

export default SliderCardComponent;
