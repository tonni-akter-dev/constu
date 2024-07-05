'use client'
import { useEffect } from "react";

import "aos/dist/aos.css";
import AOS from "aos";
import Home from "../components/Home";

export default function HomePage() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
    <Home/>
    </>
  );
}
