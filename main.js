function preload(){

}

function setup(){
    canvas = createCanvas(550, 500);
    canvas.position(600, 80);
    video = createCapture(VIDEO);
    video.size(550, 500);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function draw(){
    background("#000000");
}

function modelLoaded(){
    console.log("posenet loaded")
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
    }
}