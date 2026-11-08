var speechrecognition = window.webkitSpeechRecognition;
var recognition = new speechrecognition();
var box = document.getElementById("box");
var chead = document.getElementById("chead");
var pic = document.getElementById("pic");

function startrec(){
    recognition.start();
    box.innerText = "Listening...";
}