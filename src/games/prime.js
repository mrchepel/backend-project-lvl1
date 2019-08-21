import { cons } from '@hexlet/pairs';
import getRandomNumber from '../getRandomNumber';
import game from '..';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (n) => {
  if (n <= 1) {
    return false;
  }
  for (let i = 2; i < n; i += 1) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

const checkPrime = () => {
  const number = getRandomNumber(1, 100);
  const answer = isPrime(number) ? 'yes' : 'no';
  return cons(number, answer);
};

export default () => game(rules, checkPrime);
