let scores, currentScore, activePlayer, playing;

const defaultVal = () => {
    scores = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    playing = true;

    document.getElementById('score--0').textContent = '0';
    document.getElementById('new-game').classList.remove("winner")
    document.getElementById('score--1').textContent = '0';
    document.getElementById('current--0').textContent = '0';
    document.getElementById('current--1').textContent = '0';
    document.querySelector('.player--0').classList.add('active');
    document.querySelector('.player--1').classList.remove('active');
    document.querySelector('.player--0').classList.remove('winner');
    document.querySelector('.player--1').classList.remove('winner');
};

const switchPlayer = () => {
    document.getElementById(`current--${activePlayer}`).textContent = '0';
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    document.querySelector('.player--0').classList.toggle('active');
    document.querySelector('.player--1').classList.toggle('active');
};

document.getElementById('roll-dice').addEventListener('click', () => {
    if (playing) {
        const diceNumber = Math.floor(Math.random() * 6) + 1;

        if (diceNumber == 1 || diceNumber == 2 || diceNumber == 3 || diceNumber == 4 || diceNumber == 5 || diceNumber == 6) {
            document.getElementById('dice').src = `images/dice-${diceNumber}.png`;
        }

        if (diceNumber !== 1) {
            currentScore += diceNumber;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        } else {
            switchPlayer();
        }
    }
});

document.getElementById('hold').addEventListener('click', () => {
    if (playing) {
        scores[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

        if (scores[activePlayer] >= 100) {
            playing = false;
            document.querySelector(`.player--${activePlayer}`).classList.add('winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('active');
        } else {
            switchPlayer()
        }
    }
});

document.getElementById('new-game').addEventListener('click', defaultVal)
defaultVal()