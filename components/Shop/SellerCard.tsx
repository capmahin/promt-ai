import { Avatar, Card } from '@nextui-org/react'
import React from 'react'

type Props = {}

const SellerCard = (props: Props) => {
  return (
    <Card className='py-4 bg-[#100d21] m-3 w-full md:w-[31%] 2xl:w-[23%] flex flex-col items-center text-white border border-[#ffffff22]'>
       <Avatar 
       src='https://pixner.net/aikeu/assets/images/blog-details/a-one.png'
       />
    </Card>
  )
}

export default SellerCard