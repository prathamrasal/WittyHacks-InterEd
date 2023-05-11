import { sign } from "jsonwebtoken";
import cookie from 'cookie';
import { serverInstance } from "@/API";


export default async function (req, res) {
  if (req.method === "POST") {
    const {email,password} = req.body;
    const result = await serverInstance.post('/auth/login', {email,password});
    const user = result.data.user;
    const token = sign(
      {
        user
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "1w" }
    );
    res.setHeader(
      "Set-Cookie",
      cookie.serialize("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV !== "development",
        maxAge: 60 * 60 * 24 * 7, // 1 week
        sameSite: "strict",
        path: "/",
      })
    );
    return res.json({
        user : user,
        status : true
    });
  }else {
    return res.status(406).json({message : 'Method is not acceptable'});
  }
}