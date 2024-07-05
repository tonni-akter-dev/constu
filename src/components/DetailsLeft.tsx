import Button from "@/components/Button";

const DetailsLeft = () => {
  return (
    <div className="text-center" data-aos="fade-right"
      data-aos-duration="1000"
      data-aos-delay="300">
      <p className="text-3xl lg:text-[44px] leading-10 lg:leading-normal font-light text-clr_bb mb-[50px] lg:mb-[142px]">
        <span className="text-white font-bold">
          Building in general is hard
        </span>
        . It feels like a full-time job. Finding reliable contractors who will
        prioritize your project is difficult. Costs can be unpredictable, and
        delays are common. Many people feel stressed and frustrated, worried
        that their dream project might never happen.
      </p>
      <Button
        btnName="Book a call"
        btnClass="common-btn bg-clr_87 hover:bg-white transition-all duration-300 text-white hover:text-clr_87 max-w-[310px] w-full h-[58px]"
      />
    </div>
  );
};

export default DetailsLeft;
