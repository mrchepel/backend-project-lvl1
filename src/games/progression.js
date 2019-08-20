import { cons } from '@hexlet/pairs';
import getRandomNumber from '../getRandomNumber';
import game from '..';

const rules = 'What number is missing in the progression?';

const checkProgression = () => {
  const lengthProgression = 10;
  const positionMissingNumber = getRandomNumber(0, 9);
  let startProgression = getRandomNumber(1, 50);
  const progressionStep = getRandomNumber(1, 10);
  const space = ' ';
  let question = '';
  let answer = null;
  for (let i = 0; i < lengthProgression; i += 1) {
    startProgression += progressionStep;
    if (i === positionMissingNumber) {
      question = `${question}..${space}`;
      answer = startProgression;
    } else {
      question = `${question}${startProgression}${space}`;
    }
  }
  return cons(question, answer);
};

export default () => game(rules, checkProgression);
