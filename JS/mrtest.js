var puzzleContainer = document.getElementById("puzzle-container");
var puzzleBox = document.getElementById("puzzleBox");

function isPuzzleBoxEmpty() {
	if (puzzleContainer.innerHTML.trim() !== "") {
        console.log("Empty");
		puzzleBox.style.display = "block"; // Show the puzzleBox
	} else {
        console.log("not empty");
		puzzleBox.style.display = "none"; // Hide the puzzleBox
	}
}