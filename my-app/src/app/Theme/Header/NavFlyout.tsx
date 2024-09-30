import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { navigationData } from "@/data/navigation";

export interface NavFlyoutInterface {
  cardType?: string;
  menu?: { name: string; href: string }[];
  title: string;
  textColor?: string;
  //   cardType?: "card1" | "card2" | "card3";
}

export default function NavFlyout({
  cardType,
  textColor = "",
  menu = navigationData.home,
  title = "Home",
}: NavFlyoutInterface) {
  const renderNav = (menu: { name: string; href: string }[]) => {
    switch (cardType) {
      case "card1":
        return renderSimpleNav(title, menu);
      case "card2":
        return renderLargeNav(title, menu);
      case "card3":
        return renderOtherNav(title, menu);
      default:
        return renderSimpleNav(title, menu);
    }
  };

  const renderSimpleNav = (
    title: string,
    item: { name: string; href: string }[]
  ) => {
    return (
      <Popover className="relative">
        <Popover.Button
          className={`flex items-center gap-x-1 text-sm leading-6 ${textColor}`}
        >
          {/* flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-900 hover:border-gray-300 hover:text-primary-700 gap-x-2 */}
          <span>{title}</span>
          <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
        </Popover.Button>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-200"
          enterFrom="opacity-0 translate-y-1"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-in duration-150"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 translate-y-1"
        >
          <Popover.Panel className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-min -translate-x-1/2 px-4">
            <div className="w-56 shrink rounded-xl bg-white p-4 text-sm font-semibold leading-6 text-gray-900 shadow-lg ring-1 ring-gray-900/5">
              {item.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block p-2 hover:text-indigo-600"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    );
  };

  const renderLargeNav = (
    title: string,
    item: { name: string; href: string }[]
  ) => {
    return (
      <Popover className="relative">
        <Popover.Button
          className={`flex items-center gap-x-1 text-sm leading-6 ${textColor}`}
        >
          {/* flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-900 hover:border-gray-300 hover:text-primary-700 gap-x-2 */}
          <span>{title}</span>
          <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
        </Popover.Button>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-200"
          enterFrom="opacity-0 translate-y-1"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-in duration-150"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 translate-y-1"
        >
          <Popover.Panel className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-min -translate-x-1/2 px-4">
            <div className="w-56 shrink rounded-xl bg-white p-4 text-sm font-semibold leading-6 text-gray-900 shadow-lg ring-1 ring-gray-900/5">
              {item.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block p-2 hover:text-indigo-600"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    );
  };

  const renderOtherNav = (
    title: string,
    item: { name: string; href: string }[]
  ) => {
    return (
      <Popover className="relative">
        <Popover.Button
          className={`flex items-center gap-x-1 text-sm leading-6 ${textColor}`}
        >
          {/* flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-900 hover:border-gray-300 hover:text-primary-700 gap-x-2 */}
          <span>{title}</span>
          <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
        </Popover.Button>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-200"
          enterFrom="opacity-0 translate-y-1"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-in duration-150"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 translate-y-1"
        >
          <Popover.Panel className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-min -translate-x-1/2 px-4">
            <div className="w-56 shrink rounded-xl bg-white p-4 text-sm font-semibold leading-6 text-gray-900 shadow-lg ring-1 ring-gray-900/5">
              {item.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block p-2 hover:text-indigo-600"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    );
  };

  return <>{renderNav(menu)}</>;
}
