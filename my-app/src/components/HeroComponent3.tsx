"use client";

import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import Navbar2 from "@/app/Theme/Header/Navbar2";
import Navbar1 from "@/app/Theme/Header/Navbar1";
import TabsComponent1 from "./HeroSearchTab";
import TabsComponent3 from "./TabsComponent3";
import HeroSearchForm2 from "@/app/(home)/HeroSearchForm2";

const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];

export default function HomeComponent3() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-[#13357B]">
      <Navbar1 />

      <div className="relative isolate pt-14">
        <div className="mx-auto max-w-7xl">
          <div className="px-6 lg:px-8 mb-16">
            <TabsComponent3 />
          </div>
          <div className="relative px-6 py-24 lg:pt-24 lg:pb-40 lg:grid lg:grid-cols-7 lg:items-center lg:gap-x-10 lg:px-8 ">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:col-span-3">
              <h1 className="mt-10 max-w-lg text-4xl font-bold tracking-tight text-yellow-300 sm:text-6xl leading-loose">
                Where would
              </h1>
              <h1 className="mt-4 max-w-lg text-4xl font-bold tracking-tight text-white sm:text-6xl leading-loose">
                You Like To Go?
              </h1>
              <p className="mt-1 leading-8 text-gray-200">
                Esse id magna consectetur fugiat non dolor in ad
              </p>
            </div>
            <div className="mt-16 sm:mt-24 lg:flex-shrink-0 lg:col-span-4 relative bg-red-500">
              <div className="grid gap-4 grid-cols-2 absolute top-1/2 right-0 -translate-y-1/2 ">
                <img
                  src="/hero/a.jpeg"
                  alt=""
                  className="col-span-1 rounded-md"
                />
                <div className="hidden col-span-1 lg:flex lg:flex-col gap-4">
                  <img src="/hero/1.jpg" className="rounded-md" />
                  <img src="/hero/2.jpg" className="rounded-md" />
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 ">
              <HeroSearchForm2 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
