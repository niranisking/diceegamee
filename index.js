arrayItems = ['images/dice1.png', 'images/dice2.png', 'images/dice3.png', 'images/dice4.png', 'images/dice5.png', 'images/dice6.png']
  
var chosenPlayer = prompt("Pick a Player : 1 or 2");
var player = 'Player'
alert("You are '" + player + " " + chosenPlayer + "', Goodluck!");

function diceChallengePlayer1 () {


    return arrayItems[Math.floor((Math.random() * 6))]
    
  
  }
  

  var output1 = diceChallengePlayer1();


  document.querySelector(".img1").setAttribute("src", output1);




  function diceChallengePlayer2 () {

    return arrayItems[Math.floor((Math.random() * 6))]  
    
  }


  var output2 = diceChallengePlayer2();



  document.querySelector(".img2").setAttribute("src", output2);   




  function whoIsTheWinner () {

if (output1 === output2) {

   
   document.querySelector("h1").innerHTML = "Yo! It's a tie 🚩"


}

else if (output1 > output2) {
    
    document.querySelector("h1").innerHTML = "Player 1 Wins 🏁!"

}


else {

    document.querySelector("h1").innerHTML = "Player 2 Wins 🏁!"

}



  }

  whoIsTheWinner();




  // dicegame