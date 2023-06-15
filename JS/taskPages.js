var floor1List = [
	"FromMaridalen",
	"InTheKennel",
	"JealousyInTheGarden",
	"KarenBjølstadInTheRockingChair",
	"KarlJohanintheRain",
];

var floor2List = [
	"AndreasMunchStudyingAnatomy",
	"BathingGirls",
	"BathingMan",
	"BathingMenOnRocks",
	"BricklayerAtWork",
];

var floor3List = [
	"ChildrenandDucks",
	"ConsolationInTheForest",
	"DiggingMenWithHorseAndCart",
	"FivePuppiesOnTheCarpet",
	"ForestInSnow",
];

var floor4List = [
	"LifeLeftPart",
	"RecliningNudeonTheRocks",
	"TheFight",
	"TheGirlFromNordland",
	"TheGirlsOnTheBridge",
];

var floor5List = [
	"TheMurderer",
	"TreesByTheSea",
	"TwoWomenByTheVerandaSteps",
	"TwoWomenInTheGarden",
	"UninvitedGuests",
	"WavesAgainstTheShore",
];

var floor1ListCrop = [
	"FromMaridalen-crop",
	"inTheKennel-crop",
	"JealousyInTheGarden-crop",
	"KarenBjølstadInTheRockingChair-crop",
	"KarlJohanintheRain-crop",
];

var floor2ListCrop = [
	"AndreasMunchStudyingAnatomy-crop",
	"BathingGirls-crop",
	"BathingMan-crop",
	"BathingMenOnRocks-crop",
	"BricklayerAtWork-crop",
];

var floor3ListCrop = [
	"ChildrenandDucks-crop",
	"ConsolationInTheForest-crop",
	"DiggingMenWithHorseAndCart-crop",
	"FivePuppiesOnThecarpet-crop",
	"ForestInSnow-crop",
];

var floor4ListCrop = [
	"LifeLeftPart-crop",
	"RecliningNudeOnTheRocks-crop",
	"TheFight-crop",
	"TheGirlFromNordland-crop",
	"TheGirlsOnTheBridge-crop",
];

var floor5ListCrop = [
	"TheMurderer-crop",
	"TreesByTheSea-crop",
	"TwoWomenByTheVerandaSteps-crop",
	"TwoWomenIntheGarden-crop",
	"UninvitedGuests-crop",
	"WavesAgainstTheShore-crop",
];

//Declaring variables globally
var selectElement;
var selectedImageName;
var container;
var imageElement;
var userGuess;
var imgPath;
var resultImgPath;
var resultImgTag;
var resultDiv;
var resultImg;
var resultImgPathMod;
var indexNumber;
var dropdown;
var resultText;
var selectedFloor;
var currentFloorArray;
var quiz;
var incorrectResultText;

function selectFloor() {
	selectedFloor = document.getElementById("btnSelect");

	if (selectedFloor.value === "Floor1") {
		currentFloorArray = floor1List;
	} else if (selectedFloor.value === "Floor2") {
		currentFloorArray = floor2List;
	} else if (selectedFloor.value === "Floor3") {
		currentFloorArray = floor3List;
	} else if (selectedFloor.value === "Floor4") {
		currentFloorArray = floor4List;
	} else if (selectedFloor.value === "Floor5") {
		currentFloorArray = floor5List;
	} else {
		alert("Somethings wrong mate");
	}
	generateSelectedImage();
}

//Retrieves and displays the image based off of which task the user has selected
function generateSelectedImage() {
	selectElement = document.getElementById("image-select");
	selectedImageName = selectElement.value.toUpperCase();

	container = document.getElementById("image-container");
	resultDiv = document.getElementById("resultDiv");
	resultText = document.getElementById("resultText");
	var puzzleContainer = document.getElementById("puzzle-container");
	container.innerHTML = "";
	resultDiv.innerHTML = "";
	resultText.innerHTML = "";
	puzzleContainer.innerHTML = "";

	if (selectedImageName !== "") {
		imageElement = document.createElement("img");
		imageElement.src = selectedImageName;
		container.appendChild(imageElement);
	}
	//console.log(selectElement.value);
	console.log(selectedImageName);

	assignIndex(); //assignIndex is initiated as soon as the user clicks display image
}

