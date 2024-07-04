import { api } from "../../Config/api";
import { CREATE_CATEGORY_FAILURE, CREATE_CATEGORY_REQUEST, CREATE_CATEGORY_SUCCESS, CREATE_EVENTS_FAILURE, CREATE_EVENTS_REQUEST, CREATE_EVENTS_SUCCESS, CREATE_RESTAURANT_FAILURE, CREATE_RESTAURANT_REQUEST, CREATE_RESTAURANT_SUCCESS, DELETE_EVENTS_FAILURE, DELETE_EVENTS_REQUEST, DELETE_EVENTS_SUCCESS, GET_ALL_EVENTS_FAILURE, GET_ALL_EVENTS_REQUEST, GET_ALL_EVENTS_SUCCESS, GET_ALL_RESTAURANT_FAILURE, GET_ALL_RESTAURANT_REQUEST, GET_ALL_RESTAURANT_SUCCESS, GET_RESTAURANT_BY_ID_FAILURE, GET_RESTAURANT_BY_ID_REQUEST, GET_RESTAURANT_BY_ID_SUCCESS, GET_RESTAURANT_BY_USER_ID_FAILURE, GET_RESTAURANT_BY_USER_ID_REQUEST, GET_RESTAURANT_BY_USER_ID_SUCCESS, GET_RESTAURANTS_CATEGORY_FAILURE, GET_RESTAURANTS_CATEGORY_REQUEST, GET_RESTAURANTS_CATEGORY_SUCCESS, GET_RESTAURANTS_EVENTS_FAILURE, GET_RESTAURANTS_EVENTS_REQUEST, GET_RESTAURANTS_EVENTS_SUCCESS, UPDATE_RESTAURANT_FAILURE, UPDATE_RESTAURANT_REQUEST, UPDATE_RESTAURANT_STATUS_FAILURE, UPDATE_RESTAURANT_STATUS_REQUEST, UPDATE_RESTAURANT_STATUS_SUCCESS, UPDATE_RESTAURANT_SUCCESS } from "./Reducer";

