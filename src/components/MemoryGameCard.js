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
    if (isOpened === true) {
      // opened
      jsx = (
        <div className="memory-card opened" >{card}</div>
      )
    } else { 
      //closed
      jsx = (
        <div className="memory-card" onClick={handleClick}></div>
      )
    }
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