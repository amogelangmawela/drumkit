/*document.querySelector("button").addEventListener("click", handleClick);

function handleClick() {
  alert("I got clicked!");
}*/

//Detecting button Press
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function() {

    var audio = new Audio("sounds/tom-1.mp3");
    audio.play();
    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);
  });
}

//Detecting keyboard press
//Need to use keydown instead of keypress
//document.addEventListener("keypress", function (event) {
document.addEventListener("keydown", function(event) {
  makeSound(event.key);

  buttonAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
    case 'w':
      var tom1Audio = new Audio("sounds/tom-1.mp3");
      tom1Audio.play();
      break;

    case 'a':
      var tom2Audio = new Audio("sounds/tom-2.mp3");
      tom2Audio.play();
      break;

    case 's':
      var crashAudio = new Audio("sounds/crash.mp3");
      crashAudio.play();
      break;

    case 'd':
      var kickAudio = new Audio("sounds/kick-bass.mp3");
      kickAudio.play();
      break;

    case 'j':
      var snareAudio = new Audio("sounds/snare.mp3");
      snareAudio.play();
      break;

    case 'k':
      var tom3Audio = new Audio("sounds/tom-3.mp3");
      tom3Audio.play();
      break;
    case 'l':
      var tom4Audio = new Audio("sounds/tom-4.mp3");
      tom4Audio.play();
      break;

    default:
      console.log(buttonInnerHTML);
  }
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function() {
    activeButton.classList.remove("pressed"), 100
  })
}
