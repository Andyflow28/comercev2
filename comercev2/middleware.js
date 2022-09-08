import { NextResponse } from "next/server";
import { jwtVerify } from "jose";
// import dotenv from 'dotenv-safe'

// dotenv.config()

export async function middleware(request) {
    // const jwt = request.cookies.get("TokenName")

//     if (jwt === undefined) {
//         return NextResponse.redirect(new URL("/", request.url))
//     }

//     try {
//         const {payload} = await jwtVerify(
//             jwt,
//             new TextEncoder().encode(process.env.ID)
//         )
//         return NextResponse.next()
//     } catch (error) {
//         console.log(error);
//         return NextResponse.redirect(new URL("/", request.url))
//     }
}

export const config = {
    matcher: [
        
]
}