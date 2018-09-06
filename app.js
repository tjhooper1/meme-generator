let topText = document.querySelector('#topText');
let bottomText = document.querySelector('#bottomText');
let topMemeText = document.querySelector('.top-text');
let bottomMemeText = document.querySelector('.bottom-text');

//when form is submitted, grab the file data

//set the image block src as the file from the input
function test() {
    var image = document.querySelector('#image');
    var file    = document.querySelector('input[type=file]').files[0];
    var reader  = new FileReader();
  
    reader.addEventListener("load", function () {
        image.src = reader.result; 
    }, false);
  
    if (file) {
      reader.readAsDataURL(file);
    }
  }

  function changeTopText(e){
      topText.addEventListener('input', e => {
        console.log(e.target.value);
      });
      
  }
  function changeBottomText(e){
      bottomText.addEventListener('input', e => {
        console.log(e.target.value);
      });
      
  }

  changeTopText();
  changeBottomText();

  
