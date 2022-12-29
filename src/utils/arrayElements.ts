import { shuffle } from "./shuffle";

// Chooses n random items from the array
export const arrayElements = <T>(arr: T[], numItems: number) => {
  // Clip min at 0 and max at array length
  const num = numItems > arr.length ? arr.length : numItems > 0 ? numItems : 0;
  const indexes = shuffle(Array.from(Array(arr.length), (_, i) => i));

  return indexes.slice(num).map((i) => arr[i]);
};
