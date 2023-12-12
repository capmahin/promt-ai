//todo
import {User,currentUser} from "@clerk/nextjs/server";
import {NextRequest,NextResponse} from "next/server";

export async function GET(req:NextRequest){
    try {
        const user:User | null = await currentUser();
        if(!user){
            return new NextResponse("Please login to access this resources!",{
                status: 400,
            });
        }
    } catch (error) {
        console.log('load user error',error);
        return new NextResponse("Internal Error",{status: 500})
    }
}