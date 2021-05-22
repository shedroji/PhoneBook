import React from 'react';
import PropTypes from 'prop-types';

import RemoveButton from '../RemoveButton/index';

const List = ({ list }) => {
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
                            <td>{item.phone_number}</td>
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