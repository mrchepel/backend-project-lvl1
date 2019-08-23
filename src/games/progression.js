import { cons } from '@hexlet/pairs';
import getRandomNumber from '../getRandomNumber';
import makeGame from '..';

const descriptionGame = 'What number is missing in the progression?';
const lengthProgression = 10;

const checkProgression = () => {
  const missingNumberPosition = getRandomNumber(0, lengthProgression - 1);
  let startProgression = getRandomNumber(1, 50);
  const progressionStep = getRandomNumber(1, 10);
  let question = '';
  let answer = null;
  for (let i = 0; i < lengthProgression; i += 1) {
    startProgression += progressionStep;
    if (i === missingNumberPosition) {
      question = `${question}.. `;
      answer = startProgression;
    } else {
      question = `${question}${startProgression} `;
    }
  }
  return cons(question, answer);
};

export default () => makeGame(descriptionGame, checkProgression);
