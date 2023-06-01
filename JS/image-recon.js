var imageList = [
	"AndreasMunchStudyingAnatomy-crop",
	"AndreasMunchStudyingAnatomy",
	"BathingGirls-crop",
	"BathingGirls",
	"BathingMan-crop",
	"BathingMan",
	"BathingMenOnRocks-crop",
	"BathingMenOnRocks",
	"BricklayerAtWork-crop",
	"BricklayerAtWork",
	"ChildrenandDucks-crop",
	"ChildrenandDucks",
	"ConsolationInTheForest-crop",
	"ConsolationInTheForest",
	"DiggingMenWithHorseAndCart-crop",
	"DiggingMenWithHorseAndCart",
	"FivePuppiesOnThecarpet-crop",
	"FivePuppiesOnTheCarpet",
	"ForestInSnow-crop",
	"ForestInSnow",
	"FromMaridalen-crop",
	"FromMaridalen",
	"HenrikIbsen-crop",
	"HenrikIbsen",
	"image1",
	"image1_duplicate",
	"image2",
	"image2_duplicate",
	"image3",
	"image3_duplicate",
	"inTheKennel-crop",
	"InTheKennel",
	"JealousyInTheGarden-crop",
	"JealousyInTheGarden",
	"KarenBjølstadInTheRockingChair-crop",
	"KarenBjølstadInTheRockingChair",
	"KarlJohanintheRain-crop",
	"KarlJohanintheRain",
	"LifeLeftPart-crop",
	"LifeLeftPart",
	"RecliningNudeOnTheRocks-crop",
	"RecliningNudeonTheRocks",
	"RolfHansen-crop",
	"RolfHansen",
	"SelfPortrait-crop",
	"SelfPortrait",
	"StarryNight-crop",
	"StarryNight",
	"theFight-crop",
	"TheFight",
	"TheGirlFromNordland-crop",
	"TheGirlFromNordland",
	"TheGirlsOnTheBridge-crop",
	"TheGirlsOnTheBridge",
	"TheMurderer-crop",
	"TheMurderer",
	"TreesByTheSea-crop",
	"TreesByTheSea",
	"TwoWomenByTheVerandaSteps-crop",
	"TwoWomenByTheVerandaSteps",
	"TwoWomenIntheGarden-crop",
	"TwoWomenInTheGarden",
	"UninvitedGuests-crop",
	"UninvitedGuests",
	"WavesAgainstTheShore-crop",
	"WavesAgainstTheShore",
];

var imagePath = "../../../Images/"; // Modify this path according to your directory structure
var jpg = ".jpg";
var fullImagePath = imageList.map(function (imageName) {
	return imagePath + imageName + jpg;
});

function displayRandomImage() {
	var randomIndex = Math.floor(Math.random() * imageList.length);
	var randomImagePath = fullImagePath[randomIndex];
	var imageElement = document.createElement("img");
	imageElement.src = randomImagePath;
	imageElement.style.width = "300px"; // Set the width of the image
	imageElement.style.height = "300px"; // Set the height of the image
	var imageContainer = document.getElementById("Container1");
	imageContainer.innerHTML = "";
	imageContainer.appendChild(imageElement);
}

//var currentPic
//currentPic = "Hei"
function martinFunctionTest() {
	//var divContent = document.getElementById("testDiv");
	divContent.innerHTML = '<img id="2.1" src="../Images/image2.jpg" alt="Image 2">';
}

function getRandImg() {
	var randomIndexNum = Math.floor(Math.random() * imageList.length);
	var randomImageName = imageList[randomIndexNum];
	var imagePathMartin = "..images/" + randomImageName;

	//alert(imagePathMartin);

	divContent.innerHTML = "<img>" + imagePathMartin + "<img>";

	//var divContent = document.getElementById("testDiv");

	//var imgElement = document.createElement("img");

	//imageElement.src = imagePath;
}
