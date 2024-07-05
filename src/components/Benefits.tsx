import { benefitsData } from "@/utils";
import Button from "@/components/Button";
import BenefitsCard from "./BenefitsCard";

const Benefits = () => {
  return (
    <section id="benefits" className="py-[160px] bg-clr_18">
      <div className="container">
        <div className="flex flex-wrap justify-center lg:justify-between mb-[60px]">
          {benefitsData.map((benefitsItem, index) => (
            <BenefitsCard
              onBenefitsItem={benefitsItem}
              onIndex={benefitsItem.id}
              key={index}
            />
          ))}
        </div>
        <div className="flex justify-center">
          <Button
            btnName="Book a call"
            btnClass="common-btn bg-clr_87 hover:bg-white transition-all duration-300 text-white hover:text-clr_87 max-w-[310px] w-full h-[58px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Benefits;
