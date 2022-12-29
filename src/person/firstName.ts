import { Gender } from "../types/person";
import { getFemaleFirstName } from "./female/firstName";
import { getMaleFirstName } from "./male/firstName";
import { gender as getGender } from "../utils/gender";

export const firstName = (gender?: Gender) => {
  const g = getGender(gender);

  if (g === "male") {
    return getMaleFirstName();
  }

  return getFemaleFirstName();
};
