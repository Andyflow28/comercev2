import Jwt from "jsonwebtoken";
import { serialize } from "cookie";
import { pool } from "../../../config/db";
import dotenv from 'dotenv-safe'

dotenv.config()

export default async function loginHandler(req, res) {
  const { email, password } = req.body;

  const valid = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
  const text = /^\s+$/;
  if (
    valid.test(email) &&
    text.test(email) &&
    text.password &&
    password.length >= 8 &&
    email.length > 0
  ) {
    let emails = [];
    let passwords = [];

    const [result] = await pool.query("SELECT * FROM user;");
    console.log(result);

    result.map((e) => {
      emails.push(e.email);
      passwords.push(e.password);
    });

    if (emails.includes(email) && passwords.includes(password)) {
      const token = Jwt.sign(
        {
          exp: Math.floor(Date.now() / 100) + 60 * 60 * 24 * 30,
          email: email,
          password: password,
        },
        process.env.ID
      );

      const serialized = serialize("TokenName", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 1000 * 60 * 60 * 2,
        path: "/",
      });

      res.setHeader("Set-Cookie", serialized);
      return res.json("login succesfully");
    } 
  } else {
    return res.status(401).json({ error: "invalid email or password" });
  }
}
