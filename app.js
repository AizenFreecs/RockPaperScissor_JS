let userScore = 0;
let computerScore = 0;
let possibleChoices = ['rock','paper','scissor'];
let choices = document.querySelectorAll(".choice");
let infoScreen = document.querySelector("#infoText");
let userScoreDsp = document.querySelector("#playerScore");
let comScoreDsp = document.querySelector("#compScore");
let resetBtn = document.querySelector("#resetBtn");
let sign="";
let userWin = true;
let comChoice = '';

choices.forEach((choice) => {
    choice.addEventListener('click',()=>{
        sign = choice.id;
        comChoice = getComchoice();
        if(sign===comChoice){
            infoScreen.innerText='It was a draw';
            infoScreen.style.backgroundColor = 'burlywood';
        }else{
        compareSign(sign,comChoice);
        }
        updateScore();
    })
});

const getComchoice=()=>{
    let comChoice = possibleChoices[(Math.floor(Math.random() * possibleChoices.length))];
    return comChoice

}
const updateScore = ()=>{
    userScoreDsp.innerText = "Player :" + userScore;
    comScoreDsp.innerText = "Computer :" + computerScore;
}
resetBtn.addEventListener('click',()=>{
    userScore = 0;
    computerScore = 0;
    infoScreen.innerText = "Please select a sign."
    
    updateScore();
})

const drawInfo=(userWin,sign,comChoice)=>{
    if(userWin===true){
        userScore++;
        updateScore;
        infoScreen.innerText = `Player Wins. ${sign} beats ${comChoice}`
        infoScreen.style.backgroundColor = 'green';
    }else{
        computerScore++;
        updateScore;
        infoScreen.innerText = `Computer Wins. ${comChoice} beats ${sign}`
        infoScreen.style.backgroundColor = 'red';
    }
}
const compareSign =(sign,comChoice) => {
    
    if(sign==='rock'){
        userWin = comChoice==='scissor'?true:false;
    }else if(sign==='paper'){
        userWin = comChoice==='rock'?true:false;
    }else{
        userWin = comChoice==='paper'?true:false;
    }
    drawInfo(userWin,sign,comChoice);
 }