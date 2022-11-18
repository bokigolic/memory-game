const MemoryGameCard = (props) => {
  const card = props.card;
  const clickOnCard = props.clickOnCard;
  const index = props.index;


  const handleClick = (e) => {
    clickOnCard(index)
  }
  let jsx = null;
  if (card !== null) {
    jsx = (
      <div className="memory-card" onClick={handleClick}>{card}</div>
    )
  }


  return (
    <div className="item">
      {jsx}
    </div>
  )
};
export default MemoryGameCard;