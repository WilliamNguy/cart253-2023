/**
 * Title of Project
 * Author Name
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

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
    movePlayer.display();
    movePlayer.moveKeyPress();
    screenManager.checkTransition(movePlayer);

    if (!screenManager.isPlayerInCurrentScreen(movePlayer.x,movePlayer.y)) {
        screenManager.switchToNextScreen();
    }
}

