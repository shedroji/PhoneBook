import React from 'react';
import { useSelector } from 'react-redux';

import List from '../../component/List';

const UserList = () => {
    const ContactList = useSelector(state => state.contactBook.data);

    return (
        <>
            <List list={ContactList}/>
        </>
    )
};

export default UserList;