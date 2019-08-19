import { cons } from '@hexlet/pairs';
import getRandomNumber from '../getRandomNumber';
import game from '..';

const rules = 'Answer "yes" if number even otherwise answer "no".';

const isEven = (n) => n % 2 === 0;

const checkEven = () => {
  const number = getRandomNumber(1, 100);
  const answer = isEven(number) ? 'yes' : 'no';
  return cons(number, answer);
};

export default () => game(rules, checkEven);
