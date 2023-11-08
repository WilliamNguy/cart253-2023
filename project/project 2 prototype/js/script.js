// Topdown view of a puzzle game. Tested out ways to make rooms/screens. Took a while but managed to make it work.

"use strict";

let movePlayer;
let screenManager
// let screens = [];

/**
 * Description of preload
*/
function preload() {

}


/**
 * Description of setup
*/
function setup() {
    createCanvas(windowWidth,windowHeight)
    movePlayer = new Player (width/2,height/2,50);
    screenManager = new ScreenManager();
    background(255);
}


/**
 * Description of draw()
*/
function draw() {
    background(255);
   
    screenManager.checkTransition(movePlayer);

    if (screenManager.currentScreen === 0) {
        // background(255,0,0);
        screenManager.displayScreen1();
        movePlayer.display();
        movePlayer.moveKeyPress();
    }
    else if (screenManager.currentScreen === 1) {
        // background(0,255,0);
        screenManager.displayScreen2();
        movePlayer.display();
        movePlayer.moveKeyPress();
    }
    else if (screenManager.currentScreen === - 1) {
        // background(0,255,0);
        screenManager.displayScreen3();
        movePlayer.display();
        movePlayer.moveKeyPress();
    }
    else if (screenManager.currentScreen === 2) {
        // background(0,255,0);
        screenManager.displayScreen4();
        movePlayer.display();
        movePlayer.moveKeyPress();
    }
    else {
        // background(0,255,0);
        screenManager.displayScreen5();
        movePlayer.display();
        movePlayer.moveKeyPress();
    }

    // if (!screenManager.isPlayerInCurrentScreen(movePlayer.x,movePlayer.y)) {
    //     screenManager.switchToNextScreen();
    // }
}

