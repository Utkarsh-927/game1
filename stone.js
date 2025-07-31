let userScore = 0;
let compScore = 0;

 const choices = document.querySelectorAll(".box");
const msg =document.querySelector("#msg");
const pScore = document.querySelector("#person-score");
const cScore = document.querySelector("#computer-score");
const resetbtn = document.querySelector(".resetbtn");


const resetGame = () => {
   resetbtn.addEventListener("click" ,() => {
      pScore.innerText = 0;
      cScore.innerText =0;
      userScore = 0;
      compScore = 0;
      msg.innerText = "Play your move";
      msg.style.backgroundColor = " #012309";
   } )

} 



 const showWinner = (userWin,userchoice,compChoice) => {
if(userWin) {
   console.log("you win the game");
   msg.innerText = `You Win! your ${userchoice} beat ${compChoice}`;
   msg.style.backgroundColor= "green";
   userScore++;
   pScore.innerText = userScore;
}
else {
   console.log("you lose the game");
   msg.innerText = `You lose. ${compChoice} beat your ${userchoice}`;
   msg.style.backgroundColor="red";
   compScore++;
   cScore.innerText = compScore;
}
 }


 const drawGame = () => {
   console.log("Game is Draw");
   msg.innerText = "Game is draw";
   msg.style.backgroundColor="blue";
 }

 const genCompChoice = () => {
   const options = ["rock","paper","scissor"];
  const randomIdx = Math.floor(Math.random() * 3);
  return options[randomIdx];
   
 }

  const playGame = (userchoice) => {
    console.log("user choice = ",userchoice);
    const compChoice = genCompChoice();
    console.log("computer choice = ", compChoice);
    if(compChoice===userchoice) {
       drawGame();
    }
    else {
      let userWin = true;
      if(userchoice==="rock") {
         userWin = compChoice ===" paper" ? false : true;
      }
      else if(userchoice==="paper") {
         userWin = compChoice ==="scissor" ? false : true;
      }
      else {
         userWin = compChoice ==="rock" ? false : true;
   
      }
      showWinner(userWin,userchoice,compChoice);
    }
    resetGame();
    
 };
 

 choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
    playGame(userchoice);

    })
   
    
 });