import { GiNotebook } from "react-icons/gi";
import { IoIosRocket } from "react-icons/io";
import { TbReportSearch } from "react-icons/tb";
import { HiLightBulb } from "react-icons/hi";
import { MdOutlineSettingsSuggest } from "react-icons/md";
import customeWebsite from '../assets/custom-website-Bbb9PdWM.webp'
import serviceWebsite from '../assets/service-website.jpeg'
import portfolioWebsite from '../assets/protfolio-website.png'


export const servicesDataOnHome = [
  {
    icon: GiNotebook,
    heading: "Meta & Google Ads",
    paragraph:
      "Meta Ads & Google AdsA powerful mix to boost awareness, drive traffic, and generate quality leads.",
  },
  {
    icon: IoIosRocket,
    heading: "SEO Optimization",
    paragraph:
      "We optimize every click, every keyword, and every page to a brand of search results.",
  },
  {
    icon: TbReportSearch,
    heading: "Analytics & Report",
    paragraph:
      "our analytics and reporting, you’ll gain a clear picture of your the opportunities to grow.",
  },
  {
    icon: HiLightBulb,
    heading: "Brand Strategy",
    paragraph:
      "Your brand’s journey starts with a powerful strategy aligns vision with impact your unique story.",
  },
  {
    icon: MdOutlineSettingsSuggest,
    heading: "Influencer Marketing",
    paragraph:
      "Turn influence into impact of With influencer marketing, we connect and your driving and brand",
  },
];

export const projectProfileData = [
  {
    image: customeWebsite,
    Heading: "Custom Website Development",
    paragraph: "We build tailor-made websites with modern design, smooth functionality, and performance optimization to match your business goals.",
  },
  {
    image: serviceWebsite,
    Heading: "Service Website Development",
    paragraph: "Create impactful service websites that highlight your offerings clearly and help convert visitors into customers.",
  },
  {
    image: portfolioWebsite,
    Heading: "Portfolio Website Development",
    paragraph: "Showcase your work professionally with a visually appealing, fast-loading, and mobile-responsive portfolio website.",
  },
];


export const testimonials = [
  {
    image: "https://randomuser.me/api/portraits/women/45.jpg",
    name: "Sophia Johnson",
    stars: 5,
    feedback:
      "This team transformed our online presence! Their creativity and dedication helped us achieve more leads and visibility than ever before.",
  },
  {
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "James Anderson",
    stars: 4,
    feedback:
      "Excellent service and support. They really understand digital marketing and provide solutions tailored to our needs.",
  },
  {
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    name: "Emily Carter",
    stars: 5,
    feedback:
      "I’m beyond impressed with their professionalism and results-driven strategies. Highly recommended for anyone serious about growth!",
  },
];
