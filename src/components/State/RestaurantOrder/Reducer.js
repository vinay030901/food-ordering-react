import {
  GET_RESTAURANT_ORDER_FAILURE,
  GET_RESTAURANT_ORDER_REQUEST,
  GET_RESTAURANT_ORDER_SUCCESS,
  UPDATE_ORDER_STATUS_FAILURE,
  UPDATE_ORDER_STATUS_REQUEST,
  UPDATE_ORDER_STATUS_SUCCESS,
} from "./ActionType";

const initialState = {
  loading: false,
  orders: [],
  error: null,
};
export const restaurantOrderReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RESTAURANT_ORDER_REQUEST:
    case UPDATE_ORDER_STATUS_REQUEST:
      return { ...state, error: null, loading: true };
    case GET_RESTAURANT_ORDER_SUCCESS:
      return { ...state, orders: action.payload, loading: false, error: null };
    case UPDATE_ORDER_STATUS_SUCCESS:
      const updatedOrders = state.orders.map((order) =>
        order.id === payload.id ? payload : order
      );
      return { ...state, loading: false, orders: updatedOrders };
    case GET_RESTAURANT_ORDER_FAILURE:
    case UPDATE_ORDER_STATUS_FAILURE:
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
};
