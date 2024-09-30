import Button from "@/Shared/Button";
import FormInput from "@/Shared/FormInput";
import {
  AcademicCapIcon,
  ClockIcon,
  MagnifyingGlassIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";

const HeroSearchForm1 = () => {
  const renderItem = () => {
    return (
      <div className="w-full">
        <div className="relative flex items-center bg-primary-50">
          <div className="px-2">
            <AcademicCapIcon className="w-6 h-6 text-primary-100" />
          </div>
          <div className="self-center border-r border-primary-100 dark:border-primary-700 h-8  py-1"></div>
          <input
            type="text"
            name="search"
            id="search"
            className="block w-full rounded-md border-0 py-4  text-gray-900 shadow-sm sm:text-sm sm:leading-6 bg-primary-50/50"
            placeholder="what course do you want to learn?"
          />
        </div>
      </div>
    );
  };

  const renderItem2 = () => {
    return (
      <div className="w-full">
        <div className="relative flex items-center bg-primary-50">
          <div className="px-2">
            <ClockIcon className="w-6 h-6 text-primary-100" />
          </div>
          <div className="self-center border-r border-primary-100 dark:border-primary-700 h-8  py-1"></div>
          <input
            type="text"
            name="search"
            id="search"
            className="block w-full rounded-md border-0 py-4  text-gray-900 shadow-sm sm:text-sm sm:leading-6 bg-primary-50/50"
            placeholder="Duration of course"
          />

          <select
            id="currency"
            name="currency"
            className="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
          >
            <option>4 star</option>
            <option>3 star</option>
            <option>2 star</option>
            <option>others</option>
          </select>
        </div>
      </div>
    );
  };
  return (
    <div className="bg-white w-full flex flex-col md:flex-row items-center rounded-md justify-between gap-2 py-4 lg:py-2 px-4 shadow-md ">
      {renderItem()}
      {renderItem2()}

      <Link href="/course-list-v1" className="text-left">
        <Button className="bg-primary-500 text-primary-100 rounded-md hover:bg-primary-300 gap-2 px-6 py-4">
          <MagnifyingGlassIcon className="text-white w-4 h-4 " />
          Search
        </Button>
      </Link>
    </div>
  );
};

export default HeroSearchForm1;
