import { blogs } from '@/app/utils'
import Button from '@/components/Button'
import Card from '@/components/Card'
import SectionHeader from '@/components/SectionHeader'
import React from 'react'

const Blog = () => {
    return (
        <div className='container '>
            <div className='mb-[160px]'>
                <div className='flex justify-center '>
                    <SectionHeader heading="Tincidunt id gravida hac arcu enim aliquet donec. Purus." headingClass='mb-[47px] max-w-[1182px] ' />
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-[64px] mb-[60px]' >
                    {
                        blogs.map((data) => (
                            <React.Fragment key={data.id}>
                                <Card data={data} />
                            </React.Fragment>
                        ))
                    }
                </div>
                <div className='flex justify-center'>
                    <Button
                        btnName={`View all`}
                        btnClass="common-btn bg-clr_87 text-2xl  hover:bg-clr_18 transition-all duration-300  border border-[#B39B87] text-white  max-w-[309px] w-full h-[58px]"
                    />
                </div>
            </div>
        </div>
    )
}

export default Blog