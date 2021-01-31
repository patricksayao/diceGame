

document.querySelector(".btn").addEventListener("click", function() {
  var randomNumber1 = Math.floor((Math.random() * 6) + 1);
  var randomNumber2 = Math.floor((Math.random() * 6) + 1);

  document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png")
  document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png")

  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").textContent = "🚩 Player 1 WINS!";
  }
  else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").textContent = "Player 2 WINS! 🚩";
  }
  else {
    document.querySelector("h1").textContent = "It's a draw";
  }
});

// # version1 without the refresh button
// var randomNumber1 = Math.floor((Math.random() * 6) + 1);
// var randomNumber2 = Math.floor((Math.random() * 6) + 1);
//
// document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png")
// document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png")
//
// if (randomNumber1 > randomNumber2) {
//   document.querySelector("h1").textContent = "🚩 Player 1 WINS!";
// }
// else if (randomNumber1 < randomNumber2) {
//   document.querySelector("h1").textContent = "Player 2 WINS! 🚩";
// }
// else {
//   document.querySelector("h1").textContent = "It's a draw";
// }


// # you can also use concatenation to set a sting for dice images
// var diceImage1 = "images/dice" + randomNumber1 + ".png";
// var diceImage2 = "images/dice" + randomNumber2 + ".png";

// you can also use querySelectorAll to target all the img tag and just
// tap into their respective indexes
// var image1 = document.querySelectorAll("img")[0];
// var image2 = document.querySelectorAll("img")[1];
// image1.setAttribute("src", diceImage1);
// image1.setAttribute("src", diceImage2);

// this a sample of a shorthand code
// document.querySelectorAll("img")[0].setAttribute("src", "images/dice" + Math.floor((Math.random() * 6) + 1) + ".png");
// document.querySelectorAll("img")[1].setAttribute("src", "images/dice" + Math.floor((Math.random() * 6) + 1) + ".png");


// # another variant of the code
// var randomNumber1, randomNumber2;
//
// randomNumber1 = Math.floor(Math.random() * 6 ) + 1;
// randomNumber2 = Math.floor(Math.random() * 6 ) + 1;
//
// randomNumber1 = document.querySelector(".img1").src="images/dice" + randomNumber1 + ".png";
//
// randomNumber2 = document.querySelector(".img2").src="images/dice" + randomNumber2 + ".png";
//
// if (randomNumber1 > randomNumber2) {
//     document.querySelector("h1").textContent = "Player 1 wins!";
//
// } else if (randomNumber2 > randomNumber1) {
//     document.querySelector("h1").textContent = "Player 2 wins!";
// } else {
//     document.querySelector("h1").textContent = "Draw!";
//}
