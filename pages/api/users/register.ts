import bcryptjs from "bcryptjs";
import nc from "next-connect";
import { authToken } from "../../../utils/auth";
import { NextApiRequest, NextApiResponse } from "next";
import { SanityQuery } from "../../../utils/api/sanityQuery";
import { SanityApi } from "../../../utils/api/sanityApi";

const handler = nc();
handler.post(async (req: NextApiRequest, res: NextApiResponse) => {
  //TODO: Make normal error handler
  const { email, name, password } = req.body;
  if (!email || typeof email !== "string") return;
  if (!name || typeof name !== "string") return;
  if (!password || typeof password !== "string" || password.length < 5) return;

  const isUserExist = await SanityQuery.findUserByEmail(email);
  if (isUserExist) {
    return res.status(401).send({ message: "Email already exists" });
  }

  try {
    const mutations = [
      {
        create: {
          _type: "user",
          name,
          email,
          password: bcryptjs.hashSync(password),
          isAdmin: false,
        },
      },
    ];

    const response = await SanityApi.register(mutations);

    const userId = response.data.results[0].id;
    const newUser = {
      _id: userId,
      name,
      email,
      isAdmin: false,
    };
    const token = authToken(newUser);
    res.send({ ...newUser, token });
  } catch (err: any) {
    res.status(err.statusCode || 500).json(err.message);
  }
});
