import { styles } from '@/utils/styles'
import React from 'react'

type Props = {}

const BestSellers = (props: Props) => {
  return (
    <div className='mb-10 cursor-pointer'>
        <h1 className={`${styles.heading} p-2 font-Monserrat mb-5`}>
          Top Sellers
        </h1>
        <div className='flex flex-wrap'>

        </div>
    </div>
  )
}

export default BestSellers