import { cons } from '@hexlet/pairs';
import getRandomNumber from '../getRandomNumber';
import makeGame from '..';

const descriptionGame = 'Find the greatest common divisor of given numbers.';

const calculateGcd = (x, y) => {
  if (x === 0 || y === 0) {
    return x + y;
  }
  return x > y ? calculateGcd(x % y, y) : calculateGcd(x, y % x);
};

const checkGcd = () => {
  const x = getRandomNumber(1, 100);
  const y = getRandomNumber(1, 100);
  const question = `${x} ${y}`;
  const answer = calculateGcd(x, y);
  return cons(question, String(answer));
};

export default () => makeGame(descriptionGame, checkGcd);
