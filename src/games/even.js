import { cons } from '@hexlet/pairs';
import getRandomNumber from '../getRandomNumber';
import makeGame from '..';

const descriptionGame = 'Answer "yes" if number even otherwise answer "no".';

const isEven = (n) => n % 2 === 0;

const getQuestionAnswer = () => {
  const questionRound = getRandomNumber(1, 100);
  const answer = isEven(questionRound) ? 'yes' : 'no';
  return cons(questionRound, answer);
};

export default () => makeGame(descriptionGame, getQuestionAnswer);
