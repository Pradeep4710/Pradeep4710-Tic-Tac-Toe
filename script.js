document.addEventListener("DOMContentLoaded", function() {
    let boxes = document.querySelectorAll(".box");
    let resetButton = document.getElementById("reset-button");
    let turno = true;
    let count = 0;
    let gameEnded = false;

    const winPatterns = [
        [0,1,2],
        [0,3,6],
        [0,4,8],
        [1,4,7],
        [2,5,8],
        [2,4,6],
        [3,4,5],
        [6,7,8]
    ];

    boxes.forEach((box) => {
        box.addEventListener("click", () => {
            if (!gameEnded && !box.innerText) {
                if(turno) {
                    box.innerText = "O";
                    turno = false;
                } else {
                    box.innerText = "X";
                    turno = true;
                }
                count++;
                box.disabled = true;

                let isWinner = checkWinner();
                if (isWinner) {
                    alert("Winner is: " + isWinner);
                    gameEnded = true;
                } else if (count === 9) {
                    alert("It's a tie!");
                    gameEnded = true;
                }
            }
        });
    });

    resetButton.addEventListener("click", () => {
        boxes.forEach((box) => {
            box.innerText = "";
            box.disabled = false;
        });
        turno = true;
        count = 0;
        gameEnded = false;
    });

    function checkWinner() {
        for (let pattern of winPatterns) {
            let [a, b, c] = pattern;
            if (
                boxes[a].innerText &&
                boxes[a].innerText === boxes[b].innerText &&
                boxes[a].innerText === boxes[c].innerText
            ) {
                return boxes[a].innerText;
            }
        }
        return null;
    }
});
