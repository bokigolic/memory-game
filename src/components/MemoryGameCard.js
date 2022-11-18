const MemoryGameCard = (props) => {
  const card = props.card;

  let jsx = null;
  if (card !== null) {
    jsx = (
    <div className="memory-card">{card}</div>
    )
  }


  return (
    <div className="item">
      {jsx}
    </div>
  )
};
export default MemoryGameCard;