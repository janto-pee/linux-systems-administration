import Image from "next/image";
import FeaturedImage from "@/assets/3.png";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const FeaturedSection1 = () => {
  return (
    <div className="overflow-hidden bg-white py-20">
      <div className="mx-auto max-w-7xl md:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-5 lg:items-center ">
          <div className="sm:px-6 lg:px-0 lg:col-span-3 ">
            <Image
              width={1000}
              height={1000}
              className="w-full h-full"
              src={FeaturedImage}
              alt="featured image"
            />
          </div>

          <div className="px-6 md:px-0 lg:pt-4 lg:col-span-2 lg:pl-6">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-full">
              <h2 className="text-base font-semibold leading-7 text-indigo-500">
                Learn faster
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Skills Acquisition
              </p>
              <dl className="mt-12 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                <div className="relative ">
                  <dt className="block font-semibold text-gray-900">
                    <span className="rounded-full px-3  text-sm bg-red-50 text-red-700">
                      self paced
                    </span>
                    <p className="pt-3 pb-3 text-lg">Excellent crash courses</p>
                  </dt>
                  <dd className="text-lg">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit sit
                    amet conse aliqua ad ad non des
                  </dd>
                </div>

                <div className="relative ">
                  <dt className="block font-semibold text-gray-900">
                    <span className="rounded-full px-3  text-sm bg-blue-50 text-blue-700">
                      study smart
                    </span>
                    <p className="pt-3 pb-3 text-lg">
                      Carefully curated lessons.
                    </p>
                  </dt>
                  <dd className="text-lg">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit sit
                    amet conse aliqua ad ad non des
                  </dd>
                </div>

                <div className="relative ">
                  <dt className="block font-semibold text-gray-900">
                    <span className="rounded-full px-3  text-sm bg-yellow-50 text-yellow-700">
                      get certified
                    </span>
                    <p className="pt-3 pb-3 text-lg">Quizes and assessment</p>
                  </dt>
                  <dd className="text-lg">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit sit
                    amet conse aliqua ad ad non des
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedSection1;
