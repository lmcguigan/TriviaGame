var questionsarray = [{
    questiontext: "In which Texas town did Donald Judd purchase parts of a former military base for the purpose of large-scale permanent installations?",
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
        answerText: "flourescent lights",
        isCorrect: true
    }]
}, {
    questiontext: "Where is Robert Smithson's Spiral Jetty located?",
    answers: [{
        answerText: "Answer",
        isCorrect: true
    }, {
        answerText: "Answer",
        isCorrect: false
    }, {
        answerText: "Answer",
        isCorrect: false
    }, {
        answerText: "Answer",
        isCorrect: false
    }]
}
];

var incorrectAnswers = 0;
var correctAnswers = 0;
var timeOuts = 0;

//dynamically render question
q = Math.floor((Math.random() * questionsarray.length));
$("#questionholder").text(questionsarray[q].questiontext);

//dynamically render four answers
for (i = 0; i < questionsarray[q].answers.length; i++) {
    var newAnswerDiv = $("<div>");
    newAnswerDiv.addClass("col-6");
    newAnswerDiv.text(questionsarray[q].answers[i].answerText);
    if (i % 2 === 0) {
        newAnswerDiv.addClass("even");
        $("#topRow").append(newAnswerDiv);
    }
    else {
        newAnswerDiv.addClass("odd");
        $("#bottomRow").append(newAnswerDiv);
    }
}
//if time runs out before user makes a selection, 

//on click fuctions - when user clicks an answer
$(".answerDiv").click(function () {
    //if user clicks on answer with correct answer, display the congrats modal
    if (questionsarray[q].answers[i].isCorrect === true) {
        //remove question from array
    }
    //if user guesses wrong answer, display modal with correct answer
    else if (questionsarray[q].answers[i].isCorrect === false) {
        //remove question from array
    }
});
$(".roundOverClose").click(function () {
});