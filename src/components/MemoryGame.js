import { useEffect, useState } from "react";
import { getMemoryGameShuffledCards } from "../utils/memory-game-utils";
import MemoryGameCard from "./MemoryGameCard";

const MemoryGame = () => {
  const initialState = [
    null,
    null,
    'ball',
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


  useEffect(() => {
    if (firstOpenedCardIndex !== null && secondOpenedCardIndex !== null) {
      // 2 card are oppened

      // closing both cards but with a slight delay
      setTimeout(() => {
        //... close bouth
        setFirstCardOpenedIndex(null)
        setSecondCardOpenedIndex(null)

      }, 1000)

    }


  }, [firstOpenedCardIndex, secondOpenedCardIndex])




  const handleRestart = () => {
    // Writes a new series of 16 shuffled cards in the state
    const freshShuffledSixtinCards = getMemoryGameShuffledCards()
    setState(freshShuffledSixtinCards)
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
      <h1>Memory Game</h1>
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
  )
};
export default MemoryGame;