class VerticalPaddle {
    constructor(w,h) {
        this.width = w;
        this.height = h;
        this.x = width - this.width/2 - 100;
        this.y = height/2; 
    }
    move(speed) {
        // this.y = mouseY;
        this.y += speed;
        this.y = constrain(this.y,this.height/2,height-this.height/2)
    }

    display() {
        push();
        fill(32,194,14);
        noStroke();
        rectMode(CENTER);
        rect(this.x,this.y,this.width,this.height);
        pop();
    }
}