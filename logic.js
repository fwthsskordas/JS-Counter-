const minus = document.getElementById("minusBtn");
const plus = document.getElementById("plusBtn");
const textCounter = document.getElementById("counter");
let count = 0;

plus.addEventListener("click", () => {
  if (count >= 10) {
    textCounter.innerText = "You win!";
  } else {
    count += 1;
    textCounter.innerText = count;
  }
});

minus.addEventListener("click", () => {
  if (count <= -10) {
    textCounter.innerText = "You Lose!";
  } else {
    count -= 1;
    textCounter.innerText = count;
  }
});
