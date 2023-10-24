const randomNumber=(parseInt(Math.random()*100 + 1))
const submit=document.querySelector('#subt');
const userInput = document.querySelector('#guessfiled')
const guessSlot = document.querySelector('.guessess')
const reamining = document.querySelector(".lastresult")
const loworhigh = document.querySelector("LowOrHigh");
const startover = document.querySelector('.resultParse');
const p =document.createElement('p');

let prevGuess=[];
let numGuess=1;
let playGame=true;
if(playGame){
    submit.addEventListener('click',function(e){
          e.preventDefault();
          
    })
}

function validGuess(guess){
    if(guess>100 || guess<0 || isNaN(guess)){

    }
}
function checkGuess(guess){

}
function displayGuess(guess){

}
function displayMessage(message){

}
function newgame(){

}
function endgame(){

}