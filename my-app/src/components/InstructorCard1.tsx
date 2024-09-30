import { InstructorDataInterface } from "@/data/types";
import { BookOpenIcon, UserIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const InstructorCard1 = ({ data }: { data: InstructorDataInterface }) => {
  return (
    <div className=" flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow w-full lg:w-60">
      <div className="flex flex-1 flex-col py-8 px-8 ">
        <Link href={"/instructor-details-v1/1"}>
          <Image
            width={100}
            height={100}
            className="mx-auto h-28 w-28 flex-shrink-0 rounded-full"
            src={"/avatars/Image-1.png"}
            alt=""
          />
        </Link>
        <h3 className="mt-6 text-sm font-medium text-gray-900">{data.name}</h3>
        <dl className="mt-1 flex flex-grow flex-col justify-between">
          <dt className="sr-only">Title</dt>
          <dd className="text-sm text-gray-500">{data.title}</dd>
          <dt className="sr-only">Role</dt>
          <dd className="mt-3">
            <span className="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
              {data.position}
            </span>
          </dd>
        </dl>
      </div>
      <div>
        <div className="-mt-px flex divide-x divide-gray-200">
          <div className="flex w-0 flex-1">
            {/* <a
              href={`mailto:${data.email}`}
              className="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
            >
              <UserIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
            </a> */}
            125 students
          </div>
          <div className="-ml-px flex w-0 flex-1">
            <a
              href={`tel:${data.telephone}`}
              className="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
            >
              <BookOpenIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
              7 courses
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorCard1;
