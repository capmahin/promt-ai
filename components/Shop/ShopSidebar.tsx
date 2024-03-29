import React from 'react' 
import {GoHome, GoArrowSwitch} from 'react-icons/go'
import { MdOutlineCreateNewFolder } from "react-icons/md";
import { BsWallet2 } from "react-icons/bs";
import { LiaFileInvoiceDollarSolid } from "react-icons/lia";
import { TbMoneybag } from "react-icons/tb";
import { BiMoneyWithdraw } from "react-icons/bi";
import Link from 'next/link';
import { styles } from '@/utils/styles';

type Props = {
    active: number;
}

const sideBarItems=[
    {
        icon: <GoHome/>,
        title:"Dashboard",
        href:"/my-shop"
    },
    {
        icon: <MdOutlineCreateNewFolder />,
        title: "Upload Prompt",
        href:"/shop/create-prompt",
    },
    {
        icon: <BsWallet2 />,
        title: "Prompts",
        href: "/shop/prompts",
      },
      {
        icon: <TbMoneybag />,
        title: "Orders",
        href: "/shop/orders",
      },
      {
        icon: <LiaFileInvoiceDollarSolid />,
        title: "Invoices",
        href: "/shop/invoices",
      },
      {
        icon: <BiMoneyWithdraw />,
        title: "Withdraw Earnings",
        href: "/shop/withdraw",
      },
      {
        icon: <GoArrowSwitch />,
        title: "Switch to user",
        href: "/",
      },
]
const ShopSidebar = ({active}: Props) => {
  return (
    <div>
        {
            sideBarItems.map((items,index)=>(
                <div className='w-full mx-5 my-10' key={index}>
                   <Link href={items.href}>
                    <div className='flex items-center'>
                        <div className={`text-3xl ${active !== index ? "!text-white":"!text-[#858DFB]"}`}>
                        {items.icon}
                        </div>
                        <span
                        className={`${styles.label} ${active !== index ? "!text-white":"!text-[#858DFB]"} pl-4`}
                        >
                        {items.title}
                        </span>
                    </div>
                   </Link>
                </div>
                ))
        }
    </div>
  )
}

export default ShopSidebar