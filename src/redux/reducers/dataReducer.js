import { ADD_DATA, DATA_ERROR, GET_DATA, SET_LOADING } from '../constants';

const initialState = {
    data: null,
    loading: false,
    error: null
};

const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_DATA:
            return {
                ...state,
                data: [...state.data, action.payload],
                loading: false
            };
        case GET_DATA:
            return {
                ...state,
                data: action.payload,
                loading: false
            };
        case DATA_ERROR:
            return {
                ...state,
                error: action.payload
            };
        case SET_LOADING:
            return {
                ...state,
                loading: true
            };
        default:
            return {
                state
            };
    }
};

export default dataReducer;