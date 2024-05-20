import { Person } from "../types/types";

const generateId = () => {
  const randomeNum = Math.floor(Math.random() * Math.pow(10, 8));
  return String(randomeNum);
};

export const generateNewPersonTemplate = (name: string): Person => ({
  id: `person-${generateId()}`,
  name,
  lists: [],
});
