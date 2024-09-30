import { InstructorData } from "@/data/instructor";
import { reviewsList } from "@/data/reviews";
import { CourseDataInterface } from "@/data/types";
import { HeartIcon, StarIcon } from "@heroicons/react/20/solid";
import {
  BookOpenIcon,
  ChartBarIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export interface CourseCard2Interface {
  data: CourseDataInterface;
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const CourseCard2 = ({ data }: CourseCard2Interface) => {
  const reviews = reviewsList.featured.find((item) => item.id == data.id);
  const instructor = InstructorData.find((item) => item.id == data.id);
  return (
    <div className="group relative bg-white p-2 rounded-md border">
      <div className="relative w-full overflow-hidden rounded group-hover:opacity-75 ">
        <Link href={data.href} className="cursor-pointer">
          <Image
            width={500}
            height={500}
            src={data.image}
            alt={data.title}
            className="object-cover object-center w-full sm:w-72 "
          />
        </Link>
        {/* <div>
          {instructor?.image && (
            <Image
              width={70}
              height={70}
              src={instructor?.image}
              alt={instructor?.name}
              className="rounded-full w-16 h-16 bg-white object-cover border border-gray-200 absolute right-4 top-4"
            />
          )}
          <p className="p-2 bg-gray-50 rounded-full ">
            <HeartIcon className="w-6 h-6 text-white absolute bottom-4 right-4" />
          </p>
          <p
            className={`text-red-700 bg-red-200 absolute bottom-4 left-4 py-1 px-2 `}
          >
            {data.popular && "popular"}
          </p>
        </div> */}
      </div>
      {/*  */}
      <div className="mt-2">
        <p className="mb-1 text-sm text-neutral-500">{data.topic}</p>
        <h3 className="font-semibold text-gray-900">
          <Link href={data.href}>
            {data.title.length > 30
              ? data.title.substring(0, 30) + "..."
              : data.title}
          </Link>
        </h3>

        <div className="flex items-center gap-4 text-neutral-600 my-1">
          {/* lesson */}
          <p className="flex gap-1 items-center">
            <BookOpenIcon className="w-4 h-4" />
            {data.lesson}
            <span>Lessons</span>
          </p>
          {/* time */}
          <p className="flex gap-1 items-center">
            <ClockIcon className="w-4 h-4" />
            {data.duration}
          </p>
          {/* level */}
          <p className="flex gap-1 items-center">
            <ChartBarIcon className="w-4 h-4" />
            {data.lesson}
            <span>level</span>
          </p>
        </div>

        <div className="divide-y divide-gray-900 mt-4"></div>
        <div className="flex items-center justify-between">
          <p>
            <span>$</span>
            <span className="font-semibold text-lg">{data.price}</span>
          </p>
          <div className="flex items-center gap-1">
            <div className="flex items-center">
              {[0, 1, 2, 3, 4].map((rating) => (
                <StarIcon
                  key={rating}
                  className={classNames(
                    reviews && reviews.rating > rating
                      ? "text-yellow-400"
                      : "text-gray-300",
                    "h-3 w-3 flex-shrink-0"
                  )}
                  aria-hidden="true"
                />
              ))}
            </div>
            <span>{reviews?.rating}</span>
            <span className="text-neutral-500">({reviewsList.totalCount})</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard2;
