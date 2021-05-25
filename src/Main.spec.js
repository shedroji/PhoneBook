import React from 'react';
import { createStore } from "redux";
import rootReducer from '../src/store/reducers';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import { configure, shallow } from 'enzyme';
import { expect } from 'chai';

import Adapter from 'enzyme-adapter-react-16';
import AddUser from './container/AddUser';
import Main from './Main';
configure({ adapter: new Adapter() });

const store = createStore(rootReducer);

describe('<Main />', () => {
    it('Should render the Main component', () => {
        const dom = shallow(<Provider store={store} ><Main /></Provider>);
        expect(dom.find(Main)).to.have.length(1);
    });
});