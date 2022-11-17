import { useState } from "react";

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

  const [state, setState] = useState(initialState)

  
  return (
    <div>
      <h1>Memory Game</h1>
      <div className="memory-board">
      {
        state.map((card) => {
          return (
            <div className="item">
              <div className="memory-card"></div>
            </div>
    
          )
        })
      }

        
      </div>
    </div>
  )
};
export default MemoryGame;