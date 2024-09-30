import Button from "@/Shared/Button";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";

const HeroSearchForm2 = () => {
  const renderItem = () => {
    return (
      <div className="relative text-start">
        <label htmlFor="search">Search Term</label>
        <input
          type="text"
          name="search"
          id="search"
          className="block w-full rounded-md border-0 py-2 px-0 text-gray-900 sm:text-sm sm:leading-6 "
          placeholder="what course do you want to learn?"
        />
      </div>
    );
  };

  const renderItem2 = () => {
    return (
      <div className="w-full">
        <div className="text-start">
          <label htmlFor="search">Course Duration</label>
          <input
            type="text"
            name="search"
            id="search"
            className="block w-full rounded-md border-0 py-2 px-0 text-gray-900 sm:text-sm sm:leading-6 "
            placeholder="Duration of course"
          />
        </div>
      </div>
    );
  };
  return (
    <div className="bg-white w-full flex flex-col md:flex-row items-center rounded-md justify-between gap-2 shadow-md">
      {renderItem()}
      <div className="self-center border-r border-primary-100 dark:border-primary-700 h-10 py-1 mx-4"></div>
      {renderItem2()}
      <div className="self-center border-r border-primary-100 dark:border-primary-700 h-10 py-1 mx-4"></div>
      {renderItem()}

      <Link href="/course-list-v1" className="text-left">
        <Button className="bg-primary-500 text-primary-100 rounded-md hover:bg-primary-300 gap-2 px-6 py-4">
          <MagnifyingGlassIcon className="text-white w-4 h-4 " />
          Search
        </Button>
      </Link>
    </div>
  );
};

export default HeroSearchForm2;
