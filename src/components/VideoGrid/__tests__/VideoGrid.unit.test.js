import React from 'react';
import {shallow} from 'enzyme';
import {VideoGrid} from '../VideoGrid';
import { exportAllDeclaration } from '@babel/types';

describe('VideoGrid', () => {
    test('renders without props', ()=> {
        const wrapper=shallow(<VideoGrid/>);
        expect(wrapper).toMatchSnapshot();

    });
    test('renders with title prop', ()=> {
        const wrapper=shallow(<VideoGrid title = 'Trending'/>);
        expect(wrapper).toMatchSnapshot();

    });
    test('renders without divider', ()=> {
        const wrapper=shallow(<VideoGrid hideDivider={true}/>);
        expect(wrapper).toMatchSnapshot();

    });

})