class VirusSquare {
    constructor(x,y,w,h) {
        this.x = x;
        this.y = y;
        this.size = w;
        this.speed = 1;
    }

    move() {
        this.x += this.speed;
    }

    display() {
        push();
        fill(255,0,0);
        noStroke();
        rectMode(CENTER);
        rect(this.x,this.y,this.size,this.size);
        pop();
        }
}
