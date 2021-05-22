import { 
    ADD_CONTACT,
    DELETE_CONTACT
} from './enum';

let initialState = {
    data: []
};

const Contacts = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CONTACT:
            return {
                ...state, 
                data: [...state.data, action.payload]
            };
        case DELETE_CONTACT:
            return {
                data: [...state.data].filter((x, index) => index !== action.id.id)
            }
        default:
            return state;
    }
};

export default Contacts;