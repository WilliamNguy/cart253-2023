class Screens {
    constructor(backgroundColor, drawFunction) {
        this.backgroundColor = backgroundColor;
        this.drawFunction = drawFunction;
    }

    display() {
        background(this.backgroundColor);
        this.drawFunction();
    }
}