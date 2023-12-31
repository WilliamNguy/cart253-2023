class ScreenManager {
    constructor() {
        this.currentScreen = 0;
        // this.backgroundMusic = null;
        this.backgroundImage = null;
        this.backgroundImage2 = null;
        this.backgroundImage3 = null;
        this.transitionSound = null;
        this.redDots = [];
        for (let i = 0; i < 25; i++) {
            this.redDots.push(new RedDots(i))
        }
        this.pickUpSquare = {
            x: 1430,
            y: 330,
        }
        this.squareCollected = false;
    }

    preload() {
        this.transitionSound = loadSound('assets/sounds/minecraftdoor.mp3');
        this.backgroundImage = loadImage('assets/images/background1.png')
        this.backgroundImage2 = loadImage('assets/images/backgroundright.png')
        this.backgroundImage3 = loadImage('assets/images/background2.png')


    //     if(this.currentScreen === 0) {
    //         this.backgroundMusic = loadSound('assets/sounds/classical.mp3');
    //     }
    }

 
    displayScreen1() {
        if (this.currentScreen === 0) {
            if(this.backgroundImage) {
                image(this.backgroundImage,0,0,width,height);
            }

            this.screenBorders1();

            if (this.squareCollectionInScreen4) {
                fill(0,0,255);
                rect(width/2-25,height/2-25,50,50);
            }
        }
   
    }
    displayScreen2() {
        if (this.currentScreen === 1) {
            if(this.backgroundImage) {
                image(this.backgroundImage2,0,0,width,height);
            }
            this.screenBorders2();
        }
        for (let dot of this.redDots) {
            dot.move();
            dot.display();
        }
    
    }
    displayScreen3() {
        if (this.currentScreen === -1) {
            if(this.backgroundImage) {
                image(this.backgroundImage3,0,0,width,height);
            }
            // fill(0); rectangle to help add constrains
            // rect(1080,630,600,70); 
            // rect(1080,320,70,310);
            // rect(250,320,830,70);
            // rect(850,540,70,400);
            // rect(250,540,600,70);
            this.screenBorders3();
        }
    }
    displayScreen4() {
        if (this.currentScreen === 2) {
        

        fill(0);
        noStroke();

        if (!this.squareCollected) {
            // Check if the player is touching the square
            const distanceToSquare = dist(
                movePlayer.x,
                movePlayer.y,
                this.pickUpSquare.x,
                this.pickUpSquare.y
            );
            if (distanceToSquare > movePlayer.size / 2 + 25) {
                // Draw the square only if the player hasn't touched it
                fill(0, 0, 0);
                rect(
                    this.pickUpSquare.x - 25,
                    this.pickUpSquare.y - 25,
                    50,
                    50
                );
            } else {
                // Player has touched the square, set squareCollected to true
                this.squareCollected = true;
                this.squareCollectedInScreen4 = true;
            }
        }

        // Vertical walls
    fill(0);
    rect(1000,200,20,100);
    rect(650,100,20,100);
    rect(500,300,20,100);
    rect(1300,100,20, height - 200);
    rect(1200,100,20, height - 200);
    rect(1400,100,20, height - 200);
    rect(200,0, 20, 420);
    rect(400,500,20,height);
    rect(1100,400,20,height);
    rect(1000,500,20,200);
    rect(700, 700, 20, height);
    rect(800, 700, 20, height);

    // Horizontal walls
    rect(1400,300,100,20);
    rect(500,600,400,20);
    rect(400,500,600,20);
    rect(300,300,600,20);
    rect(300,200,700,20);
    rect(300,400,800,20);
    rect(300,400,800,20);
    rect(300, 100,1000, 20);
    // rect(0, 450, width - 100, 20);
    // rect(100, 550, width - 200, 20);
    // rect(0, 650, width - 300, 20);

        this.screenBorders4();

        

        fill(255);
            textSize(16);
            textAlign(LEFT, BOTTOM);
            text(
                "I can't see anything, something tells me I should make a loud noise... maybe scream...?",
                10,
                height - 5
            );

        
        }
    }
    displayScreen5() {
        if (this.currentScreen === -2) {
            background(255,255,0);
        }
    }
    screenBorders1() {
        fill(0);
        rect(0,0,20,700); // left side
        rect(width-20,0,20,700); // right side
        rect(0,0,700,30); // top
        rect(800,0,width,30); // top
        rect(0,height-20,width,20);
    }
    screenBorders3() {
        fill(0);
        rect(0,0,20,height); // left side
        rect(width-20,0,20,700); // right side
        rect(0,0,width,30); // top
        rect(0,height-20,width,20); //bottom
    }
    screenBorders2() {
        fill(0);
        rect(0,0,20,650); // left side
        rect(width-20,0,20,height); // right side
        rect(0,0,width,30); // top
        rect(0,height-20,width,20); //bottom
    }
    screenBorders4() {
        fill(0);
        rect(0,0,20,height); // left side
        rect(width-20,0,20,height); // right side
        rect(0,0,width,30); // top
        rect(0,height - 20,700,30); // bottom
        rect(800,height - 20,width,30); // bottom
    }
    // screenBorders2() {

    // }
    // screenBorders3() {

    // }
    // screenBorders4() {

    // }
    // screenBorders() {

    // }


    isPlayerInCurrentScreen(playerX, playerY) {
        // const screen = this.screens[this.currentScreen];
        return (
            playerX >= 0 && playerX <= width && playerY >= 0 && playerY <= height
        );
    }
    switchToNextScreen() {
        this.currentScreen = (this.currentScreen + 1)
    }
    switchToPreviousScreen() {
        this.currentScreen = (this.currentScreen - 1) 
    }
    switchToNextTopScreen() {
        this.currentScreen = (this.currentScreen + 2)
    }
    switchToPreviousBottomScreen() {
        this.currentScreen = (this.currentScreen - 2) 
    }
    
    checkTransition (player) {
        
        if(this.currentScreen !== player.previousScreen) {
            this.transitionSound.play();
            player.previousScreen = this.currentScreen;

            this.squareCollectedInScreen4 = false;

            if(backgroundMusic && backgroundMusic.isPlaying()) {
                backgroundMusic.stop();
            }
            if(backgroundMusic && backgroundMusic1.isPlaying()) {
                backgroundMusic1.stop();
            }
            if(backgroundMusic1 && backgroundMusic2.isPlaying()) {
                backgroundMusic2.stop();
            }
            if(backgroundMusic2 && backgroundMusic3.isPlaying()) {
                backgroundMusic3.stop();
            }
            if(this.transitionSound) {
                this.transitionSound.play();
            }
            if(this.currentScreen === 0) {
                if(backgroundMusic) {
                    backgroundMusic.loop();
                }
            }
            else if (this.currentScreen === 1) {
                if (backgroundMusic1) {
                    backgroundMusic1.loop();
                }
            }
            else if (this.currentScreen === -1) {
                if (backgroundMusic2) {
                    backgroundMusic2.loop();
                }
            }
            else if (this.currentScreen === 2) {
                if (backgroundMusic3) {
                    backgroundMusic3.loop();
                }
            }

        }

        if(player.x < 0) {
            this.switchToPreviousScreen();
            player.x = width;
        }
        else if (player.x > width) {
            this.switchToNextScreen();
            player.x = 0;
        }
        else if (player.y < 0) {
            this.switchToNextTopScreen();
            player.y = height;
        }
        else if (player.y > height) {
            this.switchToPreviousBottomScreen();
            player.y = 0;
        }
        
 
    }

    checkSquareCollection(playerX, playerY, playerSize) {
        if (!this.squareCollected) {
            // Check if the player is touching the square
            const distanceToSquare = dist(
                playerX,
                playerY,
                this.pickUpSquare.x,
                this.pickUpSquare.y
            );
            if (distanceToSquare < playerSize / 2 + 25) {
                // Player has touched the square, set squareCollected to true
                this.squareCollected = true;
                this.pickUpSquare = {
                    x: width/2,
                    y: height/2,
                };
            if (this.currentScreen === 2) {
                    this.squareCollectedInScreen4 = true;
                }
            }
        }
    }
}