import Button from "@/Shared/Button";
import Image from "next/image";
import Link from "next/link";

interface BannerComponentInterface {
  bgGrid?: string;
  title?: string;
  subtitle?: string;
  button?: string;
}

const BannerComponent = ({
  bgGrid = "relative ",
  title,
  subtitle,
  button,
}: BannerComponentInterface) => {
  return (
    <div className={bgGrid}>
      <Image
        fill
        src="/banner/2.png"
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover align-middle"
      />
      <div className="absolute inset-x-0 top-0 left-0 -z-10 transform-gpu overflow-hidden  w-full">
        <div className="relative aspect-[1500/1500] bg-banner1 w-full" />
      </div>
      <div className="px-6 py-24 sm:px-6 sm:py-32 lg:py-40 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl capitalize">
            Gathered more than 660 million enrollments
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-indigo-200">
            Incididunt sint fugiat pariatur cupidatat consectetur sit cillum
            anim id veniam aliqua proident excepteur commodo do ea.
          </p>
          <Link
            href={"/course-list-v1"}
            className="mt-10 flex items-center justify-center gap-x-6"
          >
            <Button
              className=" px-8 border-white text-white py-3 text-sm shadow-sm border font-bold rounded hover:bg-primary-500 hover:border-none"
              text="View More"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BannerComponent;
