"use client";

import Button from "@/Shared/Button";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import NavFlyout from "./NavFlyout";
import LogoComponent from "./LogoComponent";
import NavItems from "./NavItems";
import MobileNavbar from "./MobileNavbar";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar1({ className }: { className?: string }) {
  return (
    <Disclosure as="nav" className={className}>
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
            <div className="flex h-16 justify-between">
              <div className="flex px-2 lg:px-0">
                <LogoComponent />
                <NavItems />
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
                  className="rounded-md px-6 py-3 shadow-sm border font-thin bg-primary-50 text-sm"
                  text="Create a Course"
                />
              </div>
            </div>
          </div>

          {/* mobile */}
          <MobileNavbar />
        </>
      )}
    </Disclosure>
  );
}
