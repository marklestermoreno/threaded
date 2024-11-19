import { ShoppingCartState, ShoppingCartActions, INCREMENT_QUANTITY, REMOVE_ITEM, ADD_ITEM, DECREMENT_QUANTITY } from '../interfaces/IShoppingCart';

const initialState: ShoppingCartState = {
    items: [],
};

const shoppingCartReducer = (
    state = initialState,
    action: ShoppingCartActions
): ShoppingCartState => {
    switch (action.type) {
        case INCREMENT_QUANTITY:
            return {
                ...state,
                items: state.items.map(item =>
                    item.id === action.payload
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                ),
            };
        case DECREMENT_QUANTITY:
            return {
                ...state,
                items: state.items.map(item =>
                    item.id === action.payload && item.quantity > 1  // Prevent negative quantities
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                ),
            };
        case REMOVE_ITEM:
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload),
            };
        case ADD_ITEM:
            const existingItemIndex = state.items.findIndex(item => item.id === action.payload.id);

            if (existingItemIndex >= 0) {
                // If item exists, update its quantity (increment by 1)
                const updatedItems = state.items.map((item, index) => {
                    if (index === existingItemIndex) {
                        return {
                            ...item,
                            quantity: item.quantity + 1, // Increment the quantity by 1
                        };
                    }
                    return item;  // No change for other items
                });
                return { ...state, items: updatedItems };
            } else {
                // If item doesn't exist in the cart, add it with quantity 1
                return { ...state, items: [...state.items, { ...action.payload, quantity: 1 }] };
            }
        default:
            return state;
    }
};

export default shoppingCartReducer;
