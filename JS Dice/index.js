function random1to6(){
    x = (Math.floor(Math.random() * 6) + 1);
    return x
  }
  var myrandomvariable1 = random1to6()
  var myrandomvariable2 = random1to6()
  
  var image1 = "./images/dice" + myrandomvariable1 + ".png";
  var image2 =  "./images/dice" + myrandomvariable2 + ".png";

  document.querySelectorAll("img")[1].setAttribute("src",image2)
  document.querySelectorAll("img")[0].setAttribute("src",image1);

// Changing Header

if  (myrandomvariable1 > myrandomvariable2){
    document.querySelector("h1").textContent=("Player 1 WIns")
}
else if (myrandomvariable1 < myrandomvariable2){
    document.querySelector("h1").textContent= ("Player 2 wins!")
}
else if (myrandomvariable1 === myrandomvariable2){
    document.querySelector("h1").textContent=("Draw")
}