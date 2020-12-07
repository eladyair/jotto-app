import React from "react";

// Styles
import "./App.css";

// Components
import GuessedWords from "./components/guessed-words/guessed-words";
import Congrats from "./components/congrats/congrats";

const App = () => {
    return (
        <div className="container">
            <h1>Jotto</h1>
            <Congrats success={true} />
            <GuessedWords guessedWords={[]} />
        </div>
    );
};

export default App;
