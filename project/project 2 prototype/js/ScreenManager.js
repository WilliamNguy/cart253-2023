class ScreenManager {
    constructor() {
        this.currentScreen = 0;
        // this.screens = [
        //     new Screens(color(255,0,0), this.displayScreen1),
        //     new Screens(color(0,255,0), this.displayScreen2),
        // ];
    }

    // createScreen(r,g,b,displayFunction) {
    //     return {r,g,b,displayFunction};
    // }
    displayScreen1() {
        if (this.currentScreen === 0) {
            background(255,255,255);
        }
        // fill(255,0,0);
        // rect(width/2,height/2,100,100);
    }
    displayScreen2() {
        if (this.currentScreen === 1) {
            background(0,255,0);
        }
        // fill(0,255,0);
        // ellipse(width/2,height/2,100,100);
    }
    displayScreen3() {
        if (this.currentScreen === -1) {
            background(255,0,0);
        }
    }
    displayScreen4() {
        if (this.currentScreen === 2) {
            background(0,0,255);
        }
    }
    displayScreen5() {
        if (this.currentScreen === -2) {
            background(255,255,0);
        }
    }
    isPlayerInCurrentScreen(playerX, playerY) {
        const screen = this.screens[this.currentScreen];
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
        
        // const currentScreen = this.screens[this.currentScreen];
        
        // if (this.currentScreen === 0) {
        //     this.displayScreen1();
        // }
        // else if (this.currentScreen === 1) {
        //     this.displayScreen2();
        // }
        // else if (player.y < 0) {

        // }
        // else if (player.y > height) {

        // }
        // screenManager.screens[screenManager.currentScreen].display();

    }
}