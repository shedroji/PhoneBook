import { createStore } from "redux";
import rootReducer from '../reducers';

const saveToLocalStorage = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem("persistantState", serializedState);
    } catch (e) {
        console.warn(e);
    }
};

const loadFromLocalStorage = () => {
    try {
        const serializedState = localStorage.getItem("persistantState");
        if (serializedState === null) return undefined;
        return JSON.parse(serializedState);
    } catch (e) {
        console.warn(e);
        return undefined;
    }
};

const store = createStore(rootReducer, loadFromLocalStorage());

store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;