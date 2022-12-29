import { Gender } from "../types/person";
import { gender as getGender } from "../utils/gender";
import { getMaleFirstName } from "./male/firstName";
import { getFemaleFirstName } from "./female/firstName";
import { lastName } from "./lastName";

export const fullName = (gender?: Gender) => {
  const g = getGender(gender);

  const firstName = g === "male" ? getMaleFirstName() : getFemaleFirstName();
  const last = lastName();

  return `${firstName} ${last}`;
};
