import { arrayElement } from "../utils/arrayElement";
import { verb } from "./verb";
import { noun } from "./noun";

const getters = [verb, noun];
// Returns a random noun or verb
export const word = () => arrayElement(getters)();

export * from "./noun";
export * from "./verb";
