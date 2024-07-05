"use client";
import { IFaqsDatas } from "@/utils";
import { Plus, X } from "@phosphor-icons/react";
import Image from "next/image";
import { useState } from "react";
import VideoBtn from "/public/assets/video-icon.svg";

type IProps = {
  onFaqItems: IFaqsDatas;
  onIndex: number;
};

const FaqItem: React.FC<IProps> = ({ onFaqItems, onIndex }) => {
  const [faqOpen, setFaqOpen] = useState<number | null>(null);

  const handleFaqOpen = (index: number) => {
    setFaqOpen(faqOpen === index ? null : index);
  };

  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-delay="500"
      key={onIndex}
      className="py-3 lg:pt-6 lg:pb-8 border-b border-b-clr_38 last:border-b-0">
      <div
        onClick={() => handleFaqOpen(onIndex)}
        className="flex items-center gap-4 justify-between text-xl lg:text-[28px] font-medium text-white cursor-pointer">
        <p>{onFaqItems.title}</p>
        <div>
          <Plus className={faqOpen === onIndex ? "hidden" : ""} size={32} />
          {faqOpen === onIndex && <X size={32} />}
        </div>
      </div>
      <div
        className={`text-sm lg:text-base font-normal text-slate-700 border-t border-t-clr_38 pt-6 mt-6 ${faqOpen === onIndex ? "" : "hidden"
          }`}>
        <div className="text-clr_71 text-2xl font-normal flex gap-16">
          {onFaqItems.description}
          <button className="flex-shrink-0">
            <Image width={100} height={100} src={VideoBtn} alt="video-icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FaqItem;