//Function that compares the user input to the correct answer
function checkGuess() {
	userGuess = document.getElementById("searchInput").value.toUpperCase(); // Get the user guess from the searchInput field and make it uppercase
	var userGuessString = userGuess.toString(); // Convert the user guess to a string
	//var userGuessStringUpperNoSpace = userGuessString.replace(/\s/g, ""); // Remove all spaces from the user guess
	resultImgDiv = document.getElementById("resultImgDiv"); // Get the result image Div element
	result = document.getElementById("resultDiv"); // Get the result container Div

	imgPath = "/Images/";
	//in order to compare the userguess with the correct answer, it is converted to uppercase, all spaces are removed
	//and -CROP.JPG is added at the end.
	var userGuessModified =
		"/IMAGES/" + userGuess.toUpperCase().replace(/\s/g, "") + "-CROP.JPG";
	/*
	console.log(selectElement.value);
	console.log(userGuessModified);
	console.log(typeof userGuessModified);
	console.log(typeof selectElement.value);
    */
	//resultParagraph = document.getElementById("resultParagraph"); // Create a paragraph element
	if (userGuessModified == selectElement.value.toUpperCase()) {
		// check if the user guess is the same as the image path (in an attempt to be case-insensitive)
		resultImgPath = ".." + selectElement.value;
		resultImgPathMod = resultImgPath.replace("-CROP", "");
		//alert(resultImgPathMod);
		correctResult();
	} else {
		incorrectResult();
	}
}

function correctResult() {
	resultDiv = document.getElementById("resultDiv");
	resultText = document.getElementById("resultText");
	resultImgPath = "/Images/" + userGuess + ".JPG";
	//alert("ResultImgPath:" + resultImgPath);
	resultImgTag = '<img src="' + resultImgPath + '" width="500px" alt="hei">'; //The uncropped image is displayed
	resultDiv.innerHTML = resultImgTag;
	resultText.innerHTML =
		'<h3	data-translation-en="Correct answer," data-translation-no="Riktig svar">Correct answer!</h3>\n<h3 data-translation-en="Move on the the next task!"data-translation-no="Gå videre til neste oppgave">Move on the the next task!</h3>';
	+toggleLanguage();
	console.log(resultImgPath);
	updateResultStyleBlock();
	scrollPage();
}

function incorrectResult() {
	incorrectResultText = document.getElementById("incorrectResultText");
	incorrectResultText.innerHTML =
		'<h3 data-translation-en="Incorrect answer,"data-translation-no="Feil svar,">Incorrect answer,</h3>\n<h3	data-translation-en="Maybe try to solve this puzzle!"data-translation-no="Prøv å løse dette puslespillet!">Maybe try to solve this puzzle!</h3>';
	+toggleLanguage();
	createPuzzlePieces();
	scrollPage();
}

function assignIndex() {
	//assigns an indexnumber based off of which task is selected,
	//in order to retrieve and display the uncropped image when the user is correct
	if (
		selectElement.value === "/Images/FromMaridalen-crop.jpg" ||
		"/Images/AndreasMunchStudyingAnatomy-crop" ||
		"/Images/ChildrenandDucks-crop" ||
		"/Images/LifeLeftPart-crop" ||
		"/Images/TheMurderer-crop.jpg"
	) {
		indexNumber = 0;
	} else if (
		selectElement.value === "/Images/inTheKennel-crop.jpg" ||
		"/Images/BathingGirls-crop.jpg" ||
		"/Images/ConsolationInTheForest-crop.jpg" ||
		"/Images/RecliningNudeOnTheRocks-crop.jpg" ||
		"/Images/TreesByTheSea-crop.jpg"
	) {
		indexNumber = 1;
	} else if (
		selectElement.value === "/Images/JealousyInTheGarden-crop.jpg" ||
		"/Images/BathingMan-crop.jpg" ||
		"/Images/DiggingMenWithHorseAndCart-crop.jpg" ||
		"/Images/TheFight-crop.jpg" ||
		"/Images/TwoWomenByTheVerandaSteps-crop.jpg"
	) {
		indexNumber = 2;
	} else if (
		selectElement.value ===
			"/Images/KarenBjølstadInTheRockingChair-crop.jpg" ||
		"/Images/BathingMenOnRocks-crop.jpg" ||
		"/Images/FivePuppiesOnThecarpet-crop.jpg" ||
		"/Images/TheGirlFromNordland-crop.jpg" ||
		"/Images/TwoWomenIntheGarden-crop.jpg"
	) {
		indexNumber = 3;
	} else if (
		selectElement.value === "/Images/KarlJohanintheRain-crop.jpg" ||
		"/Images/BricklayerAtWork-crop.jpg" ||
		"/Images/ForestInSnow-crop.jpg" ||
		"/Images/TheGirlsOnTheBridge-crop.jpg" ||
		"/Images/UninvitedGuests-crop.jpg"
	) {
		indexNumber = 4;
	} else if (
		selectElement.value === "/Images/WavesAgainstTheShore-crop.jpg"
	) {
		indexNumber = 5;
	} else {
		alert("Please select a task!");
	}
}

////////////////////////////////SEARCH FUNCTION/////////////////////////////////////////

