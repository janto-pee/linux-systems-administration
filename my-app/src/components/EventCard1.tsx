import { EventDataInterface } from "@/data/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const EventCard1 = ({ data }: { data: EventDataInterface }) => {
  return (
    <article className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-60">
      <Link href={`/event-details-v1/1`}>
        {" "}
        <Image
          src={data.image}
          width={500}
          height={500}
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
      </Link>
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
      <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

      <p className="absolute top-4 right-8 rounded-md text-lg px-4 py-6 bg-gray-100 font-semibold">
        24
      </p>

      <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
        <time dateTime={data.date} className="mr-8">
          {data.date}
        </time>
        <div className="-ml-4 flex items-center gap-x-4">
          <svg
            viewBox="0 0 2 2"
            className="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50"
          >
            <circle cx={1} cy={1} r={1} />
          </svg>
          <div className="flex gap-x-2.5">
            <Image
              width={50}
              height={50}
              src={data.author}
              alt=""
              className="h-6 w-6 flex-none rounded-full bg-white/10"
            />
            {/* {data.} */}
          </div>
        </div>
      </div>
      <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
        <Link href={`/event-details-v1/1`}>
          <span className="absolute inset-0" />
          {data.title}
        </Link>
      </h3>
    </article>
  );
};

export default EventCard1;
