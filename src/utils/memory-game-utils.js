import { getRandomIntInclusive } from "./random-utils";

const allCards = [
  'RABIT',
  'RABIT',
  'BEAR',
  'BEAR',
  'BALL',
  'BALL',
  'STAR',
  'STAR',
  'SUN',
  'SUN',
  'ELEPHANT',
  'ELEPHANT',
  'TURTLE',
  'TURTLE',
  'HART',
  'HART',
];



export const getMemoryGameShuffledCards = () => {
  let cards = []; //shuflled cards
  const allreadyUsedIndex = [];

  //while loop
  while (cards.length < 16) {
    const randomIndex = getRandomIntInclusive(0, 15);
    if (allreadyUsedIndex.includes(randomIndex)) {
      // this card is allready used, we skip it

    } else {
      const card = allCards[randomIndex];
      cards.push(card)
      allreadyUsedIndex.push(randomIndex)
    }
  }
  // all 16 card are filled
  return cards

}