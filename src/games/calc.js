import { cons, car, cdr } from '@hexlet/pairs';
import getRandomNumber from '../getRandomNumber';
import game from '..';

const getOperator = expression => car(expression);
const getResult = expression => cdr(expression);
let countOperators = 0;
const rules = 'What is the result of the expression?';

const getCalculation = (x, y, operator) => {
  switch (operator) {
    case 0:
      return cons('+', x + y);
    case 1:
      return cons('-', x - y);
    case 2:
      return cons('*', x * y);
  }
};

const checkResultExpression = () => {
  const x = getRandomNumber(1, 100);
  const y = getRandomNumber(1, 100);
  const expression = getCalculation(x, y, countOperators);
  const question = `${x} ${getOperator(expression)} ${y}`;
  const answer = getResult(expression);
  countOperators += 1;
  return cons(question, answer);
};


export default () => game(rules, checkResultExpression);