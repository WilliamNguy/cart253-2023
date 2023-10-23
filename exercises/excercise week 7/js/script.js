/**
 * Title of Project
 * Author Name
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

"use strict";

let fish1;
let fish2;
let fish3;
let fish4;



function preload() {

}



function setup() {
    createCanvas (windowWidth,windowHeight);

    fish1 = createFish(random(0,width), random(0,height));
    fish2 = createFish(random(0,width), random(0,height));
    fish3 = createFish(random(0,width), random(0,height));
    fish4 = createFish(random(0,width), random(0,height));
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

    moveFish(fish1);
    moveFish(fish2);
    moveFish(fish3);
    moveFish(fish4);

    displayFish(fish1);
    displayFish(fish2);
    displayFish(fish3);
    displayFish(fish4);
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