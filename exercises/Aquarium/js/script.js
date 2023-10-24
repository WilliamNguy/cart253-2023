

"use strict";

let party = [];

let partySize = 55;
let player;
let gameState = "simulation";


function preload() {}

function setup() {
    createCanvas (windowWidth,windowHeight);

    player = createPlayer(width/2,height/2,5, color(0));

    for (let i = 0; i < partySize; i++) {
        party[i] = createVirus(random(0, width), random(0, height));
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

function createVirus(x,y) {
    let virus = {
        x: x,
        y: y,
        size: 50,
        vx: 0,
        vy: 0,
        speed: 2
    };
    return virus;
}



function draw() {
    background (208,106,110);

    textSize(15);
    fill(255,255,255);
    textAlign(RIGHT,CENTER);
    text("Find your way out of the screen while avoiding the bacteria!", width* 3/4,height * 3/4);


    if (gameState === "simulation") {
        movePlayer(player);
        displayPlayer(player);
        checkCollisions();

        for (let i = 0; i < party.length; i++) {
            moveVirus(party[i]);
            displayFish(party[i]);
        }


    }
    else if (gameState === "win") {
        displayWinScreen();
    }
    else if (gameState === "lose") {
        displayLoseScreen();
    }

   

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

function moveVirus(virus) {
    let change = random(0,1);
    if (change < 0.05) {
        virus.vx = random(-virus.speed, virus.speed);
        virus.vy = random(-virus.speed, virus.speed);
    }

    virus.x = virus.x + virus.vx;
    virus.y = virus.y + virus.vy;

    virus.x = constrain(virus.x, 0, width);
    virus.y = constrain(virus.y, 0, height);
}


function displayFish(virus) {
    push();
    fill(66,236,108);
    strokeWeight(8);
    stroke(5, 172, 40);
    ellipse(virus.x,virus.y,virus.size);
    pop();
}

function checkCollisions() {
    for (let i = 0; i < party.length; i++) {
        let virus = party[i];
        let d = dist(player.x, player.y, virus.x, virus.y);
        if (d < player.size / 2 + virus.size / 2) {
            gameState = "lose";
            
        }
    }
}

function displayWinScreen() {
    textSize(42);
    fill(250,248,238);
    textAlign(CENTER,CENTER);
    text("FREE AT LAST!", width/2,height/2);
}

function displayLoseScreen() {
    textSize(42);
    fill(0);
    textAlign(CENTER,CENTER);
    text("CAUGHT!", width/2,height/2);
}