import { refs } from "./refs";
import { score as Score } from "./score";

interface IMole {
  timer: null | number | undefined;
  moleTimeId: number | undefined;
  appear: () => void;
  create: () => void;
  disappear: () => void;
}

class Mole implements IMole {
  timer: null | number;
  moleTimeId: undefined | number;
  constructor() {
    this.timer = null;
    this.moleTimeId = undefined;
  }

  appear() {
    this.timer = setInterval(() => {
      this.create();
    }, 1000);
  }

  create() {
    const index = Math.floor(Math.random() * refs.holes.length);
    const hole = refs.holes[index];

    const img = document.createElement("img");
    img.classList.add("mole");
    img.src = "../images/mole.png";

    img.addEventListener("click", () => {
      Score.add();
      img.src = "../images/mole-whacked.png";
      console.log(this.moleTimeId);
      clearTimeout(this.moleTimeId);
      setTimeout(() => {
        hole.removeChild(img);
      }, 500);
    });

    hole.appendChild(img);

    this.moleTimeId = setTimeout(() => {
      hole.removeChild(img);
    }, 5000);
  }

  disappear() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }
}

export const mole = new Mole();
