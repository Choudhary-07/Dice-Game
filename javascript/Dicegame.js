var roundScore,score,activeplayer,gameplaying;

init();


document.querySelector('.btn-roll').addEventListener('click', function(){
    if(gamePlaying){
        //Random number
        var dice = Math.floor(Math.random() * 6 ) + 1;
    
        //Display Results
        var diceDOM=document.querySelector('.dice');
        diceDOM.style.display= 'block';
        diceDOM.src = '../images/dice-'+ dice +'.png';
         
        
        //update round score
        if(dice!==1){
            //addscore
            roundScore+=dice;
            document.querySelector('#current-' + activeplayer).textContent=roundScore;
        } else{
            //turnchange
            turnchange();    
            }
    }
});


document.querySelector('.btn-hold').addEventListener('click', function(){
    if(gamePlaying){
        //adding score to global score
        score[activeplayer]+=roundScore;

        //updating UI
        document.querySelector('#score-' + activeplayer).textContent=score[activeplayer];
    
        //Check if player wins
        if(score[activeplayer] >= 100){
            document.querySelector('#name-' + activeplayer).textContent='Winner!';
            document.querySelector('.dice').style.display= 'none';
            document.querySelector('.player-' + activeplayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activeplayer + '-panel').classList.remove('active');
            gamePlaying = false;
        }else{
            //Next player turns
            turnchange();
        }
    }
});

function turnchange(){
    //Next player turns
    activeplayer=== 0 ?  activeplayer = 1 : activeplayer = 0;
        roundScore=0;

        document.getElementById('current-0').innerHTML=0;
        document.getElementById('current-1').innerHTML=0;
        
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');

        document.querySelector('.dice').style.display= 'none';
        //document.querySelector('.player-0-panel').classList.remove('active');
       // document.querySelector('.player-1-panel').classList.add('active');
}

document.querySelector('.btn-new').addEventListener('click', init);

function init(){
    score = [0,0];
    roundScore = 0;
    activeplayer = 0;
    gamePlaying = true;
    
    document.querySelector('.dice').style.display= 'none';
    
    document.getElementById('score-0').innerHTML='0';
    document.getElementById('score-1').innerHTML='0';
    document.getElementById('current-0').innerHTML='0';
    document.getElementById('current-1').innerHTML='0';
    document.getElementById('name-0').textContent='Player 1';
    document.getElementById('name-1').textContent='Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('.player-1-panel').classList.remove('active');
}