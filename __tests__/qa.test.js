import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import QA from '../client/src/questions/components/main';

Enzyme.configure({ adapter: new Adapter() });

describe('MyComponent QA', () => {
  it('Should show text', () => {
    const wrapper = shallow(<QA />);
    expect(wrapper.find('h3').text()).toBe('QUESTIONS & ANSWERS');
  });
});
