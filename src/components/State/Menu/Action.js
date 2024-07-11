import { api } from "../../Config/api";
import { DELETE_EVENTS_FAILURE, DELETE_EVENTS_REQUEST, DELETE_EVENTS_SUCCESS } from "../Restaurant/ActionType";
import { CREATE_MENU_ITEM_FAILURE, CREATE_MENU_ITEM_REQUEST, CREATE_MENU_ITEM_SUCCESS, GET_MENU_ITEMS_BY_RESTAURANT_ID_FAILURE, GET_MENU_ITEMS_BY_RESTAURANT_ID_REQUEST, GET_MENU_ITEMS_BY_RESTAURANT_ID_SUCCESS, SEARCH_MENU_ITEM_FAILURE, SEARCH_MENU_ITEM_REQUEST, SEARCH_MENU_ITEM_SUCCESS, UPDATE_MENU_ITEMS_AVAILABILITY_FAILURE, UPDATE_MENU_ITEMS_AVAILABILITY_REQUEST, UPDATE_MENU_ITEMS_AVAILABILITY_SUCCESS } from "./ActionType"

export const createMenuItem = ({ menu, jwt }) => {
    return async (dispatch) => {
        dispatch({ type: CREATE_MENU_ITEM_REQUEST });
        try {
            const { data } = await api.post("api/admin/food", menu, {
                headers: {
                    Authorization: `Bearer ${jwt}`,
                }
            });
            console.log("created menu item: " + data);
            dispatch({ type: CREATE_MENU_ITEM_SUCCESS, payload: data });
        } catch (error) {
            console.log("error creating menu item: " + error);
            dispatch({ type: CREATE_MENU_ITEM_FAILURE, payload: error });
        }
    }
}
export const getMenuItemsByRestaurantId = (reqData) => {
    return async (dispatch) => {
        dispatch({ type: GET_MENU_ITEMS_BY_RESTAURANT_ID_REQUEST });
        try {
            const { data } = await api.get(`api/food/restaurant/${reqData.restaurantId}?vegetarian=${reqData.vegetarian}&nonveg=${reqData.nonveg}&seasonal=${reqData.seasonal}&food_category=${reqData.foodCategory}`, {
                headers: {
                    Authorization: `Bearer ${reqData.jwt}`,
                }
            });
            console.log("menu items by restaurant id: " + data);
            dispatch({ type: GET_MENU_ITEMS_BY_RESTAURANT_ID_SUCCESS, payload: data });
        } catch (error) {
            console.log("error getting menu items: " + error);
            dispatch({ type: GET_MENU_ITEMS_BY_RESTAURANT_ID_FAILURE, payload: error });
        }
    }
}
export const searchMenuItem = ({ keyword, jwt }) => {
    return async (dispatch) => {
        dispatch({ type: SEARCH_MENU_ITEM_REQUEST });
        try {
            const { data } = await api.get(`api/food/search?name=${keyword}`, {
                headers: {
                    Authorization: `Bearer ${jwt}`,
                }
            });
            console.log("search menu item: " + data);
            dispatch({ type: SEARCH_MENU_ITEM_SUCCESS, payload: data });
        } catch (error) {
            console.log("error searching menu item: " + error);
            dispatch({ type: SEARCH_MENU_ITEM_FAILURE, payload: error });
        }
    }
}
// export const getAllIngredientsOfMenuItem = (reqData) => {
//     return async (dispatch) => {
//         dispatch({ type: GETALL });
//         try {
//             const { data } = await api.get(`api/food/restaurant/${reqData.restaurantId}`, {
//                 headers: {
//                     Authorization: `Bearer ${reqData.jwt}`,
//                 }
//             });
//             console.log("created menu item: " + data);
//             dispatch({ type: CREATE_MENU_ITEM_SUCCESS, payload: data });
//         } catch (error) {
//             console.log("error creating menu item: " + error);
//             dispatch({ type: CREATE_MENU_ITEM_FAILURE, payload: error });
//         }
//     }
// }
export const updateMenuItemsAvailability = ({ foodId, jwt }) => {
    return async (dispatch) => {
        dispatch({ type: UPDATE_MENU_ITEMS_AVAILABILITY_REQUEST });
        try {
            const { data } = await api.put(`api/admin/food/${foodId}`, {}, {
                headers: {
                    Authorization: `Bearer ${jwt}`,
                }
            });
            console.log("update menu item availibility: " + data);
            dispatch({ type: UPDATE_MENU_ITEMS_AVAILABILITY_SUCCESS, payload: data });
        } catch (error) {
            console.log("error update menu item: " + error);
            dispatch({ type: UPDATE_MENU_ITEMS_AVAILABILITY_FAILURE, payload: error });
        }
    }
}
export const deleteFoodAction = ({ foodId, jwt }) => {
    return async (dispatch) => {
        dispatch({ type: DELETE_EVENTS_REQUEST });
        try {
            const { data } = await api.delete(`api/admin/food/${foodId}`, {
                headers: {
                    Authorization: `Bearer ${jwt}`,
                }
            });
            console.log("delete food: " + data);
            dispatch({ type: DELETE_EVENTS_SUCCESS, payload: data });
        } catch (error) {
            console.log("error deleting food: " + error);
            dispatch({ type: DELETE_EVENTS_FAILURE, payload: error });
        }
    }
}