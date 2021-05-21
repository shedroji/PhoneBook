import { combineReducers } from 'redux';

import contactBook from './phone-book/reducer';

const rootReducer = combineReducers({
    contactBook
});

export default rootReducer;