import { useEffect, useState } from "react";
import { getMemoryGameShuffledCards } from "../utils/memory-game-utils";
import MemoryGameCard from "./MemoryGameCard";

const MemoryGame = () => {
  const initialState = [
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]
  const [state, setState] = useState(initialState);;
  const [firstOpenedCardIndex, setFirstCardOpenedIndex] = useState(null);
  const [secondOpenedCardIndex, setSecondCardOpenedIndex] = useState(null);

  //state to check if the game is started or finished
  const [started, setStarted] = useState(false)

  //state for players
  const [currentPlayer, setCurrentPlayer] = useState(0);
  const initialPlayer = {
    name: 'Alpha',
    usedTime: 0,
    score: 0 // number of pairs

  }
  const [players, setPlayers] = useState([]);



  useEffect(() => {
    if (started === true) {
      let done = true;
      state.forEach(card => {
        if (card !== null) {
          done = false;
        }
      });
      if (done) {
        window.alert("Game over!!! Click 'RESTART' if you want a new game")
        setStarted(false) // tha game is done
      }
    }
  }, [state])

  useEffect(() => {
    if (firstOpenedCardIndex !== null && secondOpenedCardIndex !== null) {
      // 2 card are oppened

      // closing both cards but with a slight delay
      setTimeout(() => {
        const firstCard = state[firstOpenedCardIndex];
        const secondCard = state[secondOpenedCardIndex];
        if (firstCard === secondCard) {
          // they are the same
          // if 2 card is same, upate state to null
          const updatedState = state.map((card, index) => {
            if (index === firstOpenedCardIndex || index === secondOpenedCardIndex) {
              return null; // return null in those 2 card
            }
            return card; // All other cards are unchanged
          });
          setState(updatedState);
          // Due to the correction of the code, we enter null in the cards that are removed from the board so we can open them further.
          setFirstCardOpenedIndex(null)
          setSecondCardOpenedIndex(null)

        } else {
          // not same
          setFirstCardOpenedIndex(null)
          setSecondCardOpenedIndex(null)
          //if card is not same, closing bouth 
        }
        //... close bouth
      }, 1000)
    }

  }, [firstOpenedCardIndex, secondOpenedCardIndex])




  const handleRestart = () => {
    // Writes a new series of 16 shuffled cards in the state
    const freshShuffledSixtinCards = getMemoryGameShuffledCards() // card are shuffled and organized
    setState(freshShuffledSixtinCards)
    setStarted(true)  // game is started
  }

  const clickOnCard = (index) => {
    console.log("click on card", index)
    // First check if the first one is open
    if (firstOpenedCardIndex === null) {
      // first is not open, we opening now
      setFirstCardOpenedIndex(index)

    } else {
      if (secondOpenedCardIndex === null) {
        // first card is open, but second is still closed
        // opening second card
        setSecondCardOpenedIndex(index);

      }
    }

  }
  return (
    <div className="board-for-margin">
      <div><h1 className="memory-board-title">Memory Game</h1>
        <div className="memory-board">
          {
            // write all cards
            state.map((card, index) => {
              let isOpened = false;
              if (index === firstOpenedCardIndex || index === secondOpenedCardIndex) {
                isOpened = true;
              }
              return (
                <MemoryGameCard key={index} card={card} index={index} isOpened={isOpened} clickOnCard={clickOnCard} />
              )
            })
          }
          <button className="button" onClick={handleRestart}>Reset</button>
        </div>
      </div>
    </div>
  )
};
export default MemoryGame;