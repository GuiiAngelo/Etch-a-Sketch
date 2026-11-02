
const gridContainer = document.querySelector("#grid-container");
const resizeButton = document.querySelector("#resize-button");
const clearButton = document.querySelector("#clear-button");

const GRID_SIZE = 480;
const MAX_SQUARES = 100;

function createGrid(numberOfSquares) {
    gridContainer.innerHTML = "";

    const squareSize = 100 / numberOfSquares;

    for (let i = 0; i < numberOfSquares * numberOfSquares; i++) {
        const square = document.createElement("div");

        square.classList.add("grid-square");

        square.style.width = `${squareSize}%`;
        square.style.height = `${squareSize}%`;

        square.addEventListener("mouseenter", () => {
            square.style.backgroundColor = "black";
        });

        gridContainer.appendChild(square);
    }
}

resizeButton.addEventListener("click", () => {
    const input = prompt(
        "Quantos quadrados queres por lado? (1-100)"
    );

    if (input === null || input.trim() === "") {
        return;
    }

    const numberOfSquares = Number(input);

    if (
        !Number.isInteger(numberOfSquares) ||
        numberOfSquares < 1 ||
        numberOfSquares > MAX_SQUARES
    ) {
        alert("Introduz um número inteiro entre 1 e 100.");
        return;
    }

    createGrid(numberOfSquares);
});

clearButton.addEventListener("click", () => {
    createGrid(getCurrentGridSize());
});

function getCurrentGridSize() {
    const squares = gridContainer.children.length;
    return Math.sqrt(squares);
}

createGrid(16);
