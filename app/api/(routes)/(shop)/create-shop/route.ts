import prisma from "@/lib/prismaDb";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req:NextRequest){
    try {
        
    } catch (error) {
       console.log('create shop error',error);
       return new NextResponse("Internal Error",{status:500}) 
    }
}