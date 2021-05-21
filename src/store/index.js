import { createStore } from 'redux';
import rootReducer from './reducers';

export const initialStore = () => {
    const store = createStore(rootReducer);

    return store;
}