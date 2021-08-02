import { ADD_DATA, DATA_ERROR, GET_DATA, SET_CURRENT, SET_LOADING } from '../constants';

const initialState = {
    data: null,
    loading: false,
    error: null,
    current: null
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
        case SET_CURRENT:
            return {
                ...state,
                current: state.data.filter((s) => s.id === parseInt(action.payload))
            };
        default:
            return {
                state
            };
    }
};

export default dataReducer;