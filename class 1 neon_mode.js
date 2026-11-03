Webcam.set({
    width: 413,
    height: 310,
    image_format: "jpeg",
    jpeg_quality: 90

});

Webcam.attach("camera");

Webcam.on("error", function(error){
    console.error("Webcam error:", error);
    document.getElementById("camera").innerHTML= "Error accessing webcam: " + error.message;
});

var ss1 = document.querySelector("#ss1");
var pic = document.querySelector("#pic");
var ss2 = document.querySelector("#ss2");

ss1.style.display = "none";
ss2.style.display = "none";

function getsnap() {
    Webcam.snap(function(data_uri) {
        pic.innerHTML = '<img src="' + data_uri + '"id="selfie"/>'        
        pic.className = "captured-image";
        ss1.innerHTML = "Captured Image"
        ss1.className = "captured-image-header";
        ss1.style.display = "block";
        ss2.style.display = "block";
    });
}

var model = 'https://teachablemachine.withgoogle.com/models/v_sl95BzE/model.json';
var classifier;

function predict() {
    console.log("Model is loaded!");
    var img = document.getElementById("selfie");
    classifier.classify(img, gotResult);
}

function setup() {
    classifier = ml5.imageClassifier(model, predict);
}

function gotResult(error, result) {
    if (error) {
        console.log("Error:", error);
        return;
    }
    var lb = result[0].label;
    var conf = result[0].confidence;

    console.log("Label:", lb);
    console.log("Confidence:", conf);

    label.innerHTML = "This is a " + lb;
    acc.innerHTML = "Confidence: " + (conf * 100).toFixed(2) + "%";
}



