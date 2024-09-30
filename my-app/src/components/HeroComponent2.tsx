"use client";

import React from "react";
import HeroSearchForm1 from "@/app/(home)/HeroSearchForm1";
import HeroTabsComponent1 from "./HeroTabsComponent1";

export type SearchTab = "courses" | "Events" | "Instructors";
export interface HeroComponent1Interface {
  className?: string;
  currentTab?: SearchTab;
  currentPage?: "courses" | "Events" | "Instructors";
}

const HeroComponent2 = ({ className }: HeroComponent1Interface) => {
  return (
    <div className="relative bg-hero min-h-screen">
      <div className="isolate overflow-hidden pt-14">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div className="relative aspect-[1100/678] bg-gradient-to-r from-purple-900 to-pink-900 h-full opacity-10" />
        </div>

        <div className="mx-auto max-w-3xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Discover Your World
            </h1>
            <p className="mt-2 text-lg leading-8 text-gray-300">
              Anim aute id magna aliqua ad ad non deserunt
            </p>
          </div>
          <div className="mt-12">
            {/* <HeroTabsComponent1 /> */}
            <HeroTabsComponent1 />
            <HeroSearchForm1 />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroComponent2;
