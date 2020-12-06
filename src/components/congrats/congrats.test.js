import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import checkPropTypes from "check-prop-types";

// Test utils
import { findByTestAttr, checkProps } from "../../../test/testUtils";

// Components
import Congrats from "./congrats";

Enzyme.configure({ adapter: new EnzymeAdapter() });

const defaultProps = {
    success: false
};

/**
 * Factory function to create a ShallowWrapper for Congrats component
 * @function setup
 * @param {object} props - Component props specfic to this setup
 * @returns {ShallowWrapper} - Redered component ()
 */
const setup = (props = {}) => {
    const setupProps = { ...defaultProps, ...props };
    return shallow(<Congrats {...setupProps} />);
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

test("Should not throw warning with expected props", () => {
    const expectedProps = { success: false };

    checkProps(Congrats, expectedProps);
});
