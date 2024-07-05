import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        alexandria: 'Alexandria", sans-serif',
      },
      colors: {
        clr_18: "#321A18",
        clr_bb: "#BBB",
        clr_87: "#B39B87",
        clr_71: "#717171",
        clr_38: "#383838",
        clr_16: "#231A16",
        clr_f3: "#F4F3F3",
      },
      backgroundImage: {
        headerImg: "url('/assets/banner-bg.png')",
        processTimeline: "url('/assets/timeline-bg.png')",
        contactBg: "url('/assets/contact-bg.png')",
      },
    },
  },
  plugins: [],
};
export default config;
