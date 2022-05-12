import jwt from "jsonwebtoken";
import { jwtToken } from "../constants/jwt";
import { NextApiRequest, NextApiResponse } from "next";
import { UserType } from "../types/user";

export const authToken = (user: UserType) => {
  return jwt.sign(user, jwtToken, {
    expiresIn: "30d",
  });
};

export const isAuth = async (
  req: NextApiRequest,
  res: NextApiResponse,
  next: () => void
) => {
  const { authorization } = req.headers;
  if (authorization) {
    const token = authorization.slice(7, authorization.length); // BEARER XXX
    jwt.verify(token, jwtToken, (err, decode) => {
      if (err) {
        res.status(401).send({ message: "Token is not valid" });
      } else {
        // @ts-ignore
        req.user = decode;
        next();
      }
    });
  } else {
    res.status(401).send({ message: "Token is not suppiled" });
  }
};
