import { refs } from "./refs";

interface IScore {
  score: number;
  add: (earnedPoints: number) => void;
  reset: () => void;
}

class Score implements IScore {
  score: number;
  constructor() {
    this.score = 0;
  }

  add() {
    this.score = this.score + 1;
    refs.score.textContent = String(this.score);
  }

  reset() {
    this.score = 0;
    refs.score.textContent = String(this.score);
  }
}

export const score = new Score();
