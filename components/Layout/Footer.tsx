import Link from 'next/link'
import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <div className='mt-8'>
      <div className='w-full mb-5 flex justify-between items-center'>
           <div>
            <Link href={"/"}>
            <h1 className='font-Inter text-3xl cursor-pointer'>
                        <span className='text-[#64ff4c]'>Bec</span>odemy
                    </h1>
            </Link>
           </div>
      </div>
    </div>
  )
}

export default Footer