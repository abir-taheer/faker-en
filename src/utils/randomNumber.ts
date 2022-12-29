export type RandomNumberProps = {
  min?: number;
  max: number;
};

export const randomNumber = ({ min = 0, max }: RandomNumberProps) => {
  const range = max - min;

  if (range < 0) {
    throw new Error("The minimum must be less than the maximum");
  }

  return Math.ceil(Math.random() * range) + min;
};
