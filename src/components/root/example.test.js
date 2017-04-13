import React from 'react';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { shallow } from 'enzyme';

import Example from './example';

chai.use(chaiEnzyme());

describe('Example', () => {
  it('shows the correct className', () => {
    let wrapper = shallow(<Example />);
    expect(wrapper).to.have.className('example');
  });
});
