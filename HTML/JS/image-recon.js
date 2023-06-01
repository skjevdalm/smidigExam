/*
function checkFileNames() {
    // Get the values from the input fields
    var filename1 = document.getElementById('filename1').value;
    var filename2 = document.getElementById('filename2').value;

    // Check if the filenames are equal
    if (filename1 === filename2) {
        document.getElementById('result').textContent = "The filenames are equal.";
    } else {
        document.getElementById('result').textContent = "The filenames are not equal.";
    }
}
*/



/*
var imagesCrop = [
    { 
    id: '1.2', 
    id: '2.2',
    id: '3.2'
}

]

    var currentImage 
    var correctImage

  function displayImage() {
    //Get random index from imagesCrop array
    var randomIndex = Math.floor.random() * imagesCrop

    //Get the random image
    var randomImage = imagesCrop[randomIndex];

    var imageElement = document.getElementById()
  }
  */

  var images = [
    { id: '1.1', duplicateId: '1.2' },
    { id: '2.1', duplicateId: '2.2' },
    { id: '3.1', duplicateId: '3.2' }
  ];
  
  function checkGuess() {
    var guessInput = document.getElementById('guessInput');
    var guess = guessInput.value;
  
    var result = document.getElementById('result');
  
    // Find the current image being displayed
    var currentImage = images.find(function(image) {
      return document.getElementById(image.id).style.display !== 'none';
    });
  
    // Check if the guess is correct
    if (guess === currentImage.duplicateId) {
      result.textContent = 'Correct!';
    } else {
      result.textContent = 'Wrong!';
    }

    // Clear the input
    guessInput.value = '';

    // Show the next image
    var currentIndex = images.indexOf(currentImage);
    var nextIndex = (currentIndex + 1) % images.length;
    document.getElementById(images[nextIndex].id).style.display = 'block';
    document.getElementById(images[currentIndex].id).style.display = 'none';
  }  

  // Show the first image initially
document.getElementById(images[0].id).style.display = 'block';

 // Automatically display the first image on page load
window.addEventListener('load', function() {
    document.getElementById(images[0].id).style.display = 'block';
  });
  //heiheihei