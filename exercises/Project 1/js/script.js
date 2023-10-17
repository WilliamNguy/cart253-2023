/**
PROJECT 1
*/

"use strict";



/**
Description of preload
*/

let player = {
    x: 250,
    y: 800,
    w: 150,
    h: 15
};

let ball = {
    x: 500,
    y: 500,
    size: 40,
    vx: 1,
    vy: 1,
    speed: 5,
    speedHit: 0.08
};

let state = `title`;

function preload() {

}

let collisionCount = 0; 
let displayCollisionText = false;

let square = null;
let backgroundColor = 0;

let showDistractingText = false;
let showLifeText = false;
let showFastText = false;

function setup() {
    createCanvas (windowWidth, windowHeight);
    noStroke();
    rectMode(CENTER);
    square = yellowSquare();
}


function draw() {
    background(backgroundColor);

    if (state === `title`) {
        title();
    }
    else if (state === `simulation`) {
        simulation();
    }
    else if (state === `death`) {
        death();
    }

    if (collisionCount === 5) {
        showDistractingText = true;
    }
    if (collisionCount === 10) {
        showDistractingText = false;
        showLifeText = true;
    }
    if (collisionCount === 15) {
        showLifeText = false;
        showFastText = true;
    }
    if (collisionCount === 20){
        showFastText = false;
    }

    if (showDistractingText) {
        textSize(20);
        fill(255, 255, 255);
        textAlign(CENTER, CENTER);
        text("Hey! Am I distracting you?", width / 2, height / 2);
    }

    if (showLifeText) {
        textSize(20);
        fill(255, 255, 255);
        textAlign(CENTER, CENTER);
        text("This ball is like life, bouncing all over the place. It is unpredictable.", width/2, height / 2 + 50);
    }

    if (showFastText) {
        textSize(20);
        fill(255, 255, 255);
        textAlign(CENTER, CENTER);
        text("Life often move faster as we journey through it.", width/2, height / 2 + 50);
    }

function title() {
    push();
    textSize(64);
    fill(200,100,100);
    textAlign(CENTER,CENTER);
    text(`LIFE`,width/2,height/2);
    textSize(24);
    fill(255);
    text(`Click Me`, width / 2, height / 2 + 50);
    pop();
}

function simulation() { 
    ball.speed += 0.002;
    move();
    checkOffscreen();
    playerCollision();
    playerControl();
    moveSquare(square);
    bottomScreen();
    fill(250);
    ellipse(ball.x, ball.y, ball.size);
    fill(255);
    textAlign(CENTER, TOP);
    text(`Collisions: ${collisionCount}`, width / 2, 10 );
    
}

}

//falling squares for power ups
function yellowSquare() {
    return {
        x:random(width),
        y: 0,
        size: 20,
        color: color(255,255,0),
    };
}
function moveSquare(square) {
    fill(square.color);
    rect(square.x, square.y, square.size, square.size);
    square.y += 3;

    if (square.y > height) {
        square.x = random(width);
        square.y = 0;
    }
    if (square.x + square.size/2 > player.x - player.w/2 && square.x - square.size/2 < player.x + player.w/2 && square.y + square.size/2 > player.y - player.h/2 && square.y - square.size/2 < player.y + player.h/2) {
        backgroundColor = color(random(255), random(255), random(255)); 
        square.x = random(width);
        square.y = 0;
    }
}

//creating ball motion
function move() {
  
    ball.x = ball.x + (ball.vx * ball.speed);
    ball.y = ball.y + (ball.vy * ball.speed);
    
}

//ball boundaries
function checkOffscreen() {
    
    if(ball.x < 0) {
        ball.vx = ball.vx * -1;
    }

    if(ball.x > windowWidth) {
        ball.vx = ball.vx * -1;
    }

    if(ball.y < 0) {
        ball.vy = ball.vy * -1;
    }
}

function bottomScreen() {
    if (ball.y > height) {
        state = `death`;
    }
}
//check for objects colliding
function playerCollision() {
    if (state === 'simulation' && ball.x - ball.size < player.x + player.w / 2 && ball.x + ball.size > player.x - player.w / 2 && ball.y + ball.size > player.y - player.h / 2 && ball.y - ball.size < player.y + player.h / 2) {
        ball.vx = ball.vx * 1; + ball.speedHit;
        ball.vy += random(-0.5, 0.5);
        ball.vy = ball.vy * -1;
        ball.vx = random(-0.5, 0.5);
        collisionCount++;
    }    
}
//lets player control platform
function playerControl() {
    player.x = mouseX;
    
    fill(250);
    rect(player.x, player.y, player.w, player.h);

}


function mousePressed() {
    if (state === `title`) {
        state = `simulation`;
    }
}

function death() {
    push();
    textSize(64);
    fill(150,150,255);
    textAlign(CENTER,CENTER);
    text(`RIP`,width/2,height/2);
    pop();
}