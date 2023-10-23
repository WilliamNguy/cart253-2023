

"use strict";

let party = [];


function preload() {}

function setup() {
    createCanvas (windowWidth,windowHeight);

    for (let i = 0; 1 < 4; i++) {
        party[i] = createFish(random(0, width), random(0, height));
    }

}

function createFish(x,y) {
    let fish = {
        x: x,
        y: y,
        size: 50,
        vx: 0,
        vy: 0,
        speed: 2
    };
    return fish;
}



function draw() {
    background (0);

    for (let i = 0; i < 4; i++) {
        moveFish(party[i]);
    }

    for (let i = 0; i < 4; i++) {
        displayFish(party[i]);
    }

}

function moveFish(fish) {
    let change = random(0,1);
    if (change < 0.05) {
        fish.vx = random(-fish.speed, fish.speed);
        fish.vy = random(-fish.speed, fish.speed);
    }

    fish.x = fish.x + fish.vx;
    fish.y = fish.y + fish.vy;

    fish.x = constrain(fish.x, 0, width);
    fish.y = constrain(fish.y, 0, height);
}

function displayFish(fish) {
    push();
    fill(200,100,100);
    noStroke();
    ellipse(fish.x,fish.y,fish.size);
    pop();
}