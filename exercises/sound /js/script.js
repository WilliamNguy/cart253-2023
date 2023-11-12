"use strict";

let mic;
let ghost = {
    x: 0,
    y: 0,
    vx: 0,
    vy: 0,
    image: undefined
};

function preload() {
    ghost.image = loadImage(`assets/images/clown.png`);
}

function setup() {
    createCanvas (windowWidth, windowHeight);

    ghost.x = width/2;
    ghost.y = height/2;

    mic = new p5.AudioIn();
    mic.start();
}

function draw() {
   background(0);

   ghost.x = ghost.x + random(-1,1);
   ghost.y = ghost.y + random(-1,1);

   let level = mic.getLevel();

    if (level > 0.3) {
        ghost.vx = 20;
    }

    ghost.x = ghost.x + ghost.vx;
    ghost.y = ghost.y + ghost.vy;

   console.log(level);

   
   
    push();
    imageMode(CENTER);
    tint(255,50);
    image(ghost.image,ghost.x,ghost.y);
    pop(); 
}

