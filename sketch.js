function setup(){
    createCanvas(400,400);
    playerLoc = [100,200];
}
function draw(){
    background(0);
    fill(255);
    ellipse(100,100,100,100);
    circle(playerLoc[0],playerLoc[1],10);
}