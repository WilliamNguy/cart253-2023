/**
 * Title of Project
 * Author Name
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

"use strict";

let circle1 = {
    x: undefined,
    y: 250,
    size: 100,
    vx: 0,
    vy: 0,
    speed: 3,
};

let circle2 = {
    x: undefined,
    y: 250,
    size: 100,
    vx: 0,
    vy: 0,
    speed: 3,
};

let state = `title`; // CAN BE: TITLE, SIMULATION, LOVE, SADNESS


/**
 * Description of preload
*/
function preload() {

}


/**
 * Description of setup
*/
function setup() {
    createCanvas(500,500);

    setupCircles();
}

function setupCircles() {
    circle1.x = width/3;
    circle2.x = 2 * width/3;
    circle1.vx = random(-circle1.speed,circle1.speed);
    circle1.vy = random(-circle1.speed,circle1.speed);
    //circle2.vx = random(-circle2.speed,circle2.speed);
    //circle2.vy = random(-circle2.speed,circle2.speed);
}

/**
 * Description of draw()
*/
function draw() {
background(161,80,159);

handleInput();

if (state === `title`) {
    title();
}

else if (state === `simulation`) {
    simulation();
}
else if (state === `love`) {
    love();
}
else if (state === `sadness`) {
    sadness();
}
else if (state === 'secret') {
    secret();
}

}

// function reset() {
// circle1.x = circle1.x + circle1.vx;
// circle1.y = circle1.y + circle1.vy;
// }


function handleInput() {
    if(keyIsDown(LEFT_ARROW)) {
        circle2.vx = -circle2.speed;
    }
    else if (keyIsDown(RIGHT_ARROW)) {
        circle2.vx = circle2.speed;
    }
    else {
        circle2.vx = 0;
    }

    if (keyIsDown(UP_ARROW)) {
        circle2.vy = -circle2.speed;
    }
    else if (keyIsDown(DOWN_ARROW)) {
        circle2.vy = circle2.speed;
    }
    else {
        circle2.vy = 0
    }
}

function title() {
    push();
    textSize(40);
    fill(244,183,0);
    textAlign(CENTER,CENTER);
    text(`Getting Lebron's signature`, width/2, height/2)
    pop();
}

function simulation() {
move();
checkOffscreen();
checkOffscreen2();
checkOverlap();
display();
}

function love() {
    push();
    textSize(40);
    fill(244,200,0);
    textAlign(CENTER,CENTER);
    text(`GOT IT!`, width/2, height/2);
    pop();
}

function sadness() {
    push();
    textSize(64);
    fill(255,0,0);
    textAlign(CENTER,CENTER);
    text(`TOO SLOW`, width/2, height/2);
    pop();
}

function secret() {
    push();
    textSize(40);
    fill(63,240,175);
    textAlign(CENTER,CENTER);
    text(`I don't even like Lebron`, width/2, height/2);
    pop();
}

function move() {
    //MOVE CIRCLES
circle1.x = circle1.x + circle1.vx;
circle1.y = circle1.y + circle1.vy;

circle2.x = circle2.x + circle2.vx;
circle2.y = circle2.y + circle2.vy;

}

function checkOffscreen () {
    //CHECK IF CIRCLES HAVE GONE OFFSCREEN
if (circle1.x < 0 || circle1.x > width || circle1.y < 0 || circle1.y > height) {
    state =`sadness`;
    }
}

function checkOffscreen2 () {
if (circle2.x < 0 || circle2.x > width || circle2.y < 0 || circle2.y > height) {
    state = `secret`;
}

}

function checkOverlap() {
    //CIRCLES OVERLAPPING
let d = dist(circle1.x,circle1.y,circle2.x,circle2.y);
if (d < circle1.size/2 + circle2.size/2) {
    state = `love`;
}
}

function display() {
    //DISPLAY CIRCLES
ellipse(circle1.x, circle1.y, circle1.size);
ellipse(circle2.x, circle2.y, circle2.size);
}

function mousePressed() {
    if (state === `title`) {
        state = `simulation`
    }
}

function mouseDragged() {
    circle1.x = width/3;
    circle1.y = 250;
    circle1.x = circle1.x + circle1.vx;
    circle1.y = circle1.y + circle1.vy;
    circle1.size = circle1.size
    }
    

