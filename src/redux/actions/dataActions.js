import { GET_DATA, DATA_ERROR, ADD_DATA, SET_LOADING, SET_CURRENT } from '../constants';

export const set_loading = () => {
    return {
        type: SET_LOADING
    };
};

export const get_data = () => async dispatch => {
    // return async (dispatch) => {
        try {
            set_loading();

            const res = await fetch('/data');
            const data = await res.json();

            dispatch({
                type: GET_DATA,
                payload: data
            });
        } catch (error) {
            dispatch({
                type: DATA_ERROR,
                payload: error.response.data
            })
        }
    // };
};

export const add_data = (data) => {
    return async (dispatch) => {
        set_loading();
        const res = await fetch("/data", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        });
        const returnData = res.json();
        console.log(returnData);
        dispatch({
            type: ADD_DATA,
            payload: returnData
        });
    };
};

export const set_current = (id) => {
    // console.log(id);
    return {
        type: SET_CURRENT,
        payload: id
    };
};