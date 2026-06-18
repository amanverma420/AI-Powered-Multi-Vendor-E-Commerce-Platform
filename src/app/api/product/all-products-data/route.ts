import { NextRequest, NextResponse } from "next/server";
import connectDb from "@/lib/db";
import Product from "@/models/product.model";

export async function GET(req: NextRequest) {
  try {
    await connectDb();

    const products = await Product.find()
      .populate("vendor", "name email shopName")
      .populate({
        path: "reviews.user",
        select: "name email image", // jo fields chahiye wahi rakho
      }) // vendor basic info
      .sort({ createdAt: -1 });

    return NextResponse.json(
      products ,
      { status: 200 }
    );

  } catch (error: any) {
    console.log("GET ALL PRODUCTS ERROR:", error);

    return NextResponse.json(
      { 
        success: false, 
        message: "Server Error", 
        error: {
          message: error.message,
          stack: error.stack,
          code: error.code,
          syscall: error.syscall,
          hostname: error.hostname
        },
        dnsServers: require('dns').getServers()
      },
      { status: 500 }
    );
  }
}
