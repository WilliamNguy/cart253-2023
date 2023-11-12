"use strict";

let barkSFX;

function preload() {
    barkSFX = loadSound(`assets/sounds/bark.wav`)
}


function setup() {
    createCanvas (windowWidth, windowHeight);
}



function draw() {
   background(0);
}

function mousePressed() {
    barkSFX.play();
}