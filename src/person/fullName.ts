import { Gender } from "types/person";
import { getGender } from "utils/getGender";
import { getMaleFirstName } from "./male/firstName";
import { getFemaleFirstName } from "./female/firstName";
import { getLastName } from "./lastName";

export const fullName = (gender?: Gender) => {
  const g = getGender(gender);

  const firstName = g === "male" ? getMaleFirstName() : getFemaleFirstName();
  const lastName = getLastName();

  return `${firstName} ${lastName}`;
};
