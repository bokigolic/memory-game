import { getMemoryCardImgSrc } from "../utils/memory-game-utils";

const MemoryGameCard = (props) => {
  const card = props.card;
  const index = props.index;
  const isOpened = props.isOpened
  const clickOnCard = props.clickOnCard;


  const handleClick = (e) => {
    clickOnCard(index)
  }


  let jsx = null;
  if (card !== null) {
    // means, the card is on the board
    /*
    if (isOpened === true) {
      // opened
      jsx = (
        <div className="memory-card opened">
          <img src={getMemoryCardImgSrc(card)}alt={card}/>
          <span>{card}</span>
          </div>
      )
    } else { 
      //closed
      jsx = (
        <div className="memory-card" onClick={handleClick}></div>
      )
    }
    */
    jsx = (
      <div className={isOpened ? "memory-card-flipping opened" : "memory-card-flipping"}>
        <div className="front">
          <div className="memory-card">
            <img src={getMemoryCardImgSrc(card)} alt={card} />
            <span>{card}</span>
          </div>

        </div>
        <div className="back">
          <div className="memory-card" onClick={handleClick}></div>

        </div>
      </div>
    )

  } else {
    // the card is gone from board
  }


  return (
    <div className="item">
      {jsx}
    </div>
  )
};
export default MemoryGameCard;