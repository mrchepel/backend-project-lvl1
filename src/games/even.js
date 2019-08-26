import getQuestionAnswer from '../getQuestionAnswer';
import makeGame from '..';

const descriptionGame = 'Answer "yes" if number even otherwise answer "no".';

const isEven = (n) => n % 2 === 0;

export default () => makeGame(descriptionGame, getQuestionAnswer(isEven));
