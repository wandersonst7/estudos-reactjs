// CSS
import './App.css'

// React
import { useCallback, useEffect, useState } from 'react'

// Data
import { wordsList } from './data/words';

// Components
import StartScreen from './components/StartScreen'
import GameOver from './components/GameOver';
import Game from './components/Game';

const stages = [
  {id: 1, name: "start"},
  {id: 2, name: "game"},
  {id: 3, name: "end"}
]

const guessesQty = 3;

function App() {

  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);

  const [pickedWord, setPickedWord] = useState("");
  const [pickedCategory, setPickedCategory] = useState("");
  const [letters, setLetters] = useState([])
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [guesses, setGuesses] = useState(guessesQty);
  const [score, setScore] = useState(0)

  const pickWordAndCategory = useCallback(() => {
    // pick a random category
    const categories = Object.keys(words)
    const category = categories[Math.floor(Math.random() * categories.length)]

    // pick a random word
    const word = words[category][Math.floor(Math.random() * words[category].length)]
    return {category, word}
  }, [words])

  // starts secret word game
  const startGame = useCallback(() => {
    // clear all states
    clearLetterStates();

    // pick word and pick category
    const {category, word} = pickWordAndCategory();

    // create array of letters
    let wordLetters = word.split('');
    wordLetters = wordLetters.map( (letter) => letter.toLowerCase() )

    // fill states
    setPickedWord(word)
    setPickedCategory(category)
    setLetters(wordLetters)

    setGameStage(stages[1].name)
  }, [pickWordAndCategory])

  // process the letter input
  const verifyLetter = (letter) => {
    const normalizedLetter = letter.toLowerCase();

    // check if letter has already been utilized
    if(guessedLetters.includes(normalizedLetter) || wrongLetters.includes(normalizedLetter)){
      return;
    }

    // push guessed letter or remove a guess
    if(letters.includes(normalizedLetter)){

      setGuessedLetters( (actualGuessedLetters) => {
        return [...actualGuessedLetters, normalizedLetter]
      })

    }else{
      setGuesses( (actualGuesses) => actualGuesses -1)
      setWrongLetters( (actualWrongLetters) => {
        return [...actualWrongLetters, normalizedLetter]
      })
    }
  }


  const clearLetterStates = () => {
    setGuessedLetters([])
    setWrongLetters([])
  }

  //  check if guesses ended
  useEffect( () => {
    
    if(guesses <= 0){
      // reset all states
      clearLetterStates();
      setGameStage(stages[2].name)
    }
  }, [guesses])

  // check win condition
  useEffect( () => {

    const uniqueLetters = [... new Set(letters)]

    // win condition
    if(guessedLetters.length === uniqueLetters.length && gameStage === stages[1].name){
      // add score
      setScore( (actualScore) => actualScore += 100 )

      // restart game with new word
      startGame();
    }


  }, [guessedLetters, gameStage, letters, startGame])

  // restarts the game
  const retry = () => {
    setScore(0)
    setGuesses(guessesQty)
    setGameStage(stages[0].name)
  }


  return (
    <div className='App'>
        { gameStage === "start" && <StartScreen startGame={startGame} /> }
        { gameStage === "game" && <Game 
        verifyLetter={verifyLetter} 
        pickedWord={pickedWord} 
        pickedCategory={pickedCategory} 
        letters={letters}
        guessedLetters={guessedLetters} 
        wrongLetters={wrongLetters} 
        guesses={guesses}
        score={score} /> }  
        { gameStage === "end" && <GameOver retry={retry} score={score}/> }  
    </div>
  )
}

export default App
