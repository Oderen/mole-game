import { refs } from "./refs";
import { game as MoleGame } from "./main";

interface ITimer {
  intervalId: null | number;
  start: (time: number) => void;
  stop: () => void;
}

class Timer implements ITimer {
  intervalId: null | number;

  constructor() {
    this.intervalId = null;
  }

  start(time: number) {
    this.intervalId = setInterval(() => {
      time--;
      if (time === 0) {
        this.stop();
      }
      refs.timer.textContent = String(time);
    }, 1000);
  }

  stop() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      MoleGame.stop();
    }
  }
}

export const timer = new Timer();
