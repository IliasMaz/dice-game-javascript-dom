let randomNumber1 = Math.floor(Math.random() * 6 + 1);
let randomDiceImage = "dice" + randomNumber1 + ".png";
let randomImageSource = "images/" + randomDiceImage;

let image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);

let randomNumber2 = Math.floor(Math.random() * 6 + 1);
let randomDiceImage2 = "dice" + randomNumber2 + ".png";
let randomImageSource2 = "images/" + randomDiceImage2;

let image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImageSource2);

if(randomNumber1 > randomNumber2){
  document.querySelector("h2").innerHTML="Player1 WON!";
  document.querySelectorAll("p")[0].innerHTML ="🏆Player 1"
}else if(randomNumber1 < randomNumber2){
  document.querySelector("h2").innerHTML= "Player2 WON!";
  document.querySelectorAll("p")[1].innerHTML = "Player 2🏆";
}else{
  document.querySelector("h2").innerHTML="its a draw";
}
