import React from 'react' 
import {GoHome} from 'react-icons/go'

type Props = {
    active: number;
}

const sideBarItems=[
    {
        icon: <GoHome/>
    }
]
const ShopSidebar = ({active}: Props) => {
  return (
    <div>ShopSidebar</div>
  )
}

export default ShopSidebar