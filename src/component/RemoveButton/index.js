import React from 'react';

import { useDispatch } from 'react-redux';

import { deleteContact } from '../../store/phone-book/action'

const RemoveButton = (id) => {
    const dispatch = useDispatch();

    const removeContact = e => {
        dispatch(
            deleteContact(id)
        );
    };

    return (
        <>
            <button
                className="ui negative basic button"
                onClick={() => removeContact(id)}
                >
                    Remove
                </button>
        </>
    )
};

export default RemoveButton;