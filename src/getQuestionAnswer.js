import { cons } from '@hexlet/pairs';
import getRandomNumber from './getRandomNumber';

export default (functionPredicate) => () => {
  const question = getRandomNumber(1, 100);
  const answer = functionPredicate(question) ? 'yes' : 'no';
  return cons(question, answer);
};
