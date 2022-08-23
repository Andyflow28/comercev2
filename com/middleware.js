import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

export async function middleware(request) {
    const jwt = request.cookies.get("mytokenName")

    if (jwt === undefined) {
        return NextResponse.redirect(new URL("/", request.url))
    }

    try {
        const {payload} = await jwtVerify(
            jwt,
            new TextEncoder().encode("secret")
        )
        return NextResponse.next()
    } catch (error) {
        console.log(error);
        return NextResponse.redirect(new URL("/", request.url))
    }
}

export const config = {
    matcher: [
        '/profilePages/:path*'
]
}