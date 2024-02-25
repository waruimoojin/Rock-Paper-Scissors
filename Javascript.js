function getComputerChoice (){
    
    const random = Math.floor(Math.random() * Choice.length)

    const choix = Choice[random]

   
    return choix;


}
    const Choice = ['rock','paper','siccors']
    const result = getComputerChoice(Choice)
console.log(result);


function playsSingleRound (playerSelection,computerSelection){



  if (playerSelection === computerSelection ){

  return `it's a draw`
}
   else if (playerSelection ==='rock' && computerSelection ==='siccors'){
   return 'You win';
   
}  
 else if (playerSelection ==='paper' && computerSelection ==='rock'){
   return 'You win';
}
   else if (playerSelection ==='siccors' && computerSelection ==='paper'){
   return 'You win';
}else{
return 'You lose!'

}
}
function playGame(){

    const playerSelection = prompt("Start the game by picking among 'Rock, Paper, Scissors'").toLowerCase();
    const computerSelection = getComputerChoice();
console.log(playsSingleRound(playerSelection, computerSelection));

  
}
for (let i = 0; i < 5; i++){
    playGame()
}





