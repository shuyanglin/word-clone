import React from "react";
import {checkGuess} from '../../../src/game-helpers'
import {range} from '../../../src/utils'

function Guess({guess, answer}) {  
  const check = checkGuess(guess, answer);    
  console.log(check);

  return (
    <>
      <p className="guess">
          {
            range(5).map( index => (
              <span key={index} className={`cell ${check && check[index].status}`}>{guess && guess.charAt(index)}</span>
            ))
          }
      </p>
      
    </>
  );
}

export default Guess;
