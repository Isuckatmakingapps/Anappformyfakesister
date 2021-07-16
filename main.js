function preload(){ 
}
function setup(){
canvas=createCanvas(500,500);
canvas.position(125,250);
video=createCapture(VIDEO)
video.hide();
tint_color="";
}

function draw(){
image(video,0,0,500,500);
tint(tint_color);
}
function applyfilter(){
tint_color=document.getElementById("color").value

}
function take_snapshot(){
save("heyigotmywebcamcaptured.png")    
}
function settintred(){
    tint_color="#FF0800"

}
function settintyellow(){
tint_color="yellow"
}
function settintblue(){
tint_color="turquoise"    
}
function settintwhite(){
tint_color="white"    
}
function settintgreen(){
tint_color="greenyellow"    
}
function settintpink(){
tint_color="hotpink"    
}