import { ISelection } from '@/app/utils';
import React from 'react';

type IProps = {
  tab: number;
  setTab: (tab: number) => void;
  data: ISelection[];
  onHandleClick: (index: number) => () => void;
}

const SelectionTab: React.FC<IProps> = ({ tab, data, onHandleClick }) => {
  return (
    <div className='py-12 flex flex-wrap gap-3 justify-center' data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-delay="500">
      {data.map((item, index) => (
        <button
          key={item.id}
          onClick={onHandleClick(index)}
          className={`${tab === index ? "bg-clr_87 text-white" : "bg-clr_f3 text-[#717171]"
            } px-12 py-4 rounded-[100px] cursor-pointer`}
        >
          <p className={`${tab === index ? "bg-clr_87 " : "bg-clr_f3 text-[#717171]"
            } text-base font-medium cursor-pointer`}>{item.text}</p>
        </button>
      ))}
    </div>
  );
};

export default SelectionTab;