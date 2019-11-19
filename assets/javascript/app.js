$(document).ready(function (event) {

    var question1 = { 
        question: "What is Cardi B's real name?",
        answerOptions: ["A. Cardigan Backyardigan", "B. Cardi B", "C. Belcalis Marlenis Almanzar"],
        answer: "C.",

    }

    var question2= { 
        question: "Cardi B's daughter's name is Culture?",
        answerOptions: ["A. True", "B. False"],
        answer: "B.",

    
    }

    var timeLeft = 10; 

    var losses = 0; 

    var wins = 0; 

    var timesUp = 0; 

    var number = 0; 

    var questions = [question1.question, question2.question,]; 
        console.log(questions); 

    var answerOptions = [question1.answerOptions,question2.answerOptions,]; 

    var answers = [question1.answer, question2.answer]


   
    var replaceOptions = "<div class='row'>" + 
                            "<p>Answer Choices</p>" + 
                        "</div>" +
                        "<div class='row choice1'></div>" +
                        "<div class='row choice2'></div>" + 
                        "<div class='row choice3'></div>" +
                        "<div class='row choice4'></div>"

    function countdown () { 
        if (timeLeft === 0) {
            clearInterval(intervalId); 
            $(".timer").text("Time Remaining: " + 0 + " Seconds"); 
            $(".results").text("Times Up! The correct answer is: " + answers[number]); 
            timesUp ++; 
            number ++ ;
            setTimeout(game, 3000); 
        }
        else {
            timeLeft -- ;
            $(".timer").text("Time Remaining: " + timeLeft + " Seconds");  
         } 
    }


    function game () {
        if (number < questions.length ) {
            timeLeft = 10; 
            $(".results").text(""); 
            $(".main").html(replaceOptions); 
            $(".timer").text("Time Remaining: " + timeLeft + " Seconds");
            intervalId = setInterval (countdown, 1000);
            $(".question").text(questions[number]); 
            $(".choice1").html("<button class='buttons button1' value=" + answerOptions[number][0] + ">" + answerOptions[number][0] + "</button>");
            $(".choice2").html("<button class='buttons button2' value=" + answerOptions[number][1] + ">" + answerOptions[number][1] + "</button>"); 
            
            $(".buttons").on("click", function () {
                    var userClick = $(this).attr("value"); 
                    console.log(userClick); 

                if (userClick === answers[number]) {
                    $(".results").text("You Answered" + answers[number] + "Good Job"); 
                    wins ++; 
                    clearInterval(intervalId); 
                    number ++ ;
                    setTimeout(game, 3000);

                }
                else{
                    $(".results").text("Incorrect! The correct answer is: " + answers[number]);
                    losses ++; 
                    clearInterval(intervalId); 
                    number ++ ;
                    setTimeout(game, 3000); 

                }   
            }); 

        
        }
        else {
            clearInterval(intervalId); 
            $(".results").text("Game Over! Press Restart to Play Again!"); 
            $(".question").text("");
            $(".unanswered").text("Unanswered: " + timesUp);
            $(".correct").text("Correct: " + wins); 
            $(".incorrect").text("Incorrect: " + losses); 
            
            $(".restart").show(); 

    }
}

function reset () {
    $(".restart").hide(); 
    losses = 0; 
    $(".incorrect").text(""); 
    wins = 0; 
    $(".correct").text(""); 
    timesUp = 0; 
    $(".unanswered").text("");
    number = 0; 
    game(); 
}

$(".restart").hide(); 

$(".start").on("click", function () {


    //intervalId = setInterval (countdown, 1000); 

    $(this).hide(); 

    game(); 
    
}); 

$(".restart").on("click", function () {
    reset(); 
}); 

}); 