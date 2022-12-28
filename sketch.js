function setup(){
    createCanvas(1000,550);
    rectMode(CENTER);
    level = new Stage();
    player = new Player(level);
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
        let res = player.update(level);
        if (res == 1) {
            level.nextStage();
            player.reset(level);
        }
        player.show();
    }
    stroke(255);
    level.draw(player);
    // frame++;
}
function keyPressed() {
    if (key == 'p' || key == 'P') {
        play = !play;
        if (play) noLoop();
        else loop();
    } else if (player.dead && key == ' ') {
        level.reset();
    } else if (key == 'r' || key == 'R') {
        level.reset();
        player.reset(level);
    }
    player.keyPress(key, keyCode, level);
}
function keyReleased() {
    player.keyRelease(key, keyCode);
}