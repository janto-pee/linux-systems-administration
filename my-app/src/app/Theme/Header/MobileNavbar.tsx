import React from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { navigation } from "@/data/navigation";

const MobileNavbar = () => {
  return (
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
  );
};

export default MobileNavbar;
