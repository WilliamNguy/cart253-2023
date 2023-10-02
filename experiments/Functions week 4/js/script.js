/**
 * Title of Project
 * Author Name
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

"use strict";

// let circle = {
//     x: 0,
//     y: 250,
//     size: 100,
//     vx: 1,
//     vy: 0

// };



/**
 * Description of preload
*/
function preload() {

}


/**
 * Description of setup
*/
function setup() {
    createCanvas (500,500);

    let hotCelsius = toCelsius(100);
    console.log(`100 degrees Fahrenheit is ${hotCelsius} degrees Celsius.`);

    let coldCelsius = toCelsius(10);
    console.log(`10 degrees Fahrenheit is ${coldCelsius} degrees Celsius.`);
}


/**
 * Description of draw()
*/
function draw() {
    background (0);
}
function toCelsius(fahrenheit) {

    let celsius = (fahrenheit - 32) * 5/9;
    return celsius; 

}



    // move();
    // wrap();
    // display();





// function move() {
//     circle.x = circle.x + circle.vx;
//     circle.y = circle.y + circle.vy;
// }

// function wrap() {
//     if (circle.x > width) {
//         circle.x = 0;
        
//     }
// }

// function display() {
//     fill(255,0,0);
//     rectMode (CENTER);
//     rect(circle.x,circle.y,circle.size);
// } 

//function reset() {
    circle.x = 0;
    circle.vx = circle.vx + 2;
    circle.size = circle.size + 5;
//}

// function mousePressed() {
//    reset();
// }