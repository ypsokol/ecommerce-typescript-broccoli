import bcryptjs from "bcryptjs";
import nc from "next-connect";
import { authToken } from "../../../utils/auth";
import { NextApiRequest, NextApiResponse } from "next";
import { SanityQuery } from "../../../utils/api/sanityQuery";

const handler = nc();
handler.post(async (req: NextApiRequest, res: NextApiResponse) => {
  const { email, password } = req.body;
  if (!email || typeof email !== "string") return;
  if (!password || typeof password !== "string" || password.length < 5) return;

  const user = await SanityQuery.findUserByEmail(email);

  if (user && bcryptjs.compareSync(password, user.password)) {
    const userResponse = {
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    };
    const token = authToken(userResponse);
    res.send({
      ...userResponse,
      token,
    });
  } else {
    res.status(401).send({ message: "Invalid email or password" });
  }
});

export default handler;
