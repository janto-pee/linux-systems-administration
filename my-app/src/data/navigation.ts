export interface navigationDataInterface {
  name: string;
  href: string;
  icon?: any;
}
// home: { name: string; href: string }[];
// course: { name: string; href: string }[];
// event: { name: string; href: string }[];
// blog: { name: string; href: string }[];
// shop: { name: string; href: string }[];
// pages: { name: string; href: string }[];

export const navigationData = {
  home: [
    { name: "Home v1", href: "/" },
    { name: "Home v2", href: "/home-v2" },
    { name: "Home v3", href: "/home-v3" },
    { name: "Home v4", href: "/home-v4" },
    { name: "Home v5", href: "/home-v5" },
  ],
  courselist: [
    { name: "course list v1", href: "/course-list-v1" },
    { name: "course list v2", href: "/course-list-v2" },
    { name: "course list v3", href: "/course-list-v3" },
    { name: "course list v4", href: "/course-list-v4" },
  ],
  courseSingle: [
    { name: "course sigle v1", href: "/course-sigle-v1" },
    { name: "course sigle v2", href: "/course-sigle-v2" },
    { name: "course sigle v3", href: "/course-sigle-v3" },
    { name: "course sigle v4", href: "/course-sigle-v4" },
  ],
  event: [
    { name: "course list v1", href: "/course-list-v1" },
    { name: "course list v2", href: "/course-list-v2" },
    { name: "course list v3", href: "/course-list-v3" },
    { name: "course list v4", href: "/course-list-v4" },
  ],
  blog: [
    { name: "blog list v1", href: "/blog-list-v1" },
    { name: "blog list v2", href: "/blog-list-v2" },
    { name: "blog list v3", href: "/blog-list-v3" },
    { name: "blog list v4", href: "/blog-list-v4" },
  ],
  shop: [
    { name: "Analytics", href: "#" },
    { name: "Engagement", href: "#" },
    { name: "Security", href: "#" },
    { name: "Integrations", href: "#" },
    { name: "Automations", href: "#" },
    { name: "Reports", href: "#" },
  ],
  pages: [
    { name: "contact", href: "#" },
    { name: "faq", href: "#" },
    { name: "category", href: "#" },
  ],
};

export const navigation = [
  {
    name: "Home",
    href: "#",
    dropdown: true,
    item: "card1",
    list: navigationData.home,
  },
  {
    name: "Courses",
    href: "#",
    dropdown: true,
    item: "card2",
    list: navigationData.courselist,
  },
  {
    name: "Events",
    href: "#",
    dropdown: true,
    item: "card3",
    list: navigationData.event,
  },
  {
    name: "Shop",
    href: "#",
    dropdown: true,
    item: "card4",
    list: navigationData.shop,
  },
  {
    name: "Blog",
    href: "#",
    dropdown: true,
    item: "card1",
    list: navigationData.blog,
  },
  {
    name: "Pages",
    href: "#",
    dropdown: true,
    item: "card1",
    list: navigationData.pages,
  },
  { name: "About", href: "#", dropdown: false },
];

// const engagement = [
//   { name: "About", href: "#", icon: InformationCircleIcon },
//   { name: "Customers", href: "#", icon: UsersIcon },
//   { name: "Press", href: "#", icon: NewspaperIcon },
//   { name: "Careers", href: "#", icon: BriefcaseIcon },
//   { name: "Privacy", href: "#", icon: ShieldCheckIcon },
// ];
// const resources = [
//   { name: "Community", href: "#", icon: UserGroupIcon },
//   { name: "Partners", href: "#", icon: GlobeAltIcon },
//   { name: "Guides", href: "#", icon: BookOpenIcon },
//   { name: "Webinars", href: "#", icon: VideoCameraIcon },
// ];
// const recentPosts = [
//   {
//     id: 1,
//     title: "Boost your conversion rate",
//     href: "#",
//     date: "Mar 16, 2023",
//     datetime: "2023-03-16",
//     category: { title: "Marketing", href: "#" },
//     imageUrl:
//       "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
//     description:
//       "Et et dolore officia quis nostrud esse aute cillum irure do esse. Eiusmod ad deserunt cupidatat est magna Lorem.",
//   },
//   {
//     id: 2,
//     title: "How to use search engine optimization to drive sales",
//     href: "#",
//     date: "Mar 10, 2023",
//     datetime: "2023-03-10",
//     category: { title: "Sales", href: "#" },
//     imageUrl:
//       "https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80",
//     description:
//       "Optio cum necessitatibus dolor voluptatum provident commodi et.",
//   },
// ];
