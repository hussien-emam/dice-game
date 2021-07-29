// variables declaration
var scores,randomScore,activePlayer,currentDice,dice,playingGame;
var diceDOM = document.querySelector('.dice-img');

//some function for no repeated the code
function currentZero(){
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;
}
function init(){
    scores       = [0,0];
    randomScore  = 0;
    activePlayer = 0;
    currentDice  = 0;
    playingGame  = true;
    diceDOM.style.display = 'none';
    document.getElementById('score-0').textContent = 0;
    document.getElementById('score-1').textContent = 0;
    document.querySelector('.player-0').classList.add('active');
    document.querySelector('.player-1').classList.remove('active');
    currentZero();
}
function nextPlayer(){
    currentDice  = 0;
    activePlayer == 0?activePlayer=1:activePlayer = 0;
    document.querySelector('.player-0').classList.toggle('active');
    document.querySelector('.player-1').classList.toggle('active');
    currentZero();
}
//when the website started
init();

//Button Roll Dice click
document.querySelector('.btn-roll').addEventListener('click',function(){
    if (playingGame){
        //dice image
        dice = Math.floor(Math.random()*6)+1;
        /*var x;
        for (x=1;x < 7;x++){
            setTimeout(function () {
               console.log(diceDOM.src = './img/dice-'+x+'.png') ;
            },2000)
        }*/
        diceDOM.src = './img/dice-'+dice+'.png';
        diceDOM.style.display ='inline-block';
        if (dice > 1){
            currentDice += dice;
            document.querySelector('#current-'+activePlayer).textContent = currentDice;
        }else {
            //next user
            nextPlayer();
        }
    }else {
        alert('please start new game');
    }

});
//Button Hold Click
document.querySelector('.btn-hold').addEventListener('click',function(){
    if (playingGame){
        //add value
        scores[activePlayer] += currentDice;
        document.querySelector('#score-'+activePlayer).textContent = scores[activePlayer];
        //Check the winner
        if (scores[activePlayer]>=20){
            document.querySelector('.player-'+activePlayer).classList.remove('active');
            document.querySelector('.player-'+activePlayer).classList.add('winner');
            document.getElementById('name-'+activePlayer).textContent = 'Winner!s' ;
            playingGame = false;
        }else {
            nextPlayer();
        }
    }else {
        alert('please start new game');
    }
});
document.getElementsByClassName('btn-new')[0].addEventListener('click',init);