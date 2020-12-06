import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";

// Test utils
import { findByTestAttr } from "../../../test/testUtils";

// Components
import Congrats from "./congrats";

Enzyme.configure({ adapter: new EnzymeAdapter() });

/**
 * Factory function to create a ShallowWrapper for Congrats component
 * @function setup
 * @param {object} props - Component props specfic to this setup
 * @returns {ShallowWrapper} - Redered component ()
 */
const setup = (props = {}) => {
    return shallow(<Congrats {...props} />);
};

test("Should render without error", () => {
    const wrapper = setup();

    const component = findByTestAttr(wrapper, "component-congrats");

    expect(component.length).toBe(1);
});

test("Should render no text when `success` prop is false", () => {
    const wrapper = setup({ success: false });

    const component = findByTestAttr(wrapper, "component-congrats");

    expect(component.text()).toBe("");
});

test("Should render non-empty congrats message when `success` prop is true", () => {
    const wrapper = setup({ success: true });

    const message = findByTestAttr(wrapper, "congrats-message");

    expect(message.text().length).not.toBe(0);
});
