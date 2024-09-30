import Navbar3 from "@/app/Theme/Header/Navbar3";
import CtaComponent from "@/components/CtaComponent";
import FooterComponent2 from "@/components/FooterComponent2";
import React from "react";
import CourseHeader from "../../CourseHeader";
import { CourseData } from "@/data/courses";

const CourseDetailsV1 = ({ params }: { params: { id: string } }) => {
  const course =
    CourseData.find((item, index) => item.id.toString() == params.id) ||
    CourseData[0];

  const renderSection1 = () => {
    return (
      <div className="lg:p-8 lg:border lg:rounded-xl bg-white">
        <h1 className="">Course Overview</h1>
        <div className="mt-4 space-y-4  ">
          {course.courseOverview.map((item, index) => (
            <p key={index} className="text-base text-neutral-500">
              {item}
            </p>
          ))}
        </div>
      </div>
    );
  };

  // const renderSection2 = () => {
  //   return (
  //     <div className="mt-10 lg:p-8 lg:border lg:rounded-xl bg-white">
  //       <DetailsTitleHeader
  //         title="What you'll learn"
  //         titleClass="text-lg text-gray-900 sm:text-xl"
  //       />

  //       <div className="mt-4">
  //         <ul
  //           role="list"
  //           className={`space-y-6 pl-4 text-sm ${
  //             course.courseTOCList.length > 7 ? "grid lg:grid-cols-2" : ""
  //           }`}
  //         >
  //           {course.courseTOCList.map((highlight, index) => (
  //             <li key={index} className="text-gray-400 flex items-center gap-4">
  //               <p className=" text-gray-900 p-1 rounded-full border">
  //                 <CheckIcon className="w-2" />
  //               </p>
  //               <span className="text-gray-600">{highlight}</span>
  //             </li>
  //           ))}
  //         </ul>
  //       </div>
  //     </div>
  //   );
  // };

  // const renderSection3 = () => {
  //   return (
  //     <div className="mt-10 p-8 border rounded-xl bg-white">
  //       <DetailsTitleHeader
  //         title="Requirements"
  //         titleClass="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl"
  //       />

  //       <div className="mt-4">
  //         <ul role="list" className="list-disc  space-y-2 pl-4 text-sm">
  //           {course.courseRequirementList.map((item, index) => (
  //             <li key={index} className=" text-gray-400 text-base">
  //               <span className="text-gray-600">{item}</span>
  //             </li>
  //           ))}
  //         </ul>
  //       </div>
  //     </div>
  //   );
  // };

  // const renderSection4 = () => {
  //   return (
  //     <div className="mt-10 lg:p-8 lg:border lg:rounded-xl bg-white">
  //       <DetailsTitleHeader
  //         title="Course Summary"
  //         titleClass="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl"
  //       />

  //       <CourseAccordion1 accordionList={course.accordionList} />
  //     </div>
  //   );
  // };

  // author
  const renderSection5 = () => {
    return <div></div>;
  };

  // reviews
  const renderSection6 = () => {
    return <div></div>;
  };

  return (
    <div>
      <Navbar3 />
      <CourseHeader />
      {/* header */}
      <main className="mx-auto flex flex-col lg:flex-row w-full max-w-7xl items-start gap-x-8 px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex-1 max-w-3xl">{renderSection1()}</div>
      </main>
      <CtaComponent />
      <FooterComponent2 />
    </div>
  );
};

export default CourseDetailsV1;
