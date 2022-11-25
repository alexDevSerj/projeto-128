var song = "";

var leftWristX = 0;
var leftWristY = 0;

var rightWristX = 0;
var rightWristY = 0;

function preload(){
    song =  loadSound("music.mp3")
}

function  setup(){
    canvas = createCanvas(600,500);
    canvas.position(400,200);

    video = createCapture(VIDEO)
    video.hide()

    poseNet = ml5.poseNet(video,modelLoaded)
    poseNet.on('pose',gotPoses)
}

function gotPoses(results){
    if(results.length > 0){
        leftWristX = results[0].pose.leftWrist.x
        leftWristY = results[0].pose.leftWrist.y
        console.log("x:"+leftWristX+"y:"+leftWristY)
        rightWristX = results[0].pose.rightWrist.x
        rightWristY = results[0].pose.rightWrist.y
    }
}

function modelLoaded(){
    console.log("posNet foi inicializado")
}

function draw(){
    image(video,0,0,600,500)
}

function play(){
    song.play()
    song.setVolume(1)
    song.rate(1)
}

function parar(){
    song.pause() 
}
