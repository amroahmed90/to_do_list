import { INITIAL_DATA } from "../initialData/initialData";
import { Data } from "../types/types";
import { Actions, ACTIONS } from "./actionTypes";

// helper functions
const generateRandomId = () => {
  const randomeNum = Math.floor(Math.random() * Math.pow(10, 8));
  return String(randomeNum);
};

function reducer(state = INITIAL_DATA, action: Actions): Data {
  switch (action.type) {
    case ACTIONS.ADD_PERSON: // payload = {personName}
      return [
        ...state,
        {
          id: `person-${generateRandomId()}`,
          name: action.payload.personName,
          lists: [],
        },
      ];

    case ACTIONS.REMOVE_PERSON: // payload = {personId}
      return state.filter((person) => person.id !== action.payload.personId);

    case ACTIONS.ADD_LIST: // payload = {personId, listCategory}
      return state.map((person) => {
        if (person.id === action.payload.personId) {
          return {
            ...person,
            lists: [
              ...person.lists,
              {
                id: `list-${generateRandomId()}`,
                category: action.payload.listCategory,
                items: [],
              },
            ],
          };
        }
        return person;
      });

    case ACTIONS.REMOVE_LIST: // payload = {personId, listId}
      return state.map((person) => {
        if (person.id === action.payload.personId) {
          return {
            ...person,
            lists: person.lists.filter(
              (list) => list.id !== action.payload.listId
            ),
          };
        }
        return person;
      });

    case ACTIONS.ADD_ITEM: // payload = {personId, listId, itemName}
      return state.map((person) => {
        if (person.id === action.payload.personId) {
          return {
            ...person,
            lists: person.lists.map((list) => {
              if (list.id === action.payload.listId) {
                return {
                  ...list,
                  items: [
                    ...list.items,
                    {
                      id: `item-${generateRandomId()}`,
                      name: action.payload.itemName,
                      quantity: 1,
                      completed: false,
                    },
                  ],
                };
              }
              return list;
            }),
          };
        }
        return person;
      });

    case ACTIONS.REMOVE_ITEM: // payload = {personId, listId, itemId}
      return state.map((person) => {
        if (person.id === action.payload.personId) {
          return {
            ...person,
            lists: person.lists.map((list) => {
              if (list.id === action.payload.listId) {
                return {
                  ...list,
                  items: list.items.filter(
                    (item) => item.id !== action.payload.itemId
                  ),
                };
              }
              return list;
            }),
          };
        }
        return person;
      });

    case ACTIONS.TOGGLE_ITEM: // payload = { personId, listId, itemId }
      return state.map((person) => {
        if (person.id === action.payload.personId) {
          return {
            ...person,
            lists: person.lists.map((list) => {
              if (list.id === action.payload.listId) {
                if (list.id === action.payload.listId) {
                  return {
                    ...list,
                    items: list.items.map((item) => {
                      if (item.id === action.payload.itemId) {
                        return {
                          ...item,
                          completed: !item.completed,
                        };
                      }

                      return item;
                    }),
                  };
                }

                return list;
              }

              return list;
            }),
          };
        }

        return person;
      });

    default:
      return state;
  }
}

export default reducer;
