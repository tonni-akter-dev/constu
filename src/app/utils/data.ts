import { title } from "process";
import {
  IBenefitsData,
  IBlog,
  IFaqsDatas,
  IFooterMenu,
  IHeaderNavItems,
  ISelection,
  ITimelineData,
} from "./type";
import blog1 from "/public/assets/blog1.png";
import blog2 from "/public/assets/blog2.png";
import blog3 from "/public/assets/blog3.png";
import construction from "/public/assets/construction.png";
import discover from "/public/assets/discoverthecall.svg";
import estimate from "/public/assets/estimate.png";
import bIcon1 from "/public/assets/headphone-icon.svg";
import bIcon3 from "/public/assets/mind-icon.svg";
import movein from "/public/assets/moveIn.png";
import permits from "/public/assets/permits.png";
import planning from "/public/assets/planning.png";
import site from "/public/assets/site-analysis.png";
import bIcon2 from "/public/assets/speed-icon.svg";

export const headerNavItems: IHeaderNavItems[] = [
  {
    id: 1,
    name: "OUR MODELS",
    path: "#",
    dropdown: [
      {
        id: 1,
        name: "Something",
        path: "/some-thing",
      },
    ],
  },
  {
    id: 2,
    name: "HOW IT’S DONE",
    path: "/how-its-done",
    dropdown: [],
  },
  {
    id: 3,
    name: "WHAT IT COST",
    path: "/what-it-cost",
    dropdown: [],
  },
  {
    id: 4,
    name: "SOLAR",
    path: "/solar",
    dropdown: [],
  },
  {
    id: 5,
    name: "ABOUT US",
    path: "/about-us",
    dropdown: [],
  },
  {
    id: 6,
    name: "BLOG",
    path: "/blog",
    dropdown: [],
  },
];

export const timelineData: ITimelineData[] = [
  {
    id: 1,
    img: discover,
    title: "Discover Call",
  },
  {
    id: 2,
    img: site,
    title: "Site Analysis",
  },
  {
    id: 3,
    img: estimate,
    title: "Estimate",
  },
  {
    id: 4,
    img: planning,
    title: "Planning & Engineering",
  },
  {
    id: 5,
    img: permits,
    title: "Permits",
  },
  {
    id: 6,
    img: construction,
    title: "Construction",
  },
  {
    id: 7,
    img: movein,
    title: "Move In!",
  },
];

export const benefitsData: IBenefitsData[] = [
  {
    id: 1,
    icon: bIcon1,
    title: "Comprehensive Service",
    description:
      "We design the plans, manage engineering, submit and oversee permits, help with HOA's, handle full construction, install interior finishes and fixtures and more.",
  },
  {
    id: 2,
    icon: bIcon2,
    title: "Speed",
    description:
      "Our experience and knowledge of the construction space in Arizona, coupled with our standardized plans and pre-planned budgets allow us to get these projects completed quicker than any traditional contractor.",
  },
  {
    id: 3,
    icon: bIcon3,
    title: "Speed",
    description:
      "Our experience and knowledge of the construction space in Arizona, coupled with our standardized plans and pre-planned budgets allow us to get these projects completed quicker than any traditional contractor.",
  },
];

export const faqsDatas: IFaqsDatas[] = [
  {
    id: 1,
    title: "Elementum id rhoncus enim quisque eu.",
    description:
      "Metus quam neque elit sit. A aliquam eget nulla accumsan ac ut elementum aenean cursus. Varius fermentum enim a adipiscing platea egestas. Lectus vel vel turpis consectetur non urna eget. Tortor risus tempus porttitor quis natoque dignissim gravida diam adipiscing. Ornare eget integer proin at etiam libero.",
  },
  {
    id: 2,
    title:
      "In urna nec quisque nisi amet. Convallis quisque pretium a ullamcorper.",
    description:
      "Metus quam neque elit sit. A aliquam eget nulla accumsan ac ut elementum aenean cursus. Varius fermentum enim a adipiscing platea egestas. Lectus vel vel turpis consectetur non urna eget. Tortor risus tempus porttitor quis natoque dignissim gravida diam adipiscing. Ornare eget integer proin at etiam libero.",
  },
  {
    id: 3,
    title: "Leo morbi sodales turpis volutpat tellus et et arcu.",
    description:
      "Metus quam neque elit sit. A aliquam eget nulla accumsan ac ut elementum aenean cursus. Varius fermentum enim a adipiscing platea egestas. Lectus vel vel turpis consectetur non urna eget. Tortor risus tempus porttitor quis natoque dignissim gravida diam adipiscing. Ornare eget integer proin at etiam libero.",
  },
  {
    id: 4,
    title: "Sed nibh vulputate id ut fermentum. Lacus tortor congue",
    description:
      "Metus quam neque elit sit. A aliquam eget nulla accumsan ac ut elementum aenean cursus. Varius fermentum enim a adipiscing platea egestas. Lectus vel vel turpis consectetur non urna eget. Tortor risus tempus porttitor quis natoque dignissim gravida diam adipiscing. Ornare eget integer proin at etiam libero.",
  },
  {
    id: 4,
    title: "Nisl metus condimentum tristique convallis. ",
    description:
      "Metus quam neque elit sit. A aliquam eget nulla accumsan ac ut elementum aenean cursus. Varius fermentum enim a adipiscing platea egestas. Lectus vel vel turpis consectetur non urna eget. Tortor risus tempus porttitor quis natoque dignissim gravida diam adipiscing. Ornare eget integer proin at etiam libero.",
  },
];

export const selectionTabData: ISelection[] = [
  {
    id: 1,
    text: "1:1",
    active: true,
    configuration: "1:1",
    size: "599sf",
    price: "180,000",
  },
  {
    id: 2,
    text: "2:1",
    active: false,
    configuration: "2:1",
    size: "850sf",
    price: "245,000",
  },
  {
    id: 3,
    text: "2:2",
    active: false,
    configuration: "2:2",
    size: "1,150sf",
    price: "306,000",
  },
  {
    id: 4,
    text: "Custom",
    active: false,
    configuration: "",
    size: "",
    price: "1",
  },
];


export const blogs: IBlog[] = [
  {
    id: 1,
    img: blog1,
    title: "Adipiscing leo odio adipiscing",
    description:
      "Sed adipiscing amet dictum risus vestibulum. Maecenas ut pulvinar hac consectetur at. Maecenas habitant viverra lacus in felis ornare.",
    date: "Sep 31 , 2023",
  },
  {
    id: 2,
    img: blog2,
    title: "In posuere nisl euismod facilisi",
    description:
      "Odio morbi urna nec in. Sit posuere amet a vel suspendisse venenatis blandit fermentum augue. Diam at facilisis egestas in.",
    date: "Sep 31 , 2023",
  },
  {
    id: 3,
    img: blog3,
    title: "A cras commodo viverra eget.",
    description:
      "Sed in faucibus tempus bibendum massa nunc mattis nulla massa. Pulvinar enim amet nulla pellentesque porttitor mattis amet nisi.",
    date: "Sep 31 , 2023",
  },
];

export const footerMenu: IFooterMenu[] = [
  {
    id: 1,
    title: "Models",
    path: "/",
  },
  {
    id: 2,
    title: "Process",
    path: "/",
  },
  {
    id: 3,
    title: "Pricing",
    path: "/",
  },
  {
    id: 4,
    title: "About Us",
    path: "/",
  },
];
