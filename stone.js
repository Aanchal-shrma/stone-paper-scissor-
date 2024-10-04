let choices = document.querySelectorAll(".choice");
let msgContainer = document.querySelector(".btn");
let userScorePara = document.querySelector(".u-score");
let compScorePara = document.querySelector(".c-score");
let resetBtn = document.querySelector(".hide");
let counterVar = document.querySelector(".counter");
let disableButton = document.querySelectorAll(".button");


let userScore = 0;
let compScore = 0;
let count = 0;

let genCompChoice = (userChoice) => {
    const options = ["rock", "paper", "scissor"];
    let randIdx = Math.floor(Math.random() * 3);
     return options[randIdx];
}

let newGame = () => {
    msgContainer.innerText = "play your move"
    userScorePara.innerText = 0;
    compScorePara.innerText = 0;
    msgContainer.style.backgroundColor = "rgb(1, 1, 38)"; 
    resetBtn.classList.add("hide");
}

const disabled = () => {
    for(let btn of disableButton){
      btn.disabled = true;
    }
  }

  const enabled = () => {
    for(let btn of disableButton){
      btn.disabled = false;
      count = "0";
      userScore = "0";
      compScore = "0";
    }
  }

let endGame = (userScore,compScore,userWin) => {
   if(userScore == 10 || compScore == 10){
    resetBtn.classList.remove("hide");
    disabled();
    if(userScore == 10){
        msgContainer.innerText = "You win!"
        }else{
        msgContainer.innerText = "You loose.."
    }
}
}

resetBtn.addEventListener("click",  enabled);

let showWinner = (userWin,compChoice,userChoice) => {
   if(userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    msgContainer.innerText = `you win! your ${userChoice} beats ${compChoice}`;
    msgContainer.style.backgroundColor = "green";
   }else{
    compScore++;
    compScorePara.innerText = compScore;
    msgContainer.innerText = `you loose ${compChoice} beats your ${userChoice}` ;
    msgContainer.style.backgroundColor = "red";
   }
  endGame(userScore,compScore,userWin);
}

let drawGame = () => {
     msgContainer.style.backgroundColor = "rgb(1, 1, 38)";
     msgContainer.innerText = "Game was draw...play again";
     }

let playGame = (userChoice) => {
    const compChoice = genCompChoice()
    if(userChoice === compChoice){
         drawGame();
    }else{
        let userWin = true;
         if(userChoice == "rock"){
             userWin = compChoice == "paper" ? false : true;
         }
         else if(userChoice == "scissor"){
             userWin = compChoice == "paper" ? true : false;
         }
         else{
            userWin = compChoice == "scissor" ? false : true;
         }
         showWinner(userWin,compChoice,userChoice);
         }
   }


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        count++;
        counterVar.innerText = count;
        const userChoice = choice.getAttribute('id');
        playGame(userChoice,choice);
    })
})

resetBtn.addEventListener("click",newGame);