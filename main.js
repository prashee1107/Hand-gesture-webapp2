https://teachablemachine.withgoogle.com/models/IBcYLA3S8/
Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:90  
  });
  camera= document.getElementById("camera");
  Webcam.attach(camera);

  Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:90  
  });
 result= document.getElementById("result");
  Webcam.attach(result);

  function takesnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img id='captured_image' src="+data_uri+">";
    });
 }
 console.log("ml5 version", ml5.version);
 classifer = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/IBcYLA3S8/model.json",modelLoaded);

 function modelLoaded(){
   console.log("Model Loaded!")
}