import { reviewsInterface } from "./types";

export const reviewsList: reviewsInterface = {
  average: 4,
  totalCount: 117,
  featured: [
    {
      id: 1,
      courseId: 1,
      title: "This is the best white t-shirt out there",
      rating: 4.02,
      content: `
        <p>I've searched my entire life for a t-shirt that reflects every color in the visible spectrum. Scientists said it couldn't be done, but when I look at this shirt, I see white light bouncing right back into my eyes. Incredible!</p>
      `,
      date: "May 16, 2021",
      datetime: "2021-01-06",
      author: "Mark Edwards",
      avatarSrc: "/avatars/Image-1.png",
    },
    {
      id: 2,
      courseId: 2,
      title: "Adds the perfect variety to my wardrobe",
      rating: 4.32,
      content: `
        <p>I used to be one of those unbearable minimalists who only wore the same black v-necks every day. Now, I have expanded my wardrobe with three new crewneck options! Leaving off one star only because I wish the heather gray was more gray.</p>
      `,
      date: "May 16, 2021",
      datetime: "2021-01-06",
      author: "Blake Reid",
      avatarSrc: "/avatars/Image-2.png",
    },
    {
      id: 3,
      courseId: 3,
      title: "All good things come in 6-Packs",
      rating: 4.49,
      content: `
        <p>Tasty beverages, strong abs that will never be seen due to aforementioned tasty beverages, and these Basic Tees!</p>
      `,
      date: "May 16, 2021",
      datetime: "2021-01-06",
      author: "Ben Russel",
      avatarSrc: "/avatars/Image-3.png",
    },
  ],
};
