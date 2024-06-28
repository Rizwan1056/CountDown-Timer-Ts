// #! /usr/bin/env node

class CountdownTimer {
    private duration: number; // Duration in seconds
    private intervalId: NodeJS.Timeout | null = null;
  
    constructor(duration: number) {
      this.duration = duration;
    }
  
    private updateDisplay(time: number): void {
      // Function to update the display of the timer
      console.log(`Time left: ${time} seconds`);
    }
  
    private tick(): void {
      if (this.duration > 0) {
        this.updateDisplay(this.duration);
        this.duration -= 1;
      } else {
        this.stop();
        console.log("Time's up!");
      }
    }
  
    public start(): void {
      if (this.intervalId === null) {
        this.intervalId = setInterval(() => this.tick(), 1000);
      }
    }
  
    public stop(): void {
      if (this.intervalId !== null) {
        clearInterval(this.intervalId);
        this.intervalId = null;
      }
    }
  }
  
  // Example usage:
  const timer = new CountdownTimer(10);
  timer.start();
  