import {
  ACTIONS,
  AddItemAction,
  AddListAction,
  AddPersonAction,
  ItemIdPayload,
  ItemNamePayload,
  ListCategoryPayload,
  ListIdPayload,
  PersonIdPayload,
  PersonNamePayload,
  RemoveItemAction,
  RemoveListAction,
  RemovePersonAction,
  ToggleItemAction,
} from "./actionTypes";

export const addPerson = ({
  personName,
}: PersonNamePayload): AddPersonAction => ({
  type: ACTIONS.ADD_PERSON,
  payload: {
    personName,
  },
});

export const removePerson = ({
  personId,
}: PersonIdPayload): RemovePersonAction => ({
  type: ACTIONS.REMOVE_PERSON,
  payload: {
    personId,
  },
});

export const addList = ({
  personId,
  listCategory,
}: ListCategoryPayload): AddListAction => ({
  type: ACTIONS.ADD_LIST,
  payload: {
    personId,
    listCategory,
  },
});

export const removeList = ({
  personId,
  listId,
}: ListIdPayload): RemoveListAction => ({
  type: ACTIONS.REMOVE_LIST,
  payload: {
    personId,
    listId,
  },
});

export const addItem = ({
  personId,
  listId,
  itemName,
}: ItemNamePayload): AddItemAction => ({
  type: ACTIONS.ADD_ITEM,
  payload: {
    personId,
    listId,
    itemName,
  },
});

export const removeItem = ({
  personId,
  listId,
  itemId,
}: ItemIdPayload): RemoveItemAction => ({
  type: ACTIONS.REMOVE_ITEM,
  payload: {
    personId,
    listId,
    itemId,
  },
});

export const toggleItem = ({
  personId,
  listId,
  itemId,
}: ItemIdPayload): ToggleItemAction => ({
  type: ACTIONS.TOGGLE_ITEM,
  payload: {
    personId,
    listId,
    itemId,
  },
});
