import { StarIcon } from "@heroicons/react/20/solid";
import Image, { StaticImageData } from "next/image";
import { ClockIcon, UserCircleIcon } from "@heroicons/react/24/outline";

interface reviewsInterface {
  href: string;
  average: number;
  totalCount: number;
  featured: {
    id: number;
    title: string;
    rating: number;
    content: string;
    author: string;
    avatarSrc: string;
  }[];
}
const reviews: reviewsInterface = {
  href: "#",
  average: 4,
  totalCount: 117,
  featured: [
    {
      id: 1,
      title: "This is the best white t-shirt out there",
      rating: 5,
      content: `
        <p>I've searched my entire life for a t-shirt that reflects every color in the visible spectrum. Scientists said it couldn't be done, but when I look at this shirt, I see white light bouncing right back into my eyes. Incredible!</p>
      `,
      author: "Mark Edwards",
      avatarSrc: "/avatars/Image-1.png",
    },
    {
      id: 2,
      title: "Adds the perfect variety to my wardrobe",
      rating: 4,
      content: `
        <p>I used to be one of those unbearable minimalists who only wore the same black v-necks every day. Now, I have expanded my wardrobe with three new crewneck options! Leaving off one star only because I wish the heather gray was more gray.</p>
      `,
      author: "Blake Reid",
      avatarSrc: "/avatars/Image-2.png",
    },
    {
      id: 3,
      title: "All good things come in 6-Packs",
      rating: 5,
      content: `
        <p>Tasty beverages, strong abs that will never be seen due to aforementioned tasty beverages, and these Basic Tees!</p>
      `,
      author: "Ben Russel",
      avatarSrc: "/avatars/Image-1.png",
    },
  ],
};

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

const renderSection1 = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-6 border-t border-gray-100 mt-4 py-4 text-sm">
      <div className="flex items-center">
        <div className="flex items-center">
          {[0, 1, 2, 3, 4].map((rating) => (
            <StarIcon
              key={rating}
              className={classNames(
                reviews.average > rating
                  ? "text-yellow-500"
                  : "text-yellow-200",
                "h-3 w-3 flex-shrink-0"
              )}
              aria-hidden="true"
            />
          ))}
        </div>
        <span className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
          {reviews.totalCount} reviews
        </span>
      </div>
      <div className="relative flex items-center gap-x-2">
        <UserCircleIcon className="w-4" />
        <p className="">
          {/* <span className="absolute inset-0" /> */}
          200 students enrolled
        </p>
      </div>

      <div className="relative flex items-center gap-x-2">
        <ClockIcon className="w-4" />
        <p className="">Updated September, 2024</p>
      </div>
    </div>
  );
};

export default function CourseHeader() {
  return (
    <div className="relative isolate overflow-hidden py-12 sm:py-16 bg-[#F5F7FE]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 ">
          <p className="flex items-center gap-6">
            {["robotics", "devops"].map((item, index) => (
              <span
                key={index}
                className="text-sm bg-blue-100 text-blue-600 font-semibold px-3 py-1 rounded-2xl"
              >
                {item}
              </span>
            ))}
          </p>
          <p className="mt-6 text-4xl leading-10 font-bold  text-gray-900">
            Learn Figma Design
          </p>
          <p className="mt-6 lowercase text-gray-700 max-w-3xl">
            Learn the #1 most important building block of all art, Drawing. This
            course will teach you how to draw like a pro!
          </p>
          {renderSection1()}
        </div>
      </div>
    </div>
  );
}
