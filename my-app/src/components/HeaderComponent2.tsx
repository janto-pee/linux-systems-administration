import ListForm from "@/app/(course-list)/ListForm";
import Image from "next/image";

export default function HeaderComponent2({
  title = "Find a New Skills to Learn",
  subtitle,
  titleClass = "text-3xl font-bold tracking-tight sm:text-4xl",
  heroImg = "",
  background = "bg-[#F5F5F5]",
  searchForm = false,
}: {
  title?: string;
  subtitle?: string;
  titleClass?: string;
  heroImg?: string;
  background?: string;
  searchForm?: boolean;
}) {
  return (
    <div className={`relative isolate overflow-hidden py-20 ${background}`}>
      {heroImg && (
        <Image
          width={1500}
          height={600}
          src={heroImg}
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
      )}
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center flex flex-col justify-center items-center ">
        {heroImg && (
          <div
            className="absolute -bottom-8 -left-96 -z-10 transform-gpu blur-3xl sm:-bottom-64 sm:-left-40 lg:-bottom-32 lg:left-8 xl:-left-10"
            aria-hidden="true"
          >
            <div
              className="aspect-[1266/975] w-[79.125rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-80"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
        )}
        <div className="">
          <h2 className={titleClass}>{title}</h2>
          <p className="mt-2 text-base leading-8 text-gray-700 ">{subtitle}</p>
        </div>
      </div>
      {searchForm && (
        <div className="mt-4 ">
          <ListForm />
        </div>
      )}
    </div>
  );
}
