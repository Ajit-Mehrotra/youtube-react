import React from 'react';
import { Video } from '../Video';
import {shallow} from 'enzyme';
import { exportAllDeclaration } from '@babel/types';

test('renders video component correctly', ()=>{
    const wrapper = shallow(
        <Video id='HAuXJVI_bUs'/>
    );
    expect(wrapper).toMatchSnapshot();
});

test('renders null if id in video not specified', ()=>{
    const wrapper = shallow(
        <Video/>
    );
    expect(wrapper).toMatchSnapshot();
});