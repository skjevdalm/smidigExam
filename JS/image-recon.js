var imageList = [
	"AndreasMunchStudyingAnatomy-crop.jpg",
	"AndreasMunchStudyingAnatomy.jpg",
	"BathingGirls-crop.jpg",
	"BathingGirls.jpg",
	"BathingMan-crop.jpg",
	"BathingMan.jpg",
	"BathingMenOnRocks-crop.jpg",
	"BathingMenOnRocks.jpg",
	"BricklayerAtWork-crop.jpg",
	"BricklayerAtWork.jpg",
	"ChildrenandDucks-crop.jpg",
	"ChildrenandDucks.jpg",
	"ConsolationInTheForest-crop.jpg",
	"ConsolationInTheForest.jpg",
	"DiggingMenWithHorseAndCart-crop.jpg",
	"DiggingMenWithHorseAndCart.jpg",
	"FivePuppiesOnThecarpet-crop.jpg",
	"FivePuppiesOnTheCarpet.jpg",
	"ForestInSnow-crop.jpg",
	"ForestInSnow.jpg",
	"FromMaridalen-crop.jpg",
	"FromMaridalen.jpg",
	"HenrikIbsen-crop.jpg",
	"HenrikIbsen.jpg",
	"image1.jpg",
	"image1_duplicate.jpg",
	"image2.jpg",
	"image2_duplicate.jpg",
	"image3.jpg",
	"image3_duplicate.jpg",
	"inTheKennel-crop.jpg",
	"InTheKennel.jpg",
	"JealousyInTheGarden-crop.jpg",
	"JealousyInTheGarden.jpg",
	"KarenBjølstadInTheRockingChair-crop.jpg",
	"KarenBjølstadInTheRockingChair.jpg",
	"KarlJohanintheRain-crop.jpg",
	"KarlJohanintheRain.jpg",
	"LifeLeftPart-crop.jpg",
	"LifeLeftPart.jpg",
	"RecliningNudeOnTheRocks-crop.jpg",
	"RecliningNudeonTheRocks.jpg",
	"RolfHansen-crop.jpg",
	"RolfHansen.jpg",
	"SelfPortrait-crop.jpg",
	"SelfPortrait.jpg",
	"StarryNight-crop.jpg",
	"StarryNight.jpg",
	"theFight-crop.jpg",
	"TheFight.jpg",
	"TheGirlFromNordland-crop.jpg",
	"TheGirlFromNordland.jpg",
	"TheGirlsOnTheBridge-crop.jpg",
	"TheGirlsOnTheBridge.jpg",
	"TheMurderer-crop.jpg",
	"TheMurderer.jpg",
	"TreesByTheSea-crop.jpg",
	"TreesByTheSea.jpg",
	"TwoWomenByTheVerandaSteps-crop.jpg",
	"TwoWomenByTheVerandaSteps.jpg",
	"TwoWomenIntheGarden-crop.jpg",
	"TwoWomenInTheGarden.jpg",
	"UninvitedGuests-crop.jpg",
	"UninvitedGuests.jpg",
	"WavesAgainstTheShore-crop.jpg",
	"WavesAgainstTheShore.jpg",
];

var imagePath = "../../../Images/"; // Modify this path according to your directory structure

var fullImagePath = imageList.map(function (imageName) {
	return imagePath + imageName;
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
