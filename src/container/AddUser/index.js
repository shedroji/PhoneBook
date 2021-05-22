import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { addContact } from '../../store/phone-book/action'

const AddUser = () => {
    const dispatch = useDispatch();

    let name, phone_number;
    const [errors, setErrors] = useState("");

    const submitContact = e => {
        let isValid = true;
        setErrors("");

        e.preventDefault();

        if (typeof phone_number.value !== "undefined") {
            var pattern = new RegExp(/^[0-9\b]+$/);
            if (!pattern.test(phone_number.value)) {
                isValid = false;
                setErrors("Please enter a valid phone number");
            } else if (phone_number.value.length !== 10) {
                isValid = false;
                setErrors("Please enter a valid phone number with 10 digits.");
            }
        }
        

        if ((name.value !== "" || phone_number.value !== "") && isValid) {
            dispatch(
                addContact({
                    name: name.value,
                    phone_number: phone_number.value
                })
            );
            name.value = "";
            phone_number.value = "";
        }       
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
                            name="name" 
                            placeholder="Name" />
                    </div>
                    <div className="field">
                        <input 
                            type="text"
                            ref={node => (phone_number = node)}
                            name="phone"
                            placeholder="Phone Number" />
                            <div style={{color: "red"}}>{errors}</div>
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