import React from 'react';
import arrowLeft from '/public/assets/arrow-left.svg';
import arrowRight from '/public/assets/arrow-right.svg';
import Image from 'next/image';

type IProps = {
  configuration: string;
  size: string;
  price: string;
  onNext: () => void;
  onPrev: () => void;
};

const SelectionPrice: React.FC<IProps> = ({ configuration, size, price, onNext, onPrev }) => {
  const splitText = configuration?.split(':');

  return (
    <div className='bg-headerImg lg:pt-[319px] pt-10 pb-[40px] rounded-[20px]'>
      <div>
        <div className='flex justify-between lg:mb-[144px] mb-10 mx-10'>
          <button
            className='bg-[#321A18] w-[54px] h-[56px] flex justify-center items-center rounded-full'
            onClick={onPrev}
          >
            <Image src={arrowLeft} alt="arrowLeft" />
          </button>
          <button
            className='bg-[#321A18] w-[54px] h-[56px] flex justify-center items-center rounded-full'
            onClick={onNext}
          >
            <Image src={arrowRight} alt="arrowRight" />
          </button>
        </div>
        <div className="flex justify-center lg:mx-0 mx-5 "
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300">
          <div className='py-10 px-20 bg-clr_f3 max-w-[909px] w-full rounded-[20px] text-center'>
            <div className='flex lg:flex-row flex-col items-center justify-between lg:gap-0 gap-5 '>
              <div>
                <h2 className='text-[32px] font-semibold font-alexandria text-clr_18 mb-3'>
                  {splitText[0] ? splitText[0] : 1} Bed : {splitText[1] ? splitText[1] : 1} Bath
                </h2>
                <p className='text-clr_71 text-base font-normal leading-normal'>Configuration</p>
              </div>
              <div className='bg-[#E1E1E1] h-[53px] w-[1px] mx-8 lg:block hidden'></div>
              <div>
                <h2 className='text-[32px] font-semibold font-alexandria text-clr_18 mb-3'>{size}</h2>
                <p className='text-clr_71 text-base font-normal leading-normal'>Size</p>
              </div>
              <div className='bg-[#E1E1E1] h-[53px] w-[1px] mx-8 lg:block hidden'></div>
              <div>
                <h2 className='text-[32px] font-semibold font-alexandria text-clr_18 mb-3'>${price}</h2>
                <p className='text-clr_71 text-base font-normal leading-normal'>Price</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectionPrice;
