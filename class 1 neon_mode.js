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
        pic.innerHTML = '<img src="' + data_uri + '"/>'
        pic.className = "captured-image";
        ss1.innerHTML = "Captured Image"
        ss1.className = "captured-image-header";
        ss1.style.display = "block";
        ss2.style.display = "block";
    });
}




