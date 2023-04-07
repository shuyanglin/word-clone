import React from 'react';
import GuessInput from '../GuessInput/GuessInput';
import GuessIteration from '../GuessIteration/GuessIteration';

import { sample } from '../../utils';
import { WORDS } from '../../data';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  
  const [guesses, setGuesses] = React.useState([]);

  function handleSubmitGuess(input){
    
    //receive guess submittion
    // console.log("received: "+input);

    //add it to the guesses array
    const nextGuesses = [...guesses, input]
    setGuesses(nextGuesses);
    // console.log(nextGuesses);
  }
  
  return (
    <>
      <GuessIteration guesses={guesses} answer={answer}/>
      <GuessInput handleSubmitGuess={handleSubmitGuess}/>
    </>
  );
}

export default Game;
