var questionsarray;
function loadAllQuestions() {
    questionsarray = [{
        questiontext: "In which Texas town did Donald Judd purchase parts of a former military base for the purpose of large-scale permanent installations?",
        theCorrectAnswer: "Marfa",
        answers: [{
            answerText: "Marfa",
            isCorrect: true
        }, {
            answerText: "Abilene",
            isCorrect: false
        }, {
            answerText: "Amarillo",
            isCorrect: false
        }, {
            answerText: "Fredericksburg",
            isCorrect: false
        }]
    }, {
        questiontext: "Which of the following commonplace materials did Dan Flavin frequently use in his works?",
        theCorrectAnswer: "fluorescent lights",
        answers: [{
            answerText: "automobile parts",
            isCorrect: false
        }, {
            answerText: "televisions",
            isCorrect: false
        }, {
            answerText: "rocks",
            isCorrect: false
        }, {
            answerText: "fluorescent lights",
            isCorrect: true
        }]
    }, {
        questiontext: "Where is Robert Smithson's Spiral Jetty located?",
        theCorrectAnswer: "Utah",
        answers: [{
            answerText: "Arizona",
            isCorrect: false
        }, {
            answerText: "Colorado",
            isCorrect: false
        }, {
            answerText: "Utah",
            isCorrect: true
        }, {
            answerText: "New Mexico",
            isCorrect: false
        }]
    }, {
        questiontext: "To which artist was critic Barbara Rose married?",
        theCorrectAnswer: "Frank Stella",
        answers: [{
            answerText: "Carl Andre",
            isCorrect: false
        }, {
            answerText: "Frank Stella",
            isCorrect: true
        }, {
            answerText: "Sol LeWitt",
            isCorrect: false
        }, {
            answerText: "Ad Reinhardt",
            isCorrect: false
        }]
    }, {
        questiontext: "Which of the following artists was known for his spray paintings?",
        theCorrectAnswer: "Jules Olitski",
        answers: [{
            answerText: "Kenneth Noland",
            isCorrect: false
        }, {
            answerText: "Anthony Caro",
            isCorrect: false
        }, {
            answerText: "Jules Olitski",
            isCorrect: true
        }, {
            answerText: "David Smith",
            isCorrect: false
        }]
    }, {
        questiontext: "Which theorist’s works on phenomenology are frequently referenced in relation to Minimalist art?",
        theCorrectAnswer: "Maurice Merleau-Ponty",
        answers: [{
            answerText: "Michel Foucault",
            isCorrect: false
        }, {
            answerText: "Jacques Derrida",
            isCorrect: false
        }, {
            answerText: "Roland Barthes",
            isCorrect: false
        }, {
            answerText: "Maurice Merleau-Ponty",
            isCorrect: true
        }]
    }, {
        questiontext: "Which critic wrote the seminal essay, 'Art and Objecthood,' which advanced the notion of minimalist sculpture’s 'theatricality'?",
        theCorrectAnswer: "Michael Fried",
        answers: [{
            answerText: "Michael Fried",
            isCorrect: true
        }, {
            answerText: "Lucy Lippard",
            isCorrect: false
        }, {
            answerText: "Rosalind Krauss",
            isCorrect: false
        }, {
            answerText: "Clement Greenberg",
            isCorrect: false
        }]
    }, {
        questiontext: "Which artist, whose image appears in Richard Hamilton’s noted collage ‘Just what is it that makes today’s home so different, so appealing?’ had an early career as a pinup model?",
        theCorrectAnswer: "Jo Baer",
        answers: [{
            answerText: "Anne Truitt",
            isCorrect: false
        }, {
            answerText: "Jo Baer",
            isCorrect: true
        }, {
            answerText: "Eva Hesse",
            isCorrect: false
        }, {
            answerText: "Agnes Martin",
            isCorrect: false
        }]
    }, {
        questiontext: "Which of the following artists is NOT primarily associated with hard-edge painting?",
        theCorrectAnswer: "Walter De Maria",
        answers: [{
            answerText: "Ellsworth Kelly",
            isCorrect: false
        }, {
            answerText: "Kenneth Noland",
            isCorrect: false
        }, {
            answerText: "Al Held",
            isCorrect: false
        }, {
            answerText: "Walter De Maria",
            isCorrect: true
        }]
    }, {
        questiontext: "For which airport did Robert Smithson serve as an artist consultant, producing plans for an unrealized work?",
        theCorrectAnswer: "Dallas/Fort Worth International Airport",
        answers: [{
            answerText: "Denver International Airport",
            isCorrect: false
        }, {
            answerText: "Jackson Hole Airport",
            isCorrect: false
        }, {
            answerText: "Dallas/Fort Worth International Airport",
            isCorrect: true
        }, {
            answerText: "Fort Wayne International Airport",
            isCorrect: false
        }]
    }, {
        questiontext: "The 'Primary Structures' exhibition—often cited as the catalyst that ignited popular interest in Minimalist sculpture—was held at which New York museum?",
        theCorrectAnswer: "The Jewish Museum",
        answers: [{
            answerText: "The Jewish Museum",
            isCorrect: true
        }, {
            answerText: "The Museum of Modern Art",
            isCorrect: false
        }, {
            answerText: "The Metropolitan Museum of Art",
            isCorrect: false
        }, {
            answerText: "The Whitney Museum of American Art",
            isCorrect: false
        }]
    }, {
        questiontext: "Robert Morris’s oft-reproduced self-portrait, which appeared on the poster for his 1974 exhibition ‘Labyrinths-Voice-Blind Time,’ showed the artist wearing what?",
        theCorrectAnswer: "A chained collar",
        answers: [{
            answerText: "A cowboy hat",
            isCorrect: false
        }, {
            answerText: "A chained collar",
            isCorrect: true
        }, {
            answerText: "An animal hide",
            isCorrect: false
        }, {
            answerText: "Body paint",
            isCorrect: false
        }]
    }
    ];
};
loadAllQuestions();
//counter variables
var incorrectAnswerCount = 0;
var points = 0;
var timeOutCount = 0;
var penalties = incorrectAnswerCount + timeOutCount;
var finalScore;
var questionsRemain = questionsarray.length;


