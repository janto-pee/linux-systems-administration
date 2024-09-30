"use client";

import { useState } from "react";

// const tabs = [
//   { name: "My Account", href: "#", current: false },
//   { name: "Company", href: "#", current: false },
//   { name: "Team Members", href: "#", current: true },
//   { name: "Billing", href: "#", current: false },
// ];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export type SearchTab = "Course" | "Event" | "Category";

export interface HeroTabsComponent1Interface {
  className?: string;
  currentTab?: SearchTab;
  currentPage?: "Course" | "Event" | "Category";
}

export default function HeroTabsComponent1({
  className = "",
  currentTab = "Course",
  currentPage,
}: HeroTabsComponent1Interface) {
  const tabs: SearchTab[] = ["Course", "Event", "Category"];
  const [tabActive, setTabActive] = useState<SearchTab>(currentTab);

  return (
    <div className="">
      <div className="sm:hidden">
        <select
          id="tabs"
          name="tabs"
          className="block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
          defaultValue={tabActive}
        >
          {tabs.map((tab) => {
            return (
              <option key={tab} onClick={() => setTabActive(tab)}>
                {tab}
              </option>
            );
          })}
        </select>
      </div>
      <div className="hidden sm:block">
        <nav className="flex space-x-3" aria-label="Tabs">
          {tabs.map((tab) => {
            const active = tab === tabActive;
            return (
              <button
                key={tab}
                onClick={() => setTabActive(tab)}
                className={classNames(
                  active
                    ? "bg-white font-semibold"
                    : "text-gray-100 hover:text-gray-300",
                  "rounded-t-md px-6 py-4 text-sm font-medium -mb-1"
                )}
                aria-current={active ? "page" : undefined}
              >
                {/* <tab.icon
                  className={classNames(
                    tab.current ? 'text-indigo-500' : 'text-gray-400 group-hover:text-gray-500',
                    '-ml-0.5 mr-2 h-5 w-5'
                  )}
                  aria-hidden="true"
                /> */}
                {tab}
              </button>
            );
          })}
        </nav>
      </div>
      {/* <div>{renderForm()}</div> */}
    </div>
  );
}
