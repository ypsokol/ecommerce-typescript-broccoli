import { NextApiRequest, NextApiResponse } from "next";
import nc from "next-connect";
import { SanityApi } from "../../../utils/api/sanityApi";
import { authToken, isAuth } from "../../../utils/auth";

const handler = nc();
handler.use(isAuth);
handler.put(async (req: NextApiRequest, res: NextApiResponse) => {
  //TODO: Make normal error handler
  const { name, email } = req.body;
  const { _id, isAdmin } = req.user;

  if (!name || typeof name !== "string") return;
  if (!email || typeof email !== "string") return;

  if (!_id || typeof _id !== "string") return;
  if (typeof isAdmin !== "boolean") return;

  try {
    const mutations = [
      {
        patch: {
          id: _id,
          set: {
            name,
            email,
          },
        },
      },
    ];

    await SanityApi.updateUserInfo(mutations);
    const user = {
      _id,
      name,
      email,
    };
    const token = authToken(user);
    res.send({ ...user, token });
  } catch (err: any) {
    res.status(err.statusCode || 500).json(err.message);
  }
});
