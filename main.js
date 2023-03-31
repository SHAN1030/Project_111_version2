function check()
{
    //navigator.mediaDevices.getUserMedia({image:true});
    classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/Ky6ABJJhe/model.json",modelReady);  
}

Webcam.set({
    width:350,
    height:300,
    image_format:'jpg',
    jpg_quality:90
    });

camera = document.getElementById("camera");
Webcam.attach(camera);

function take_snapshot(){
Webcam.snap(function(data_uri){
document.getElementById('result').innerHTML = '<img id = "Captured_image" src = "'+data_uri+'">';
    });
    }

function modelReady(){
        console.log("MODEL IS LOADED!!");
    }