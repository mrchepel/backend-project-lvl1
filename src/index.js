import readlineSync from 'readline-sync';

const askName = () => {
  const userName = readlineSync.question('May I have your name? ');
  return userName;
};

const isEven = (number) => {
  const result = (number % 2 === 0) ? 'yes' : 'no';
  return result;
};


const welcome = 'Welcome to the Brain Games!';
console.log(welcome);
console.log('Answer "yes" if number even otherwise answer "no".\n');
const name = askName();
console.log(`Hello, ${name}!\n`);

const question = (winner = false) => {
  for (let roundCount = 0; roundCount < 3; roundCount += 1) {
    const random = Math.floor(Math.random() * 100);
    console.log(`Question: ${random}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === isEven(random)) {
      console.log('Correct!');
      winner = true;
    } else {
      console.log('"yes" is wrong answer ;(. Correct answer was "no".');
      console.log(`Let\'s try again, ${name}!`);
      winner = false;
      break;
    }
  }
  if (winner) {
      console.log(`Congratulations, ${name}!`);
    }
};


export { askName, welcome, question };
