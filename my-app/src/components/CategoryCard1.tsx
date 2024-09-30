import { CategoryDataInterface } from "@/data/types";
import Image from "next/image";
import Link from "next/link";

export interface CategoryCard1Interface {
  data: CategoryDataInterface;
  className?: string;
}

const CategoryCard1 = ({ data, className }: CategoryCard1Interface) => {
  return (
    <div className="group w-full overflow-hidden rounded-lg sm:relative sm:h-full bg-black ">
      <Link href={"/course-list-v1"}>
        <Image
          width={500}
          height={500}
          src={data.imageUrl}
          alt="Wooden shelf with gray and olive drab green baseball caps, next to wooden clothes hanger with sweaters."
          // className="object-cover object-center group-hover:opacity-75 sm:absolute sm:inset-0 sm:h-full sm:w-full"
        />
      </Link>
      <div
        aria-hidden="true"
        className="bg-gradient-to-b from-black to-black opacity-60 sm:absolute sm:inset-0"
      />
      <div className="flex items-end p-6 sm:absolute sm:inset-0">
        <div>
          <h3 className="font-medium text-white">
            <Link href="/course-list-v1">
              <span className="absolute inset-0" />
              {data.title}
            </Link>
          </h3>
          <p aria-hidden="true" className="mt-1 text-sm text-white">
            {data.count} courses
          </p>
        </div>
      </div>
    </div>
  );
  // return (
  //   <div className="group relative">
  //     {/* <div className="min-h-60 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-60"> */}
  //     <div className="min-h-60  w-44 overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-60">
  //       <Link href={data.href}>
  //         <Image
  //           src={data.imageUrl}
  //           alt={data.title}
  //           width={1000}
  //           height={500}
  //           className="object-cover w-44 h-60"
  //         />
  //       </Link>
  //     </div>
  //     <div className="mt-4">
  //       <h3 className="text-sm text-gray-700">
  //         <Link href={data.href}>
  //           <span
  //             aria-hidden="true"
  //             className="absolute inset-0 font-semibold"
  //           />
  //           {data.title}
  //         </Link>
  //       </h3>

  //       <p className="text-sm font-medium text-gray-900">
  //         {data.count} courses
  //       </p>
  //     </div>
  //   </div>
  // );
};

export default CategoryCard1;
