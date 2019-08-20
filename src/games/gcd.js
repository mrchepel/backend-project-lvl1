import { cons } from '@hexlet/pairs';
import getRandomNumber from '../getRandomNumber';
import game from '..';

const rules = 'Find the greatest common divisor of given numbers.';

const gcd = (x, y) => {
  if (x === 0 || y === 0) {
    return x + y;
  }
  return x > y ? gcd(x % y, y) : gcd(x, y % x);
};

const checkGCD = () => {
  const x = getRandomNumber(1, 100);
  const y = getRandomNumber(1, 100);
  const question = `${x} ${y}`;
  const answer = gcd(x, y);
  return cons(question, answer);
};

export default () => game(rules, checkGCD);