function generateDropdownItems() {
	var dropdown = document.getElementById("dropdown");
	dropdown.innerHTML = ""; // Clear previous results

	var fragment = document.createDocumentFragment(); // Create a DocumentFragment to hold the currentFloorArray

	for (var i = 0; i < currentFloorArray.length; i++) {
		var removeWords = /(-crop|.jpg)/gi;
		var item = currentFloorArray[i].replace(removeWords, ""); // Get the current item in the currentFloorArray and remove the "-crop" part
		var link = document.createElement("a"); // Create an <a> element
		link.href = "#"; // Set the href attribute to "#"
		link.innerText = item; // Set the text content of the link to the current item
		link.addEventListener("click", function (e) {
			// Add a click event listener to the link
			e.preventDefault(); // Prevent the default link behavior
			var selectedItem = this.innerText; // Get the selected item
			document.getElementById("searchInput").value = selectedItem; // Set the search input value
			filterItems(); // Filter the items based on the selected value
		});
		fragment.appendChild(link); // Append the link to the DocumentFragment
	}

	dropdown.appendChild(fragment); // Append the DocumentFragment to the dropdown
}

// Function to filter the items based on search input

function filterItems() {
	var input, filter, dropdown, items, a, i; // Declare variables
	input = document.getElementById("searchInput"); // Get the input element

	if (!input) {
		// Check if the input element exists
		console.error("searchInput element not found"); // Log an error message
		return;
	}

	filter = input.value.toUpperCase(); // Convert the input value to uppercase
	dropdown = document.getElementById("dropdown"); // Get the dropdown element

	if (!dropdown) {
		console.error("dropdown element not found"); // Log an error message
		return;
	}

	items = dropdown.getElementsByTagName("a"); // Get all <a> elements inside the dropdown

	for (i = 0; i < items.length; i++) {
		// Loop through all <a> elements
		a = items[i];

		if (!a) {
			console.error("Invalid item at index", i); // Log an error message
			continue;
		}

		if (a.innerText && a.innerText.toUpperCase().indexOf(filter) > -1) {
			// If the item contains the search term, show it
			a.style.display = ""; // Show the item
		} else {
			a.style.display = "none"; // Hide the item
		}
	}

	if (filter.length > 0) {
		dropdown.classList.add("show"); // Show the dropdown
	} else {
		dropdown.classList.remove("show"); // Hide the dropdown
	}
}

// Function to select an item
function selectItem(item) {
	document.getElementById("searchInput").value = item;
	document.getElementById("dropdown").classList.remove("show");
}

// Close the dropdown when clicking outside
window.onclick = function (event) {
	if (!event.target.matches("#searchInput")) {
		var dropdowns = document.getElementsByClassName("dropdown-content");
		for (var i = 0; i < dropdowns.length; i++) {
			var openDropdown = dropdowns[i];
			if (openDropdown.classList.contains("show")) {
				openDropdown.classList.remove("show");
			}
		}
	}
};

// Add event listener to the search input field
document.getElementById("searchInput").addEventListener("keyup", filterItems);
// Get the search input, dropdown, and dropdown content
var searchInput = document.getElementById("searchInput");
var dropdown = document.getElementById("dropdown");
var dropdownContent = document.getElementById("dropdownContent");

// Function to show/hide the dropdown content
function toggleDropdown() {
	dropdownContent.classList.toggle("show");
}

// Event listener for search input focus/blur
searchInput.addEventListener("focus", toggleDropdown);
searchInput.addEventListener("blur", toggleDropdown);

/////////////////from Discord
function updateResultStyleBlock() {
	var resultDiv = document.getElementById("resultDiv");
	var resultDivContainer = document.getElementById("resultDivContainerID");
	var resultText = document.getElementById("resultText");
	var quiz = document.getElementById("quiz");

	if (resultDiv && resultDivContainer && resultText) {
		resultDiv.style.display = "block";
		resultDivContainer.style.display = "block";
		resultText.style.display = "block";
		quiz.style.display = "block";
	}
}

function updateQuizStyleNone() {
	var quiz = document.getElementById("quiz");
	var puzzleBox = document.getElementById("puzzleBox");
	var puzzleBoxContainer = document.getElementById("puzzle-container");

	if (quiz && puzzleBox && puzzleBoxContainer) {
		quiz.style.display = "none";
		puzzleBox.style.display = "none";
		puzzleBoxContainer.style.display = "none";
	}
}

function updateResultStyleNone() {
	var resultDiv = document.getElementById("resultDiv");
	var resultDivContainer = document.getElementById("resultDivContainerID");
	var resultText = document.getElementById("resultText");
	var quiz = document.getElementById("quiz");
	var puzzleBox = document.getElementById("puzzleBox");

	if (resultDiv && resultDivContainer && resultText && quiz) {
		resultDiv.style.display = "none";
		resultDivContainer.style.display = "none";
		resultText.style.display = "none";
		quiz.style.display = "none";
		puzzleBox.style.display = "none";
	}
}

function scrollPage() {
	window.scrollTo({
		top: document.body.scrollHeight,
		behavior: "smooth",
	});
}
