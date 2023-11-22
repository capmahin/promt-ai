import Image from 'next/image'
import React from 'react'

type Props = {}

const Future = (props: Props) => {
  return (
    <div className='w-full relative p-4 md:p-[unset] grid md:grid-cols-2 py-8'>
       <div className="col-span-1">
        <Image 
        src={"https://pixner.net/aikeu/assets/images/tools-thumb.png"}
        width={800}
        height={500}
        alt=''
        className='md:w-[90%] md:ml-[-50px] 2xl:ml-[-90px]'
        />
       </div>
       <div className='col-span-1'>

       </div>
    </div>
  )
}

export default Future