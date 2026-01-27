function randomNumber() {
  return Math.floor(Math.random() * 6) + 1;
}

function setDiceImg(value) {
  return `images/dice${value}.png`;
}

function getResult(p1, p2) {
  if (p1 > p2) {
    return {
      title: "Player1 WON!",
      p1: "🏆 Player 1",
      p2: "Player 2",
    };
  } else if (p1 < p2) {
    return {
      title: "Player2 WON!",
      p1: "Player 1",
      p2: "Player 2 🏆",
    };
  } else {
    return {
      title: "its a draw",
      p1: "Player 1",
      p2: "Player 2",
    };
  }
}

function renderResult(result) {
  const h2 = document.querySelector("h2");
  const ps = document.querySelectorAll("p");

  h2.textContent = result.title;
  ps[0].textContent = result.p1;
  ps[1].textContent = result.p2;
}

function roll() {
  const n1 = randomNumber();
  const n2 = randomNumber();

  const img1 = document.querySelectorAll("img")[0];
  const img2 = document.querySelectorAll("img")[1];

  img1.setAttribute("src", setDiceImg(n1));
  img2.setAttribute("src", setDiceImg(n2));

  const result = getResult(n1, n2);
  renderResult(result);
}

const btn = document.getElementById("btn");
btn.addEventListener("click", roll);
