let topText = document.querySelector('#topText');
let bottomText = document.querySelector('#bottomText');
let topMemeText = document.querySelector('.top-text');
let bottomMemeText = document.querySelector('.bottom-text');
let image = document.querySelector('#image');
let download = document.querySelector('#download');
//when form is submitted, grab the file data

//set the image block src as the file from the input
function test() {
    
    var file    = document.querySelector('input[type=file]').files[0];
    var reader  = new FileReader();
  
    reader.addEventListener("load", function () {
        image.style.backgroundImage = "url("+ reader.result +")";
        download.href = reader.result;
    }, false);
  
    if (file) {
      reader.readAsDataURL(file);
    }
  }

  function changeTopText(e){
      topText.addEventListener('input', e => {
          topMemeText.textContent = (e.target.value).toUpperCase();
          console.log(e.target.value);
      });
      
  }
  function changeBottomText(e){
      bottomText.addEventListener('input', e => {
        bottomMemeText.textContent = (e.target.value).toUpperCase();
        console.log(e.target.value);
      });
      
  }

  changeTopText();
  changeBottomText();

