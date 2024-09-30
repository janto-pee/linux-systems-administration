import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { navigationData, navigationDataInterface } from "@/data/navigation";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

const NavItems = () => {
  const renderNav1 = (list: navigationDataInterface[]) => {
    return (
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
            {list.map((item) => (
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
    );
  };

  const renderNav2 = (
    list: navigationDataInterface[],
    list2: navigationDataInterface[]
  ) => {
    return (
      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 -translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 -translate-y-1"
      >
        <Popover.Panel className="absolute inset-x-0 top-0 -z-10 bg-white pt-16 shadow-lg ring-1 ring-gray-900/5">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 px-6 py-10 lg:grid-cols-2 lg:px-8">
            <div className="grid grid-cols-2 gap-x-6 sm:gap-x-8">
              <div>
                <h3 className="text-sm font-medium leading-6 text-gray-500">
                  course list
                </h3>
                <div className="mt-6 flow-root">
                  <div className="-my-2">
                    {list.map((item: { name: string; href: string }) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="flex gap-x-4 py-2 text-sm font-semibold leading-6 text-gray-900"
                      >
                        {/* <innerItem.icon
                          className="h-6 w-6 flex-none text-gray-400"
                          aria-hidden="true"
                        /> */}
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-sm font-medium leading-6 text-gray-500">
                  course single
                </h3>
                <div className="mt-6 flow-root">
                  <div className="-my-2">
                    {list2.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="flex gap-x-4 py-2 text-sm font-semibold leading-6 text-gray-900"
                      >
                        {/* <item.icon
                          className="h-6 w-6 flex-none text-gray-400"
                          aria-hidden="true"
                        /> */}
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-10 sm:gap-8 lg:grid-cols-2">
              <h3 className="sr-only">Recent posts</h3>
              {/* {recentPosts.map((post) => (
                <article
                  key={post.id}
                  className="relative isolate flex max-w-2xl flex-col gap-x-8 gap-y-6 sm:flex-row sm:items-start lg:flex-col lg:items-stretch"
                >
                  <div className="relative flex-none">
                    <img
                      className="aspect-[2/1] w-full rounded-lg bg-gray-100 object-cover sm:aspect-[16/9] sm:h-32 lg:h-auto"
                      src={post.imageUrl}
                      alt=""
                    />
                    <div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-gray-900/10" />
                  </div>
                  <div>
                    <div className="flex items-center gap-x-4">
                      <time dateTime={post.datetime} className="text-sm leading-6 text-gray-600">
                        {post.date}
                      </time>
                      <a
                        href={post.category.href}
                        className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 text-xs font-medium text-gray-600 hover:bg-gray-100"
                      >
                        {post.category.title}
                      </a>
                    </div>
                    <h4 className="mt-2 text-sm font-semibold leading-6 text-gray-900">
                      <a href={post.href}>
                        <span className="absolute inset-0" />
                        {post.title}
                      </a>
                    </h4>
                    <p className="mt-2 text-sm leading-6 text-gray-600">{post.description}</p>
                  </div>
                </article>
              ))} */}
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    );
  };
  return (
    <div className="hidden lg:ml-6 lg:flex lg:space-x-4 relative lg:items-center">
      <Popover className="relative border-0 ring-0 border-none">
        <Popover.Button
          className={`flex items-center gap-x-1 text-sm leading-6 text-gray-100 ring-0 border-none border-0`}
        >
          {/* flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-900 hover:border-gray-300 hover:text-primary-700 gap-x-2 */}
          <span>Home</span>
          <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
        </Popover.Button>
        {renderNav1(navigationData.home)}
      </Popover>

      <Popover className="relative">
        <Popover.Button
          className={`flex items-center gap-x-1 text-sm leading-6 text-gray-100 `}
        >
          {/* flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-900 hover:border-gray-300 hover:text-primary-700 gap-x-2 */}
          <span>Course</span>
          <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
        </Popover.Button>
        {renderNav2(navigationData.courselist, navigationData.courseSingle)}
      </Popover>

      <Popover className="relative">
        <Popover.Button
          className={`flex items-center gap-x-1 text-sm leading-6 text-gray-100 `}
        >
          {/* flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-900 hover:border-gray-300 hover:text-primary-700 gap-x-2 */}
          <span>Event</span>
          <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
        </Popover.Button>
        {renderNav1(navigationData.event)}
      </Popover>

      <Popover className="relative">
        <Popover.Button
          className={`flex items-center gap-x-1 text-sm leading-6 text-gray-100 `}
        >
          {/* flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-900 hover:border-gray-300 hover:text-primary-700 gap-x-2 */}
          <span>Shop</span>
          <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
        </Popover.Button>
        {renderNav1(navigationData.shop)}
      </Popover>

      <Popover className="relative">
        <Popover.Button
          className={`flex items-center gap-x-1 text-sm leading-6 text-gray-100 `}
        >
          {/* flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-900 hover:border-gray-300 hover:text-primary-700 gap-x-2 */}
          <span>Pages</span>
          <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
        </Popover.Button>
        {renderNav1(navigationData.pages)}
      </Popover>

      <Link href={"/about"} className="text-sm leading-6 text-gray-100">
        About
      </Link>
    </div>
  );
};

export default NavItems;
