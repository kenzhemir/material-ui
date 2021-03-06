import React from 'react';
import { assert } from 'chai';
import IndeterminateCheckBoxIcon from '../internal/svg-icons/IndeterminateCheckBox';
import { describeConformance, getClasses, createMount } from '@material-ui/core/test-utils';
import Checkbox from './Checkbox';

describe('<Checkbox />', () => {
  let classes;
  let mount;

  before(() => {
    classes = getClasses(<Checkbox />);
    mount = createMount();
  });

  after(() => {
    mount.cleanUp();
  });

  describeConformance(<Checkbox checked />, () => ({
    classes,
    inheritComponent: 'span',
    mount,
    refInstanceof: window.HTMLSpanElement,
    skip: ['componentProp'],
  }));

  it('should have the classes required for Checkbox', () => {
    assert.strictEqual(typeof classes.root, 'string');
    assert.strictEqual(typeof classes.checked, 'string');
    assert.strictEqual(typeof classes.disabled, 'string');
  });

  describe('prop: indeterminate', () => {
    it('should render an indeterminate icon', () => {
      const wrapper = mount(<Checkbox indeterminate />);
      assert.strictEqual(wrapper.find(IndeterminateCheckBoxIcon).length, 1);
    });
  });
});
