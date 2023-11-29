import { styles } from '@/utils/styles'
import React from 'react'

type Props = {}

const SellersBanner = (props: Props) => {
  return (
    <div className='w-full 2xl:w-[80%] 2xl:m-auto h-[30vh] flex items-center justify-center sellers-banner rounded-xl md:m-2'>
        <div className='text-center'>
            <h1 className={`${styles.heading} !text-indigo-950 font-Monserrat`}>

            </h1>
        </div>
    </div>
  )
}

export default SellersBanner