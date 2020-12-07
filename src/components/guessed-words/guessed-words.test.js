import React from "react";
import { shallow } from "enzyme";

// Test utils
import { findByTestAttr, checkProps } from "../../../test/testUtils";

import GuessedWords from "./guessed-words";

const defaultProps = {
    secretWord: "",
    success: false,
    guessedWords: [{ guessedWord: "train", letterMatchCount: 3 }]
};

/**
 * Factory function to create a ShallowWrapper for GuessedWords component
 * @function setup
 * @param {object} props - Component props specfic to this setup
 * @returns {ShallowWrapper} - Redered component ()
 */
const setup = (props = {}) => {
    const setupProps = { ...defaultProps, ...props };
    return shallow(<GuessedWords {...setupProps} />);
};

test("Should not throw warning with expected props", () => {
    checkProps(GuessedWords, defaultProps);
});

describe("If there are no words guessed", () => {
    let wrapper;

    beforeEach(() => {
        wrapper = setup({ guessedWords: [] });
    });

    test("Should render without error", () => {
        const component = findByTestAttr(wrapper, "component-guessed-words");

        expect(component.length).toBe(1);
    });

    test("Should render instructions to guess a word", () => {
        const instructions = findByTestAttr(wrapper, "guess-instructions");

        expect(instructions.text().length).not.toBe(0);
    });
});

describe("If there are words guessed", () => {
    let wrapper;

    let guessedWords = [
        { guessedWord: "train", letterMatchCount: 3 },
        { guessedWord: "agile", letterMatchCount: 1 },
        { guessedWord: "party", letterMatchCount: 5 }
    ];

    beforeEach(() => {
        wrapper = setup({ guessedWords });
    });

    test("Should render without error", () => {
        const component = findByTestAttr(wrapper, "component-guessed-words");

        expect(component.length).toBe(1);
    });

    test("Should render guessed words section", () => {
        const guessedWordsDiv = findByTestAttr(wrapper, "guessed-words");

        expect(guessedWordsDiv.length).toBe(1);
    });

    test("Should show correct number of guessed words", () => {
        const guessedWordNodes = findByTestAttr(wrapper, "guessed-word");

        expect(guessedWordNodes.length).toBe(guessedWords.length);
    });
});
