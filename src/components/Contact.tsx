import SectionHeader from "@/components/SectionHeader";
import React from "react";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div className="contact bg-contactBg py-40">
      <div className="container">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-[54px]">
            <SectionHeader
              heading="What’s stopping you from reaching out?"
              description=" With over thirty years of collective experience, we make building your  perfect guest home easy and stress-free. "
              headingClass="text-3xl lg:text-[60px] font-semibold text-white max-w-[1059px] mx-auto leading-normal mb-5 font-alexandria"
              descriptionClass="text-2xl font-normal text-clr_bb max-w-[859px] mx-auto leading-[140%] mb-6"
            />
            <p className="text-white text-2xl font-semibold" data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="600">
              Contact us today to get started!
            </p>
          </div>

          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
