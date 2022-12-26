import { Gender } from "types/person";

export const getGender = (def?: Gender) => {
  if (def) {
    return def;
  }

  return Math.random() > 0.5 ? "male" : "female";
};
