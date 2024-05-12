type Item = {
  id: string;
  name: string;
  quantity: number;
  completed: boolean;
};

type List = {
  id: string;
  category: string;
  items: Item[];
};

type Person = {
  id: string;
  name: string;
  lists: List[];
};

export type InitialData = Person[];
