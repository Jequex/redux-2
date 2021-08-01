import { ADD_DATA, GET_DATA, SET_LOADING } from '../constants';

const initialState = {
    data: null,
    loading: false
};

const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_DATA:
            return {

            };
        case GET_DATA:
            return {
                ...state,
                data: action.payload,
                loading: false
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