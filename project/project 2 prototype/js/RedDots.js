class RedDots {
    constructor() {
        this.size = 10;
        // this.x = width - 30;
        this.y = random(27, height - 27);
        this.speed = 2;
        this.down = 1;

        this.x = random(width/2,width - 30)
    }

    move() {
        this.y += this.speed * this.down;
        if (this.y<= 27 || this.y >= height - 27) {
            this.down *= -1;
        }
    }

    display() {
        fill(255,0,0);
        rect(this.x,this.y,this.size,this.size);
    }
}