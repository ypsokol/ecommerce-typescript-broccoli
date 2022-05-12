import axios from "axios";
import { config } from "../config";
import { tokenWithWriteAccess } from "../../constants/sanity";
import { Mutation } from "@sanity/client";

const mutateV1 = `https://${config.projectId}.api.sanity.io/v1/data/mutate/${config.dataset}`;
const headers = {
  "Content-type": "application/json",
  Authorization: `Bearer ${tokenWithWriteAccess}`,
};

export const SanityApi = {
  register: async (mutations: Mutation) =>
    await axios.post(
      `${mutateV1}?returnIds=true`,
      {
        mutations,
      },
      {
        headers,
      }
    ),
  updateUserInfo: async (mutations: Mutation) =>
    await axios.post(
      mutateV1,
      { mutations },
      {
        headers,
      }
    ),
};
