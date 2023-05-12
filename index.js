var randomNumber1=Math.random();
randomNumber1=randomNumber1*6;
randomNumber1=Math.floor(randomNumber1) + 1;

var randomDiceImage1="Dice" +  randomNumber1 +".png"; // dice1.png - dice6.png

var randomImageSource1="images/" + randomDiceImage1; //images/dice1.png - images/dice6.png


document.querySelectorAll("img")[0].setAttribute("src",randomImageSource1);

var randomNumber2=Math.random();
randomNumber2=randomNumber2*6;
randomNumber2=Math.floor(randomNumber2) + 1;

var randomDiceImage2="Dice" +  randomNumber2 +".png"; // dice1.png - dice6.png

var randomImageSource2="images/" + randomDiceImage2; //images/dice1.png - images/dice6.png


document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);


if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 wins!";
}
else if(randomNumber1<randomNumber2){

    document.querySelector("h1").innerHTML="Player 2 wins!";
}
else{
    document.querySelector("h1").innerHTML="draw";
}