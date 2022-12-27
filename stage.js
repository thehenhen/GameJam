class Stage {
    constructor(stage) {
        this.stage = stage;
        this.setStage(this.stage);
    }
    draw() {
        for (let i = 0; i < this.collision.length; i++) {
            // console.log(i, this.collision[i], this.collision[i][0]);
            line(this.collision[i].x1, this.collision[i].y1, this.collision[i].x2, this.collision[i].y2);
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
                new Obstacle(500,375,700,375,0),
                new Obstacle(300,275,500,275,0)
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