const cells = document.querySelectorAll(".grid-cell");
let playerSymbol = "X";
let computerSymbol = "O";

// taking turns playing the Game
function takingTurns(e) {}

// Add click event listeners to each cell
cells.forEach((cell) => {
  cell.addEventListener("click", () => {
    takingTurns(e);
  });
});
