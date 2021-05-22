import React from 'react';

import AddUser from './container/AddUser/index'
import UserList from './container/UserList/index';

const Main = () => {
    return (
        <>
            <br/>
            <div className="ui segment">
                <AddUser />
            </div>
            <UserList />
        </>    
    )
};

export default Main;