import DB from "@/app/lib/DB";
import { NextResponse } from "next/server";
import post from "@/app/models/post";
export async function GET(req){

try {
    await DB()
    return NextResponse.json({"msg":"succes"})
} catch (error) {
    return NextResponse.json({"msg":"error"} ,{
        status:400,
    })
}
}