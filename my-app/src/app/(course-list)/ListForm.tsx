import Button from "@/Shared/Button";
import { MagnifyingGlassIcon, StarIcon } from "@heroicons/react/20/solid";

export default function ListForm() {
  const levelListForm = () => {
    return (
      <div className="text-start">
        <label
          htmlFor="email"
          className="block text-sm leading-6 text-gray-900"
        >
          Email
        </label>
        <div className="">
          <input
            type="text"
            name="level"
            id="level"
            className="block w-full border-0 py-1.5 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6 px-0"
            placeholder="what level are you?"
          />
        </div>
      </div>
    );
  };

  const durationListForm = () => {
    return (
      <div>
        <label
          htmlFor="price"
          className="block text-sm leading-6 text-gray-900 text-start"
        >
          Duration
        </label>
        <div className="relative rounded-md">
          <input
            type="text"
            name="price"
            id="price"
            className="block w-full rounded-md border-0 py-1.5 px-0 pr-20 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6"
            placeholder="Course duration"
          />
          <div className="absolute inset-y-0 right-0 flex items-center">
            <label htmlFor="currency" className="sr-only">
              Duration
            </label>
            <select
              id="currency"
              name="currency"
              className="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
            >
              <option>4hrs</option>
              <option>12 hrs</option>
              <option>12 hrs+</option>
            </select>
          </div>
        </div>
      </div>
    );
  };

  const ratingListForm = () => {
    return (
      <div>
        <label
          htmlFor="price"
          className="block text-sm leading-6 text-gray-900 text-start"
        >
          Rating
        </label>
        <div className="relative rounded-md">
          {/* <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <span className="text-gray-500 sm:text-sm">$</span>
          </div> */}
          <input
            type="text"
            name="price"
            id="price"
            className="block w-full rounded-md border-0 py-1.5 px-0 pr-20 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6"
            placeholder="Course Ratings"
          />
          <div className="absolute inset-y-0 right-0 flex items-center">
            <label htmlFor="currency" className="sr-only">
              Currency
            </label>
            <select
              id="currency"
              name="currency"
              className="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 sm:text-sm"
            >
              <option>2 stars</option>
              <option>3 stars</option>
              <option>4+ stars</option>
            </select>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="mx-auto max-w-6xl bg-white rounded-sm py-2 px-4 flex flex-col lg:flex-row items-center justify-between gap-4">
      {levelListForm()}
      <div className="self-center border-r border-slate-300 dark:border-slate-700 h-8"></div>
      {durationListForm()}
      <div className="self-center border-r border-slate-300 dark:border-slate-700 h-8"></div>
      {ratingListForm()}
      <p>
        <Button className="bg-[#13357B] text-primary-100 rounded-md hover:bg-primary-400 gap-2 px-6 py-4">
          <MagnifyingGlassIcon className="text-white w-4 h-4 " />
          Search
        </Button>
      </p>
    </div>
  );
}
