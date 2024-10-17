function handleKeyboardKeyupEvent(event){
    const playerPressed=event.key;
    console.log('playerPressed',playerPressed);

    // Stop the game if press Esc
   if(playerPressed=='Escape') {
    gameOver();
    
   }
   // Key player is expected to press
   const currentAlphabetElement=document.getElementById('current-alphabet');
   const currentAlphabet=currentAlphabetElement.innerText;
   const expectedAlphabet=currentAlphabet.toLowerCase();

   // Check right or wrong key pressed
   if(playerPressed===expectedAlphabet){
    console.log('You Got a point');
    const currentScore=getTextElementValueById('current-score');
    const updateScore=currentScore+1;
    setTextElementValueById('current-score',updateScore);
   //-----Update Score
   //step-1: Get the current Score
   //const currentScoreElement=document.getElementById('current-score');
   //const currentScoreText=currentScoreElement.innerText;
   //const currentScore=parseInt(currentScoreText);

   //step-2: Increase The score By 1
   const newScore=currentScore+1;

   //step-3: display the updated life count
   //currentScoreElement.innerText=newScore;

   // Start a new round
   removeBackgroundColorById(expectedAlphabet);
   continueGame();
   }else{
    console.log('Press the right key');
    const currentLife=parseInt(getTextElementValueById('current-life'));

    const updatedLife=currentLife-1;
    setTextElementValueById('current-life',updatedLife);
    if(updatedLife===0){
        gameOver();
        
    }
    //--------------------------------
//step-1: Get the current life number
//const currentLifeElement=document.getElementById('current-life');
//const currentLifeText=currentLifeElement.innerText;
//const currentLife=parseInt(currentLifeText);

//step-2: reduce the life count
//const newLife=currentLife-1;

//step-3: display the updated life count
//currentLifeElement.innerText=newLife;
   }
   
}
document.addEventListener('keyup', handleKeyboardKeyupEvent);


function continueGame(){
    //Generate random alphabet
    const randomAlphabet=getARandomAlphabet();
    console.log('Random Alphabet :',randomAlphabet);
    //Set randomly generated alphabet to the screen and show it
    const currentAlphabetElement=document.getElementById('current-alphabet');
    currentAlphabetElement.innerText=randomAlphabet;
    //Set background color
    setBackgroundColorById(randomAlphabet);
}
function play(){
    //Hide Everything show only the playground
  hideElementById('home-screen');
  hideElementById('final-score');
  showElementById('play-ground');
  
  //reset score and life
  setTextElementValueById('current-life',5);
  setTextElementValueById('current-score',0);
  continueGame();
} 
function gameOver(){
    hideElementById('play-ground');
    showElementById('final-score');
    //Update final score
    // 1. Get the the final score
    const lastScore=getTextElementValueById('current-score');
    console.log(lastScore);
    setTextElementValueById('last-Score',lastScore);
    //Clear the last selected alphabet highlight
    const currentAlphabet=getElementTextById('current-alphabet');
   // console.log(currentAlphabet);
    removeBackgroundColorById(currentAlphabet);

}