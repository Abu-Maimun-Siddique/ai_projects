var speechrecognition = window.webkitSpeechRecognition;
var recognition = new speechrecognition();
var box = document.getElementById("box");
var chead = document.getElementById("chead");
var pic = document.getElementById("pic");
var camera = document.getElementById("camera");

function startrec(){
    recognition.start();
    box.innerText = "Listening...";
}

recognition.onresult = function(event){
    console.log(event.results[0][0].transcript);
    var voicein = event.results[0][0].transcript;
    box.innerText = voicein.toLowerCase();
    voicein = voicein.toLowerCase();

    if(voicein.includes('selfie please')){
        Webcam.attach("camera");
        camera.className = "camera";
        var syn = window.speechSynthesis;
        var want = "selfie coming on 1 2 3"
        var utter = new SpeechSynthesisUtterance(want);
        syn.speak(utter);
        setTimeout(function(){
            capture();
        },3000)
    }

}

function capture(){
    Webcam.snap(function(data_url){
        pic.innerHTML = '<img src="'+data_url+'" id="selfie">';

    })
    chead.innerText = "Captured Selfie";
    chead.className = "chead";
    pic.className = "pic";
}

