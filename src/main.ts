import { refs } from "./refs";
import { score as Score } from "./score";
import { mole as Mole } from "./Mole";
import { timer as Timer } from "./timer";
import { closeGameOverModal, openGameOverModal, makeHoleAppear } from "./utils";

interface IMoleGame {
  start: (time: number) => void;
}

class MoleGame implements IMoleGame {
  constructor() {}

  start(time: number) {
    closeGameOverModal();
    Timer.start(time);
    Mole.appear();
    // makeHoleAppear();
  }

  stop() {
    Score.reset();
    Mole.disappear();
    openGameOverModal();
  }
}

export const game = new MoleGame();

refs.resetBtn.addEventListener("click", () => {
  game.start(30);
});

// window.addEventListener("mousemove", (e) => {
//   refs.cursor.style.top = e.pageY + "px";
//   refs.cursor.style.left = e.pageX + "px";
// });
// window.addEventListener("mousedown", () => {
//   refs.cursor.classList.add("active");
// });
// window.addEventListener("mouseup", () => {
//   refs.cursor.classList.remove("active");
// });
