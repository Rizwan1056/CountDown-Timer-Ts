// #! /usr/bin/env node
class CountdownTimer {
    duration; // Duration in seconds
    intervalId = null;
    constructor(duration) {
        this.duration = duration;
    }
    updateDisplay(time) {
        // Function to update the display of the timer
        console.log(`Time left: ${time} seconds`);
    }
    tick() {
        if (this.duration > 0) {
            this.updateDisplay(this.duration);
            this.duration -= 1;
        }
        else {
            this.stop();
            console.log("Time's up!");
        }
    }
    start() {
        if (this.intervalId === null) {
            this.intervalId = setInterval(() => this.tick(), 1000);
        }
    }
    stop() {
        if (this.intervalId !== null) {
            clearInterval(this.intervalId);
            this.intervalId = null;
        }
    }
}
// Example usage:
const timer = new CountdownTimer(10);
timer.start();
export {};
