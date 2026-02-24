document.addEventListener('DOMContentLoaded', () => {
    const celebrityImage = document.getElementById('celebrity-image');
    const scoreDisplay = document.getElementById('score');
    const timerDisplay = document.getElementById('timer');
    const guessInput = document.getElementById('guess-input');
    const guessButton = document.getElementById('guess-button');
    const startButton = document.getElementById('start-button');
    const hintButton = document.getElementById('hint-button');
    const skipButton = document.getElementById('skip-button');
    const roundResult = document.getElementById('round-result');

    const celebrities = [
        { name: 'Keanu Reeves', image: 'https://i.imgur.com/xL2sS4V.jpeg' },
        { name: 'Scarlett Johansson', image: 'https://i.imgur.com/D2aW4tW.jpeg' },
        { name: 'Dwayne Johnson', image: 'https://i.imgur.com/C8aA4T9.jpeg' },
        { name: 'Zendaya', image: 'https://i.imgur.com/1yGf2mS.jpeg' },
        { name: 'Tom Holland', image: 'https://i.imgur.com/SSj5aPj.jpeg' }
    ];

    let currentCelebrity;
    let score = 0;
    let timer = 30;
    let timerInterval;
    let difficulty = 10; // Blur em pixels

    function startGame() {
        score = 0;
        timer = 30;
        difficulty = 10;
        updateScore();
        updateTimer();
        nextRound();
        startButton.style.display = 'none';
        guessButton.style.display = 'block';
        hintButton.style.display = 'block';
        skipButton.style.display = 'block';
        hintButton.disabled = false;
        guessInput.disabled = false;
        guessInput.focus();
    }

    function nextRound() {
        currentCelebrity = celebrities[Math.floor(Math.random() * celebrities.length)];
        celebrityImage.src = currentCelebrity.image;
        celebrityImage.style.filter = `blur(${difficulty}px)`;
        resetTimer();
    }

    function checkGuess() {
        if (guessInput.value.toLowerCase() === currentCelebrity.name.toLowerCase()) {
            score++;
            difficulty -= 1; // Aumenta a dificuldade
            if (difficulty < 2) difficulty = 2;
            updateScore();
            guessInput.value = '';
            showResult(true);
            setTimeout(() => {
                hideResult();
                nextRound();
            }, 1500);
        } else {
            showResult(false);
            setTimeout(endGame, 2000);
        }
    }

    function updateScore() {
        scoreDisplay.textContent = score;
    }

    function updateTimer() {
        timerDisplay.textContent = timer;
    }

    function resetTimer() {
        clearInterval(timerInterval);
        timer = 30;
        updateTimer();
        timerInterval = setInterval(() => {
            timer--;
            updateTimer();
            if (timer <= 0) {
                endGame();
            }
        }, 1000);
    }

    function showResult(correct) {
        if (correct) {
            roundResult.textContent = 'CORRETO!';
            roundResult.className = 'correct';
        } else {
            roundResult.textContent = `INCORRETO! O nome era: ${currentCelebrity.name}`;
            roundResult.className = 'incorrect';
        }
    }

    function hideResult() {
        roundResult.textContent = '';
        roundResult.className = '';
    }

    function giveHint() {
        if (timer > 10) {
            timer -= 10;
            updateTimer();
            guessInput.value = currentCelebrity.name[0];
            hintButton.disabled = true;
        }
    }

    function skipRound() {
        if (timer > 5) {
            timer -= 5;
            updateTimer();
            nextRound();
        } else {
            endGame();
        }
    }

    function endGame() {
        clearInterval(timerInterval);
        alert(`Fim de jogo! Sua pontuação final foi: ${score}`);
        startButton.style.display = 'block';
        guessButton.style.display = 'none';
        hintButton.style.display = 'none';
        skipButton.style.display = 'none';
        guessInput.disabled = true;
        guessInput.value = '';
        celebrityImage.style.filter = 'blur(0px)';
    }

    startButton.addEventListener('click', startGame);
    guessButton.addEventListener('click', checkGuess);
    hintButton.addEventListener('click', giveHint);
    skipButton.addEventListener('click', skipRound);
    guessInput.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') {
            checkGuess();
        }
    });

    // Estado inicial
    guessButton.style.display = 'none';
    hintButton.style.display = 'none';
    skipButton.style.display = 'none';
    guessInput.disabled = true;
});
