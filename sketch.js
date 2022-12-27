function setup(){
    createCanvas(1000,550);
    rectMode(CENTER);
    player = new Player();
    level = new Stage(1);
    frame = 0;
    play = false;
}
function draw(){
    background(0);
    fill(255);
    text("Stage: " + level.stage,800,80);
    text("Loc:  " + player.x + " " + player.y,800,100);
    // player.update();
    player.update(level.collision);
    player.show();
    stroke(255);
    level.draw();
    frame++;
}
function keyPressed() {
    if (key == ' ') {
        play = !play;
        if (play) noLoop();
        else loop();
    } else player.keyPress(key);
}
function keyReleased() {
    player.keyRelease(key);
}