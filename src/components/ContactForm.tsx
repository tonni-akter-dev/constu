"use client";
import Input from "@/components/Input";
import { Envelope, Export, MapPin, User } from "@phosphor-icons/react";
import React, { useRef, useState } from "react";

const ContactForm = () => {
  const fileRef = useRef<HTMLInputElement | null>(null);

  return (
    <form  data-aos="fade-up"
    data-aos-duration="1000"
    data-aos-delay='500'>
      <Input label="Name" type="text" name="name" icon={<User size={28} />} />
      <Input
        label="Email"
        type="email"
        name="email"
        icon={<Envelope size={28} />}
      />
      <Input
        label="Property Address"
        type="text"
        name="address"
        icon={<MapPin size={28} />}
      />
      <Input
        label="Information About Potential Project"
        type="file"
        name="address"
        ref={fileRef}
        accept="application/pdf, application/vnd.ms-excel"
        icon={<Export size={28} />}
      />
      <div className="text-center">
        <button className=" bg-clr_87 text-white text-2xl font-medium font-alexandria leading-[32px] py-3 px-12">
          Submit
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
