const readline = require('readline-sync');

function createComputer() {
  let playerObject = createPlayer();

  let computerObject = {
    choose() {
      const choices = ['rock', 'paper', 'scissors'];
      let randomIndex = Math.floor(Math.random() * choices.length);
      this.move =  choices[randomIndex];
    },
  };
  return Object.assign(playerObject, computerObject);
}
function createHuman() {
  let playerObject = createPlayer();

  let humanObject = {
    choose() {
      let choice;

      while (true) {
        console.log('Please choose rock, paper, or scissors:');
        choice = readline.question();
        if (['rock', 'paper', 'scissors'].includes(choice)) break;
        console.log('Sorry, invalid choice.');
      }

      this.move = choice;
    },
  };

  return Object.assign(playerObject, humanObject);
}
function createPlayer() {
  return {
    move: null,
  };
}
function createMove() {
  return {
    //possible state: type of move (r, p or s)
  };
}

function createRule() {
  return {
    // possible state? not clear whether rules need state

  };
}

let compare = function(move1, move2) {
  //not yet implemented
};

const RPSGame = {
  human: createHuman(),
  computer: createComputer(),
  displayWelcomeMessage() {
    console.log('Welcome to Rock, Paper, Scissors!');
  },
  displayGoodbyeMessage() {
    console.log('Thanks for playing Rock, Paper, Scissors. Goodbye!');
  },
  displayWinner() {
    let humanMove = this.human.move;
    let computerMove = this.computer.move;

    console.log(`You chose: ${humanMove}`);
    console.log(`The computer chose: ${computerMove}`);

    if ((humanMove === 'rock' && computerMove === 'scissors') ||
      (humanMove === 'paper' && computerMove === 'rock') ||
      (humanMove === 'scissors' && computerMove === 'paper')) {
      console.log('You win!');
    } else if ((humanMove === 'rock' && computerMove === 'paper') ||
             (humanMove === 'paper' && computerMove === 'scissors') ||
             (humanMove === 'scissors' && computerMove === 'rock')) {
      console.log('Computer wins!');
    } else {
      console.log("It's a tie");
    }
  },
  playAgain() {
    let answer;
    while (true) {
      console.log('Would you like to play again? (y/n');
      answer = readline.question().toLowerCase();
      if (['y', 'n', 'y','n'].includes(answer)) {
        return answer[0] === 'y';
      }
      console.log("Invalid answer");
    }
  },
  play() {
    this.displayWelcomeMessage();
    while (true) {
      this.human.choose('human');
      this.computer.choose('computer');
      this.displayWinner();
      if (!this.playAgain()) break;
    }
    this.displayGoodbyeMessage();
  },
};

RPSGame.play();