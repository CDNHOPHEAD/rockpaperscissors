const selectionButtons = document.querySelectorAll('[data-selection]')

selectionButtons.forEach(selectionButtons=> {
    selectionButtons.addEventListener('click', e => {
        const selectionName = selectionButton.dataset.selection
        makeSelection(selectionName)
    })
})

function makeSelection(selection){
    console.log(selection)
}












//Set Player score to zero
let playerscore = 0;
//Set Computer Score to zero
let computerscore =0;

//Continue to play game until Player score is 5 or Computer score is 5 or both
//while(playerscore < 5 && computerscore <5 ){
   // let playerSelection =prompt("Choose rock, paper or scissors: ");
   // console.log( "Player selection:", playerSelection);

    let playerOne = playerSelection.trim().toLowerCase();
          if(playerOne === "rock" || playerOne === "paper" || playerOne === "scissors"){
            console.log("Valid response!");
            var computerSelection = "";

            function computerPlay() {
                const rps = ["rock","paper","scissors"];
                    computerSelection = rps[Math.floor(Math.random() * rps. length)];
            }
            computerPlay();
           console.log("A.I selection:", computerSelection);
    }
    //Verify valid input for lower case and upper case
    else{
        console.log("Invalid response!")
    }

// If Player selection is "rock" and computer selection is "scissors"
        //Print "Player 1 Wins"
        //Add one to player score
    if( playerOne === "rock" && computerSelection === "scissors"){
        playerscore ++ ;
        console.log("Player 1 wins !");

// Computer chooses at random from rock, paper or scissors


//Ask player to choose between rock, paper or scrissors

    }
      // If computer selection is "rock" and Player selection is "scissors"
        //Print "A.I Wins"
        //Add one to computer score
    if( computerSelection === "rock" && playerOne ==="scissors"){
        computerscore ++ ;
        console.log("A.I wins!");
    }
        // If Player selection is "paper" and computer selection is "rock"
        //Print "Player 1 Wins"
        //Add one to player score
    
    if( playerOne === "paper" && computerSelection === "rock"){
        playerscore ++ ;
        console.log("Player 1 wins !");
    }
    // If computer selection is "paper" and Player selection is "rock"
        //Print "A.I Wins"
        ////Add one to computer score
    if( computerSelection === "paper" && playerOne ==="rock"){
        computerscore ++ ;
        console.log("A.I wins !");
    }
        // If Player selection is "scissors" and computer selection is "paper"
        //Print "Player 1 Wins"
        //Add one to player score

    if( playerOne === "scissors" && computerSelection === "paper"){
        playerscore ++ ;
        console.log("Player 1 wins !");
    }
        // If computer selection is "scissors" and Player selection is "paper"
        //Print "A.I Wins"
        //Add one to computer score
    if( computerSelection === "scissors" && playerOne ==="paper"){
        computerscore ++ ;
        console.log("A.I wins!");
    }
    //If Player selection is "rock" and computer selection is "rock"
        //Print "Tie!"
    if( playerOne === "rock" && computerSelection === "rock"){
        console.log("Tie!");
    }
    //If Player selection is "paper" and computer selection is "paper"
        //Print "Tie!"
    if( playerOne === "paper" && computerSelection === "paper"){
        console.log("Tie!");
    }
  //If Player selection is "scissors" and computer selection is "scissors"
        //Print "Tie!"
    if( playerOne === "scissors" && computerSelection === "scissors"){
            console.log("Tie!");
        }
// Print updated score

console.log ("A.I score: " , computerscore);



    //If player score= 5 
        //Print "The Player wins the game!"
if(playerscore = 5 && computerscore < 5){
    console.log("Human wins best of 5!");
}
//else if computer score= 5 &  player score < computer score
        //Print "AI wins the game"
else if (computerscore = 5 && playerscore <5){
    console.log ("A.I wins best of 5!");
}












 