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

const cardImages = {
  'BALL': 'ball.jpg',
  'RABIT': 'rabit.jpg',
  'BEAR': 'bear.jpg',
  'STAR': 'star.jpg',
  'SUN': 'sun.jpg',
  'ELEPHANT': 'elephant.jpg',
  'TURTLE': 'turtle.jpg',
  'HART': 'hart.jpg',
};

export const getMemoryCardImgSrc = (card) => {
  let src = ''; //if is empty, default image
  if (cardImages[card]) {
    // src = '/static/img/memory-card-images/' + cardImages[card];
    src = 'static/img/memory-card-images/' + cardImages[card];

  }
  return src;
}


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


let timeStart = 0;// Time in moment when timing is started

export const startTiming = () => {
  timeStart = Date.now(); //gives the current number of miliseconds from the computer clock

}

export const doneTiming = () => {
  //Measure how much time has passed since the timeStart and return the measured time spentedTime
  const timeNow = Date.now();
  const usedTime = timeNow - timeStart; // used time
  return usedTime

}

export const miliSecondsToDisplayFormat = (ms) => {
  const s = ms / 1000;
  //return s;
  if (s < 60) {

    // This is not a good solution, we round to 3 decimal places
    const secondString = '' + s;
    // the number becomes the word in quotation marks
    const exploded = secondString.split('.');// '55.123' => '55', '123'
    let decimalPart = exploded[1];
    if (exploded[1]) {
      decimalPart += '000000';
      decimalPart = decimalPart.slice(0, 3) // takes first 3 digits

    } else {
      //if number dont have decimal
      decimalPart = '000' // if the number had no decimals, we can put 3 zeros as decimals
    }
    const displayTime = exploded[0] + '.' + decimalPart + ' sec';
    return displayTime;

  } else {
    // on 60 sec or more we switch to minutes
    const m = s / 60;
    const minutesString = '' + m // this is minutes in quotations
    const exploded = minutesString.split('.');

    let decimalPart = exploded[1]
    if (exploded[1]) {
      decimalPart += '000000'
      decimalPart = decimalPart.slice(0, 3)
    } else {
      decimalPart = '000';
    }
    const displayTime = exploded[0] + '.' + decimalPart + ' min';
    return displayTime
  }
}