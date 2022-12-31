class Stage {
    constructor(stage=0) {
        this.stage = stage;
        this.setStage(this.stage);
    }
    draw(player, frame) {
        for (let i = 0; i < this.traps.length; i++) {this.traps[i].draw(frame);}
        for (let i = 0; i < this.blocks.length; i++) {this.blocks[i].draw();}
        fill(0);
        noStroke();
        rectMode(CORNER);
        rect(0,0,width,10);
        rect(0,0,10,height);
        rect(0,height-10,width,10);
        rect(width-10,0,10,height);
        for (let i = 0; i < this.collision.length; i++) {this.collision[i].draw();}
        for (let i = 0; i < this.areas.length; i++) {this.areas[i].draw(player, this.areas.length);}
        if(this.stage==0){
            fill(255);
            textSize(20);
            textAlign(LEFT,CENTER);
            text("Deliver the gift by going to the christmas tree, then",200,200);
            text("finish by returning to the exit. ",200,250);
        }
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
                new Obstacle(10,10,990,10,0,true),
                new Obstacle(10,10,10,540,1,true),
                new Obstacle(10,540,990,540,0,true),
                new Obstacle(990,10,990,540,1,true),
                
                // chair 1
                new Obstacle(650,490,700,490,0),
                new Obstacle(650,490,650,540,1),
                new Obstacle(700,490,700,540,1),
                
                // chair 2
                new Obstacle(300,490,350,490,0),
                new Obstacle(350,490,350,540,1),
                new Obstacle(300,490,300,540,1),
                
                // table
                new Obstacle(400,450,600,450,0),
                new Obstacle(400,450,400,540,1),
                new Obstacle(600,450,600,540,1),
            ];
            this.blocks = [
                new Block(870,360,400,400,tree,0,0,0),
                new Block(500,495,250,250,furniture,0,0,0),
                new Block(325,515,50,45,undefined,85,52,43),
                new Block(675,515,50,45,undefined,85,52,43)
            ];
            this.traps = [];
            this.areas = [
                new Area(840,510,50,60,1),
                new Area(100,510,50,60,2),
            ];
    }
    if (level == 1) {
        this.spawnX = 100;
        this.spawnY = 510;
        this.collision = [
            // default borders
            new Obstacle(10,10,990,10,0,true),
            new Obstacle(10,10,10,540,1,true),
            new Obstacle(10,540,990,540,0,true),
            new Obstacle(990,10,990,540,1,true),
        ];
        this.blocks = [
            new Block(870,360,400,400,tree,0,0,0),
        ];
        this.traps = [
            new Trap(450,540,80,0)
        ];
        this.areas = [
            new Area(840,510,50,60,1),
            new Area(100,510,50,60,2),
        ];
    }else if (level == 2) {
            this.spawnX = 150;
            this.spawnY = 120;
            this.collision = [
                new Obstacle(10,10,990,10,0,true),
                new Obstacle(10,10,10,540,1,true),
                new Obstacle(10,540,990,540,0,true),
                new Obstacle(990,10,990,540,1,true),
                
                // dresser
                new Obstacle(200,450,400,450,0),
                new Obstacle(200,450,200,540,1),
                new Obstacle(400,450,400,540,1),
                
                // bookshelf
                new Obstacle(500,370,700,370,0),
                new Obstacle(500,370,500,540,1),
                new Obstacle(700,370,700,540,1),
                
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
                new Block(150,160,50,20,undefined,85,52,43),
                new Block(400,262.5,200,25,undefined,85,52,43),
                new Block(600,455,200,170,undefined,85,52,43),
                new Block(140,430,300,300,tree,0,0,0),
                new Block(300,495,250,250,furniture,0,0,0)
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
        } else if (level == 3) {
            this.spawnX = 500;
            this.spawnY = 120;
            this.collision = [
                new Obstacle(10,10,990,10,0,true),
                new Obstacle(10,10,10,540,1,true),
                new Obstacle(10,540,990,540,0,true),
                new Obstacle(990,10,990,540,1,true),
                
                new Obstacle(370,10,370,540,1,true),
                new Obstacle(630,10,630,540,1,true),
                
                new Obstacle(370,450,400,450,0,true),
                new Obstacle(600,350,630,350,0,true),
                new Obstacle(370,250,400,250,0,true)
            ];
            
            this.blocks = [
                new Block(500,430,300,300,tree,0,0,0),
                new Block(190,275,360,530,bricks,85,52,43),
                new Block(810,275,360,530,bricks,85,52,43),
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
        } else if (level == 4) {
            this.spawnX = 800;
            this.spawnY = 120;
            this.collision = [
                new Obstacle(10,10,990,10,0,true),
                new Obstacle(10,10,10,540,1,true),
                new Obstacle(10,540,990,540,0,true),
                new Obstacle(990,10,990,540,1,true),
                
                // cabinet
                new Obstacle(100,450,300,450,0),
                new Obstacle(100,450,100,540,1),
                new Obstacle(300,450,300,540,1),

                // ledge
                new Obstacle(400,342.5,400,357.5,1),
                new Obstacle(750,342.5,750,357.5,1),
                new Obstacle(400,342.5,750,342.5,0),
                new Obstacle(400,357.5,750,357.5,0),

                // ledge but again
                new Obstacle(550,250,550,265,1),
                new Obstacle(750,250,750,265,1),
                new Obstacle(550,250,750,250,0),
                new Obstacle(550,265,750,265,0),

                // high ledge
                new Obstacle(125,300,250,300,0),
                new Obstacle(125,320,250,320,0),
                new Obstacle(125,300,125,320,1),
                new Obstacle(250,300,250,320,1),
                
                // higher ledge
                new Obstacle(125,200,250,200,0),
                new Obstacle(125,220,250,220,0),
                new Obstacle(125,200,125,220,1),
                new Obstacle(250,200,250,220,1),
                
            ];
            this.blocks = [
                new Block(187.5, 210, 125, 20, undefined, 85,52,43),
                new Block(187.5, 310, 125, 20, undefined, 85,52,43),
                new Block(650, 257.5, 200, 15, undefined, 85,52,43),
                new Block(575, 350, 350, 15, undefined, 85,52,43),
                new Block(200, 495, 250, 260, furniture, 0,0,0),
            ];
            this.traps = [
                new Trap(800,540,80,1,450,540,175),
                new Trap(400,350,80,1,750,350,175),
            ];
            this.areas = [
                new Area(55,510,50,60,1),
                new Area(150,120,50,60,2),
                new Area(800,120,50,60,3),
            ];
            
        } else if (level == 5) {
            this.spawnX = 100;
            this.spawnY = 510;
            this.collision = [
                new Obstacle(10,10,990,10,0,true),
                new Obstacle(10,10,10,540,1,true),
                new Obstacle(10,540,990,540,0,true),
                new Obstacle(990,10,990,540,1,true),

                //new Obstacle(370,10,370,540,1,true),
                //new Obstacle(630,10,630,540,1,true),

                //new Obstacle(370,450,400,450,0,true),
                //new Obstacle(600,350,630,350,0,true),
                //new Obstacle(370,250,400,250,0,true)
            ];

            this.blocks = [
                new Block(800,430,300,300,tree,0,0,0),
                //new Block(190,275,360,530,"/assets/bricks.png",85,52,43),
                //new Block(810,275,360,530,"/assets/bricks.png",85,52,43),
            ];

            this.traps = [
                new Trap(200,540,80,0),
                new Trap(200,370,80,0),
                new Trap(380,540,80,0),
                new Trap(380,370,80,0),
                new Trap(560,540,80,0),
                new Trap(560,370,80,0),
            ];

            this.areas = [
                new Area(800,510,50,60,1),
                new Area(100,510,50,60,2),
            ];
        }else if(level==6){
            ending.end=true;
            ending.show1="";
            ending.show2="";
            ending.show3="";
            ending.show4="";
            ending.counter=[0,0,0,0];
            this.reset();
            this.stage=0;
            this.setStage(0);
            player.reset(this);
            player.lives=3;
        }
    }
    prevStage() {
        this.setStage(this.stage -= 1);
    }
    nextStage() {
        this.setStage(this.stage += 1);
    }
}