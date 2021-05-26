import React from 'react';
import { createStore } from "redux";
import rootReducer from '../../store/reducers';
import { Provider } from 'react-redux';
import { configure, shallow } from 'enzyme';
import { expect } from 'chai';

import Adapter from 'enzyme-adapter-react-16';
import RemoveButton from './index';
configure({ adapter: new Adapter() });

const store = createStore(rootReducer);

describe('<RemoveButton />', () => {
    it('Should render the RemoveButton component', () => {
        const dom = shallow(<Provider store={store} ><RemoveButton /></Provider>);
        expect(dom.find(RemoveButton)).to.have.length(1);
    });
});