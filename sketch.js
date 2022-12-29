let consolaFont;
let deathSound;
function preload(){
    consolaFont = loadFont("assets/CONSOLA.TTF");
    deathSound = loadSound("assets/jumpscare.mp3");
}

function setup(){
    createCanvas(1000,550);
    rectMode(CENTER);
    menu = new Menu();
    settings = new Settings();
    instructions = new Instructions();
    level = new Stage();
    player = new Player(level);
    frame = 0;
    play = false;
}
function draw(){
    if(menu.menu){
        menu.show();
    }else if(settings.sett){
        settings.show();
    }else if(instructions.instructions){
        instructions.show();
    }else{
        background(0);
        fill(255);
        text("Stage: " + level.stage,800,80);
        text("Loc:  " + floor(player.x) + " " + floor(player.y),800,100);
        text("Checkpoint: " + player.checkpoint,800,120);
        // player.update();
        level.draw(player);
        if (frame++ % 2 != 3) {
            let res = player.update(level);
            if (res == 1) {
                level.nextStage();
                player.reset(level);
            }
            player.show();
        }
        stroke(255);
    }
    // frame++;
}
function keyPressed() {
    if (key == 'p' || key == 'P') {
        play = !play;
        if (play) noLoop();
        else loop();
    } else if (player.dead && key == ' ' && (player.blood==255 || player.blood==150)) {
        level.reset();
        player.reset(level);
    } else if ((key == 'r' || key == 'R') && (player.blood==255 || player.blood==150)) {
        level.reset();
        player.reset(level);
    } else if (key == '-' || key == '_') {
        level.prevStage();
    } else if (key == '+' || key == '=') {
        level.nextStage();
    }
    player.keyPress(key, keyCode, level);
}
function keyReleased() {
    player.keyRelease(key, keyCode);
}