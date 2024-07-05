import { IBlog } from '@/utils'
import Image from 'next/image'
import React from 'react'

type IProps = {
    data: IBlog
}

const Card: React.FC<IProps> = ({ data }) => {
    return (
        <div data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay='500'>
            <Image className='mb-5' src={data.img} alt="blog image" />
            <p className='text-base font-light text-clr_71 leading-[24px] mb-3'>{data.date}</p>
            <h3 className='text-3xl  text-clr_16 font-alexandria font-semibold leading-[41px] mb-1 '>{data?.title}</h3>
            <p className='text-base font-normal leading-8 text-[#383838]'>{data.description}</p>
        </div>
    )
}

export default Card