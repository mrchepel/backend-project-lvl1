import { cons } from '@hexlet/pairs';
import getRandomNumber from '../getRandomNumber';
import makeGame from '..';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const findGcd = (x, y) => {
  if (x === 0 || y === 0) {
    return x + y;
  }
  return x > y ? findGcd(x % y, y) : findGcd(x, y % x);
};

const getQuestionAnswer = () => {
  const x = getRandomNumber(1, 100);
  const y = getRandomNumber(1, 100);
  const question = `${x} ${y}`;
  const answer = findGcd(x, y);
  return cons(question, String(answer));
};

export default () => makeGame(gameDescription, getQuestionAnswer);
