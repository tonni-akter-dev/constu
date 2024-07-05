import Image from "next/image";

type IProps = {
  onIndex: number;
  onBenefitsItem: {
    id: number;
    icon: any;
    title: string;
    description: string;
  };
};

const BenefitsCard: React.FC<IProps> = ({ onBenefitsItem, onIndex }) => {
  const cardDelay = 200 + onIndex * 200;
  const h3Delay = cardDelay;
  const pDelay = cardDelay + 200;
  
  return (
    <div
      className="max-w-[435px] w-full text-center mb-10 lg:mb-0"
      key={onIndex}>
      <div className="flex justify-center mb-2 lg:mb-6" data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay={h3Delay}>
        <Image src={onBenefitsItem.icon} alt={onBenefitsItem.title} />
      </div>
      <h3
        className="font-bold text-[32px] font-alexandria text-white mb-2 lg:mb-6"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay={h3Delay}
      >
        {onBenefitsItem.title}
      </h3>
      <p
        className="font-light text-base text-clr_bb"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay={pDelay}
      >
        {onBenefitsItem.description}
      </p>
    </div>
  );
};

export default BenefitsCard;
