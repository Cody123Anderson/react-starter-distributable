import React from 'react';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { shallow } from 'enzyme';

import App from './app';

chai.use(chaiEnzyme());

describe('App', () => {
  it('shows the correct className', () => {
    let wrapper = shallow(<App />);
    expect(wrapper).to.have.className('app');
  });
});
