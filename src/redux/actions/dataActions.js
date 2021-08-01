import { GET_DATA, ADD_DATA, SET_LOADING } from '../constants';

export const set_loading = () => {
    return {
        type: SET_LOADING
    };
};

export const get_data = () => {
    return async (dispatch) => {
        try {
            set_loading();

            const res = await fetch('/data');
            const data = await res.json();

            return dispatch({
                type: GET_DATA,
                payload: data
            });
        } catch (error) {
            console.log(error);
        }
    };
};

export const add_data = () => {
    return async (dispatch) => {
        const res = await fetch("/");
    };
};