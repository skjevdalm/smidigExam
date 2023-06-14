// Function to create puzzle pieces
function createPuzzlePieces() {
	console.log("createPuzzlePieces is running");
	const imageSrc = selectedImageName.replace("-CROP", ""); // Placeholder image URL /Images/AndreasMunchStudyingAnatomy.jpg
	puzzleContainer = document.getElementById("puzzle-container");
	puzzleBox = document.getElementById("puzzleBox");

	// Check if puzzle container is empty
	if (puzzleContainer.innerHTML.trim() !== "") {
		console.log("Puzzle container is not empty. Skipping code execution.");
		puzzleContainer.style.display = "block";
		puzzleBox.style.display = "block";
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
	}

	displayPuzzleBox(); // Show the puzzle box

	// Shuffle puzzle pieces
	const shuffledPieces = shuffleArray(puzzlePieces);

	// Append shuffled pieces to the puzzle container
	shuffledPieces.forEach((piece) => {
		puzzleContainer.appendChild(piece);
	});

	puzzleContainer.style.display = "block"; // Show the puzzle container
	puzzleBox.style.display = "block"; // Show the puzzle box

	console.log(imageSrc);
}
