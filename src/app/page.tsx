'use client'
import { useEffect } from "react";
import Banner from "../components/Banner";
import Benefits from "../components/Benefits";
import Blog from "../components/Blog";
import BrowseSelection from "../components/BrowseSelection";
import Contact from "../components/Contact";
import Details from "../components/Details";
import Faq from "../components/Faq";
import ImageSec from "../components/ImageSec";
import ProcessTimeLine from "../components/ProcessTimeLine";
import "aos/dist/aos.css";
import AOS from "aos";

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="overflow-x-hidden">
      <Banner />
      <Details />
      <ImageSec />
      <Benefits />
      <ProcessTimeLine />
      <Faq />
      <BrowseSelection />
      <Blog />
      <Contact />
    </div>
  );
}
