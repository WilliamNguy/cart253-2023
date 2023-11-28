// Topdown view of a puzzle game. Tested out ways to make rooms/screens. Took a while but managed to make it work.

"use strict";

let movePlayer;
let screenManager;
let backgroundMusic;
let backgroundMusic1;
let moveSound;
let transitionSound;
let startGame = false;
let randomCube
let cubes = [];
let amountCubes = 5
let collectedCubes = 0;
// let screens = [];


/**
 * Description of preload
*/
function preload() {
    backgroundMusic = loadSound('assets/sounds/classical.mp3');
    backgroundMusic1 = loadSound('assets/sounds/drillclassic.mp3');
    moveSound = loadSound('assets/sounds/minecraftfootsteps.mp3');
    transitionSound = loadSound('assets/sounds/minecraftdoor.mp3');

}


/**
 * Description of setup
*/
function setup() {
    createCanvas(windowWidth,windowHeight)
    movePlayer = new Player (width/2,height/2,50);
    randomCube = new Cube();
    screenManager = new ScreenManager();
    screenManager.preload();
    background(0);

    fill(255);
    textSize(32);
    textAlign(CENTER, CENTER);
    text("PLAY", width/2,height/2);

    if (backgroundMusic) {
        backgroundMusic.loop();
    }
    else if (backgroundMusic1) {
        backgroundMusic1.loop();
    }
    for (let i = 0; i < amountCubes; i++) {
        cubes.push(new Cube());
    }
    for (let i = 0; i < amountCubes; i++) {
        cubes.push(new Cube());
    }
    for (let i = 0; i < amountCubes; i++) {
        cubes.push(new Cube());
    }

}


/**
 * Description of draw()
*/
function draw() {

    if (!startGame) {
        if(mouseIsPressed) {
            startGame = true;
            background (255);
        }
    }
    else {
        // background(255);
   
    screenManager.checkTransition(movePlayer);

    

    if (screenManager.currentScreen === 0) {
        // background(255,0,0);
        screenManager.displayScreen1();
        movePlayer.display();
        movePlayer.moveKeyPress(screenManager);
        movePlayer.keyReleased();
        randomCube.display();
        for (let i = 0; i < amountCubes; i++) {
            cubes[i].display();
            if (cubes[i].isPlayerTouch(movePlayer.x,movePlayer.y,movePlayer.size)) {
                cubes[i].collect();
            }
        }
    }
    else if (screenManager.currentScreen === 1) {
        // background(0,255,0);
        screenManager.displayScreen2();
        movePlayer.display();
        movePlayer.moveKeyPress(screenManager);
        movePlayer.keyReleased();
        for (let dot of screenManager.redDots) {
            dot.move();
            dot.checkCollisionPlayer();
            dot.display();
        }
        for (let i = amountCubes; i < 2 * amountCubes; i++) {
            cubes[i].display();
            if (cubes[i].isPlayerTouch(movePlayer.x,movePlayer.y,movePlayer.size)) {
                cubes[i].collect();
            }
        }
    }
    else if (screenManager.currentScreen === - 1) {
        // background(0,255,0);
        screenManager.displayScreen3();
        movePlayer.display();
        movePlayer.moveKeyPress(screenManager);
        movePlayer.keyReleased();
        for (let i = 2 * amountCubes; i < 3 * amountCubes; i++) {
            cubes[i].display();
            if (cubes[i].isPlayerTouch(movePlayer.x,movePlayer.y,movePlayer.size)) {
                cubes[i].collect();
            }
        }
    }
    else if (screenManager.currentScreen === 2) {
        // background(0,255,0);
        screenManager.displayScreen4();
        movePlayer.display();
        movePlayer.moveKeyPress(screenManager);
        movePlayer.keyReleased();
    }
    else {
        // background(0,255,0);
        screenManager.displayScreen5();
        movePlayer.display();
        movePlayer.moveKeyPress(screenManager);
        movePlayer.keyReleased();
    }

    // if (!screenManager.isPlayerInCurrentScreen(movePlayer.x,movePlayer.y)) {
    //     screenManager.switchToNextScreen();
    // }
    }

    fill(255);
    textSize(20);
    textAlign(LEFT, TOP);
    text('Collected Cubes: ' + collectedCubes, 10, 10);
    
    
}

