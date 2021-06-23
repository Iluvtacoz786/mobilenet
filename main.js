Webcam.set({
    width: 300,
    height: 300,
    image_format: "png",
    png_quality:90

})
Webcam.attach("#camera");

function capture(){
    Webcam.snap(function(URI){
        document.getElementById("snapshot").innerHTML="<img src='"+URI+"' id='result_img'>"
    })
}
console.log(ml5.version);
classifier=ml5.imageClassifier("MobileNet", modelLoaded)

function modelLoaded(){
    console.log("hi");
}
function identify(){
img=document.getElementById("result_img");
classifier.classify(img, gotResult);

}
function gotResult(error,result){
    if(error){
        console.log("error");
    }
    else{
        console.log(result);
        document.getElementById("value").innerHTML=result[0].label;


    }
}