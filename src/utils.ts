import { refs } from "./refs";
import { score as Score } from "./score";

export function openGameOverModal() {
  refs.modal.classList.add("modal-open");
}

export function closeGameOverModal() {
  refs.modal.classList.remove("modal-open");
}

export function makeHoleAppear() {
  const i = Math.floor(Math.random() * refs.holes.length);
  const hole = refs.holes[i];
  let timer: undefined | number = undefined;

  const img = document.createElement("img");
  img.classList.add("mole");
  img.src = "../images/mole.png";

  img.addEventListener("click", () => {
    Score.add();
    img.src = "../images/mole-whacked.png";
    clearTimeout(timer);
    setTimeout(() => {
      hole.removeChild(img);
      makeHoleAppear();
    }, 500);
  });

  hole.appendChild(img);

  timer = setTimeout(() => {
    hole.removeChild(img);
    makeHoleAppear();
  }, 1500);
}
