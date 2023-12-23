'use client';

import { styles } from "@/utils/styles";
import { useUser } from "@clerk/nextjs";
import { Input } from "@nextui-org/react";
import { useState } from "react";

type Props = {}

const Page = (props: Props) => {
    const {user} = useUser();
    const [loading, setLoading] = useState(false);
    const [shopData, setShopData] = useState({
        name:"",
        description:"",
        shopProductsType:"",
        avatar:"",

    });

    const handleSubmit = async (e:React.FormEvent<HTMLFormControlsCollection>)=>{
        e.preventDefault();
    }
  return (
    <div className="w-full h-screen flex flex-col justify-center">
      <div>
        <h1 className={`${styles.heading} text-center font-Monserrat`}>
            Start to selling with us
        </h1>
        <form className="2xl:w-[40%] xl:w-[50%] md:w-[70%] w-[90%] m-auto">
            <div className="w-full my-5">
               <label className={`${styles.label}mb-2 block`}>
                  Shop Name
               </label>
               <Input
               isRequired
               type="name"
               value={shopData.name}
               onChange={(e)=> setShopData({...shopData,name:e.target.value})}
               />
            </div>
        </form>
      </div>
    </div>
  )
}

export default Page