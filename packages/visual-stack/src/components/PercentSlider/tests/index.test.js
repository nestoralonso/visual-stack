import React from "react";
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

import { PercentSlider } from "../index";

describe("PercentSlider", () => {
  describe("range input", () => {
    it("should render value with the in slider", () => {
      const wrapper = mount(
        <PercentSlider value={50} id={"test"} />
      );

      expect(
        wrapper.find('input[type="range"][value="50"]')
      ).toHaveLength(1);

      const sliderDisplay = wrapper.find('.percentage-display');
      expect(sliderDisplay.text()).toEqual("50");
    });

    it("should change value", () => {
      const setValue = jest.fn();
      const wrapper = mount(
        <PercentSlider value={0} onChange={setValue} />
      );
      const rangeInput = wrapper.find('input[type="range"]');
      rangeInput.simulate('change', { 
        target: { name: 'value', value: 70 } 
      });
      expect(setValue).lastCalledWith(70);
    });
  });
});
