import React from 'react';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { shallow } from 'enzyme';

import Home from './home';

chai.use(chaiEnzyme());

describe('Home', () => {
  it('shows the correct className', () => {
    let wrapper = shallow(<Home />);
    expect(wrapper).to.have.className('home');
  });
});
