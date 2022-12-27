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
    if (frame++ % 2 != 3) {
        player.update(level);
        player.show();
    }
    stroke(255);
    level.draw();
    // frame++;
}
function keyPressed() {
    if (key == 'p') {
        play = !play;
        if (play) noLoop();
        else loop();
    } else if (player.dead && key == ' ') {
        level.reset();
    }
    player.keyPress(key, keyCode);
}
function keyReleased() {
    player.keyRelease(key, keyCode);
}