let gameDone = false;




let board = 
    [
        ["","",""],
        ["","",""],
        ["","",""]
    ];

    let currentPlayer = "X";

    function makeMove(row, col) {
        if (board[row][col] === "") {
            board[row][col] = currentPlayer;

            displayBoard();

            if(checkWin(currentPlayer)) {
                const messageDiv = document.querySelector("#message");
                messageDiv.textContent = currentPlayer + " has won!";
                gameDone = true;
                // resetGame();
                return;
            };

            if (checkDraw()) {
                const messageDiv = document.querySelector("#message");
                messageDiv.textContent = "Draw!";
                gameDone = true;
                // resetGame();
                return;
            }


            currentPlayer = (currentPlayer === "X") ? "O" : "X";

        }
    }

    function checkWin(player) {
        for (let row = 0; row < 3; row++) {
            if (board[row][0] === player && board[row][1] === player && board[row][2] === player) {
                return true;
            }
        }
        for (let col = 0; col < 3; col++) {
            if (board[0][col] === player && board[1][col] === player && board[2][col] === player) {
                return true;
            }
        }
        if (board[0][0] === player && board[1][1] === player && board[2][2] === player) {
            return true;
        }
        if (board[0][2] === player && board[1][1] === player && board[2][0] === player) {
            return true;
        }
        return false;
        }

    function checkDraw() {
        for(let row = 0; row < 3; row++) {
            for(let col = 0; col < 3; col++) {  
                if (board[row][col] === "") {
                    return false;
                }
            }
        }
        return true;
    }



    function displayBoard() {
        const boardContainer = document.querySelector("#board");
        boardContainer.innerHTML = "";

        for (let row = 0; row < 3; row++) {
            for (let col = 0; col < 3; col++) {
                const cell = document.createElement("div");
                cell.classList.add("cell");
                cell.textContent = board[row][col];

                cell.addEventListener("click", function() { 
                    if (gameDone === true)
                    {
                        return;
                    }
                    makeMove(row, col);
                });

                boardContainer.appendChild(cell);
            }
        }
    }


const resetButton = document.querySelector("#reset-button");
resetButton.addEventListener("click", resetGameAndPage);

function resetGameAndPage() {
    resetGame();
    location.reload();
}

function resetGame() {
    board = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
    ];

    currentPlayer = "X";
    displayBoard();

    // Clear the message div
    const messageDiv = document.querySelector("#message");
    messageDiv.textContent = "";
}

displayBoard();


