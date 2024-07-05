import { faqsDatas } from "@/utils";
import SectionHeader from "@/components/SectionHeader";
import FaqItem from "./FaqItem";

const Faq = () => {
  return (
    <section id="faq" className="bg-clr_18 section-padding">
      <div className="container">
        <SectionHeader
          headingClass={
            "font-bold font-alexandria text-6xl mb-12 text-center text-white"
          }
          heading={"FAQs"}
        />
        <div className="max-w-[1216px] w-full mx-auto">
          {faqsDatas &&
            faqsDatas?.map((faqItem, index) => (
              <FaqItem key={index} onFaqItems={faqItem} onIndex={index} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
