/**
 * Title of Project
 * Author Name
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

"use strict";

let player

let balls = [];

let notes = [`F3`,`G3`,`Ab4`,`C4`,`Db4`,`Eb4`,`F4`]

let backgroundMusic;

let movingSound;

let doorSound;

let door = {};

let mic;

let isBackgroundGreen = false;

function preload() {
    backgroundMusic = loadSound('assets/sounds/backgroundsong.mp3');
    movingSound = loadSound('assets/sounds/minecraftfootsteps.mp3');
    doorSound = loadSound('assets/sounds/minecraftdoor.mp3');
}


/**
 * Description of setup
*/
function setup() {
    createCanvas (windowWidth, windowHeight);
    userStartAudio();

    mic = new p5.AudioIn();
    mic.start();
    // background (0);
    backgroundMusic.loop();
    player = new Player(width/2,height/2,50);
    newDoor();
    

}


/**
 * Description of draw()
*/
function draw() {
    background (0);
    let vol = mic.getLevel()
    console.log('amp:',vol);

    // isBackgroundGreen = vol > 0.3;

    if (vol > 0.3) {
        background(0,255,0);
        // isBackgroundGreen = true;
    } 
    else {
        background(0);
    
    }

    fill(255);
    textSize(16);
    textAlign(LEFT, TOP);
    text("Scream for background switch || Spacebar to play/stop music || Arrow keys to move player towards brown doors (SOUND ON)",400,10)

    if (door.appear) { 
        push();
        fill(door.color.r,door.color.g,door.color.b);
        rect(door.x,door.y,door.width,door.height);
        pop();
    }

    player.move();
    player .display();

    if (door.appear && openDoor()) {
        door.appear = false;
        newDoor();
    }

    for (let i = 0; i < balls.length; i++) {
        let ball = balls[i];
        ball.move();
        ball.bounce();
        ball.display();
    }
}

function mousePressed() {
    createBall(mouseX,mouseY);
}

function createBall(x,y) {
    let note = random(notes);
    let ball = new Ball(x,y,note);
    balls.push(ball);
}

function keyPressed() {
    if (keyCode === 32) {
    turnOnMusic();
    }
}

function newDoor() {
    // if (!door.appear) {
        door = {   
            x: random(width-50),
            y: random(height-100),
            width: 50,
            height: 100,
            color: {
                r: 139,
                g: 69,
                b: 19
            },
            appear: true
        };
    // }   
    doorSound.play();
}

function openDoor() {
    return (player.x < door.x + door.width && player.x + player.size > door.x && player.y < door.y + door.height && player.y + player.size > door.y);
}

function turnOnMusic() {
    if (backgroundMusic.isPlaying()) {
        backgroundMusic.pause();
    }
    else {
        backgroundMusic.play();
    }
}