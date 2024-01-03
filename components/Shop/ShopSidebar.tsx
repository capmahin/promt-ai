import React from 'react' 
import {GoHome, GoArrowSwitch} from 'react-icons/go'
import { MdOutlineCreateNewFolder } from "react-icons/md";
import { BsWallet2 } from "react-icons/bs";
import { LiaFileInvoiceDollarSolid } from "react-icons/lia";
import { TbMoneybag } from "react-icons/tb";
import { BiMoneyWithdraw } from "react-icons/bi";

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
    <div>ShopSidebar</div>
  )
}

export default ShopSidebar