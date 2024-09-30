"use client";

import Image from "next/image";
import React from "react";
import TabsComponent2 from "./TabsComponent2";
import HeroSearchForm1 from "@/app/(home)/HeroSearchForm1";
import Navbar2 from "@/app/Theme/Header/Navbar2";
import Navbar1 from "@/app/Theme/Header/Navbar1";

const HeroComponent1 = () => {
  return (
    <div className="relative isolate overflow-hidden py-2 pb-14">
      <Navbar1 />
      <Image
        fill
        src="/hero/3.webp"
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover align-middle"
      />
      <div className="absolute inset-x-0 top-0 left-0 -z-10 transform-gpu overflow-hidden  w-full">
        <div className="relative aspect-[1500/1500] bg-hero1 w-full" />
      </div>

      <div className="mx-auto max-w-3xl py-32 sm:pt-40 sm:pb-52 px-6 lg:px-8 ">
        <div className="text-center">
          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-6xl">
            Find Next Place To Visit
          </h1>
          <p className="mt-2 leading-8 text-gray-300">
            Anim aute id magna aliqua
          </p>
          <div className="mt-16">
            <TabsComponent2 className="hidden lg:flex items-center flex-col justify-center mb-4" />
            <HeroSearchForm1 />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroComponent1;
