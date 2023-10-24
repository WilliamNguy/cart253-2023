

"use strict";

let party = [];

let partySize = 55;
let player;
let gameState = "simulation";


function preload() {}

function setup() {
    createCanvas (windowWidth,windowHeight);

    player = createPlayer(width/2,height/2,5, color(100,100,200));

    for (let i = 0; i < partySize; i++) {
        party[i] = createFish(random(0, width), random(0, height));
    }

}

function createPlayer(x,y,size,c) {
    return {
        x: x,
        y: y,
        size: size,
        color: c
    };
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

    if (gameState === "simulation") {
        movePlayer(player);
        displayPlayer(player);
        checkCollisions();

        for (let i = 0; i < party.length; i++) {
            moveFish(party[i]);
            displayFish(party[i]);
        }
    }
    else if (gameState === "win") {
        displayWinScreen();
    }
    else if (gameState === "lose") {
        displayLoseScreen();
    }

    // movePlayer(player);
    // displayPlayer(player);


}

function movePlayer(player) {
    if (keyIsDown(LEFT_ARROW)) {
        player.x -=1;
    } else if (keyIsDown(RIGHT_ARROW)) {
        player.x += 1;
    }
    if (keyIsDown(UP_ARROW)) {
        player.y -= 1;
    } else if (keyIsDown(DOWN_ARROW)) {
        player.y += 1;
    }

    if (player.x < 0 || player.x > width || player.y < 0 || player.y > height) {
        gameState = "win"
    }

    player.x = constrain(player.x, 0, width);
    player.y = constrain(player.y, 0, height);
}

function displayPlayer(player) {
    push();
    fill(player.color);
    noStroke();
    ellipse(player.x, player.y, player.size);
    pop();
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

function checkCollisions() {
    for (let i = 0; i < party.length; i++) {
        let fish = party[i];
        let d = dist(player.x, player.y, fish.x, fish.y);
        if (d < player.size / 2 + fish.size / 2) {
            gameState = "lose";
            break;
        }
    }
}

function displayWinScreen() {
    textSize(32);
    fill(0,255,0);
    textAlign(CENTER,CENTER);
    text("WIN!", width/2,height/2);
}

function displayLoseScreen() {
    textSize(32);
    fill(255,0,0);
    textAlign(CENTER,CENTER);
    text("LOST!", width/2,height/2);
}