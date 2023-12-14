import { User } from '@clerk/nextjs/server';
import React from 'react'

type Props = {
    user:User | null;
    setOpen: (open:boolean)=> void;
    handleProfile: ()=> void;
    isSellerExist: boolean;

}

const DropDown = ({
    user, setOpen, handleProfile, isSellerExist
}: Props) => {
  return (
    <div>DropDown</div>
  )
}

export default DropDown