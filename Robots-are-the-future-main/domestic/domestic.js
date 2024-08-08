// script.js
import { Animate, initMDB } from "mdb-ui-kit";

initMDB({
  animation: true,
});

// Add animation to buttons
document.querySelectorAll(".btn").forEach((button) => {
  button.addEventListener("mouseover", () => {
    Animate(button, "slide-in-right", "onHover");
  });
  button.addEventListener("mouseout", () => {
    Animate(button, "slide-out-right", "onHover");
  });
});

// Add animation to grid boxes
document.querySelectorAll(".grid-box").forEach((box) => {
  box.addEventListener("mouseover", () => {
    Animate(box, "slide-in-up", "onHover");
  });
  box.addEventListener("mouseout", () => {
    Animate(box, "slide-out-up", "onHover");
  });
});