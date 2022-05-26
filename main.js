function preload(){

}
function setup(){
 canvas= createCanvas(600,450);
 canvas.position(200,250);
 video= createCapture(VIDEO);
 video.hide();

 tint_color ="";
}
function draw(){
    image(video,0,0,600,450);
    

    tint(tint_color);
}
function take_snapshot(){
  save("filterupdated.png");

}
function apply(){
    tint_color=document.getElementById("text_1").value;

}