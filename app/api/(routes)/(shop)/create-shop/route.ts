import prisma from "@/lib/prismaDb";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req:NextRequest){
    try {
        const data = await req.json();

        const userId = data.userId;

        //check if user with given userId exists
        const user = await prisma.shops.findUnique({
            where:{
                userId
            }
        })
    } catch (error) {
       console.log('create shop error',error);
       return new NextResponse("Internal Error",{status:500}) 
    }
}