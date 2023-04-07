import React from "react";
import Guess from "../Guess/Guess";
import Banner from '../Banner/Banner';
import {range} from "../../../src/utils"
import {NUM_OF_GUESSES_ALLOWED} from "../../../src/constants"
import {checkGuess} from '../../../src/game-helpers'

function GuessIteration({guesses, answer}) {
  console.log(guesses);
  const numOfGuesses =  guesses.length;
  const theLastGuess = guesses[numOfGuesses-1];
  const check = checkGuess(theLastGuess, answer);    

  let showBanner = false;
  let allCorrect = true;  
  
  if(check){
    //check if answer is all correct
    for (let i=0; i<5; i++){
      if (check[i].status != 'correct'){
        allCorrect = false; 
      }
    }
    console.log("allCorrect: "+allCorrect);
    if (allCorrect) showBanner=true;
  }

  if(numOfGuesses==6) showBanner=true;

  return  (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((index => (
        <Guess key={index} guess={guesses[index]} answer={answer}></Guess>
      )))}
      {showBanner && <Banner allCorrect={allCorrect} numOfGuesses={numOfGuesses} answer={answer}></Banner>}
    </div>
  );

}

export default GuessIteration;
