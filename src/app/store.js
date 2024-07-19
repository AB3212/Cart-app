import { createStore, combineReducers } from 'redux';

// Initial state
const initialState = {
  cart: [],
  totalPrice: 0
};

// Actions
const ADD_TO_CART = 'ADD_TO_CART';
const DECREASE_QUANTITY = 'DECREASE_QUANTITY';

// Action Creators
export const addToCart = (product) => ({
  type: ADD_TO_CART,
  payload: product
});

export const decreaseQuantity = (product) => ({
  type: DECREASE_QUANTITY,
  payload: product
});

// Reducers
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const existingProduct = state.cart.find(item => item.id === action.payload.id);
      if (existingProduct) {
        const updatedCart = state.cart.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        return {
          ...state,
          cart: updatedCart,
          totalPrice: state.totalPrice + action.payload.price
        };
      }
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, quantity: 1 }],
        totalPrice: state.totalPrice + action.payload.price
      };
    case DECREASE_QUANTITY:
      const product = state.cart.find(item => item.id === action.payload.id);
      if (product && product.quantity > 1) {
        const updatedCart = state.cart.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
        return {
          ...state,
          cart: updatedCart,
          totalPrice: state.totalPrice - action.payload.price
        };
      }
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload.id),
        totalPrice: state.totalPrice - action.payload.price * product.quantity
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  cart: cartReducer
});

const store = createStore(rootReducer);

export default store;
