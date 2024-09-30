import { CategoryDataInterface } from "@/data/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CategoryCard2 = ({ data }: { data: CategoryDataInterface }) => {
  return (
    <div className="group relative">
      {/* <div className="min-h-60 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-60"> */}
      <div className="min-h-60  w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-60">
        <Link href={data.href}>
          <Image
            src={data.imageUrl}
            alt={data.title}
            width={1000}
            height={500}
            className="object-cover w-full h-60"
          />
        </Link>
      </div>
      <div className="mt-4">
        <h3 className="text-sm text-gray-700">
          <Link href={data.href}>
            <span
              aria-hidden="true"
              className="absolute inset-0 font-semibold"
            />
            {data.title}
          </Link>
        </h3>

        <p className="text-sm font-medium text-gray-900">
          {data.count} courses
        </p>
      </div>
    </div>
  );
};

export default CategoryCard2;
