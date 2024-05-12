import { InitialData } from "../types/types";

export const INITIAL_DATA: InitialData = [
  {
    id: "person-0",
    name: "John Doe",
    lists: [
      {
        id: "list-0",
        category: "shopping",
        items: [
          {
            id: "item-0",
            name: "milk",
            quantity: 1,
            completed: false,
          },
          {
            id: "item-1",
            name: "bread",
            quantity: 2,
            completed: false,
          },
        ],
      },
      {
        id: "list-1",
        category: "books",
        items: [
          {
            id: "item-0",
            name: "The Great Gatsby",
            quantity: 1,
            completed: false,
          },
          {
            id: "item-1",
            name: "The Catcher in the Rye",
            quantity: 2,
            completed: false,
          },
        ],
      },
    ],
  },
  {
    id: "person-1",
    name: "Jina Doe",
    lists: [
      {
        id: "list-0",
        category: "shopping",
        items: [
          {
            id: "item-0",
            name: "eggs",
            quantity: 12,
            completed: true,
          },
          {
            id: "item-1",
            name: "soda",
            quantity: 2,
            completed: false,
          },
        ],
      },
      {
        id: "list-1",
        category: "books",
        items: [
          {
            id: "item-0",
            name: "Harry Potter and the Philosopher's Stone",
            quantity: 1,
            completed: false,
          },
          {
            id: "item-1",
            name: "Harry Potter and the Chamber of Secrets",
            quantity: 2,
            completed: true,
          },
        ],
      },
    ],
  },
  {
    id: "person-1",
    name: "Alice Stones",
    lists: [
      {
        id: "list-0",
        category: "study",
        items: [
          {
            id: "item-0",
            name: "physics",
            quantity: 2,
            completed: false,
          },
        ],
      },
      {
        id: "list-1",
        category: "meetings",
        items: [
          {
            id: "item-0",
            name: "UI/UX meeting",
            quantity: 1,
            completed: false,
          },
          {
            id: "item-1",
            name: "Standup meeting",
            quantity: 1,
            completed: false,
          },
          {
            id: "item-2",
            name: "Sprint planning",
            quantity: 3,
            completed: true,
          },
        ],
      },
    ],
  },
];