export const getAllRestaurantsAction = (token) => {
    return async (dispatch) => {
        dispatch({ type: GET_ALL_RESTAURANT_REQUEST });
        try {
            const { data } = await api.get("/api/restaurants", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            console.log('====================================');
            console.log("all restaurants: ", data);
            console.log('====================================');
            dispatch({ type: GET_ALL_RESTAURANT_SUCCESS, payload: data });

        } catch (error) {
            console.log("error: ", error);
            dispatch({ type: GET_ALL_RESTAURANT_FAILURE, payload: error });
        }
    }
}

export const getRestaurantById = (reqData) => {
    return async (dispatch) => {
        dispatch({ type: GET_RESTAURANT_BY_ID_REQUEST });
        try {
            const response = await api.get(`/api/restaurants/${reqData.restaurantId}`, {
                headers: {
                    Authorization: `Bearer ${reqData.jwt}`
                }
            });
            console.log('====================================');
            console.log("restaurant by id: ", response.data);
            console.log('====================================');
            dispatch({ type: GET_RESTAURANT_BY_ID_SUCCESS, payload: response.data });

        } catch (error) {
            console.log("error: ", error);
            dispatch({ type: GET_RESTAURANT_BY_ID_FAILURE, payload: error });
        }
    }
}

export const getRestaurantByUserId = (jwt) => {
    return async (dispatch) => {
        dispatch({ type: GET_RESTAURANT_BY_USER_ID_REQUEST });
        try {
            const { data } = await api.get("/api/admin/restaurants/user", {
                headers: {
                    Authorization: `Bearer ${jwt}`
                }
            });
            console.log('====================================');
            console.log(" restaurant by user id: ", data);
            console.log('====================================');
            dispatch({ type: GET_RESTAURANT_BY_USER_ID_SUCCESS, payload: data });

        } catch (error) {
            console.log("error: ", error);
            dispatch({ type: GET_RESTAURANT_BY_USER_ID_FAILURE, payload: error });
        }
    }
}

export const createRestaurant = (reqData) => {
    return async (dispatch) => {
        dispatch({ type: CREATE_RESTAURANT_REQUEST });
        try {
            const { data } = await api.post(`/api/admin/restaurants`, reqData.data, {
                headers: {
                    Authorization: `Bearer ${reqData.token}`
                }
            });
            console.log('====================================');
            console.log("created restaurant: ", data);
            console.log('====================================');
            dispatch({ type: CREATE_RESTAURANT_SUCCESS, payload: data });

        } catch (error) {
            console.log("error: ", error);
            dispatch({ type: CREATE_RESTAURANT_FAILURE, payload: error });
        }
    }
}

export const updateRestaurant = ({ restaurantId, restaurantData, jwt }) => {
    return async (dispatch) => {
        dispatch({ type: UPDATE_RESTAURANT_REQUEST });
        try {
            const res = await api.put(`/api/admin/restaurant/${restaurantId}`, restaurantData, {
                headers: {
                    Authorization: `Bearer ${jwt}`
                }
            });
            console.log('====================================');
            console.log("update restaurant: ", res.data);
            console.log('====================================');
            dispatch({
                type: UPDATE_RESTAURANT_SUCCESS, payload: res.data

            });

        } catch (error) {
            console.log("error: ", error);
            dispatch({ type: UPDATE_RESTAURANT_FAILURE, payload: error });
        }
    }
}
export const deleteRestaurant = ({ restaurantId, jwt }) => {
    return async (dispatch) => {
        dispatch({ type: DELETE_EVENTS_REQUEST });
        try {
            const res = await api.delete(`/api/admin/restaurant/${restaurantId}`, {
                headers: {
                    Authorization: `Bearer ${jwt}`
                }
            });
            console.log('====================================');
            console.log("delete restaurant: ", res.data);
            console.log('====================================');
            dispatch({
                type: DELETE_EVENTS_SUCCESS, payload: restaurantId

            });

        } catch (error) {
            console.log("error: ", error);
            dispatch({ type: DELETE_EVENTS_FAILURE, payload: error });
        }
    }
}
export const updateRestaurantStatus = ({ restaurantId, jwt }) => {
    return async (dispatch) => {
        dispatch({ type: UPDATE_RESTAURANT_STATUS_REQUEST });
        try {
            const res = await api.put(`/api/admin/restaurant/${restaurantId}/status`, {}, {
                headers: {
                    Authorization: `Bearer ${jwt}`
                }
            });
            console.log('====================================');
            console.log("update restaurant status: ", res.data);
            console.log('====================================');
            dispatch({
                type: UPDATE_RESTAURANT_STATUS_SUCCESS, payload: res.data

            });

        } catch (error) {
            console.log("error: ", error);
            dispatch({ type: UPDATE_RESTAURANT_STATUS_FAILURE, payload: error });
        }
    }
}

export const createEventAction = ({ data, jwt, restaurantId }) => {
    return async (dispatch) => {
        dispatch({ type: CREATE_EVENTS_REQUEST });
        try {
            const res = await api.post(`/api/admin/events/restaurant/${restaurantId}`, data, {
                headers: {
                    Authorization: `Bearer ${jwt}`
                }
            });
            console.log('====================================');
            console.log("create event: ", res.data);
            console.log('====================================');
            dispatch({
                type: CREATE_EVENTS_SUCCESS, payload: res.data

            });

        } catch (error) {
            console.log("error: ", error);
            dispatch({ type: CREATE_EVENTS_FAILURE, payload: error });
        }
    }
}
export const getAllEvents = ({ jwt }) => {
    return async (dispatch) => {
        dispatch({ type: GET_ALL_EVENTS_REQUEST });
        try {
            const res = await api.get(`/api/events`, {
                headers: {
                    Authorization: `Bearer ${jwt}`
                }
            });
            console.log('====================================');
            console.log("get all event: ", res.data);
            console.log('====================================');
            dispatch({
                type: GET_ALL_EVENTS_SUCCESS, payload: res.data
            });

        } catch (error) {
            console.log("error: ", error);
            dispatch({ type: GET_ALL_EVENTS_FAILURE, payload: error });
        }
    }
}
export const deleteEvent = ({ eventId, jwt }) => {
    return async (dispatch) => {
        dispatch({ type: DELETE_EVENTS_REQUEST });
        try {
            const res = await api.delete(`/api/admin/events/${eventId}`, {
                headers: {
                    Authorization: `Bearer ${jwt}`
                }
            });
            console.log('====================================');
            console.log("deleted event: ", res.data);
            console.log('====================================');
            dispatch({
                type: DELETE_EVENTS_SUCCESS, payload: eventId

            });

        } catch (error) {
            console.log("error: ", error);
            dispatch({ type: DELETE_EVENTS_FAILURE, payload: error });
        }
    }
}

export const getRestaurantEvents = ({ restaurantId, jwt }) => {
    return async (dispatch) => {
        dispatch({ type: GET_RESTAURANTS_EVENTS_REQUEST });
        try {
            const res = await api.get(`/api/admin/events/restaurant/${restaurantId}`, {
                headers: {
                    Authorization: `Bearer ${jwt}`
                }
            });
            console.log('====================================');
            console.log("restaurant event: ", res.data);
            console.log('====================================');
            dispatch({
                type: GET_RESTAURANTS_EVENTS_SUCCESS, payload: res.data
            });

        } catch (error) {
            console.log("error: ", error);
            dispatch({ type: GET_RESTAURANTS_EVENTS_FAILURE, payload: error });
        }
    }
}
export const createCategoryAction = ({ reqData, jwt }) => {
    return async (dispatch) => {
        dispatch({ type: CREATE_CATEGORY_REQUEST });
        try {
            const res = await api.post(`/api/events`, reqData, {
                headers: {
                    Authorization: `Bearer ${jwt}`
                }
            });
            console.log('====================================');
            console.log("create category: ", res.data);
            console.log('====================================');
            dispatch({
                type: CREATE_CATEGORY_SUCCESS, payload: res.data
            });

        } catch (error) {
            console.log("error: ", error);
            dispatch({ type: CREATE_CATEGORY_FAILURE, payload: error });
        }
    }
}
export const getRestaurantsCategory = ({ restaurantId, jwt }) => {
    return async (dispatch) => {
        dispatch({ type: GET_RESTAURANTS_CATEGORY_REQUEST });
        try {
            const res = await api.get(`/api/category/restaurant/${restaurantId}`, {
                headers: {
                    Authorization: `Bearer ${jwt}`
                }
            });
            console.log('====================================');
            console.log("restaurant event: ", res.data);
            console.log('====================================');
            dispatch({
                type: GET_RESTAURANTS_CATEGORY_SUCCESS, payload: res.data
            });

        } catch (error) {
            console.log("error: ", error);
            dispatch({ type: GET_RESTAURANTS_CATEGORY_FAILURE, payload: error });
        }
    }
}
