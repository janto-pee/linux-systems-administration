import Image from "next/image";
import React from "react";

const TestimonialComponent = () => {
  return (
    <section className="relative isolate overflow-hidden px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
        <h2 className="text-base font-semibold leading-7 text-indigo-300">
          Testimonials
        </h2>
        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          largest listing of online courses in over 40 languages
        </p>
        {/* <Header1
          bgClass="px-6 py-4 lg:px-8"
          containerClass="mx-auto max-w-2xl text-center"
          text="Testimonials"
          textClass="text-2xl font-bold tracking-tight text-gray-900 text-4xl"
          subtext=""
          subtextClass="mt-2 text-md text-primary-700"
        /> */}
        <div className="mx-auto max-w-2xl lg:max-w-4xl ">
          <figure className="mt-2">
            <blockquote className="text-center text-xl leading-8 sm:text-2xl sm:leading-9">
              <p>
                “Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                expedita voluptas culpa sapiente alias molestiae. Numquam
                corrupti in laborum sed rerum et corporis.”
              </p>
            </blockquote>
            <figcaption className="mt-10">
              <div className="mt-4 text-base">
                <div className="font-semibold text-gray-900">Judith Black</div>
                <svg
                  viewBox="0 0 2 2"
                  width={3}
                  height={3}
                  aria-hidden="true"
                  className="fill-gray-900"
                >
                  <circle cx={1} cy={1} r={1} />
                </svg>
                <div className="text-gray-600">CEO of Workcation</div>
              </div>
            </figcaption>
          </figure>

          <div className="mt-8 flex gap-x-6 items-center justify-center">
            {[1, 2, 3, 4, 5].map((item, index) => (
              <div key={index}>
                <Image
                  width={10}
                  height={10}
                  className={`mx-auto h-16 w-16 p-2 rounded-full ${
                    index == 0 ? "border border-primary-500" : ""
                  }`}
                  src={`/avatars/Image-${index + 1}.png`}
                  alt="user avatar"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialComponent;
