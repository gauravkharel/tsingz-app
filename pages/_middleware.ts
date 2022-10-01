import { NextResponse } from "next/server"
//just yelling if you don't have the token, youre directed to sign in, nothing else tehee
const signedinPages = ['/', '/playlists', '/library']

export default function middleware(req) {
    if (signedinPages.find((p) => p === req.nextUrl.pathname)){
        const token = req.cookies.TRAX_ACCESS_TOKEN

        if(!token){
            return NextResponse.redirect('./signin')
        }
    }
}

