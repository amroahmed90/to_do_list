export enum ACTIONS {
  ADD_PERSON = "ADD_PERSON",
  REMOVE_PERSON = "REMOVE_PERSON",
  ADD_LIST = "ADD_LIST",
  REMOVE_LIST = "REMOVE_LIST",
  ADD_ITEM = "ADD_ITEM",
  REMOVE_ITEM = "REMOVE_ITEM",
  TOGGLE_ITEM = "TOGGLE_ITEM",
}

interface Action<T extends ACTIONS, P> {
  type: T;
  payload: P;
}

export interface PersonNamePayload {
  personName: string;
}

export interface PersonIdPayload {
  personId: string;
}

export interface ListCategoryPayload extends PersonIdPayload {
  listCategory: string;
}

export interface ListIdPayload extends PersonIdPayload {
  listId: string;
}

export interface ItemNamePayload extends ListIdPayload {
  itemName: string;
}

export interface ItemIdPayload extends ListIdPayload {
  itemId: string;
}

export type AddPersonAction = Action<ACTIONS.ADD_PERSON, PersonNamePayload>;
export type RemovePersonAction = Action<ACTIONS.REMOVE_PERSON, PersonIdPayload>;
export type AddListAction = Action<ACTIONS.ADD_LIST, ListCategoryPayload>;
export type RemoveListAction = Action<ACTIONS.REMOVE_LIST, ListIdPayload>;
export type AddItemAction = Action<ACTIONS.ADD_ITEM, ItemNamePayload>;
export type RemoveItemAction = Action<ACTIONS.REMOVE_ITEM, ItemIdPayload>;
export type ToggleItemAction = Action<ACTIONS.TOGGLE_ITEM, ItemIdPayload>;

export type Actions =
  | AddPersonAction
  | RemovePersonAction
  | AddListAction
  | RemoveListAction
  | AddItemAction
  | RemoveItemAction
  | ToggleItemAction;
