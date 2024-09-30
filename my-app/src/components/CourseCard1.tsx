import { InstructorData } from "@/data/instructor";
import { reviewsList } from "@/data/reviews";
import { CourseDataInterface } from "@/data/types";
import { StarIcon } from "@heroicons/react/20/solid";
import {
  BookOpenIcon,
  ChartBarIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export interface CourseCard1Interface {
  data: CourseDataInterface;
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const CourseCard1 = ({ data }: CourseCard1Interface) => {
  const reviews = reviewsList.featured.find((item) => item.id == data.id);
  const instructor = InstructorData.find((item) => item.id == data.id);
  return (
    <div className="group relative">
      <div className="relative w-full overflow-hidden rounded group-hover:opacity-75 ">
        <Link href={data.href}>
          <Image
            width={500}
            height={500}
            src={data.image}
            alt={data.title}
            className="object-cover object-center w-full sm:w-72 rounded-md h-full"
          />
        </Link>
      </div>

      <div className="mt-2">
        <div className="flex items-center gap-1">
          <span className="text-orange-400 text-sm mr-1">
            {reviews?.rating}
          </span>
          <div className="flex items-center ">
            {[0, 1, 2, 3, 4].map((rating) => (
              <StarIcon
                key={rating}
                className={classNames(
                  reviews && reviews.rating > rating
                    ? "text-orange-400"
                    : "text-gray-300",
                  "h-3 w-3 flex-shrink-0"
                )}
                aria-hidden="true"
              />
            ))}
          </div>

          <span className="text-neutral-500">({reviewsList.totalCount})</span>
        </div>
        <h3 className="mt-2 font-semibold text-gray-700">
          <Link href={data.href}>
            {data.title.length > 35
              ? data.title.substring(0, 34) + "..."
              : data.title}
          </Link>
        </h3>

        <div className="flex items-center gap-4 text-neutral-500 my-1">
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
          <div className="flex items-center gap-2">
            {instructor?.image && (
              <Image
                width={70}
                height={70}
                src={instructor?.image}
                alt={instructor?.name}
                className="rounded-full w-6 h-6 bg-white object-cover border border-gray-200"
              />
            )}
            <span className="text-sm">{instructor?.name}</span>
          </div>
          <p>
            <span>$</span>
            <span className="font-semibold text-lg">{data.price}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CourseCard1;
