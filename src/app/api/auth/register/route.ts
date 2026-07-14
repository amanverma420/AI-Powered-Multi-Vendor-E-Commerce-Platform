import connectDb from "@/lib/db";
import User from "@/models/user.model";
import bcrypt from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req:NextRequest) {
    try {
        await connectDb()
        const {name,email,password,role} = await req.json()
        const existUser = await User.findOne({email})
        if(existUser){
            return NextResponse.json(
                {message:"User already exist"},
            {status:400})
        }
        if(!password || password.length < 6){
             return NextResponse.json(
                {message:"Password must be atleast six characters"},
            {status:400})
        }
        if(role === "admin"){
            const adminExists = await User.findOne({role:"admin"})
            if(adminExists){
                return NextResponse.json(
                    {message:"An Admin already exists on this platform."},
                    {status:400}
                )
            }
        }
        const hashedPassword = await bcrypt.hash(password,10)
        const user = await User.create({
            name ,
            email , 
            password : hashedPassword,
            role: role || "user"
        })
        return NextResponse.json(
                {user},
            {status:200})

    } catch (error) {
        return NextResponse.json(
                {message:`register error ${error}`},
            {status:500})
    }
    
}