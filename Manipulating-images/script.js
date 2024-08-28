// Function to set new paragraph text
function setParagraphText() {
    var paragraph = document.getElementById('myParagraph');
    var newTextInput = document.getElementById('newTextInput');
    var output = document.getElementById('output');
    var newText = newTextInput.value;
  
    if (newText.trim() === '') {
      output.textContent = 'Please enter some text to set!';
    } else {
      paragraph.textContent = newText;
      output.textContent = 'Paragraph text has been updated!';
      newTextInput.value = ''; // Clear the input field
    }
  }
  
  // Function to toggle the image source
  function toggleImage() {
    var image = document.getElementById('myImage');
    var output = document.getElementById('output');
  
    if (image.src.includes('/images/uncle.png')) {
      image.src = './images/uncle-2.png';
      output.textContent = 'Image has been changed to the second image!';
    } else {
      image.src = './images/uncle.ppng';
      output.textContent = 'Image has been changed to the first image!';
    }
  }
  
  // Function to hide the image
  function hideImage() {
    var image = document.getElementById('myImage');
    var output = document.getElementById('output');
    image.style.display = 'none';
    output.textContent = 'Image is now hidden!';
  }
  
  // Function to show the image
  function showImage() {
    var image = document.getElementById('myImage');
    var output = document.getElementById('output');
    image.style.display = 'block';
    output.textContent = 'Image is now visible!';
  }