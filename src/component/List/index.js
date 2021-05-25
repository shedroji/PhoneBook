import React from 'react';
import PropTypes from 'prop-types';

import RemoveButton from '../RemoveButton/index';

const List = ({ list }) => {
    const testValidity = (phoneNumber) => {
        let isValid = true;

        if (typeof phoneNumber !== "undefined") {
            var pattern = new RegExp(/^[0-9\b]+$/);
            if (!pattern.test(phoneNumber)) {
                isValid = false;
            } else if (phoneNumber.length !== 10) {
                isValid = false;
            }
        }
        return isValid;
    }

    return (
        <table className="ui celled table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Phone Number</th>
                    <th>remove</th>
                </tr>
            </thead>
            <tbody>
                {list &&
                    list.map((item, id) => {
                    return (
                        <tr key={id}>
                            <td>{item.name}</td>
                            <td>{testValidity(item.phone_number) ? item.phone_number : 'This Phone number is invalid.'}</td>
                            <td><RemoveButton  id={id}/></td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    )
}

List.propTypes = {
    list: PropTypes.array
};

export default List;