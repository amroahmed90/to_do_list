export type Item = {
  id: string;
  name: string;
  quantity: number;
  completed: boolean;
};

export type List = {
  id: string;
  category: string;
  items: Item[];
};

export type Person = {
  id: string;
  name: string;
  lists: List[];
};

export type Data = Person[];
