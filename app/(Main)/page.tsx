'use client'
import React, { useState,useEffect } from 'react'
import Header from "@/components/Header";
import Hero from '@/components/Route/Hero';
import Image from 'next/image';
type Props = {}

const Page = (props: Props) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if(!isMounted){
      setIsMounted(true);
    }
  }, [isMounted]);

  if(!isMounted){
    return null;
  }
  
  return (
    <div>
      <div className='banner'>
      <Header activeItem={0} />
      <Hero />
      </div>
      <Image
          src={"https://pixner.net/aikeu/assets/images/footer/shape-two.png"}
          width={120}
          height={120}
          alt=""
          className="absolute right-[-30px]"
        />
        <br />
        <div className=''>

        </div>
    </div>
  )
}

export default Page;