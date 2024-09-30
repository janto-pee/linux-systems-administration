import React from "react";

interface HeaderComponentInterface {
  heading?: string;
  subHeading?: string;
  tabs?: { name: string; href: string; current: boolean }[];
  onClickTab?: (item: string) => void;
  bgClass?: string;
}

const initialTab = [
  { name: "Latest Courses", href: "#", current: true },
  { name: "Most Bought", href: "#", current: false },
  { name: "Advanced", href: "#", current: false },
  { name: "Crash Courses", href: "#", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const HeaderComponent = ({
  heading = "Featured places to stay",
  subHeading = "popular courses to recommend to you",
  bgClass,
  tabs = initialTab,
  onClickTab = () => {},
}: HeaderComponentInterface) => {
  return (
    <div className={`mb-12 sm:mb-8 relative ${bgClass}`}>
      <div className="">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900">
          {heading}
        </h2>
        <p className="text-neutral-500 text-sm">{subHeading}</p>
      </div>

      <div>
        <div className="w-full sm:hidden">
          <select
            id="tabs"
            name="tabs"
            className="block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            defaultValue={tabs && tabs.find((item) => item.current)?.name}
          >
            {tabs &&
              tabs.map((tab) => <option key={tab.name}>{tab.name}</option>)}
          </select>
        </div>
        <div className="hidden sm:block">
          <nav className="-mb-px flex space-x-4 items-center" aria-label="Tabs">
            {tabs &&
              tabs.map((tab) => (
                <a
                  key={tab.name}
                  href={tab.href}
                  className={classNames(
                    tab.current
                      ? "border-white  border-b-2 bg-primary-50/50 text-primary-700 px-6 py-1 rounded-full font-medium"
                      : "  hover:text-gray-700 text-gray-800",
                    "whitespace-nowrap px-1 font-medium text-sm "
                  )}
                  aria-current={tab.current ? "page" : undefined}
                >
                  {tab.name}
                </a>
              ))}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default HeaderComponent;
