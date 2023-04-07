import React from 'react';

function GuessInput({handleSubmitGuess}){
    const LENGTH = 5;
    const [guess, setGuess] = React.useState('');

    function handleSubmit(event){
        event.preventDefault();
        // console.log('attemping to submit: '+guess);
        
        if(guess.length!=LENGTH){
            window.alert("Enter 5 letters exact.");
            return;    
        }
        
        // console.log({guess});
        // console.log('success!');
        
        //bring it to Game
        handleSubmitGuess(guess);
        
        setGuess('');    
    }
    

    return(
        <form className="guess-input-wrapper" onSubmit = {handleSubmit}>
            <label htmlFor="guess-input">Enter guess:</label>
            <input 
                required
                minLength = {5}
                maxLength = {5}
                pattern = "[A-Za-z]{5}"
                title="5 letter word"
                id="guess-input"
                type="text"
                value={guess} 
                onChange={ 
                    (event) => {
                        const nextGuess = event.target.value.toUpperCase();
                        setGuess(nextGuess);
                    }
                }
                />
        </form>
    )
}

export default GuessInput;