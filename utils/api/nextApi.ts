import axios from "axios";

export const NextApi = {
  changeUserInfo: async ({ name, email, password, token }: any) =>
    await axios.put(
      "/api/users/profile",
      {
        name,
        email,
        password,
      },
      {
        headers: { authorization: `Bearer ${token}` },
      }
    ),
};
