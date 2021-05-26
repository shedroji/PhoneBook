import React from 'react';
import { createStore } from "redux";
import rootReducer from '../../store/reducers';
import { Provider } from 'react-redux';
import { configure, shallow } from 'enzyme';
import { expect } from 'chai';

import Adapter from 'enzyme-adapter-react-16';
import List from './index';
configure({ adapter: new Adapter() });

const store = createStore(rootReducer);

describe('<List />', () => {
    it('Should render the List component', () => {
        const dom = shallow(<Provider store={store} ><List /></Provider>);
        expect(dom.find(List)).to.have.length(1);
    });
});