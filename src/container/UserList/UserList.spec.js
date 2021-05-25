import React from 'react';
import { createStore } from "redux";
import rootReducer from '../../store/reducers';
import { Provider } from 'react-redux';
import { configure, shallow } from 'enzyme';
import { expect } from 'chai';

import Adapter from 'enzyme-adapter-react-16';
import UserList from './index';
configure({ adapter: new Adapter() });

const store = createStore(rootReducer);

describe('<UserList />', () => {
    it('Should render the AddUser component', () => {
        const dom = shallow(<Provider store={store} ><UserList /></Provider>);
        expect(dom.find(UserList)).to.have.length(1);
    });
});