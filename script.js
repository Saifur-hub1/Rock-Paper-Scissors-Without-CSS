let score = JSON.parse(localStorage.getItem('score'))||{won:0,tie:0,lose:0};



function reset(){
  score = {won: 0,tie: 0,lose: 0};

  document.querySelector('.score-board').innerHTML = `Score Board rested<br>Won: ${score.won}<br>Lose: ${score.lose}<br>Tie: ${score.tie}`;
  document.querySelector('.state-board').innerHTML = `State Board reseted`;
  console.log(`Won: ${score.won}\n
Lose: ${score.lose}\n
Tie: ${score.tie}`);
  localStorage.removeItem('score');
}

function robot_move() {
  let randm = Math.random();

  if (0<=randm && randm<=.3) return 'rock';
  else if (.3 < randm && randm <= .6) return 'paper';
  else if(.6<randm && randm<=1) return 'scissors';
}
function controller(user) {
  let computerMove = robot_move();
  let result;

  if (computerMove === `rock`) {
    if (computerMove === user) result = `Tie`, score.tie++;
    else if (user === `paper`) result = `You won`, score.won++;
    else if (user === 'scissors') result = `You Lose`, score.lose++;
  }
  else if (computerMove === `paper`) {
    if (computerMove === user) result = `Tie`, score.tie++;
    else if (user === `rock`) result = `You Lose`, score.lose++;
    else if (user === `scissors`) result = `You won`, score.won++;
  }
  else if (computerMove === `scissors`) {
    if (computerMove === user) result = `Tie`, score.tie++;
    else if (user === 'paper') result = `You Lose`, score.lose++;
    else if (user === 'rock') result = `You won`, score.won++;
  }

  localStorage.setItem('score',JSON.stringify(score));

  document.querySelector('.state-board').innerHTML = `You picked: ${user}<br>Computer picked: ${computerMove}<br>Result: ${result}`;
  document.querySelector('.score-board').innerHTML = `Won: ${score.won}<br>Lose: ${score.lose}<br>Tie: ${score.tie}`;
  
  console.log(`You picked: ${user}\n 
Computer picked: ${computerMove}\n
Result: ${result}`);

  console.log(`Won: ${score.won}\n
Lose: ${score.lose}\n
Tie: ${score.tie}`);
}