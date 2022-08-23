import Jwt from "jsonwebtoken"
import { serialize } from "cookie"
import { pool } from "../../../config/db";

export default async function loginhandler(req, res) {
    const { email, password } = req.body
    let emails = [];
    let passwords = [];

    const [result] = await pool.query("SELECT * FROM user;");
    console.log(result);

    result.map((e) => {
        emails.push(e.email)
        passwords.push(e.password)
    })

    console.log(emails);

    if (emails.includes(email) && passwords.includes(password)) {
        const token = Jwt.sign({
            exp: Math.floor(Date.now() / 100) + (60 * 60 * 24 * 30),
            email: email,
            password: password
        }, 'secret')

        const serialized = serialize('mytokenName', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 1000 * 60 * 60 * 24 * 30,
            path: '/'
        })

        res.setHeader('Set-Cookie', serialized)
        return res.json("login succesfully")

    } else {
        return res.status(401).json({ error: 'invalid email or password' })
    }


}