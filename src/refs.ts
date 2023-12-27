export const refs = {
  resetBtn: document.querySelector(".reset-btn") as HTMLButtonElement,
  timer: document.querySelector(".timer__number") as HTMLParagraphElement,
  score: document.querySelector(".score__number") as HTMLParagraphElement,
  holes: document.querySelectorAll(".hole") as NodeListOf<HTMLButtonElement>,
  modal: document.getElementById("modal") as HTMLDivElement,
  cursor: document.querySelector(".cursor") as HTMLDivElement,
};
