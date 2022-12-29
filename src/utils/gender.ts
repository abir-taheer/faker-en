import { Gender } from "../types/person";

export const gender = (def?: Gender) => {
  if (def) {
    return def;
  }

  return Math.random() > 0.5 ? "male" : "female";
};