//timer for modals
var modalCount = 4;
var modalCounter;
$(".modalTimeShow").text(" " + modalCount + " ");

function modalTimer() {
    if (questionsRemain === 0) {
        $(".notification").css("display", "none");
        finalScore = points - penalties;
        $(".finalScoreShow").text(finalScore);
        $("#gameOver").css("display", "block");
    }
    else {
        modalCount--;
        $(".modalTimeShow").text(" " + modalCount + " ");
        if (modalCount <= 0) {
            clearInterval(modalCounter);
            modalCount = 4;
            $(".modal").css("display", "none");
            removeQuestion();
            loadNewQuestion();
            emptyAnswers();
            loadAnswers();
            launchCounter();
            $(".modalTimeShow").text("4");
        }
    }
}
//timer for questions
var count = 7;
$("#timerShow").text(count + " ");
var counter;
function timer() {
    count--;
    console.log(count);
    $("#timerShow").text(count + " ");
    //if time runs out before user makes a selection, clear counter, show time out modal, increase time out count
    if (count <= 0) {
        clearInterval(counter);
        timeOutCount++;
        penalties = incorrectAnswerCount + timeOutCount;
        questionsRemain--;
        updatePoints();
        launchModalCounter();
        $("#showCorrect").text(currentCorrectAnswer);
        $("#youTimedOut").css("display", "block");
    }
};
function launchCounter() {
    count = 7;
    $("#timerShow").text(count + " ");
    counter = setInterval(timer, 1000);
};

function launchModalCounter() {
    modalCount = 4;
    $(".modalTimeShow").text(" " + modalCount + " ");
    modalCounter = setInterval(modalTimer, 1000);
}
//variable to randomly chose and store the question's place in the questionsarray
var q = Math.floor((Math.random() * questionsarray.length));
//dynamically render question
$("#questionholder").text(questionsarray[q].questiontext);
//variable to store correct answer
var currentCorrectAnswer;

//variables to store dynamic answers
var newAnswerDiv;
var newButton;

//variable to store index of the question completed
var indexToBeRemoved;

//function to remove question from array
function removeQuestion() {
    indexToBeRemoved = questionsarray.indexOf(questionsarray[q]);
    questionsarray.splice(indexToBeRemoved, 1);
}
//function to load new question
function loadNewQuestion() {
    q = Math.floor((Math.random() * questionsarray.length));
    $("#questionholder").text(questionsarray[q].questiontext);
}
//function to empty the divs that hold answers
function emptyAnswers() {
    $("#topRow").empty();
    $("#bottomRow").empty();
}
//function to dynamically render four answers
function loadAnswers() {
    for (i = 0; i < questionsarray[q].answers.length; i++) {
        newAnswerDiv = $("<div>");
        newAnswerDiv.addClass("answerDiv col-xs-12 col-sm-6");
        newButton = $("<button>");
        newButton.addClass("answerClass");
        newButton.text(questionsarray[q].answers[i].answerText);
        newButton.attr("data-bool", questionsarray[q].answers[i].isCorrect);
        currentCorrectAnswer = questionsarray[q].theCorrectAnswer;
        newAnswerDiv.append(newButton);
        if (i % 2 === 0) {
            newAnswerDiv.addClass("even");
            $("#topRow").append(newAnswerDiv);
        }
        else {
            newAnswerDiv.addClass("odd");
            $("#bottomRow").append(newAnswerDiv);
        }
    }
}

//call the function to load the answers
loadAnswers();

//function that updates all the point counts
function updatePoints() {
    $(".pointsSpan").text(points);
    $(".penaltiesSpan").text(penalties);
    $(".questionsLeft").text(questionsRemain);
};

//if user chooses correctly, show congratulatory modal, increase correct answer count
$(document).on("click", "*[data-bool='true']", function () {
    points++;
    penalties = incorrectAnswerCount + timeOutCount;
    questionsRemain--;
    updatePoints();
    launchModalCounter();
    $("#guessedRight").css("display", "block");
    clearInterval(counter);
});

//if user chooses incorrectly, show correct answer modal, increase incorrect answer count
$(document).on("click", "*[data-bool='false']", function () {
    incorrectAnswerCount++;
    penalties = incorrectAnswerCount + timeOutCount;
    questionsRemain--;
    updatePoints();
    clearInterval(counter);
    launchModalCounter();
    $("#showRightAnswer").text(currentCorrectAnswer);
    $("#guessedWrong").css("display", "block");
});

$(".introClose").click(function () {
    $(this).parents(".modal").css("display", "none");
    //start timer
    counter = setInterval(timer, 1000);
});

$("#restartButton").click(function () {
    clearInterval(counter);
    clearInterval(modalCounter);
    launchCounter();
    incorrectAnswerCount = 0;
    points = 0;
    timeOutCount = 0;
    $(".modal").css("display", "none");
    loadAllQuestions();
    loadNewQuestion();
    emptyAnswers();
    loadAnswers();
    questionsRemain = questionsarray.length;
});
