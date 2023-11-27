import { styles } from '@/utils/styles'
import Image from 'next/image';
import React from 'react'
import Marquee from 'react-fast-marquee'

type Props = {}

const partners = [
  {
    url: "https://pixner.net/aikeu/assets/images/partner/one.png",
  },
  {
    url: "https://pixner.net/aikeu/assets/images/partner/two.png",
  },
  {
    url: "https://pixner.net/aikeu/assets/images/partner/three.png",
  },
  {
    url: "https://pixner.net/aikeu/assets/images/partner/four.png",
  },
  {
    url: "https://pixner.net/aikeu/assets/images/partner/five.png",
  },
  {
    url: "https://pixner.net/aikeu/assets/images/partner/one.png",
  },
  {
    url: "https://pixner.net/aikeu/assets/images/partner/two.png",
  },
  {
    url: "https://pixner.net/aikeu/assets/images/partner/three.png",
  },
  {
    url: "https://pixner.net/aikeu/assets/images/partner/four.png",
  },
  {
    url: "https://pixner.net/aikeu/assets/images/partner/five.png",
  },
];

const Partners = (props: Props) => {
  return (
    <div className='py-10'>
        <h1 className={`${styles.heading} font-Monserrat text-center`}>
        Our Partner&apos;s
        </h1>
        {/* Add 
         */}
         {/* start now */}
         <div className='w-full flex justify-center pt-3'>
          <div className='w-[50px] h-[2px] bg-[#64ff4b]'/>
          <Marquee className='w-full my-10'>
             {
              partners.map((i,index)=>(
                <Image 
                src={i.url}
                alt=''
                width={100}
                height={100}
                key={index}
                />
              ))
             }
          </Marquee>
         </div>

    </div>
  )
}

export default Partners