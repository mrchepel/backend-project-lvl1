import { cons } from '@hexlet/pairs';
import getRandomNumber from '../getRandomNumber';
import makeGame from '..';

const gameDescription = 'What number is missing in the progression?';
const lengthProgression = 10;

const generateProgression = () => {
  const missingElementPosition = getRandomNumber(0, lengthProgression - 1);
  const start = getRandomNumber(1, 50);
  const step = getRandomNumber(1, 10);
  let question = '';
  const answer = missingElementPosition * step + start;
  for (let i = 0; i < lengthProgression; i += 1) {
    question = `${question}${i === missingElementPosition ? '..' : i * step + start}`;
    if (i !== lengthProgression - 1) {
      question = `${question} `;
    }
  }
  return cons(question, String(answer));
};

export default () => makeGame(gameDescription, generateProgression);
