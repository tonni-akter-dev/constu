
import { timelineData } from '@/app/utils';
import TimeLineCard from '@/components/TimeLineCard';
import React from 'react';

const ProcessTimeLine = () => {
  return (
    <section>
      <div className='xl:block hidden'>
        <div className='relative lg:ps-[14rem] ps-[2rem] lg:pt-0 pt-10 bg-processTimeline bg-cover bg-no-repeat w-full lg:h-[1027px] h-auto'>
          <div className='absolute z-10 top-1/2 left-1/2 -translate-x-1/2'>
            <div className="relative after:content-[''] after:absolute after:bg-[#B39B87] after:h-[8px] after:w-[100%] after:top-1/2 after:left-0 after:z-[-999999]">
              <ul className='flex lg:flex-row flex-col gap-[190px]'>
                {timelineData.map((item, index) => (
                  <li key={index} className='relative' >
                    <div
                      className={`absolute ${index % 2 === 0 ? 'bottom-[80px]' : 'top-[80px]'} left-1/2 transform -translate-x-1/2`}>
                      <TimeLineCard data={item} isTop={index % 2 === 0} />
                    </div>
                    <div className='bg-[#B39B87] h-[44px] w-[44px] rounded-full flex justify-center items-center border-[4px] border-white text-2xl font-medium leading-[28px] text-white'>
                      {index + 1}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50  block lg:block xl:hidden">
        <div className="">
          <div className="relative lg:ps-[14rem] ps-[2rem] lg:pt-0 pt-10 bg-processTimeline bg-cover bg-no-repeat w-full lg:h-[1027px] h-auto">
            <div className="flex flex-col md:grid grid-cols-12 text-gray-50">
              {timelineData.map((item, index) => (
                <div className="flex md:contents" key={index}>
                  <div className="col-start-2 col-end-4 mr-10 md:mx-auto relative">
                    <div className="h-full w-6 flex items-center justify-center">
                      <div className={`h-full w-1 ${index % 2 === 0 ? 'bg-[#B39B87]' : 'bg-[#B39B87]'} pointer-events-none`}></div>
                    </div>
                    <div className={`w-6 h-6 absolute top-1/2 -mt-4 rounded-full shadow text-center `}>
                      <div className='bg-[#B39B87] h-[44px] w-[44px] rounded-full flex justify-center items-center border-[4px] border-white text-2xl font-medium leading-[28px] text-white'>
                        {index + 1}
                      </div>
                    </div>
                  </div>
                  <div className={`col-start-4 col-end-12 p-4 rounded-xl my-4 mr-auto w-full `}>
                    <TimeLineCard data={item} isTop={index % 2 === 0} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

    </section>

  );
}

export default ProcessTimeLine;
