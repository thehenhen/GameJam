class Stage {
    constructor(stage=0) {
        this.stage = stage;
        this.setStage(this.stage);
    }
    draw(player) {
        for (let i = 0; i < this.traps.length; i++) {this.traps[i].draw();}
        for (let i = 0; i < this.blocks.length; i++) {this.blocks[i].draw();}
        fill(0);
        noStroke();
        rectMode(CORNER);
        rect(0,0,width,10);
        rect(0,0,10,height);
        rect(0,height-10,width,10);
        rect(width-10,0,10,height);
        for (let i = 0; i < this.collision.length; i++) {this.collision[i].draw();}
        for (let i = 0; i < this.areas.length; i++) {this.areas[i].draw(player);}
    }
    reset() {
        for (let i = 0; i < this.traps.length; i++) {
            this.traps[i].reset();
        }
    }
    setStage(level) {
        if (level == 0) {
            this.spawnX = 100;
            this.spawnY = 510;
            this.collision = [
                // default borders
                new Obstacle(10,10,990,10,0),
                new Obstacle(10,10,10,540,1),
                new Obstacle(10,540,990,540,0),
                new Obstacle(990,10,990,540,1),
                
                // chair 1
                new Obstacle(650,490,700,490,0),
                new Obstacle(650,490,650,540,1),
                new Obstacle(700,440,700,540,1),
                
                // chair 2
                new Obstacle(300,490,350,490,0),
                new Obstacle(350,490,350,540,1),
                new Obstacle(300,440,300,540,1),
                
                // table
                new Obstacle(400,475,600,475,0),
                new Obstacle(400,475,400,540,1),
                new Obstacle(600,475,600,540,1),
            ];
            this.blocks = [
                new Block(870,360,400,400,"/assets/tree.png"),
            ];
            this.traps = [];
            this.areas = [
                new Area(840,510,50,60,1),
                new Area(100,510,50,60,2),
            ];
        }
        if (level == 1) {
            this.spawnX = 150;
            this.spawnY = 120;
            this.collision = [
                new Obstacle(10,10,990,10,0),
                new Obstacle(10,10,10,540,1),
                new Obstacle(10,540,990,540,0),
                new Obstacle(990,10,990,540,1),
                
                // couch
                new Obstacle(200,450,400,450,0),
                new Obstacle(200,450,200,540,1),
                new Obstacle(400,450,400,540,1),
                
                // bookshelf
                new Obstacle(500,375,700,375,0),
                new Obstacle(500,375,500,540,1),
                new Obstacle(700,375,700,540,1),
                
                // ledge
                new Obstacle(300,250,300,275,0),
                new Obstacle(500,250,500,275,0),
                new Obstacle(300,250,500,250,0),
                new Obstacle(300,275,500,275,0),

                // air vent
                new Obstacle(125,150,175,150,0),
                new Obstacle(125,170,175,170,0),
                new Obstacle(125,150,125,170,0),
                new Obstacle(175,150,175,170,0)
            ];
            this.blocks = [
                new Block(400,262.5,200,25),
                new Block(140,430,300,300,"/assets/tree.png"),
            ];
            this.traps = [
                new Trap(450,540,80,0),
                new Trap(0,400,80,0),
                new Trap(400,262.5,80,0),
            ];
            this.areas = [
                new Area(100,510,50,60,1),
                new Area(150,120,50,60,2),
            ];
        }
        if (level == 2) {
            this.spawnX = 500;
            this.spawnY = 120;
            this.collision = [
                new Obstacle(10,10,990,10,0),
                new Obstacle(10,10,10,540,1),
                new Obstacle(10,540,990,540,0),
                new Obstacle(990,10,990,540,1),
                new Obstacle(370,10,370,540,1),
                new Obstacle(630,10,630,540,1),

                new Obstacle(370,450,400,450,0),
                new Obstacle(600,350,630,350,0),
                new Obstacle(370,250,400,250,0)
            ];

            this.blocks = [
                new Block(500,430,300,300,"/assets/tree.png"),
            ];

            this.traps = [
                new Trap(430,540,80,0),
                new Trap(570,540,80,0),
                new Trap(370,350,80,0),
                new Trap(630,250,80,0),
                new Trap(370,150,80,0),
            ];

            this.areas = [
                new Area(500,510,50,60,1),
                new Area(500,120,50,60,2),
            ];
        }
    }
    prevStage() {
        this.setStage(this.stage -= 1);
    }
    nextStage() {
        this.setStage(this.stage += 1);
    }
}