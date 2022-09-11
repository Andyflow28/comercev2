import Jwt from "jsonwebtoken";

export default function profileHandler(req, res) {
  const { TokenName } = req.cookies;

  if (TokenName === undefined) {
    return res.status(200).json({ status: false });
  } else {
    try {
      const user = Jwt.verify(TokenName, process.env.DB_CLIENT_ID);
      return res.json({
        username: user.username,
        email: user.email,
        status: true,
      });
    } catch (error) {
      return res.status(401).json({ error: "invalid token" });
    }
  }
}
