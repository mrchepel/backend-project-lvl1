import { cons } from '@hexlet/pairs';
import getRandomNumber from '../getRandomNumber';
import makeGame from '..';

const descriptionGame = 'Answer "yes" if number even otherwise answer "no".';

const isEven = (n) => n % 2 === 0;

const getQuestionAnswer = () => {
  const question = getRandomNumber(1, 100);
  const answer = isEven(question) ? 'yes' : 'no';
  return cons(question, answer);
};

export default () => makeGame(descriptionGame, getQuestionAnswer);
