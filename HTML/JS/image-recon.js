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
