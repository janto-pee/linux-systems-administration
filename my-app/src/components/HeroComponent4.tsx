"use client";

import Image from "next/image";
import React from "react";
import TabsComponent2 from "./TabsComponent2";
import HeroSearchForm1 from "@/app/(home)/HeroSearchForm1";
import Navbar2 from "@/app/Theme/Header/Navbar2";
import Navbar1 from "@/app/Theme/Header/Navbar1";
import HeroSearchForm2 from "@/app/(home)/HeroSearchForm2";

const HeroComponent4 = () => {
  return (
    <div className="relative isolate overflow-hidden py-2 pb-14">
      <Navbar1 />
      <Image
        fill
        src="/hero/3.webp"
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover align-middle"
      />
      <div className="absolute inset-x-0 top-0 left-0 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        <div className="relative aspect-[1500/1500] bg-gradient-to-r from-[#080b18] to-[#0c1335] opacity-80 " />
      </div>

      <div className="mx-auto max-w-3xl py-32 sm:pt-40 sm:pb-52 ">
        <div className="text-center">
          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-6xl">
            Find Next Place To Visit
          </h1>
          <p className="mt-2 leading-8 text-gray-300">
            Anim aute id magna aliqua
          </p>
          <div className="mt-12">
            {/* <TabsComponent2 className="flex items-center flex-col justify-center" /> */}
            <HeroSearchForm2 />
          </div>
        </div>
      </div>
      {/* <div
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div> */}
    </div>
  );
};

export default HeroComponent4;
