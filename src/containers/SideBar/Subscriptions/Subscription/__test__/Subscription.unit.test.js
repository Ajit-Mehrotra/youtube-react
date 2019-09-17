import React from 'react';
import {shallow} from 'enzyme';
import {Subscription} from '../Subscription';

describe('Subscription', () => {
  test('renders empty Subscription', () => {
    const wrapper = shallow(
      <Subscription />
    );
    expect(wrapper).toMatchSnapshot();
  });
  
  test('renders broadcasting Subscription', () => {
    const wrapper = shallow(
      <Subscription broadcasting label ='Ajit Mehrotra' />
    );
    expect(wrapper).toMatchSnapshot();
  });
  
  test('renders non-broadcasting subscription with new videos', () => {
    const wrapper = shallow(
      <Subscription  label='Ajit Mehrotra' amountNewVideos={4} />
    );
    expect(wrapper).toMatchSnapshot();
  });
});