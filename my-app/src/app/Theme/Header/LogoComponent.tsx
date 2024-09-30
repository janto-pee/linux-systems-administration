import Image from "next/image";
import React from "react";

const LogoComponent = () => {
  return (
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
      <span className="text-lg lg:text-xl font-semibold mr-4 text-white">
        AFS
      </span>
    </div>
  );
};

export default LogoComponent;
