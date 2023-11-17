import React from 'react'

type Props = {}

const Hero = (props: Props) => {
  return (
    <div className='w-full md:min-h-screen flex items-center justify-center'>
     <div>
        <h1 className='font-Monserrat text-4xl py-5 xl:text-7xl 2xl:text-8xl font-[700] text-center xl:leading-[80px] 2xl:leading-[100px] sm:mt-20'>
            Make <span className='text-[#64ff4b]'>Ai Image</span> <br />
            with your <br /> Imagination
        </h1>
     </div>
    </div>
  )
}

export default Hero