"use client";

import Button from "@/Shared/Button";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import NavFlyout from "./NavFlyout";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const home = [
  { name: "Home v1", href: "/" },
  { name: "Home v2", href: "/home-v2" },
  { name: "Home v3", href: "/home-v3" },
  { name: "Home v4", href: "/home-v4" },
  { name: "Home v5", href: "/home-v5" },
];

const course = [
  { name: "course list v1", href: "/course-list-v1" },
  { name: "course list v2", href: "/course-list-v2" },
  { name: "course list v3", href: "/course-list-v3" },
  { name: "course list v4", href: "/course-list-v4" },
];

const event = [
  { name: "event list v1", href: "/event-list-v1" },
  { name: "event list v2", href: "/event-list-v2" },
  { name: "event list v3", href: "/event-list-v3" },
  { name: "event list v4", href: "/event-list-v4" },
];

const blog = [
  { name: "blog list v1", href: "/blog-list-v1" },
  { name: "blog list v2", href: "/blog-list-v2" },
  { name: "blog list v3", href: "/blog-list-v3" },
  { name: "blog list v4", href: "/blog-list-v4" },
];

const shop = [
  { name: "Analytics", href: "#" },
  { name: "Engagement", href: "#" },
  { name: "Security", href: "#" },
  { name: "Integrations", href: "#" },
  { name: "Automations", href: "#" },
  { name: "Reports", href: "#" },
];

const pages = [
  { name: "contact", href: "#" },
  { name: "faq", href: "#" },
  { name: "category", href: "#" },
];

const navigation = [
  { name: "Home", href: "#", dropdown: true, item: "card1", list: home },
  { name: "Courses", href: "#", dropdown: true, item: "card2", list: course },
  { name: "Events", href: "#", dropdown: true, item: "card3", event },
  { name: "Shop", href: "#", dropdown: true, item: "card4", shop },
  { name: "Blog", href: "#", dropdown: true, item: "card1", list: blog },
  { name: "Pages", href: "#", dropdown: true, item: "card1", list: pages },
  { name: "About", href: "#", dropdown: false },
];

export default function Navbar2({ className }: { className?: string }) {
  return (
    <Disclosure as="nav" className={className}>
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
            <div className="flex h-16 justify-between">
              <div className="flex px-2 lg:px-0">
                <div className="flex flex-shrink-0 items-center gap-2">
                  <Image
                    width={100}
                    height={100}
                    className="block h-8 w-auto lg:hidden"
                    src="/mark.svg"
                    alt="AFS"
                  />
                  <Image
                    height={100}
                    width={100}
                    className="hidden h-8 w-auto lg:block"
                    src="/mark.svg"
                    alt="AFS"
                  />
                  <span className="text-lg lg:text-xl font-semibold mr-4">
                    AFS
                  </span>
                </div>
                <div className="hidden lg:ml-6 lg:flex lg:space-x-4 relative lg:items-center">
                  {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                  {navigation.map((item) => (
                    <div key={item.name}>
                      {item.dropdown && item.item ? (
                        <NavFlyout cardType={item.item} title={item.name} />
                      ) : (
                        <Link
                          href={item.href}
                          className="text-sm leading-6 text-gray-900"
                        >
                          {item.name}
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center lg:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="hidden lg:ml-4 lg:flex lg:items-center gap-2">
                <Button
                  className="rounded-md px-6 py-3 text-white shadow-sm border font-thin bg-primary-500 text-sm"
                  text="Crease a Course"
                />
              </div>
            </div>
          </div>

          <Disclosure.Panel className="lg:hidden">
            <div className="space-y-1 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href="#"
                  className="block border-l-4 border-indigo-500 bg-indigo-50 py-2 pl-3 pr-4 text-base font-medium text-indigo-700"
                >
                  Dashboard
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
