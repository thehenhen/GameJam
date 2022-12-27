class Stage {
    constructor(stage) {
        this.stage = stage;
        this.setStage(this.stage);
    }
    draw() {
        for (let i = 0; i < this.collision.length; i++) {
            this.collision[i].draw();
        }
        for (let i = 0; i < this.traps.length; i++) {
            this.traps[i].draw();
        }
    }
    reset() {
        for (let i = 0; i < this.traps.length; i++) {
            this.traps[i].reset();
        }
    }
    setStage(level) {
        if (level == 1) {
            this.collision = [
                new Obstacle(10,10,990,10,0),
                new Obstacle(10,10,10,540,1),
                new Obstacle(10,540,990,540,0),
                new Obstacle(990,10,990,540,1),
                
                new Obstacle(200,450,400,450,0),
                new Obstacle(200,450,200,540,1),
                new Obstacle(400,450,400,540,1),

                new Obstacle(500,375,700,375,0),
                new Obstacle(500,375,500,540,1),
                new Obstacle(700,375,700,540,1),

                new Obstacle(300,275,500,275,0),

                new Obstacle(125,150,175,150,0)
            ];
            this.traps = [
                new Trap(450,540,80,0),
            ]
        }
        if (level == 2) {
            this.collision = [
                new Obstacle(10,10,990,10,0),
                new Obstacle(10,10,10,540,1),
                new Obstacle(10,540,990,540,0),
                new Obstacle(990,10,990,540,1),

                new Obstacle(200,450,400,450,0),
                new Obstacle(500,375,700,375,0),
                new Obstacle(300,275,500,275,0),
                new Obstacle(300,275,500,275,0),
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