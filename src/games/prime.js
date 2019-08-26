import getQuestionAnswer from '../getQuestionAnswer';
import makeGame from '..';

const descriptionGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (n) => {
  if (n <= 1) {
    return false;
  }
  for (let i = 2; i <= n / 2; i += 1) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

export default () => makeGame(descriptionGame, getQuestionAnswer(isPrime));
