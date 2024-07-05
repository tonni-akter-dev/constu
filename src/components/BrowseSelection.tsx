'use client'
import React, { useState } from 'react'
import SelectionTab from './SelectionTab'
import { selectionTabData } from '@/utils'
import SelectionPrice from './SelectionPrice'
import Button from '@/components/Button'
import SectionHeader from '@/components/SectionHeader';

const BrowseSelection = () => {
  const [tab, setTab] = useState<number>(0);
  const handleClick = (index: number) => () => {
    setTab(index);
  };
  const handleNext = () => {
    const nextIndex = (tab + 1) % selectionTabData.length;
    setTab(nextIndex);
  };
  const handlePrev = () => {
    const prevIndex = (tab - 1 + selectionTabData.length) % selectionTabData.length;
    setTab(prevIndex);
  };
  const currentTab = selectionTabData[tab];

  return (
    <div className='container  mx-auto'>
      <div className='py-[160px] '>
        <SectionHeader
          headingClass='mb-5'
          descriptionClass="text-2xl font-medium leading-[25px]"
          heading="Browse our selection"
          description="to find the guest house that perfectly compliments your vision"
        />
        <SelectionTab
          onHandleClick={handleClick}
          data={selectionTabData}
          setTab={setTab}
          tab={tab}
        />
        <SelectionPrice
          configuration={currentTab?.configuration}
          size={currentTab?.size}
          price={currentTab?.price}
          onNext={handleNext}
          onPrev={handlePrev}
        />
        <div className='flex gap-8 justify-center mt-[60px]'>
          <Button
            btnName={`Details About ${currentTab?.text ? currentTab?.text : '1:1'}`}
            btnClass="common-btn bg-clr_87 hover:bg-clr_18 transition-all duration-300 border border-[#B39B87] text-white hover:text- max-w-[398px] w-full h-[58px]"
          />
          <Button
            btnName="Schedule a call"
            btnClass="common-btn bg-clr_18 hover:bg-[#B39B87] transition-all duration-300 text-white max-w-[398px] w-full h-[58px]"
          />
        </div>
      </div>
    </div>
  )
}

export default BrowseSelection