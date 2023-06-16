function shuffleArray(array) {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
	return array;
}

/////////////////////////////////////////////////////////////////////////////////////////////////
/////    							P U Z Z L E   G A M E 						            /////
/////////////////////////////////////////////////////////////////////////////////////////////////
var puzzleBox;

// Function to create puzzle pieces
function createPuzzlePieces() {
	console.log("createPuzzlePieces is running");
	const imageSrc = selectedImageName.replace("-CROP", ""); // Placeholder image URL /Images/AndreasMunchStudyingAnatomy.jpg
	const puzzleContainer = document.getElementById("puzzle-container");
	const puzzleBox = document.getElementById("puzzleBox");

	// Check if puzzle container is empty
	if (puzzleContainer.innerHTML.trim() !== "") {
		console.log("Puzzle container is not empty. Skipping code execution.");
		return;
	}

	const puzzlePieces = [];

	// Create puzzle piece elements
	for (let i = 0; i < 9; i++) {
		const piece = document.createElement("div");
		piece.className = "puzzle-piece";
		piece.style.backgroundImage = `url(${imageSrc})`;
		piece.style.backgroundPosition = `-${(i % 3) * 100}px -${
			Math.floor(i / 3) * 100
		}px`;
		puzzlePieces.push(piece);
		displayPuzzleBox();
	}

	// Shuffle puzzle pieces
	const shuffledPieces = shuffleArray(puzzlePieces);

	// Append shuffled pieces to the puzzle container
	shuffledPieces.forEach((piece) => {
		puzzleContainer.appendChild(piece);
	});

	console.log(imageSrc + " er bildet som skal vises");
	// puzzleContainer.innerHTML = '<img src="' + imageSrc + '" width="500px" alt="hei">';
}

function displayPuzzleBox() {
	puzzleBox = document.getElementById("puzzleBox");
	console.log("Display puzzlebox kjører");
	puzzleBox.style.display = "block"; // Show the puzzleBox
}
function hidePuzzleBox() {
	puzzleBox = document.getElementById("puzzleBox");
	puzzleBox.style.display = "none"; // Hide the puzzleBox
}

// update
