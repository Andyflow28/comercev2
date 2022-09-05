import { verify } from 'jsonwebtoken'
import { serialize } from "cookie"
import dotenv from 'dotenv-safe'

dotenv.config()

export default function logoutHandler(req, res) {
    const { TokenName } = req.cookies

    try {
        verify(TokenName, process.env.ID)
        const serialized = serialize('TokenName', null, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 0,
            path: '/'
        })
        res.setHeader('Set-Cookie', serialized)
        res.status(200).json("logout succesfully")
    } catch (error) {
        console.log(error);
    }
}