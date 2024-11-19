export interface IItem {
  id: number;
  styleNo: string | null;
  imageSrc: string;
  name: string;
  origPrice: number;
  price: number | null;
  quantity: number;
}

export interface ShoppingCartState {
  items: IItem[];
}

// Action Types
export const INCREMENT_QUANTITY = 'INCREMENT_QUANTITY';
export const DECREMENT_QUANTITY = 'DECREMENT_QUANTITY';  // New action type
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const ADD_ITEM = 'ADD_ITEM';

interface IncrementQuantityAction {
  type: typeof INCREMENT_QUANTITY;
  payload: number; // id of the item to increment quantity
}

interface DecrementQuantityAction {
  type: typeof DECREMENT_QUANTITY;
  payload: number; // id of the item to decrement quantity
}

interface RemoveItemAction {
  type: typeof REMOVE_ITEM;
  payload: number; // id of the item to remove
}

interface AddItemAction {
  type: typeof ADD_ITEM;
  payload: IItem; // The item to add
}

export type ShoppingCartActions = 
  | IncrementQuantityAction 
  | DecrementQuantityAction 
  | RemoveItemAction 
  | AddItemAction;
