import { randomNumber } from "./randomNumber";

export const seededRandom = (seed: number) => Math.abs(Math.sin(seed || 1));

export const shuffle = <T>(array: T[], seed?: number) => {
  const seedToUse = seed ?? randomNumber({ min: 1, max: 999 });

  for (let i = 0; i < array.length; i++) {
    const newIndex = Math.floor(seededRandom(seedToUse * i) * array.length);

    const temp = array[newIndex];
    array[newIndex] = array[i];
    array[i] = temp;
  }

  return array;
};
