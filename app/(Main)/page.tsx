'use client'
import React, { useState,useEffect } from 'react'
import Header from "@/components/Header";
import Hero from '@/components/Route/Hero';
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
    </div>
  )
}

export default Page;