var randomno1=Math.floor(Math.random()*6) + 1;
var randomDiceimage="dice" + randomno1 + ".png";//dice1.png-dice6.png
var randomImagesource="images/" + randomDiceimage;//images/dice1.png-images/dice6.png
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src" , randomImagesource);
var randomno2=Math.floor(Math.random()*6 + 1);
var randomdiceimage2="dice"+ randomno2 + ".png";
var randomimagesource2="images/" + randomdiceimage2;
document.querySelectorAll("img")[1].setAttribute("src" , randomimagesource2);
if(randomno1 > randomno2){
    document.querySelector("h1").innerHTML="Player 1 Wins🚩"
}
else if(randomno2 > randomno1){
    document.querySelector("h1").innerHTML="Player 2 Wins🚩";
}
else{
    document.querySelector("h1").innerHTML="Draw!";
}