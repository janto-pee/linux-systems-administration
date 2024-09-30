import { StaticImageData } from "next/image";

export interface InstructorDataInterface {
  id: string | number;
  image: string;
  name: string;
  position: string;
  subject: string;
  rating: number;
  ratingCount: number;
  student: number;
  course: number;
  instructorSummary?: string[];
  email?: string;
  telephone?: string;
  title?: string;
}

export interface EventDataInterface {
  id: string | number;
  image: string | StaticImageData;
  title: string;
  date: string;
  location: string;
  price: string;
  author: string;
  tag: string;
  tagColor: string;
  href?: string;
}

export interface CategoryDataInterface {
  id?: number;
  title: string;
  subtitle?: string;
  count: number;
  href: string;
  icon?: any;
  imageUrl: string | StaticImageData;
}

// export interface SliderCardComponentInterface {
//   // category
//   title: string;
//   subtitle?: string;
//   imageUrl: string | StaticImageData;
//   count: number;
//   href: string;
//   id: number | string;

//   // courses
//   lesson?: number;
//   duration?: number;
//   // instructors
//   // Blog
//   // Events
// }

export interface CourseDataInterface {
  id: number | string;
  href: string;
  tags: string[];
  title: string;
  subtitle: string;
  students: number;
  duration: number | string;
  instructor: string | number;
  courseOverview: string[];
  courseLessons: string[];
  requirements: string[];
  courseCurriculum: string | number;
  image: StaticImageData | string;
  topic: string;
  modifiedOn?: string;
  language: string;
  lesson: number;
  level?: "Beginner" | "Intermediate" | "Advanced";
  newCourse?: boolean;
  bestseller?: boolean;
  popular: boolean;
  price: number;
  courseType?: string;
}
export interface courseSidebarList {
  icon: string;
  title: string;
  option: number | string;
  accessibility?: string;
  certificate?: boolean;
}
[];

export interface accordionContentInterface {
  time: string;
  subcontent: string;
  subduration?: string;
}

export interface accordionListInterface {
  courseId: number | string;
  title: string;
  active?: boolean;
  lectures: number;
  duration: string;
  content: accordionContentInterface[];
}

export interface reviewsInterface {
  href?: string;
  average: number;
  totalCount: number;
  featured: {
    id: number;
    courseId: string | number;
    title: string;
    rating: number;
    content: string;
    author: string;
    date?: string;
    datetime?: string;
    avatarSrc: string;
    subcomment?: innerReviewInterface[];
  }[];
}

export interface innerReviewInterface {
  id: number;
  parentId: string | number;
  title: string;
  rating: number;
  content: string;
  author: string;
  date?: string;
  datetime?: string;
  avatarSrc: string;
}
// export {

// }
