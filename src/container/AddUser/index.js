import React from 'react';
import { useDispatch } from 'react-redux';

import { addContact } from '../../store/phone-book/action'

const AddUser = () => {
    const dispatch = useDispatch();

    let name, phone_number;

    const submitContact = e => {
        e.preventDefault();

        dispatch(
            addContact({
                name: name.value,
                phone_number: phone_number.value
            })
        );

        name.value = "";
        phone_number.value = "";
    };

    return (
        <form className="ui form" onSubmit={submitContact}>
            <div className="field">
                <label>Contact Information</label>
                <div className="two fields">
                    <div className="field">
                        <input 
                            type="text" 
                            ref={node => (name = node)} 
                            placeholder="Name" />
                    </div>
                    <div className="field">
                        <input 
                            type="text"
                            ref={node => (phone_number = node)}
                            placeholder="Phone Number" />
                    </div>
                </div>
                <div className="field">
                    <button className="ui primary button">Save</button>
                </div>
            </div>
        </form>
    )
};

export default AddUser;