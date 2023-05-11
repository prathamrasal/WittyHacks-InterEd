
import cookie from "cookie";


export default async function(req, res) {
  const cookies = req.cookies;
  if (req.method === "POST") {
    if (cookies) {
      const { token } = cookies;
      if (token) {
        res.setHeader(
          "Set-Cookie",
          cookie.serialize("token", "", {
            httpOnly: true,
            secure: process.env.NODE_ENV !== "development",
            maxAge: -1,
            sameSite: "strict",
            path: "/",
          })
        );
        return res.json({ message: "Logged Out" });
      }
    }
    return res.json({ message: "Logged Out" });
  }
  else {
    return res.status(406).json({message : 'Method is not acceptable'});
  }

}