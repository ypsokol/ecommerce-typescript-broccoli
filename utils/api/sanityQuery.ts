import client from "../client";

export const SanityQuery = {
  findUserByEmail: async (email: string) =>
    await client.fetch(`*[_type == "user" && email == $email][0]`, {
      email,
    }),
};
