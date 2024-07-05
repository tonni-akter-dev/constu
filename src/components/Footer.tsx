import Image from "next/image";
import Link from "next/link";
import React from "react";
import footerLogo from "/public/assets/footer-logo.png";
import { footerMenu } from "@/utils";

const Footer = () => {
  return (
    <footer className="bg-white py-12" data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-delay='500'>
      <div className="container">
        <div className="flex flex-wrap items-center justify-between gap-5">
          <Link href="/">
            <Image width={216} height={27} src={footerLogo} alt="section-img" />
          </Link>

          <div className="flex flex-wrap items-center gap-8">
            {footerMenu.map((data) => (
              <Link
                key={data.id}
                href={data.path}
                className="text-base text-clr_71 font-normal font-alexandria"
              >
                {data.title}
              </Link>
            ))}
          </div>
          <p className="text-clr_71 text-base font-normal leading-[20px]">
            © 2024 Constructum. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
