const cells = document.querySelectorAll('td');
let currentPlayer = 'X';
let gameStatus = 'inProgress';

cells.forEach(cell => {
    cell.addEventListener('click', handleClick);
});

function handleClick(event) {
    const cell = event.target;
    if (cell.textContent || gameStatus !== 'inProgress') {
        return;
    }
    cell.textContent = currentPlayer;
    cell.classList.add(currentPlayer.toLowerCase());
    checkWin();
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

function checkWin() {
    const winPatterns = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (let i = 0; i < winPatterns.length; i++) {
        const pattern = winPatterns[i];
        if (cells[pattern[0]].textContent &&
            cells[pattern[0]].textContent === cells[pattern[1]].textContent &&
            cells[pattern[1]].textContent === cells[pattern[2]].textContent) {
            cells[pattern[0]].classList.add('win');
            cells[pattern[1]].classList.add('win');
            cells[pattern[2]].classList.add('win');
            gameStatus = 'over';
            alert(`${cells[pattern[0]].textContent} gana!`);
            return;
        }
    }
    if (Array.from(cells).every(cell => cell.textContent)) {
        gameStatus = 'over';
        alert('Empate!');
    }
}
