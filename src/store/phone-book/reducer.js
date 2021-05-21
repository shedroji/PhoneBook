import { ADD_CONTACT } from './enum';

let initialState = {
    data: [
        {
            name: '',
            phoneNumber: null
        }
    ]
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_CONTACT:
            return {
                ...state, 
                data: [...state.data, action.payload]
            };
        default:
            return state;
    }
};
