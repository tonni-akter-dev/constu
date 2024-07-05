import React from "react";
import Image from "next/image";

type IProps = {
  isTop: boolean;
  data: {
    img: string;
    title: string;
  };
};

const TimeLineCard: React.FC<IProps> = ({ isTop, data }) => {

  const cardDelay = 300;

  return (
    <div data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-delay={cardDelay + 100}
    >
      <div
        className={`xl:block hidden ${isTop
            ? ""
            : "  w-0 h-0  border border-l-transparent border-r-transparent border-t-transparent border-b-white border-l-[20px] border-r-[20px] border-b-[40px]  mx-auto"
          }`}></div>
      <div className="py-[37px] px-[35px] bg-white rounded-[24px] h-[230px] max-w-[378px] xl:w-[378px] w-full lg:mb-0 mb-10 text-center">
        <div className="flex justify-center">
          <Image
            height={82}
            width={82}
            className="mb-4"
            src={data?.img}
            alt="discover"
          />
        </div>
        <p className="text-[#321A18] font-medium text-[28px]">{data.title}</p>
      </div>
      <div
        className={`xl:block hidden ${isTop
            ? " w-0 h-0  border border-l-transparent border-r-transparent border-b-transparent border-t-white border-l-[20px] border-r-[20px] border-t-[40px] mx-auto"
            : ""
          }`}></div>
    </div>
  );
};

export default TimeLineCard;
