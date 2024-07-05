import React from "react";

type IProps = {
  heading?: string;
  description?: string;
  headingClass?: string;
  descriptionClass?: string;
};

const SectionHeader: React.FC<IProps> = ({
  heading,
  description,
  headingClass,
  descriptionClass,
}) => {
    return (
        <div className='text-center'>
            <h2 data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="300" className={`${headingClass} text-center text-clr_16 text-[60px] font-bold leading-normal`}>{heading}</h2>
            <p data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="500" className={`${descriptionClass}`} >{description}</p>
        </div>
    )
}

export default SectionHeader
