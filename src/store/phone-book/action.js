import { ADD_CONTACT } from './enum';

export const addContact = data => ({
    type: ADD_CONTACT,
    payload: data
});