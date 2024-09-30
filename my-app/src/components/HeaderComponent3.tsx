import Button from "@/Shared/Button";
import Link from "next/link";
import React from "react";

const HeaderComponent3 = ({
  heading = "Top Categories",
  subHeading = "Get your team access to 27,000+ top HLS courses anytime, anywhere.",
  buttonText,
  buttonLink,
}: {
  heading?: string;
  subHeading?: string;
  buttonText?: string;
  buttonLink?: string;
}) => {
  return (
    <div className="mb-16 mt-4">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900">
          {heading}
        </h2>
        <p className="text-neutral-500 text-sm">{subHeading}</p>
      </div>

      {/* <Link href={buttonLink} className="mt-8 lg:mt-16 flex justify-center">
        <Button
          className=" px-8 border-primary-500 text-primary-500 py-3 text-sm shadow-sm border font-bold rounded"
          text={buttonText}
        />
      </Link> */}
    </div>
  );
};

export default HeaderComponent3;
