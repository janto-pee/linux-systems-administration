import type { Config } from "tailwindcss";

function customColors(cssVar: any): any {
  return ({
    opacityVariable,
    opacityValue,
  }: {
    opacityVariable: any;
    opacityValue: any;
  }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${cssVar}), ${opacityValue})`;
    }
    if (opacityVariable !== undefined) {
      return `rgba(var(${cssVar}), var(${opacityVariable}, 1))`;
    }
    return `rgb(var(${cssVar}))`;
  };
}

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: customColors("--c-primary-50"),
          100: customColors("--c-primary-100"),
          200: customColors("--c-primary-200"),
          300: customColors("--c-primary-300"),
          400: customColors("--c-primary-400"),
          500: customColors("--c-primary-500"),
          600: customColors("--c-primary-600"),
          700: customColors("--c-primary-700"),
          800: customColors("--c-primary-800"),
          900: customColors("--c-primary-900"),
        },
        secondary: {
          50: customColors("--c-secondary-50"),
          100: customColors("--c-secondary-100"),
          200: customColors("--c-secondary-200"),
          300: customColors("--c-secondary-300"),
          400: customColors("--c-secondary-400"),
          500: customColors("--c-secondary-500"),
          600: customColors("--c-secondary-600"),
          700: customColors("--c-secondary-700"),
          800: customColors("--c-secondary-800"),
          900: customColors("--c-secondary-900"),
        },
        tertiary: {
          50: customColors("--c-neutral-50"),
          100: customColors("--c-neutral-100"),
          200: customColors("--c-neutral-200"),
          300: customColors("--c-neutral-300"),
          400: customColors("--c-neutral-400"),
          500: customColors("--c-neutral-500"),
          600: customColors("--c-neutral-600"),
          700: customColors("--c-neutral-700"),
          800: customColors("--c-neutral-800"),
          900: customColors("--c-neutral-900"),
        },
      },
      backgroundImage: {
        hero: "linear-gradient(135deg, rgba(17, 24, 39, 0.3) 0%,  rgba(17, 24, 39, 0.5) 60%, rgba( 133, 77, 14, 0.3) 100%), url('/hero/5.png')",
        hero1:
          "linear-gradient(135deg, rgba(13, 40, 87, 1) 0%,  rgba(17, 24, 39, 0.6) 60%, rgba( 133, 77, 14, 0.1) 100%)",
        banner1:
          "linear-gradient(135deg, rgba(13, 40, 87, 1) 0%,  rgba(17, 24, 39, 0.8) 60%, rgba( 133, 77, 14, 0.5) 100%)",
        // hero2: "linear-gradient(0deg, #dddeff 0%, #F6F8FC 100%)",
        // // hero3: "linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%)",
        // hero3:
        //   "linear-gradient(62deg, rgba(152,196,251,0.9), rgba(219,194,249, 0.8)), url('/Hero/img-1-105a64ad.jpg')",
        // hero2Dark: "linear-gradient(0deg, #161636 0%, #000000 100%)",
        // "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        // "gradient-conic":
        //   "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        // bgShopHeader:
        //   "linear-gradient(62deg, rgba(2,0,36,0.5), rgba(9,9,121,0.5)), url('/Hero/product-bg.webp')",
        // bgHeroGradient: "linear-gradient(62deg, #8EC5FC 0%, #8EC5FC 100%)",
        // bgHeroGradient: "linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%)",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
export default config;
