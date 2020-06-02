import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import {
  ChoiceInput,
  Field,
  Input,
  TextArea,
  TextField,
  SelectField,
} from '../Form';

describe('Form', () => {
  describe('Field', () => {
    it('should render required sign when field is required', () => {
      const wrapper = mount(<Field required />);
      expect(wrapper.find('span.form-group-required-sign')).toHaveLength(1);
    });

    it('should not render required sign when field is not required', () => {
      const wrapper = mount(<Field />);
      expect(wrapper.find('span.form-group-required-sign')).toHaveLength(0);
    });
  });

  describe('Choice Input', () => {
    it('should render required sign when field is required', () => {
      const wrapper = mount(<ChoiceInput required />);
      expect(wrapper.find('span.form-group-required-sign')).toHaveLength(1);
    });

    it('should not render required sign when field is not required', () => {
      const wrapper = mount(<ChoiceInput />);
      expect(wrapper.find('span.form-group-required-sign')).toHaveLength(0);
    });

    it('should use id as htmlFor on label when id is passed', () => {
      const wrapper = mount(<ChoiceInput id="test-id" />);
      expect(wrapper.find('label[htmlFor="test-id"]')).toHaveLength(1);
      expect(wrapper.find('input[id="test-id"]')).toHaveLength(1);
    });
  });

  describe('Input', () => {
    it('should trim on blur', () => {
      const mockOnChange = jest.fn();
      const mockOnBlur = jest.fn();

      const wrapper = mount(
        <Input trimmed onBlur={mockOnBlur} onChange={mockOnChange} />
      );

      wrapper.find('input').simulate('blur', { target: { value: '  test  ' } });

      expect(mockOnChange.mock.calls[0][0].target.value).toEqual('test');
      expect(mockOnBlur.mock.calls[0][0].target.value).toEqual('test');
    });
  });

  describe('TextArea', () => {
    it('should trim on blur', () => {
      const mockOnChange = jest.fn();
      const mockOnBlur = jest.fn();

      const wrapper = mount(
        <TextArea trimmed onBlur={mockOnBlur} onChange={mockOnChange} />
      );

      wrapper
        .find('textarea')
        .simulate('blur', { target: { value: '  test  ' } });

      expect(mockOnChange.mock.calls[0][0].target.value).toEqual('test');
      expect(mockOnBlur.mock.calls[0][0].target.value).toEqual('test');
    });
  });

  describe('TextField', () => {
    it('should use id as htmlFor on label when id is passed', () => {
      const wrapper = mount(<TextField id="test-id" />);
      expect(wrapper.find('label[htmlFor="test-id"]')).toHaveLength(1);
      expect(wrapper.find('input[id="test-id"]')).toHaveLength(1);
    });
  });

  describe('Field', () => {
    it('should use id as htmlFor on label when id is passed', () => {
      const wrapper = mount(<Field htmlFor="test-id" />);
      expect(wrapper.find('label[htmlFor="test-id"]')).toHaveLength(1);
    });
  });

  describe('SelectField', () => {
    it('should use id as htmlFor on label when id is passed', () => {
      const wrapper = mount(<SelectField id="test-id" />);
      expect(wrapper.find('label[htmlFor="test-id"]')).toHaveLength(1);
      expect(
        wrapper
          .find('Select')
          .at(0)
          .prop('id')
      ).toBe('test-id');
    });
    it('should pass options to select only', () => {
      const options = [{ id: 1, label: 'one' }, { id: 2, label: 'two' }];

      const wrapper = mount(<SelectField id="test-id" options={options} />);

      expect(
        wrapper.find('label[htmlFor="test-id"]').prop('options')
      ).toBeUndefined();

      expect(
        wrapper
          .find('Select')
          .at(0)
          .prop('options')
      ).toBe(options);
    });
  });
});
