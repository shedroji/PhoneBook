import { ADD_CONTACT, DELETE_CONTACT } from './enum';

export const addContact = data => ({
    type: ADD_CONTACT,
    payload: data
});

export const deleteContact = id => ({
    type: DELETE_CONTACT,
    id
});