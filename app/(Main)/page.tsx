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
  }, [])
  
  return (
    <div>
      <Header activeItem={0} />
      <Hero />
    </div>
  )
}

export default Page;