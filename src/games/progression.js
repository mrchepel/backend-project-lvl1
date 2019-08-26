import { cons } from '@hexlet/pairs';
import getRandomNumber from '../getRandomNumber';
import makeGame from '..';

const descriptionGame = 'What number is missing in the progression?';
const lengthProgression = 10;

const generateProgression = () => {
  const missingPosition = getRandomNumber(0, lengthProgression - 1);
  const startProgression = getRandomNumber(1, 50);
  const progressionStep = getRandomNumber(1, 10);
  let counter = startProgression;
  let question = '';
  let answer = null;
  for (let i = 0; i < lengthProgression; i += 1) {
    if (i === missingPosition) {
      question = `${question}..`;
      answer = counter;
    } else {
      question = `${question}${counter}`;
    }
    if (i !== lengthProgression - 1) {
      question = `${question} `;
    }
    counter += progressionStep;
  }
  return cons(question, String(answer));
};

export default () => makeGame(descriptionGame, generateProgression);
