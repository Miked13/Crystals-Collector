$(document).ready(function () {
//declaring variables
    var crystal1 = Math.floor(Math.random() * 12 + 1);
    var crystal2 = Math.floor(Math.random() * 12 + 1);
    var crystal3 = Math.floor(Math.random() * 12 + 1);
    var crystal4 = Math.floor(Math.random() * 12 + 1);
    var currentNumber = Math.floor(Math.random() * 50 + 1);
    var wins = 0;
    var losses = 0;
    var totalScore = 0;
    var click = document.getElementById("click");
    var gameOver = document.getElementById("gameOver");
    var gameWon = document.getElementById("gameWon");
//connecting the divs in HTML to their values in JS
    $("#numberDisplayed").text(currentNumber);
    $("#Wins").text(wins);
    $("#Losses").text(losses);
    $("#totalScore").text(totalScore);
    
//Function to reset the game
    function resetGame() {
        currentNumber = Math.floor(Math.random() * 50 + 1);
        console.log(currentNumber);
        $("#numberDisplayed").text(currentNumber);
        crystal1 = Math.floor(Math.random() * 10 + 1);
        crystal2 = Math.floor(Math.random() * 10 + 1);
        crystal3 = Math.floor(Math.random() * 10 + 1);
        crystal4 = Math.floor(Math.random() * 10 + 1);
        totalScore = 0;
        console.log(totalScore);
        $("#totalScore").text(totalScore);
    }
//Execute this function when the player wins the game    
    function checkWins() {
        if (totalScore == currentNumber){
        wins++;
        $("#Wins").text(wins);
        $("#result").text("You won!!");
        gameWon.play();
        resetGame();
        }
    }
//Execute this function when the player losses the game
    function checkLosses() {
        if (totalScore > currentNumber){
            losses++;
            $("#Losses").text(losses);
            $("#result").text("You lost!!");
            gameOver.play();
            resetGame();
        }
    }
//Events for clicking on the imges
    $("#tall-crystal").on("click", function () {
        totalScore += crystal1;
        $("#totalScore").text(totalScore);
        checkWins();
        checkLosses();
        click.play();
    });
    $("#purple-crystal").on("click", function () {
        totalScore += crystal2;
        $("#totalScore").text(totalScore);
        checkWins();
        checkLosses();
        click.play();
    });
    $("#white-crystal").on("click", function () {
        totalScore += crystal3;
        $("#totalScore").text(totalScore);
        checkWins();
        checkLosses();
        click.play();
    });
    $("#yellow-crystal").on("click", function () {
        totalScore += crystal4;
        $("#totalScore").text(totalScore);
        checkWins();
        checkLosses();
        click.play();
    });
});