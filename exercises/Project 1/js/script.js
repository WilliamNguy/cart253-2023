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
    speedHit: 0.1
};

let state = `title`;

function preload() {

}

let collisionCount = 0; 
let displayCollisionText = false;

let square = null;
let backgroundColor = 0;

let showDistractingText = false;
let showSecondText = false;
let showThirdText = false;
let showFourthText = false;
let showFifthText = false;
let showLifeText = false;
let showFastText = false;
let showPaceText = false;
let showSchoolText = false;
let showJobText = false;
let showRentText = false;
let showFamilyText = false;
let showFriendsText = false;
let showAttentionText = false;

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
    if (collisionCount === 6) {
        showDistractingText = false;
        showSecondText = true;
    }
    if (collisionCount === 7) {
        showSecondText = false;
        showThirdText = true;
    }
    if (collisionCount === 8) {
        showThirdText = false;
        showFourthText = true;
    }
    if (collisionCount === 9) {
        showFourthText = false;
        showFifthText = true;
    }
    if (collisionCount === 10) {
        showFifthText = false;
        showLifeText = true;
    }
    if (collisionCount === 15) {
        showLifeText = false;
        showFastText = true;
    }
    if (collisionCount === 20){
        showFastText = false;
        showSchoolText = true;
    }
    if (collisionCount === 25){
        showWorkText = true;
    }
    if (collisionCount === 25){
        showRentText = true;
        
    }
    if (collisionCount === 25){
        showFamilyText = true;
        
    }
    if (collisionCount === 25){
        showFriendsText = true;
        
    }
    if (collisionCount === 25){
        showSchoolText = false;
        showWorkText = false;
        showRentText = false;
        showFamilyText = false;
        showFriendsText = false;
        showAttentionText = true;
 


    if (showDistractingText) {
        textSize(20);
        fill(255, 255, 255);
        textAlign(CENTER, CENTER);
        text("Hey there!", width / 2, height / 2);
    }

    if (showSecondText) {
        textSize(20);
        fill(255, 255, 255);
        textAlign(CENTER, CENTER);
        text("Am I distracting you?", width / 2, height / 2);
    }
    if (showThirdText) {
        textSize(20);
        fill(255, 255, 255);
        textAlign(CENTER, CENTER);
        text("Because life is all about distractions.", width / 2, height / 2);
    }
    if (showFourthText) {
        textSize(20);
        fill(255, 255, 255);
        textAlign(CENTER, CENTER);
        text("Some are good and some are bad.", width / 2, height / 2);
    }
    if (showFifthText) {
        textSize(20);
        fill(255, 255, 255);
        textAlign(CENTER, CENTER);
        text("Watching this ball bounce got me thinking...", width / 2, height / 2);
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
    if (showPaceText) {
        textSize(20);
        fill(255, 255, 255);
        textAlign(CENTER, CENTER);
        text("At times, life speeds up to a point where we struggle to keep up. Like this ball.", width/2, height / 2 + 50);
    }
    if (showSchoolText) {
        textSize(20);
        fill(255, 255, 255);
        textAlign(CENTER, CENTER);
        text("School assignments,", width/2, height / 2 + 50);
    }
    if (showJobText) {
        textSize(20);
        fill(255, 255, 255);
        textAlign(CENTER, CENTER);
        text("part time job,", width/2, height / 2 + 50);
    }
    if (showRentText) {
        textSize(20);
        fill(255, 255, 255);
        textAlign(CENTER, CENTER);
        text("rent is due,", width/2, height / 2 + 50);
    }
    if (showFamilyText) {
        textSize(20);
        fill(255, 255, 255);
        textAlign(CENTER, CENTER);
        text("family time,", width/2, height / 2 + 50);
    }
    if (showFriendsText) {
        textSize(20);
        fill(255, 255, 255);
        textAlign(CENTER, CENTER);
        text("friends are waiting,", width/2, height / 2 + 50);
    }
    if (showAttentionText) {
        textSize(20);
        fill(255, 255, 255);
        textAlign(CENTER, CENTER);
        text("You good? You're not even paying attention to me.", width/2, height / 2 + 50);
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
        ball.vx = ball.vx * 1 + ball.speedHit;
        //ball.vy += random(0, 0.5);
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