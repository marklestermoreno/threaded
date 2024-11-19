import { INCREMENT_QUANTITY, REMOVE_ITEM, ADD_ITEM, DECREMENT_QUANTITY } from '../interfaces/IShoppingCart';
import { IItem } from '../interfaces/IItem'

export const incrementQuantity = (id: number) => ({
    type: INCREMENT_QUANTITY,
    payload: id,
});

export const decrementQuantity = (id: number) => ({
    type: DECREMENT_QUANTITY,
    payload: id,
  });

export const removeItem = (id: number) => ({
    type: REMOVE_ITEM,
    payload: id,
});

export const addItem = (item: IItem) => ({
    type: ADD_ITEM,
    payload: item,
  });