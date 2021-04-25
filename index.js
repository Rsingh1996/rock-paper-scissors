
var gameOption = ["rock", "paper", "scissors"]
var computerScore = 0;
var yourScore = 0;
var round = 0;
function compare(item) {
    switch (item) {
        case "rock":
            $(".img2").attr("src", "./images/" + item + ".png");
            break;
        case "paper":
            $(".img2").attr("src", "./images/" + item + ".png");
            break;
        case "scissors":
            $(".img2").attr("src", "./images/" + item + ".png");
            break;
        default:
            break;
    }
}
function userOption(item) {
    switch (item) {
        case "rock":
            $(".img1").attr("src", "./images/" + item + ".png");
            break;
        case "paper":
            $(".img1").attr("src", "./images/" + item + ".png");
            break;
        case "scissors":
            $(".img1").attr("src", "./images/" + item + ".png");
            break;
        default:
            break;
    }
}


$(" .btn").click(function () {

    var userSelection = $(this).attr("id");

    var randomnumber = Math.random() * 3;
    randomnumber = Math.floor(randomnumber);
    var randomOption = gameOption[randomnumber];

    userOption(userSelection);
    compare(randomOption);
    round++;

    $(".round").text("Round " + round);
    $(".vs h2").text("");
    if (userSelection === randomOption) {
        $(".you-title").text("Tie !");
        $(".computer-title").text("Tie !");
        yourScore;
        computerScore;
        $(".your-score").text("win " + yourScore);
        $(".computer-score").text("win " + computerScore);

    }
    else if (userSelection === "rock") {
        if (randomOption === "paper") {
            $(".you-title").text("You Lost !");
            $(".computer-title").text("Computer Win!");
            computerScore++;
            $(".your-score").text("win " + yourScore);
            $(".computer-score").text("win " + computerScore);
        }
        else {
            $(".you-title").text("You Win !");
            $(".computer-title").text("Computer Lost!");
            yourScore++;
            $(".your-score").text("win " + yourScore);
            $(".computer-score").text("win " + computerScore);
        }
    }
    else if (userSelection === "paper") {
        if (randomOption === "scissors") {
            $(".you-title").text("You Lost !");
            $(".computer-title").text("Computer Win!");
            computerScore++;
            $(".your-score").text("win " + yourScore);
            $(".computer-score").text("win " + computerScore);
        }
        else {
            $(".you-title").text("You Win !");
            $(".computer-title").text("Computer Lost!");
            yourScore++;
            $(".your-score").text("win " + yourScore);
            $(".computer-score").text("win " + computerScore);
        }

    }
    else if (userSelection === "scissors") {
        if (randomOption === "rock") {
            $(".you-title").text("You Lost !");
            $(".computer-title").text("Computer Win!");
            computerScore++;
            $(".your-score").text("win " + yourScore);
            $(".computer-score").text("win " + computerScore);
        }
        else {
            $(".you-title").text("You win !");
            $(".computer-title").text("Computer lost!");
            yourScore++;
            $(".your-score").text("win " + yourScore);
            $(".computer-score").text("win " + computerScore);
        }
    }

});
function animatePress(currentColour) {
    $("#" + currentColour).addClass(" pressed");
    setTimeout(function () {
        $("#" + currentColour).removeClass(" pressed");
    }, 100);
}