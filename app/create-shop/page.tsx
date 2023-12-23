'use client';

import { styles } from "@/utils/styles";

type Props = {}

const Page = (props: Props) => {
  return (
    <div className="w-full h-screen flex flex-col justify-center">
      <div>
        <h1 className={`${styles.heading} text-center font-Monserrat`}>
            Start to selling with us
        </h1>
        <form className="2xl:w-[40%] xl:w-[50%] md:w-[70%] w-[90%] m-auto">
            <div className="w-full my-5">
               
            </div>
        </form>
      </div>
    </div>
  )
}

export default Page